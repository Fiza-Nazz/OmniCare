"""Billing domain enums for invoicing, payment methods, and currencies.

Adheres to Constitution §19 (Billing Engine) and §20 (Financial Integrity).
"""

from __future__ import annotations

from enum import StrEnum


class InvoiceStatus(StrEnum):
    """Status lifecycle of a patient billing invoice."""

    DRAFT = "draft"
    ISSUED = "issued"
    PAID = "paid"
    PARTIALLY_PAID = "partially_paid"
    OVERDUE = "overdue"
    VOID = "void"
    REFUNDED = "refunded"


class PaymentMethod(StrEnum):
    """Payment tender method."""

    CREDIT_CARD = "credit_card"
    DEBIT_CARD = "debit_card"
    BANK_TRANSFER = "bank_transfer"
    CASH = "cash"
    INSURANCE = "insurance"
    CHEQUE = "cheque"


class Currency(StrEnum):
    """Three-letter ISO 4217 currency code."""

    PKR = "PKR"
    USD = "USD"
    EUR = "EUR"
    GBP = "GBP"
    AED = "AED"
    SAR = "SAR"
