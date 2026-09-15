"""FHIR R4 Observation resource adapter.

Adheres to Constitution §21 (Interoperability — FHIR R4 Compliance).
Converts lab results into FHIR R4 Observation resources.
"""

from __future__ import annotations

from typing import Any


class FHIRObservationAdapter:
    """Transforms OmniCare lab results into FHIR R4 Observation resources.

    Follows HL7 FHIR R4 specification: https://hl7.org/fhir/R4/observation.html
    """

    RESOURCE_TYPE = "Observation"

    @staticmethod
    def to_fhir(lab_result: Any) -> dict[str, Any]:
        """Convert an OmniCare lab result to a FHIR R4 Observation resource.

        Args:
            lab_result: OmniCare LabResult domain object.

        Returns:
            FHIR R4 Observation resource dictionary.
        """
        resource: dict[str, Any] = {
            "resourceType": "Observation",
            "id": str(lab_result.id),
            "status": _map_status(getattr(lab_result, "status", None)),
            "category": [
                {
                    "coding": [
                        {
                            "system": "http://terminology.hl7.org/CodeSystem/observation-category",
                            "code": "laboratory",
                            "display": "Laboratory",
                        }
                    ]
                }
            ],
            "code": {
                "coding": [
                    {
                        "system": "http://loinc.org",
                        "code": getattr(lab_result, "loinc_code", ""),
                        "display": getattr(lab_result, "test_name", ""),
                    }
                ],
                "text": getattr(lab_result, "test_name", ""),
            },
        }

        # Subject reference
        if getattr(lab_result, "patient_id", None):
            resource["subject"] = {
                "reference": f"Patient/{lab_result.patient_id}",
            }

        # Value quantity
        if getattr(lab_result, "numeric_value", None) is not None:
            resource["valueQuantity"] = {
                "value": float(lab_result.numeric_value),
                "unit": getattr(lab_result, "unit", ""),
                "system": "http://unitsofmeasure.org",
            }
        elif getattr(lab_result, "text_value", None):
            resource["valueString"] = lab_result.text_value

        # Reference range
        if getattr(lab_result, "reference_range_low", None) is not None:
            resource["referenceRange"] = [
                {
                    "low": {
                        "value": float(lab_result.reference_range_low),
                        "unit": getattr(lab_result, "unit", ""),
                    },
                    "high": {
                        "value": float(getattr(lab_result, "reference_range_high", 0)),
                        "unit": getattr(lab_result, "unit", ""),
                    },
                }
            ]

        # Effective date
        if getattr(lab_result, "collected_at", None):
            resource["effectiveDateTime"] = lab_result.collected_at.isoformat()

        # Interpretation (abnormal flag)
        if getattr(lab_result, "abnormal_flag", None):
            resource["interpretation"] = [
                {
                    "coding": [
                        {
                            "system": "http://terminology.hl7.org/CodeSystem/v3-ObservationInterpretation",
                            "code": _map_abnormal_flag(lab_result.abnormal_flag),
                        }
                    ]
                }
            ]

        return resource


def _map_status(status: str | None) -> str:
    """Map OmniCare lab result status to FHIR Observation status."""
    mapping = {
        "pending": "registered",
        "in_progress": "preliminary",
        "completed": "final",
        "cancelled": "cancelled",
        "corrected": "corrected",
    }
    if status is None:
        return "unknown"
    return mapping.get(str(status).lower(), "unknown")


def _map_abnormal_flag(flag: str) -> str:
    """Map abnormal flag to FHIR interpretation code."""
    mapping = {
        "high": "H",
        "low": "L",
        "critical_high": "HH",
        "critical_low": "LL",
        "normal": "N",
        "abnormal": "A",
    }
    return mapping.get(str(flag).lower(), "A")
