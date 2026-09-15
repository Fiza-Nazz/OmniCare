"""FHIR R4 Patient resource adapter.

Adheres to Constitution §21 (Interoperability — FHIR R4 Compliance).
Converts internal OmniCare Patient domain objects to HL7 FHIR R4 Patient resources.
"""

from __future__ import annotations

from typing import Any


class FHIRPatientAdapter:
    """Transforms OmniCare patient data into FHIR R4 Patient resource format.

    Follows HL7 FHIR R4 specification: https://hl7.org/fhir/R4/patient.html
    """

    RESOURCE_TYPE = "Patient"
    FHIR_VERSION = "4.0.1"

    @staticmethod
    def to_fhir(patient: Any) -> dict[str, Any]:
        """Convert an OmniCare patient object to a FHIR R4 Patient resource.

        Args:
            patient: OmniCare patient domain object with standard attributes.

        Returns:
            A dictionary conforming to the FHIR R4 Patient resource structure.
        """
        resource: dict[str, Any] = {
            "resourceType": "Patient",
            "id": str(patient.id),
            "meta": {
                "versionId": str(getattr(patient, "version_id", 1)),
                "lastUpdated": (
                    patient.updated_at.isoformat()
                    if hasattr(patient, "updated_at") and patient.updated_at
                    else None
                ),
            },
            "active": getattr(patient, "is_active", True),
            "name": [
                {
                    "use": "official",
                    "family": getattr(patient, "last_name", ""),
                    "given": [getattr(patient, "first_name", "")],
                    "prefix": ([patient.prefix] if getattr(patient, "prefix", None) else []),
                }
            ],
            "gender": _map_gender(getattr(patient, "biological_sex", None)),
            "birthDate": (
                patient.date_of_birth.isoformat()
                if hasattr(patient, "date_of_birth") and patient.date_of_birth
                else None
            ),
        }

        # Telecom (phone, email)
        telecoms = []
        if getattr(patient, "phone_number", None):
            telecoms.append({"system": "phone", "value": patient.phone_number, "use": "home"})
        if getattr(patient, "email", None):
            telecoms.append({"system": "email", "value": patient.email, "use": "home"})
        if telecoms:
            resource["telecom"] = telecoms

        # MRN identifier
        if getattr(patient, "mrn", None):
            resource["identifier"] = [
                {
                    "use": "usual",
                    "type": {
                        "coding": [
                            {
                                "system": "http://terminology.hl7.org/CodeSystem/v2-0203",
                                "code": "MR",
                                "display": "Medical record number",
                            }
                        ]
                    },
                    "value": patient.mrn,
                }
            ]

        return resource

    @staticmethod
    def from_fhir(resource: dict[str, Any]) -> dict[str, Any]:
        """Parse a FHIR R4 Patient resource into internal field mapping.

        Returns a flat dictionary suitable for creating an OmniCare patient.
        """
        names = resource.get("name", [{}])
        official_name = next(
            (n for n in names if n.get("use") == "official"), names[0] if names else {}
        )

        result: dict[str, Any] = {
            "first_name": (
                official_name.get("given", [""])[0] if official_name.get("given") else ""
            ),
            "last_name": official_name.get("family", ""),
            "date_of_birth": resource.get("birthDate"),
            "is_active": resource.get("active", True),
        }

        identifiers = resource.get("identifier", [])
        for ident in identifiers:
            codings = ident.get("type", {}).get("coding", [])
            if any(c.get("code") == "MR" for c in codings):
                result["mrn"] = ident.get("value")
                break

        return result


def _map_gender(biological_sex: str | None) -> str:
    """Map OmniCare biological sex to FHIR gender code."""
    mapping = {
        "male": "male",
        "female": "female",
        "intersex": "other",
        "unknown": "unknown",
    }
    if biological_sex is None:
        return "unknown"
    return mapping.get(biological_sex.lower(), "unknown")
