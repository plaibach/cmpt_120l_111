// Paul C. Laibach
   // Introduction to Programming
   // Project 5 - Game v0.8
   // Due 2014.11.30

//
// BEGINNING OF DECLARE AND DEFINE GLOBAL VARIABLES AND CLASSES
//

   // Variables used for status textarea.
   var totalScore = 0;
   var previousLoc = "";
   var currentLoc = "Room1";

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

   // Define map locales class/prototype.
   function mapLocale() {
      this.localeID = 0;
      this.localeVisited = 0;
      this.localeName = "";
      this.localeDesc = "";
   }

   // Create initial mapLocale class/prototype instances.
   var locale_0 = new mapLocale();
      locale_0.localeID = 0;
      locale_0.localeVisited = 1;
      locale_0.localeName = "Utility Yard";
      locale_0.localeDesc = "After a night of drunken debauchery, you wake to find yourself trapped in the utility enclosure of what appears to be an abandoned shopping mall. The gate leading to the parking lot and freedom is chained and locked. All the surrounding fencing and gate are topped with razor wire. To the north there is a doorway to the interior of the building.";
   var locale_1 = new mapLocale();
      locale_1.localeID = 1;
      locale_1.localeVisited = 0;
      locale_1.localeName = "Room 1";
      locale_1.localeDesc = "Description for Room 1"
   var locale_2 = new mapLocale();
      locale_2.localeID = 2;
      locale_2.localeVisited = 0;
      locale_2.localeName = "Room 2";
      locale_2.localeDesc = "Description for Room 2"
   var locale_3 = new mapLocale();
      locale_3.localeID = 3;
      locale_3.localeVisited = 0;
      locale_3.localeName = "Room 3";
      locale_3.localeDesc = "Description for Room 3"
   var locale_4 = new mapLocale();
      locale_4.localeID = 4;
      locale_4.localeVisited = 0;
      locale_4.localeName = "Room 4";
      locale_4.localeDesc = "Description for Room 4"
   var locale_5 = new mapLocale();
      locale_5.localeID = 5;
      locale_5.localeVisited = 0;
      locale_5.localeName = "Room 5";
      locale_5.localeDesc = "Description for Room 5"
   var locale_6 = new mapLocale();
      locale_6.localeID = 6;
      locale_6.localeVisited = 0;
      locale_6.localeName = "Room 6";
      locale_6.localeDesc = "Description for Room 6"
   var locale_7 = new mapLocale();
      locale_7.localeID = 7;
      locale_7.localeVisited = 0;
      locale_7.localeName = "Room 7";
      locale_7.localeDesc = "Description for Room 7"
   var locale_8 = new mapLocale();
      locale_8.localeID = 8;
      locale_8.localeVisited = 0;
      locale_8.localeName = "Room 8";
      locale_8.localeDesc = "Description for Room 8"
   var locale_9 = new mapLocale();
      locale_9.localeID = 9;
      locale_9.localeVisited = 0;
      locale_9.localeName = "Room 9";
      locale_9.localeDesc = "Description for Room 9"
   var locale_10 = new mapLocale();
      locale_10.localeID = 10;
      locale_10.localeVisited = 0;
      locale_10.localeName = "Room 10";
      locale_10.localeDesc = "Description for Room 10"

   // Define useful items class/prototype.
   function usefulItem() {
      this.itemID = 0;
      this.itemName = "";
      this.itemLocation = "";
      this.itemWeight = 0;
      this.itemVolume = 0;
   }

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

   // Variables for rucksack inventory (carrying) limits
   var rucksackMaxItems = "4";
   var rucksackMaxWeight = "30";
   var rucksackMaxVolume = "40";
   
   var helpText = "You may navigate by clicking the directional buttons. You may also navigate by entering \"W\", \"N\", \"S\", or \"E\" in the command bar and then pressing [Enter] or clicking [Go].\n\nAll other actions are available only through use of the command bar. For example, your rucksack inventory may be displayed by typing \"Inventory\" in the command bar and then pressing [Enter] or clicking [Go].\n\nTry commands and phrases using keywords such as \"Look\", \"Find\", \"Take\", and \"Drop\".\n\nFor example, if you find a possibly useful item while stumbling about, a \"take [item]\" command might work. Even so, it's still up to you to figure out what is useful and how to use it.";

   var inventoryList = "Dude, you ain't got shit!\n Nothin' but an empty rucksack.";

