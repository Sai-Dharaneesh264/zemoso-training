package com.SOLID.SolidPrinciples;

//Liskov's Substitution principle
public interface CardPayment extends Payment {
    void enterCardDetails();
}
