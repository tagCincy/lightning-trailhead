/**
 * Created by tim on 1/24/17.
 */
({
    validateItemForm: function (component) {
        var valid = true;

        var itemNameField = component.find("itemName");
        var itemQuantityField = component.find("itemQuantity");
        var itemPriceField = component.find("itemPrice");

        if ($A.util.isEmpty(itemNameField.get("v.value"))) {
            valid = false;
            itemNameField.set("v.errors", [{message: "Item Name cannot be blank."}]);
        } else {
            itemNameField.set("v.errors", null);
        }
        if (isNaN(itemQuantityField.get("v.value"))) {
            valid = false;
            itemQuantityField.set("v.errors", [{message: "Invalid Quantity value."}]);
        } else {
            itemQuantityField.set("v.errors", null);
        }
        if (isNaN(itemPriceField.get("v.value"))) {
            valid = false;
            itemPriceField.set("v.errors", [{message: "Invalid Price value."}]);
        } else {
            itemPriceField.set("v.errors", null);
        }

        return valid;
    },

    createItem: function(component, newItem) {
        var addItem = component.getEvent("addItem");
        addItem.setParams({ "item": newItem });
        addItem.fire();
        component.set("v.newItem", {
            'sobjectType': 'Camping_Item__c',
            'Name': '',
            'Quantity__c': 0,
            'Price__c': 0,
            'Packed__c': false
        });
    }
})