//
// END OF DECLARE AND DEFINE GLOBAL VARIABLES AND CLASSES
//

//
// BEGINNING OF TEXT COMMAND PROCESSING
//

   // integerVariable = parseInt(stringVariable);
   // returns NaN if unable to parse
   // Validate text command input.
   // Begin parsing / processing valid strings, otherwise do nothing except set placeholder message.
   function verifyTxtPresent() {
      if (txtCommand.value === "") {
         txtCommand.placeholder = "Dude. Just type \"Help\" and press [Enter]!";
         document.getElementById("btnTxtCommand").disabled = true;
         focusOnTxtCommand();
      }  else {
            simpleTxtCommand();
         }
   }

   // Check txtCommand for single character "w", "n", "s", or "e".
   // Call directional functions (same as corresponding button clicks) and pass player action variable.
   function simpleTxtCommand() {
      var playerAction = "txtCommand \"" + txtCommand.value + "\"";
      // Convert string to lower case for analysis
      var txtCommandLowcase = txtCommand.value.toLowerCase();
      switch(txtCommandLowcase) {
         case "w": attemptGoWest(playerAction);
            break;
         case "n": attemptGoNorth(playerAction);
            break;
         case "s": attemptGoSouth(playerAction);
            break;
         case "e": attemptGoEast(playerAction);
            break;
         default: specialTxtCommands();
      }
   }

   // Check txtCommand for substrings "help", "inv", "take", or "rub" && "lotion"
   // Pass control to escape from the Abyss function.
   function specialTxtCommands() {
      var playerAction = "txtCommand \"" + txtCommand.value + "\"";
      if ((txtCommand.value.search(/help/i) !== -1)) {
         showHelp(playerAction);
      }  else if ((txtCommand.value.search(/inv/i) !== -1)) {
         showInventory(playerAction);
      }  else if ((txtCommand.value.search(/take/i) !== -1)) {
         takeItem();
      }  else if (currentLoc === "Room4") {
                  if ((txtCommand.value.search(/rub/i) !== -1) && (txtCommand.value.search(/lotion/i) !== -1)) {
                     escapedAbyss(playerAction);
                  } else {
                    unknownTxtCommand();
                    }
      }  else {
         unknownTxtCommand();
      }
   }

   function showHelp() {
      var playerAction = "txtCommand \"" + txtCommand.value + "\"";
      var message = "Help displayed at right -->";
      var multiPurposeText = helpText;
      updateMultiPurposeTextArea (playerAction, message, multiPurposeText);
   }

   function showInventory() {
      var playerAction = "txtCommand \"" + txtCommand.value + "\"";
      var message = "Inventory displayed at right -->";
      var multiPurposeText = inventoryList;
      updateMultiPurposeTextArea (playerAction, message, multiPurposeText);
   }

   // Provide help when text commands are unrecognized by any other function.
   // Bypass navigation processing and proceed to update displays.
   function unknownTxtCommand() {
      var playerAction = "txtCommand \"" + txtCommand.value + "\"";
      var message = "Please type \"W\", \"N\", \"S\", or \"E\"; then press [Enter] or click [Go].\nYou may also request \"Help\" to view the full list of commands available.";
      updateAllDisplays (playerAction, message);
   }

   function takeItem() {
      // I don't care what you asked for, you get the wrench.
      alert("You've go the wrench.");
   }

//
// END OF TEXT COMMAND PROCESSING
//

