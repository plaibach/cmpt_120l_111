// Paul C. Laibach
   // Introduction to Programming
   // Project 5 - Game v0.8
   // Due 2014.11.30

//
// BEGINNING OF DECLARE AND DEFINE GLOBAL VARIABLES AND CLASSES
//

   // Variables used for scoring and sarcasm.
   // These will all go away with refactoring to location array
   var hasVisitedRoom1 = true;
   var hasVisitedRoom2 = false;
   var hasVisitedRoom3 = false;
   var hasVisitedRoom4 = false;
   var hasVisitedRoom5 = false;
   var hasVisitedRoom6 = false;
   var hasVisitedRoom7 = false;
   var hasVisitedRoom8 = false;
   var hasVisitedRoom9 = false;
   var hasVisitedRoom10 = false;

   // Variables used for status textarea.
   var totalScore = 0;
   var previousLoc = "";
   var currentLoc = "Room1";
   var helpText = "You may navigate by clicking the directional buttons. You may also navigate by entering \"W\", \"N\", \"S\", or \"E\" in the command bar and then pressing [Enter] or clicking [Go].\n\nAll other actions are available only through use of the command bar. For example, your rucksack inventory may be displayed by typing \"Inventory\" in the command bar and then pressing [Enter] or clicking [Go].\n\nTry commands and phrases using keywords such as \"Look\", \"Find\", \"Take\", and \"Drop\".\n\nFor example, if you find a possibly useful item while stumbling about, a \"take [item]\" command might work. Even so, it's still up to you to figure out what is useful and how to use it.";

   // Begin variables and class/prototypes for locations

      // Define map locales class/prototype.
      function mapLocale() {
         this.localeID = 0;
         this.localeVisited = 0;
         this.localeName = "";
         this.localeDesc = "";
      }

   // End variables and class/prototypes for locations

   // Begin variables and class/prototypes for items/inventory

      // Define useful items class/prototype.
      function usefulItem() {
         this.itemID = 0;
         this.itemName = "";
         this.itemLocation = "";
         this.itemWeight = 0;
         this.itemVolume = 0;
      }

      // Variables for rucksack inventory (carrying) limits
      var rucksackMaxItems = "4";
      var rucksackMaxWeight = "30";
      var rucksackMaxVolume = "40";

      // Message to display when rucksack is empty
      var inventoryList = "Dude, you ain't got shit!\n Nothin' but an empty rucksack.";

   // End variables and class/prototypes for items/inventory

//
// END OF DECLARE AND DEFINE GLOBAL VARIABLES AND CLASSES
//
