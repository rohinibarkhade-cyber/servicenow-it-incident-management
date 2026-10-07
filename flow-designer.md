# Incident Management Flow Designer

## Flow Name

Incident Assignment and Notification Automation

## Trigger

The flow is triggered when a new incident is created.

## Flow Steps

1. Incident is created.
2. Check Impact and Urgency.
3. Determine Incident Priority.
4. Identify the appropriate Assignment Group.
5. Assign the incident to the support team.
6. Send notification to the assigned team.
7. Support team investigates the incident.
8. Incident is resolved.
9. Resolution notification is sent.
10. Incident is closed.

## Flow Logic

Incident Created
       |
       v
Determine Priority
       |
       v
Identify Assignment Group
       |
       v
Assign Incident
       |
       v
Notify Support Team
       |
       v
Investigation
       |
       v
Resolve Incident
       |
       v
Close Incident

## Priority Logic

If Impact = High and Urgency = High:

Priority = Critical

If Impact = High and Urgency = Medium:

Priority = High

If Impact = Medium and Urgency = Medium:

Priority = Moderate

If Impact = Low and Urgency = Low:

Priority = Low

## Automation Benefits

- Automatic incident assignment
- Faster notification
- Better incident tracking
- Reduced manual work
- Improved incident resolution process
