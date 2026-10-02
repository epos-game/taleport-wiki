---
title: Payout process
description: Setting payouts up, and when the money actually arrives.
helpKey: monetization.payouts
status: published
sidebar:
  order: 7
---

**Payouts & billing** is a section of your settings with two rows in it: the bank account TalePort sends money to, and the tax and billing details that belong on the paperwork. Both have to be complete before you can charge for anything. Price chapter 2 at 149 EPS with an empty bank row and the Pricing step puts a warning above the price field, "Complete your billing and payout information to charge for this chapter.", next to a button that jumps to the settings. Paste in an IBAN, save, and the row reads **Connected**.

## What incomplete details block

Incomplete details do not only hold up money. They stop you from charging at all: a paid submission is refused while either half is missing, and the Pricing step says so with an **Open billing settings** button.

A free chapter still submits. The publish checklist lists **Billing and payout information** among the items needing attention until both halves are complete, so the dialog will not call the chapter ready, but nothing blocks the submission itself. Clear that row before you are [Qualified](/en/monetization/requirements/) and want to put a price on the next chapter.

## What "Payouts & billing" needs

### Bank account

- Account holder, up to 200 characters.
- An IBAN or a Czech account number. Either one on its own is enough.
- SWIFT / BIC and bank name, both optional.

Neither number is merely stored. An IBAN has to match the length used in its country and pass the mod-97 checksum. A Czech number goes in as prefix-number/bankcode with a four-digit bank code, passes a mod-11 checksum on the prefix and on the number, and needs at least two digits that are not zero: 19-2000145399/0800. The prefix can be left off.

The saved number is hidden on the page, with a toggle to reveal it. The row reads **Connected** once an account is there, and the dialog notes that the details are encrypted and used only for payouts.

### Tax & billing details

- Individual or Company.
- Company name and VAT ID, both required for a company.
- Billing email.
- Street, city, postal code, country.
- Tax ID, optional.

Tax ID, VAT ID and postal code are checked against the format of the country you pick, so a number that passes in one national scheme is rejected under another. The coverage is uneven. Postal codes are checked for all 28 countries, VAT IDs for the 27 EU entries, Tax IDs only for 13 of them: Czechia, Slovakia, Austria, Germany, Denmark, Spain, France, Hungary, Italy, the Netherlands, Poland, Sweden and the United States. A country with no pattern goes through unchecked, and so does any optional field you leave blank.

A VAT ID carries its country prefix as part of the value: CZ12345678, NL123456789B01. Greece is the exception, where the address country is GR but the VAT prefix is EL.

The country list is 28 entries, the 27 EU member states plus the United States. There is no way to save an address outside them.

Both rows have a delete button with its own confirmation, and deleting either one takes paid publishing away again.

## When the money arrives

TalePort prepares a **statement every month**. The **payment** is not monthly. Under Article V of the Terms and Conditions your share for a given month is paid no later than the end of the **fourth calendar month** after it, with the payment schedules of the distribution platforms taken into account. Revenue earned in March is settled by the end of July at the latest.

A share that comes to **less than CZK 100** is not paid. It carries forward to the next settlement period.

The settings page says "Royalties from chapter sales, paid out monthly." That is the statement, not the transfer.

## What gets paid

Your share of the net revenue recorded against your sales, at the rate in the current price list or in your individual agreement. [Author royalties](/en/monetization/royalties/) covers what comes off the top before that.

Treat the figures on a story's [statistics page](/en/monetization/statistics/) as indicative. They do not account for refunds or chargebacks that land after a purchase, so a statement can come out lower than what you last saw there.

## Related

- [Author royalties](/en/monetization/royalties/)
- [Story statistics](/en/monetization/statistics/)
- [Monetization requirements](/en/monetization/requirements/)
