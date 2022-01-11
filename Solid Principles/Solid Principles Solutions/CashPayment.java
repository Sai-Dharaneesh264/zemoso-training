package com.SOLID.SolidPrinciples;

//Liskov's Substitution Principle
public class CashPayment implements Payment {
    @Override
    public void makePayment() {
        System.out.println("Cash on Delivery");
    }
}
