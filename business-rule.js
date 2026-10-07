(function executeRule(current, previous /*null when async*/) {

    if (current.impact == 1 && current.urgency == 1) {
        current.priority = 1;
    } 
    else if (current.impact == 1 && current.urgency == 2) {
        current.priority = 2;
    } 
    else if (current.impact == 2 && current.urgency == 2) {
        current.priority = 3;
    }

})(current, previous);
