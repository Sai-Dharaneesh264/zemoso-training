package com.SOLID.Violations;

import java.util.ArrayList;
import java.util.List;

public class Category {
    List<String> foodList;
    List<String> beverageList;
    Category() {
        foodList = new ArrayList<>();
        beverageList = new ArrayList();
    }

    void addFoodItems(String item) {
        foodList.add(item);
    }
    // Open Closed principle violation
    void addBeverages(String item) {
        beverageList.add(item);
    }


}
