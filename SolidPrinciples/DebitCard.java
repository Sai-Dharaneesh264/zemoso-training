package com.SOLID.SolidPrinciples;

//Liskov's substituion principle
public class DebitCard implements CardPayment {
    @Override
    public void enterCardDetails() {
        System.out.println("enter the debit card details");
    }

    @Override
    public void makePayment() {
        System.out.println("payment done using debit card");
    }
}
