# Rollback plan

## Trigger conditions

Rollback if launch causes a material checkout failure, widespread template failure, lost tracking, indexation/canonical fault, broken navigation, severe schema regression or another agreed release-blocking defect that cannot be corrected safely inside the rollback window.

## Prepared state

- Live pre-launch theme: Sense, ID `152278204553`
- Additional Sense backup: ID `153521913993`
- Target theme: Broadcast, ID `155379237001`
- Rollback owner: BLOCKED, not yet named
- Launch approver: BLOCKED, not yet named

## Procedure

1. Record the failure, timestamp, affected URLs and evidence.
2. Stop further Broadcast changes.
3. Obtain the named rollback owner's approval.
4. In Shopify Admin, go to `Online Store → Themes`.
5. Confirm the intended Sense backup by theme name and ID.
6. Publish the approved Sense backup.
7. Verify homepage, priority collections, priority products, cart and checkout.
8. Recheck analytics, canonical tags, robots directives and structured data.
9. Record the rollback result in the launch register and implementation log.

Publication or rollback execution is customer-visible and requires explicit approval.

