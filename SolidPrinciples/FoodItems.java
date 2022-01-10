package com.SOLID.SolidPrinciples;

// Open Closed Principle
public class FoodItems implements Category {
    @Override
    public void getCategory() {
        System.out.println("Food Items");
    }
}
