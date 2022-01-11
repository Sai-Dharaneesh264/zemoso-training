package com.SOLID.SolidPrinciples;

//Liskov's substitution principle
public class CreditCard implements CardPayment {
    @Override
    public void enterCardDetails() {
        System.out.println("enter the credit card details");
    }

    @Override
    public void makePayment() {
        System.out.println("payment dones using credit card");
    }
}
