package com.SOLID.Violations;

public class OnlineCustomer {
    //Dependency Inversion violation
    private UPITransfer upi;

    public OnlineCustomer() {
        upi = new UPITransfer();
    }

    public static void main(String[] args) {
        OnlineCustomer customer = new OnlineCustomer();
        customer.upi.payForItems();
    }
}
