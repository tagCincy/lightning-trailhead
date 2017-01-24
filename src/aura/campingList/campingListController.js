/**
 * Created by tim on 1/23/17.
 */
({
    doInit: function (component, event, helper) {
        var action = component.get("c.getItems");
        action.setCallback(this, function(response) {
            var state = response.getState();
            if (component.isValid() && state == "SUCCESS") {
                component.set("v.items", response.getReturnValue());
            } else {
                console.log("Items fetch failed with state: " + state);
            }
        });

        $A.enqueueAction(action);
    },
    handleAddItem: function(component, event, helper) {
        var action = component.get("c.saveItem");
        action.setParams({
            "item": item
        });
        action.setCallback(this, function (response) {
            var state = response.getState();
            if (component.isValid() && state == "SUCCESS") {
                var itemsList = component.get("v.items");
                itemsList.push(response.getReturnValue());
                component.set("v.items", itemsList);
            } else {
                console.log("Items save failed with state: " + state);
            }
        });

        $A.enqueueAction(action);
    }
})