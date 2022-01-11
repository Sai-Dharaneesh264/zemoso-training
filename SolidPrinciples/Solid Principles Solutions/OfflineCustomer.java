package com.SOLID.SolidPrinciples;


//interface Segregation
public class OfflineCustomer implements SearchAndSelectItems {


    public static void main(String[] args) {
        OfflineCustomer offline = new OfflineCustomer();
        CardPayment card = new DebitCard();
        card.enterCardDetails();
        card.makePayment();
    }

    @Override
    public void searchItems() {
        System.out.println("search items in market directly");
    }

    @Override
    public void selectItems() {
        System.out.println("select items in market directly");
    }
}
