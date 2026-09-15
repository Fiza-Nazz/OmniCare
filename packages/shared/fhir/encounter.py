"""FHIR R4 Encounter resource adapter.

Adheres to Constitution §21 (Interoperability — FHIR R4 Compliance).
Converts appointments and clinical encounters into FHIR R4 Encounter resources.
"""

from __future__ import annotations

from typing import Any


class FHIREncounterAdapter:
    """Transforms OmniCare appointment data into FHIR R4 Encounter resources.

    Follows HL7 FHIR R4 specification: https://hl7.org/fhir/R4/encounter.html
    """

    RESOURCE_TYPE = "Encounter"

    @staticmethod
    def to_fhir(appointment: Any) -> dict[str, Any]:
        """Convert an OmniCare appointment to a FHIR R4 Encounter resource.

        Args:
            appointment: OmniCare Appointment domain object.

        Returns:
            FHIR R4 Encounter resource dictionary.
        """
        resource: dict[str, Any] = {
            "resourceType": "Encounter",
            "id": str(appointment.id),
            "status": _map_encounter_status(getattr(appointment, "status", None)),
            "class": {
                "system": "http://terminology.hl7.org/CodeSystem/v3-ActCode",
                "code": _map_encounter_class(getattr(appointment, "appointment_type", None)),
            },
            "type": [
                {
                    "coding": [
                        {
                            "system": "http://snomed.info/sct",
                            "code": "308335008",
                            "display": "Patient encounter procedure",
                        }
                    ],
                    "text": getattr(appointment, "reason", "Scheduled visit"),
                }
            ],
        }

        # Subject
        if getattr(appointment, "patient_id", None):
            resource["subject"] = {
                "reference": f"Patient/{appointment.patient_id}",
            }

        # Participant (clinician)
        if getattr(appointment, "clinician_id", None):
            resource["participant"] = [
                {
                    "individual": {
                        "reference": f"Practitioner/{appointment.clinician_id}",
                    },
                    "type": [
                        {
                            "coding": [
                                {
                                    "system": "http://terminology.hl7.org/CodeSystem/v3-ParticipationType",
                                    "code": "ATND",
                                    "display": "attender",
                                }
                            ]
                        }
                    ],
                }
            ]

        # Period
        period: dict[str, str] = {}
        if getattr(appointment, "scheduled_start", None):
            period["start"] = appointment.scheduled_start.isoformat()
        if getattr(appointment, "scheduled_end", None):
            period["end"] = appointment.scheduled_end.isoformat()
        if period:
            resource["period"] = period

        # Location
        if getattr(appointment, "location", None):
            resource["location"] = [
                {
                    "location": {
                        "display": appointment.location,
                    },
                    "status": "active",
                }
            ]

        return resource


def _map_encounter_status(status: str | None) -> str:
    """Map OmniCare appointment status to FHIR Encounter status."""
    mapping = {
        "scheduled": "planned",
        "confirmed": "planned",
        "checked_in": "arrived",
        "in_progress": "in-progress",
        "completed": "finished",
        "cancelled": "cancelled",
        "no_show": "cancelled",
    }
    if status is None:
        return "unknown"
    return mapping.get(str(status).lower(), "unknown")


def _map_encounter_class(appointment_type: str | None) -> str:
    """Map appointment type to FHIR encounter class code."""
    mapping = {
        "in_person": "AMB",
        "telehealth": "VR",
        "home_visit": "HH",
        "emergency": "EMER",
        "inpatient": "IMP",
    }
    if appointment_type is None:
        return "AMB"
    return mapping.get(str(appointment_type).lower(), "AMB")
