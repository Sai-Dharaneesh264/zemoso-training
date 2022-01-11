package com.SOLID.Violations;

public class UPITransfer implements Payments{
    @Override
    public void payForItems() {

    }

    // Liskov's principle violation
    @Override
    public void addCardDetails() {
        // card details are not applicable for UPI transfer
    }
}
