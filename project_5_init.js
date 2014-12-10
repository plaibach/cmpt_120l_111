// Paul C. Laibach
   // Introduction to Programming
   // Project 5 - Game v0.8
   // Due 2014.11.30

//
// BEGIN ESTABLISH CLASS/PROTOTYPE OBJECTS AND ARRAYS
//

   // Begin new mapLocale class/prototypes objects and array
      var locale_0 = new mapLocale();
         locale_0.localeID = 0;
         locale_0.localeVisits = 1;
         locale_0.localeName = "Utility Yard";
         locale_0.localeDesc = "After a night of drunken debauchery, you wake to find yourself trapped in the utility enclosure of what appears to be an abandoned shopping mall. The gate leading to the parking lot and freedom is chained and locked. All the surrounding fencing and gate are topped with razor wire. To the north there is a doorway to the interior of the building.";
      var locale_1 = new mapLocale();
         locale_1.localeID = 1;
         locale_1.localeVisits = 0;
         locale_1.localeName = "Room 1";
         locale_1.localeDesc = "Description for Room 1"
      var locale_2 = new mapLocale();
         locale_2.localeID = 2;
         locale_2.localeVisits = 0;
         locale_2.localeName = "Room 2";
         locale_2.localeDesc = "Description for Room 2"
      var locale_3 = new mapLocale();
         locale_3.localeID = 3;
         locale_3.localeVisits = 0;
         locale_3.localeName = "Room 3";
         locale_3.localeDesc = "Description for Room 3"
      var locale_4 = new mapLocale();
         locale_4.localeID = 4;
         locale_4.localeVisits = 0;
         locale_4.localeName = "Room 4";
         locale_4.localeDesc = "Description for Room 4"
      var locale_5 = new mapLocale();
         locale_5.localeID = 5;
         locale_5.localeVisits = 0;
         locale_5.localeName = "Room 5";
         locale_5.localeDesc = "Description for Room 5"
      var locale_6 = new mapLocale();
         locale_6.localeID = 6;
         locale_6.localeVisits = 0;
         locale_6.localeName = "Room 6";
         locale_6.localeDesc = "Description for Room 6"
      var locale_7 = new mapLocale();
         locale_7.localeID = 7;
         locale_7.localeVisits = 0;
         locale_7.localeName = "Room 7";
         locale_7.localeDesc = "Description for Room 7"
      var locale_8 = new mapLocale();
         locale_8.localeID = 8;
         locale_8.localeVisits = 0;
         locale_8.localeName = "Room 8";
         locale_8.localeDesc = "Description for Room 8"
      var locale_9 = new mapLocale();
         locale_9.localeID = 9;
         locale_9.localeVisits = 0;
         locale_9.localeName = "Room 9";
         locale_9.localeDesc = "Description for Room 9"
      var locale_10 = new mapLocale();
         locale_10.localeID = 10;
         locale_10.localeVisits = 0;
         locale_10.localeName = "Room 10";
         locale_10.localeDesc = "Description for Room 10"

      // Store locales in global array
      var localeArray = [];
         localeArray[0] =  locale_0
         localeArray[1] =  locale_1
         localeArray[2] =  locale_2
         localeArray[3] =  locale_3
         localeArray[4] =  locale_4
         localeArray[5] =  locale_5
         localeArray[6] =  locale_6
         localeArray[7] =  locale_7
         localeArray[8] =  locale_8
         localeArray[9] =  locale_9
         localeArray[10] = locale_10

   // End new mapLocale class/prototypes objects and array

   // Begin new item/inventory objects and array

      // Create initial usefulItem class/prototype instances.
      var item_1 = new usefulItem();
         item_1.itemID = 1;
         item_1.itemName = "Flannel Pajamas";
         item_1.itemLocation = 1;
         item_1.itemWeight = 5;
         item_1.itemVolume = 5;
      var item_2 = new usefulItem();
         item_2.itemID = 2;
         item_2.itemName = "Wrench";
         item_2.itemLocation = 2;
         item_2.itemWeight = 15;
         item_2.itemVolume = 8;
      var item_3 = new usefulItem();
         item_3.itemID = 3;
         item_3.itemName = "Goldfinger DVD";
         item_3.itemLocation = 3;
         item_3.itemWeight = 3;
         item_3.itemVolume = 3;
      var item_4 = new usefulItem();
         item_4.itemID = 4;
         item_4.itemName = "Yoga Pants";
         item_4.itemLocation = 4;
         item_4.itemWeight = 5;
         item_4.itemVolume = 5;
      var item_5 = new usefulItem();
         item_5.itemID = 5;
         item_5.itemName = "Dodgeball Ball";
         item_5.itemLocation = 5;
         item_5.itemWeight = 10;
         item_5.itemVolume = 30;
      var item_6 = new usefulItem();
         item_6.itemID = 6;
         item_6.itemName = "Dog Biscuit";
         item_6.itemLocation = 6;
         item_6.itemWeight = 3;
         item_6.itemVolume = 3;

   // End new item/inventory objects and array

//
// END ESTABLISH CLASS/PROTOTYPE OBJECTS AND ARRAYS
//