//
// BEGINNING OF DOCUMENT ELEMENT UPDATES
//

   // Initialize function initializeOnLoad called from the html <body> tag onload event.
      function initializeOnLoad() {

         // Set initial display variables and document elements' state.
         // Indicate "Refresh" upon onload. This will be the playerAction displayed when first landing at page or upon subsequent refresh.
         var playerAction = "Refresh";
         var message = "You have just entered an unmarked door at the south end of a nondescript building. The door swings gently shut behind you and latches with a slight, yet somehow ominous \"click.\"";
         updateStatusTextArea();
         updateHistoryTextArea(playerAction, message);
         resetTxtCommandPlaceHolder();
         focusOnTxtCommand();
         setBtnState();
      }

   // Display "Help" or "useful" or any other temporary text we don't want to include in taHistory or taStatus.
   function updateMultiPurposeTextArea(playerAction, message, multiPurposeText) {
      var multiPurposeTextArea = document.getElementById("taMultiPurpose");
      multiPurposeTextArea.value = multiPurposeText;
      updateStatusTextArea();
      updateHistoryTextArea(playerAction, message);
      clearTxtCommand();
      resetTxtCommandPlaceHolder();
      focusOnTxtCommand();
      setBtnState();
   }

   // Package all functions required to update document elements, passing along local variables for use as necessary.
   function updateAllDisplays(playerAction, message) {
      updateStatusTextArea();
      updateHistoryTextArea(playerAction, message);
      clearTxtCommand();
      resetTxtCommandPlaceHolder();
      clearMultiPurposeTextArea();
      focusOnTxtCommand();
      setBtnState();
   }

      // Display current score and location in status textarea.
      function updateStatusTextArea() {
         var statusTextArea = document.getElementById("taStatus");
         statusTextArea.value = "Score: " + totalScore + "\n" + "Current Location: " + currentLoc;
      }

      // Recursively concatenate (append) player actions and response messages for display in main history textarea.
      function updateHistoryTextArea(playerAction, message) {
         var historyTextArea = document.getElementById("taHistory");
         if (historyTextArea.value === "") {
            historyTextArea.value = "[" + playerAction + "]" + "\n\n" + message + "\n";
         }  else {
               historyTextArea.value = historyTextArea.value + "\n" + "[" + playerAction + "]" + "\n\n" + message + "\n";
            }
         historyTextArea.scrollTop = historyTextArea.scrollHeight
      }

      // Since we are here, user text command input has either been evaluated and utilized, or discarded (and possibly dirty), so reset field to blank.
      function clearTxtCommand() {
         txtCommand.value = "";
      }
 
      // Since we are here, some form of valid button or user text command input has been processed, so reset any special placeholders.
      function resetTxtCommandPlaceHolder() {
         txtCommand.placeholder="Type a command or \"Help\" then press [Enter].";
      }

      // Clear out the multiPurposeTextArea when processing any subsequent input.
      function clearMultiPurposeTextArea() {
         var multiPurposeTextArea = document.getElementById("taMultiPurpose");
         multiPurposeTextArea.value = "";
      }

      // Always return focus to user text command input field.
      function focusOnTxtCommand() {
         document.getElementById("txtCommand").focus();
      }

      // Set button status based upon relevant criteria
      function setBtnState() {
         if (currentLoc === "Room1") {
            document.getElementById("btnWest").disabled = true;
            document.getElementById("btnNorth").disabled = false;
            document.getElementById("btnSouth").disabled = true;
            document.getElementById("btnEast").disabled = true;
         }  else {
         if (currentLoc === "Room2") {
            document.getElementById("btnWest").disabled = false;
            document.getElementById("btnNorth").disabled = false;
            document.getElementById("btnSouth").disabled = false;
            document.getElementById("btnEast").disabled = true;
         }  else {
         if (currentLoc === "Room3") {
            document.getElementById("btnWest").disabled = true;
            document.getElementById("btnNorth").disabled = false;
            document.getElementById("btnSouth").disabled = false;
            document.getElementById("btnEast").disabled = true;
         }  else {
         if (currentLoc === "Room4") {
            document.getElementById("btnWest").disabled = true;
            document.getElementById("btnNorth").disabled = true;
            document.getElementById("btnSouth").disabled = true;
            document.getElementById("btnEast").disabled = true;
         }  else {
         if (currentLoc === "Room5") {
            document.getElementById("btnWest").disabled = true;
            document.getElementById("btnNorth").disabled = true;
            document.getElementById("btnSouth").disabled = true;
            document.getElementById("btnEast").disabled = false;
         }  else {
         if (currentLoc === "Room6") {
            document.getElementById("btnWest").disabled = true;
            document.getElementById("btnNorth").disabled = true;
            document.getElementById("btnSouth").disabled = true;
            document.getElementById("btnEast").disabled = true;
         }  else {
         if (currentLoc === "Room7") {
            document.getElementById("btnWest").disabled = true;
            document.getElementById("btnNorth").disabled = true;
            document.getElementById("btnSouth").disabled = true;
            document.getElementById("btnEast").disabled = true;
         }
            }
            }
            }
            }
            }
            }
      }

//
// END OF DOCUMENT ELEMENT UPDATES
//
