package com.SOLID.SolidPrinciples;


//open closed principle
public class Beverages implements Category {
    @Override
    public void getCategory() {
        System.out.println("Beverages");
    }
}
