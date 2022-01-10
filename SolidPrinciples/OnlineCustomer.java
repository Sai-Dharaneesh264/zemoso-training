package com.SOLID.SolidPrinciples;

// Interface segregation
public class OnlineCustomer implements SearchAndSelectItems, Order{
    private Payment payment;
    public OnlineCustomer() {
        payment = new CreditCard();
    }

    public void pay() {
        payment.makePayment();
    }

    @Override
    public void makeOrder() {
        System.out.println("make an order");
    }

    @Override
    public void searchItems() {
        System.out.println("search for items on inernet");
    }

    @Override
    public void selectItems() {
        System.out.println("select items and add it to wishlist");
    }

}
