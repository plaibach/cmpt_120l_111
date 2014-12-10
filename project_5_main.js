// Paul C. Laibach
   // Introduction to Programming
   // Project 5 - Game v0.8
   // Due 2014.11.30

//
// BEGINNING OF TEXT COMMAND PROCESSING
//

   // integerVariable = parseInt(stringVariable);
   // returns NaN if unable to parse
   // Validate text command input.
   // Begin parsing / processing valid strings, otherwise do nothing except set placeholder message.

   // Check whether txtCommand is blank and set status of btnTxtCommand accordingly.
   function setBtnTxtCommand() {
      if (txtCommand.value !== "") {
         document.getElementById("btnTxtCommand").disabled = false;
      }  else {
            if (txtCommand.value === "") {
               document.getElementById("btnTxtCommand").disabled = true;
            }
         }
   }

   // Verify whether text is present when player presses the [Enter] key.
   function verifyTxtPresent() {
      if (txtCommand.value === "") {
         txtCommand.placeholder = "Dude. Just type \"Help\" and press [Enter]!";
         document.getElementById("btnTxtCommand").disabled = true;
         focusOnTxtCommand();
      }  else {
            simpleTxtCommand();
         }
   }

   // We arrive here because text was present and [Enter} key was pressed -or- text was present (therefore [Go] was enabled) and [Go] was clicked.
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
      alert("You've got the wrench.");
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
         document.getElementById("btnTxtCommand").disabled = true;
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
