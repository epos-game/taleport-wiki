---
title: Credits
description: EPS, the currency readers buy chapters with.
helpKey: monetization.credits
status: published
sidebar:
  order: 4
---

EPS is the in-app currency readers buy with real money and spend to unlock chapters. Every price you set is denominated in it, and 1 EPS is 1 CZK, roughly €0.04. The wallet sits between the reader and the payment screen: someone who topped up 500 credits and has just reached the closing node of your first chapter can unlock chapter two at 129 EPS on the spot and still hold 371 credits.

## Why credits exist

A reader pays once and then buys chapters out of a balance, with no payment step per chapter. That balance is not TalePort's own bookkeeping. It lives in the payment platform's wallet, and the app reads it there rather than keeping a copy.

## Where a reader's credits come from

- An in-app purchase through Apple or Google.
- A card payment through Stripe.
- A redemption code, bought on the web and entered in the app. One use only, 90 days to use it, and it belongs to the order it came from rather than to a person: the first reader to enter it gets the credits.
- Credits granted by a TalePort admin.

Where they came from matters to you, because every top-up records the money behind it. Tax, the store's commission and a 1% RevenueCat fee come off the gross amount, and what is left is the net revenue your earnings are attributed from. **An admin grant is no exception.** The Grant credits dialog refuses a gross amount of zero, defaults the tax rate to 21% and deducts the RevenueCat fee, so credits that were given away still carry money and still add to your earnings. The one thing with nothing behind it is an internal reconciliation entry TalePort writes when a top-up record goes missing; its amount is zero, so it never reaches the earnings line. See [Author royalties](/en/monetization/royalties/).

## Credits are spent oldest first

A reader's credits are not one pool. Each top-up is kept separately, along with the money actually paid for it and the currency it was paid in. A purchase empties the oldest top-up first and then moves to the next, so one sale of your chapter can draw on two or three of them, each contributing its own share of net revenue.

That is why a credit has no fixed value to you. The reader's side is fixed at 1 EPS to 1 CZK. What reaches TalePort per credit depends on where the top-up was bought, what tax applied and what the store took. When everything landed in a single currency and the story has earned credits, the statistics page adds an **Average credit value** row to show the result.

## What a purchase costs

A chapter costs its price in credits, rounded up to a whole credit. A reader buys a given chapter once and it stays in their library after that. The exception is moderation: hiding a story revokes download access for everyone but TalePort's reviewers and admins, readers who already own a chapter included. An author deleting their account delists the story instead, and there the owners keep their access.

Free chapters cost nothing and go into the library without a purchase at all.

If the balance is short, nothing is charged. The app reports how many credits the chapter needs and how many the reader has, and the purchase is parked so it can be retried after a top-up.

## Related

- [Pricing](/en/monetization/pricing/)
- [Author royalties](/en/monetization/royalties/)
- [Story statistics](/en/monetization/statistics/)
