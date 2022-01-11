package com.SOLID.SolidPrinciples;

//Liskov's Substitution principle
public class BankToBankTransfer implements Payment {
    @Override
    public void makePayment() {
        System.out.println("payment done using bank to bank transfer");
    }
}
