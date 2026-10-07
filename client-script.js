function onChange(control, oldValue, newValue, isLoading) {

    if (isLoading) {
        return;
    }

    if (newValue == '1') {
        g_form.setMandatory('urgency', true);
        g_form.setMandatory('impact', true);
    }
}
