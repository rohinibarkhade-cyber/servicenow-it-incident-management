# servicenow-it-incident-management
ServiceNow IT Incident Management System using ITSM, Incident Management, Business Rules, Client Scripts and Flow Designer.
# IT Incident Management System – ServiceNow

## Project Overview

The IT Incident Management System is a ServiceNow-based solution designed to manage IT incidents from creation to resolution.

The system helps users report technical issues and enables the IT support team to categorize, prioritize, assign, track, and resolve incidents efficiently.

## Objectives

* Manage IT incidents in a centralized system
* Automatically prioritize incidents
* Assign incidents to appropriate support teams
* Track incident status
* Reduce incident resolution time
* Improve IT support operations

## Technologies Used

* ServiceNow
* ITSM
* Incident Management
* Flow Designer
* Client Scripts
* Business Rules
* UI Policies
* Script Includes
* GlideRecord
* ACL
* Notifications
* JavaScript

## Main Features

### Incident Creation

Users can create incidents by providing:

* Caller
* Short Description
* Description
* Category
* Subcategory
* Impact
* Urgency
* Priority
* Assignment Group

### Incident Lifecycle

```text
New
 ↓
Assigned
 ↓
In Progress
 ↓
Resolved
 ↓
Closed
```

Alternative state:

```text
Cancelled
```

## Incident Priority

Priority can be determined using Impact and Urgency.

| Impact | Urgency | Priority |
| ------ | ------- | -------- |
| High   | High    | Critical |
| High   | Medium  | High     |
| Medium | High    | High     |
| Medium | Medium  | Moderate |
| Low    | Low     | Low      |

## Flow Designer

The incident automation process can be implemented using Flow Designer.

```text
Incident Created
       ↓
Determine Priority
       ↓
Assignment Group
       ↓
Assign Incident
       ↓
Notify Support Team
       ↓
Incident Investigation
       ↓
Resolution
       ↓
Close Incident
```

## Client Script

Client Scripts can be used for client-side validation and dynamic form behavior.

Example use cases:

* Make fields mandatory
* Set default values
* Validate incident information
* Show or hide fields

## Business Rule

Business Rules can be used for server-side automation.

Example use cases:

* Automatically update priority
* Validate incident data
* Update timestamps
* Trigger server-side processing

## Example Business Rule

```javascript
(function executeRule(current, previous /*null when async*/) {

    if (current.impact == 1 && current.urgency == 1) {
        current.priority = 1;
    }

})(current, previous);
```

## Script Include

Script Includes provide reusable server-side JavaScript logic.

Example:

```javascript
var IncidentUtils = Class.create();

IncidentUtils.prototype = {

    initialize: function() {
    },

    getIncidentCount: function(callerId) {

        var incident = new GlideRecord('incident');

        incident.addQuery('caller_id', callerId);
        incident.query();

        return incident.getRowCount();
    },

    type: 'IncidentUtils'
};
```

## GlideRecord

GlideRecord can be used to retrieve incident records.

Example:

```javascript
var incident = new GlideRecord('incident');

incident.addQuery('state', 2);
incident.query();

while (incident.next()) {
    gs.info(incident.number);
}
```

## UI Policies

UI Policies can control field behavior dynamically.

Example:

When an incident is marked as Resolved, resolution fields can be made mandatory.

## ACL

Access Control Rules can restrict incident access.

Example:

* Users can view their own incidents.
* Service Desk users can create and update incidents.
* Support teams can update assigned incidents.
* Unauthorized users cannot modify restricted fields.

## Notifications

Notifications can be configured for:

* Incident creation
* Incident assignment
* Incident reassignment
* Incident resolution
* Incident closure

## Testing Scenarios

### Test Case 1 – Create Incident

Create a new incident.

**Expected Result:**
Incident should be created successfully.

### Test Case 2 – High Priority Incident

Set Impact and Urgency to High.

**Expected Result:**
Incident should receive Critical priority.

### Test Case 3 – Assignment

Assign incident to a support group.

**Expected Result:**
Assigned team should receive notification.

### Test Case 4 – Resolve Incident

Update incident with resolution details.

**Expected Result:**
Incident should move to Resolved state.

### Test Case 5 – Close Incident

Close the resolved incident.

**Expected Result:**
Incident should move to Closed state.

## ServiceNow Concepts Demonstrated

* ITSM
* Incident Management
* Client Scripts
* Business Rules
* Flow Designer
* Script Includes
* GlideRecord
* UI Policies
* ACL
* Notifications
* JavaScript

## Project Outcome

This project demonstrates how ServiceNow Incident Management can be used to automate IT support processes, improve incident tracking, prioritize issues, assign support teams, and manage incidents through resolution and closure.

## Author

**Rohini Barkhade**

ServiceNow Developer | ServiceNow Administrator | ITSM
