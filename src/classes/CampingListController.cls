/**
 * Created by tim on 1/23/17.
 */

public with sharing class CampingListController {

    @AuraEnabled
    public static List<Camping_Item__c> getItems() {
        String[] fieldsToCheck = new String[] {
                'Id', 'Name', 'Quantity__c', 'Price__c', 'Packed__c', 'CreatedDate'
        };

        Map<String, Schema.SObjectField> fieldDescribeTokens = Schema.SObjectType.Camping_Item__c.fields.getMap();

        for(String field : fieldsToCheck) {
            if( ! fieldDescribeTokens.get(field).getDescribe().isAccessible() ) {
                throw new System.NoAccessException();
                return null;
            }
        }

        return [SELECT Id, Name, Quantity__c, Price__c, Packed__c, CreatedDate FROM Camping_Item__c];
    }

    @AuraEnabled
    public static Camping_Item__c saveItem(Camping_Item__c item) {
        String[] fieldsToCheck = new String[] {
                'Id', 'Name', 'Quantity__c', 'Price__c', 'Packed__c', 'CreatedDate'
        };

        Map<String, Schema.SObjectField> fieldDescribeTokens = Schema.SObjectType.Camping_Item__c.fields.getMap();

        for(String field : fieldsToCheck) {
            if( ! fieldDescribeTokens.get(field).getDescribe().isUpdateable() ) {
                throw new System.NoAccessException();
                return null;
            }
        }

        upsert item;
        return item;
    }
}