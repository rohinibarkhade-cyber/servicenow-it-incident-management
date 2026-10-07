# Incident Management Testing

## Test Case 1 – Create Incident

### Action
Create a new incident with caller, short description, category, impact, and urgency.

### Expected Result
The incident should be created successfully.

---

## Test Case 2 – Critical Priority

### Action
Set Impact = High and Urgency = High.

### Expected Result
The incident priority should become Critical.

---

## Test Case 3 – Incident Assignment

### Action
Assign the incident to the appropriate support group.

### Expected Result
The incident should be assigned successfully and the support team should receive a notification.

---

## Test Case 4 – Incident Resolution

### Action
Add resolution notes and change the incident state to Resolved.

### Expected Result
The incident should be marked as Resolved.

---

## Test Case 5 – Incident Closure

### Action
Close the resolved incident.

### Expected Result
The incident should move to the Closed state.

---

## Test Case 6 – Access Control

### Action
Try to access an incident using an unauthorized user.

### Expected Result
The unauthorized user should not be able to modify restricted incident information.

---

## Test Case 7 – Open Incident Count

### Action
Use the IncidentUtils Script Include to retrieve the number of active incidents for a caller.

### Expected Result
The correct number of active incidents should be returned.

## Testing Outcome

The test scenarios validate incident creation, priority calculation, assignment, resolution, closure, security, and server-side functionality.
