// Paul C. Laibach
   // Introduction to Programming
   // Project 5 - Game v0.8
   // Due 2014.11.30

//
// BEGINNING OF DECLARE AND DEFINE GLOBAL VARIABLES AND CLASSES
//

   // Must be declared and defined prior to onload event

   // Variables used for status textarea.
   var totalScore = 0;
   var previousLoc = "";
   var currentLoc = "Room1";

   // Variables used for scoring and sarcasm.
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

   // Variables for rucksack inventory (carrying) limits
   var rucksackMaxItems = "4";
   var rucksackMaxWeight = "30";
   var rucksackMaxVolume = "40";

   // Inventory item class/prototype.
   function inventoryItem() {
      this.itemName = "";
      this.itemLocation = "";
      this.itemWeight = 0;
      this.itemVolume = 0;
   }

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

   // Check txtCommand for substrings "rub" and "lotion"
   // Pass control to escape from the Abyss function.
   function specialTxtCommands() {
      var playerAction = "txtCommand \"" + txtCommand.value + "\"";
      if ((txtCommand.value.search(/help/i) !== -1)) {
         showHelp(playerAction);
      }  else if ((txtCommand.value.search(/inv/i) !== -1)) {
         showInventory(playerAction);
      }  else if ((txtCommand.value.search(/tak/i) !== -1)) {
         takeItem();
      }  else if (currentLoc === "Room4") {
                  if ((txtCommand.value.search(/rub/i) !== -1) && (txtCommand.value.search(/lotion/i) !== -1)) {
                     escapedAbyss(playerAction);
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
         // Create initial instances of inventory class/prototype items.
         var flannelPajamas = new inventoryItem();
            flannelPajamas.itemName = "Flannel Pajamas";
            flannelPajamas.itemLocation = "Room1";
            flannelPajamas.itemWeight = 5;
            flannelPajamas.itemVolume = 5;
         var wrench = new inventoryItem();
            wrench.itemName = "Wrench";
            wrench.itemLocation = "Room2";
            wrench.itemWeight = 15;
            wrench.itemVolume = 8;
         var goldfingerDvd = new inventoryItem();
            goldfingerDvd.itemName = "Goldfinger DVD";
            goldfingerDvd.itemLocation = "Rucksack";
            goldfingerDvd.itemWeight = 3;
            goldfingerDvd.itemVolume = 3;
         var yogaPants = new inventoryItem();
            yogaPants.itemName = "Yoga Pants";
            yogaPants.itemLocation = "Room4";
            yogaPants.itemWeight = 5;
            yogaPants.itemVolume = 5;
         var dodgeballBall = new inventoryItem();
            dodgeballBall.itemName = "Dodgeball Ball";
            dodgeballBall.itemLocation = "Room5";
            dodgeballBall.itemWeight = 10;
            dodgeballBall.itemVolume = 30;
         var dogBiscuit = new inventoryItem();
            dogBiscuit.itemName = "Dog Biscuit";
            dogBiscuit.itemLocation = "Room6";
            dogBiscuit.itemWeight = 3;
            dogBiscuit.itemVolume = 3;
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

   // Display "Help" or "Inventory" or any other temporary text we don't want to include in taHistory or taStatus.
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
