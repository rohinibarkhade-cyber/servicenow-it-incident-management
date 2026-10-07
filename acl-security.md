# Incident Management ACL Security

## Access Control Requirements

Access Control Lists (ACLs) are used to restrict access to incident records and ensure that only authorized users can view or modify incidents.

## Roles

### End User
- Create incidents
- View their own incidents
- Cannot modify incidents assigned to other users

### Service Desk
- Create incidents
- Read incidents
- Update incidents
- Assign incidents to support groups

### IT Support
- View assigned incidents
- Update incident details
- Add work notes
- Resolve assigned incidents

### Incident Manager
- View all incidents
- Update incidents
- Reassign incidents
- Monitor incident resolution

## ACL Examples

| Resource | Role | Access |
|---|---|---|
| Create Incident | End User | Create |
| View Own Incident | End User | Read |
| Incident Record | Service Desk | Read/Write |
| Assigned Incident | IT Support | Read/Write |
| All Incidents | Incident Manager | Read/Write |

## Security Rules

1. Users should only access information they are authorized to view.
2. End users should not modify restricted incident fields.
3. IT Support users should update incidents assigned to their team.
4. Incident Managers should have broader incident management access.
5. Unauthorized users should not be able to modify incident records.

## Security Objective

ACLs help protect incident data and ensure that incident records are accessed and modified according to user roles and responsibilities.
