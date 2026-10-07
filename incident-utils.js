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

    getOpenIncidentCount: function(callerId) {

        var incident = new GlideRecord('incident');

        incident.addQuery('caller_id', callerId);
        incident.addQuery('active', true);
        incident.query();

        return incident.getRowCount();
    },

    type: 'IncidentUtils'
};
