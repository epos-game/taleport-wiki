---
title: Payout process
description: Setting payouts up, and when the money actually arrives.
helpKey: monetization.payouts
status: published
sidebar:
  order: 7
---
Before you can charge for a chapter, fill in **Payouts & billing** in your settings. It has two rows:

- The bank account TalePort sends money to.
- The tax and billing details that belong on the paperwork.

## If details are missing

TalePort refuses a paid submission while either row is incomplete. The **Pricing** step shows "Complete your billing and payout information to charge for this chapter." above the price field, with an **Open billing settings** button next to it.

You can still submit a free chapter. The publish checklist keeps **Billing and payout information** as an open item, though, and the dialog doesn't call the chapter ready.

## Bank account

You need:

- The account holder's name, up to 200 characters.
- An IBAN or a Czech account number. Either one on its own is enough.
- SWIFT / BIC and bank name, which are both optional.

TalePort checks the number when you save it:

- **IBAN:** it must have the right length for its country and a valid checksum.
- **Czech number:** enter it as prefix-number/bank code, for example 19-2000145399/0800.
  - The bank code has four digits.
  - The account number has two to ten digits, and at least two of them are not zero.
  - The prefix has up to six digits and is optional.
  - The account number, and the prefix if you enter one, must pass the Czech number check.

The saved number is hidden, and a toggle reveals it. Once an account is saved, the row reads **Connected**. The details are encrypted and used only for payouts.

## Tax and billing details

You need:

- Whether you're an individual or a company.
- Company name and VAT ID. Both are required for a company.
- A billing email. **Use my login email for invoices** is ticked when you first open the dialog and fills in your login email address. Untick it to type a different one.
- Street, city, postal code and country.
- Tax ID, which is optional.

The country list has 28 entries: the 27 EU member states plus the United States. You can't save an address outside them.

A VAT ID includes its country prefix: CZ12345678, NL123456789B01. Greece is the exception: its address country is GR, but its VAT prefix is EL.

TalePort checks Tax ID, VAT ID and postal code against the format of the country you pick:

| Field | Checked for |
| --- | --- |
| Postal code | Every country on the list except Ireland |
| VAT ID | All 27 EU member states, but not the United States |
| Tax ID | Czechia, Slovakia, Austria, Germany, Denmark, Spain, France, Hungary, Italy, the Netherlands, Poland, Sweden and the United States |

A country with no format on file, or an empty optional field, isn't checked.

## Deleting and fixing the rows

- Both rows have a delete button, each with its own confirmation. If you delete either row, you lose paid publishing again.
- Paid publishing needs every field above except Tax ID, and the format checks must pass.
- If the row shows your details but the publish checklist still lists **Billing and payout information**, save the row again. TalePort then marks the missing fields.

## When you get paid

TalePort prepares a **statement every month**, but it doesn't send the money every month. Payment comes later, under the rules below.

- **Deadline:** under Article V of the Terms and Conditions, TalePort pays your share for a month by the end of the **fourth calendar month** after it at the latest, depending on the distribution platforms' payment schedules. Revenue earned in March is settled by the end of July at the latest.
- **Minimum:** a share of **less than CZK 100** isn't paid. It carries forward to the next settlement period.

## Refunds

A refund can reach back into a settlement that has already happened.

:::caution[Refunds come off your payment]
Under Article III of the Terms and Conditions, you owe back your share when a reader is refunded for a chapter you were paid for. TalePort may deduct it from your next payment.
:::

When your agreement ends, TalePort can hold the final settlement until open refunds and chargebacks are settled, then deduct them. A chargeback is a payment the reader's bank takes back.

So a statement can be smaller than the last one, even in a month with more sales.

## How much you get

You get your share of the net revenue recorded for your sales. The rate comes from the current price list or your individual agreement. [Author royalties](/en/monetization/royalties/) explains what's deducted from the gross amount.

The figures on a story's [statistics page](/en/monetization/statistics/) are only a guide. They don't include refunds or chargebacks that arrive after a purchase.

## Related

- [Author royalties](/en/monetization/royalties/)
- [Story statistics](/en/monetization/statistics/)
- [Monetization requirements](/en/monetization/requirements/)
