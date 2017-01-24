/**
 * Created by tim on 1/24/17.
 */
({
    submitForm: function (component, event, helper) {
        if (helper.validateItemForm(component)) {
            var newItem = component.get("v.newItem");
            helper.createItem(component, newItem);
        }
    }
})