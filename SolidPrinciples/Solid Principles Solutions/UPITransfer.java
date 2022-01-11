package com.SOLID.SolidPrinciples;

//Liskov's Substitution principle
public class UPITransfer implements Payment {
    @Override
    public void makePayment() {
        System.out.println("Payment done using the UPI Payment");
    }
}
