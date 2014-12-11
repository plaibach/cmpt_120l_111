// Paul C. Laibach
   // Introduction to Programming
   // Project 5 - Game v0.8
   // Due 2014.11.30

//
// COMMAND VALIDATION, TEXT PARSING, DISPLAY FUNCTIONS, AND NAVIGATION CALLS
//

// Begin verify that text command input is present before continuing to parsing functions.

   // If text is not present and player presses [Enter] key, do nothing except set placeholder message.
   function verifyTxtPresent() {
      if (txtCommand.value === "") {
         txtCommand.placeholder = "Dude. Just type \"Help\" and press [Enter]!";
         document.getElementById("btnTxtCommand").disabled = true;
         focusOnTxtCommand();
      }  else {
            simpleTxtCommand();
         }
   }

   // Monitor whether txtCommand is blank and update status of btnTxtCommand accordingly.
   function setBtnTxtCommand() {
      if (txtCommand.value !== "") {
         document.getElementById("btnTxtCommand").disabled = false;
      }  else {
            if (txtCommand.value === "") {
               document.getElementById("btnTxtCommand").disabled = true;
            }
         }
   }

// End verify that text command input is present before continuing to parsing functions.


// Begin parsing and processing of text command strings.

   // We arrived here because
   // text was present and [Enter} key was pressed, or
   // text was present (therefore [Go] was enabled) and [Go] was clicked.

   // Check for simple txtCommand of single character "w", "n", "s", or "e".
   // Call directional functions (same as corresponding button clicks) and pass player action variable.
   function simpleTxtCommand() {
      var playerAction = "txtCommand \"" + txtCommand.value + "\"";
      // Convert string to lower case for analysis
      var txtCommandLowcase = txtCommand.value.toLowerCase();
      switch(txtCommandLowcase) {
         case "w": case "west":  attemptGoWest(playerAction);  break;
         case "n": case "north": attemptGoNorth(playerAction); break;
         case "s": case "south": attemptGoSouth(playerAction); break;
         case "e": case "east":  attemptGoEast(playerAction);  break;
         default: specialTxtCommands();
      }
   }

   // Check txtCommand for substrings "help", "inv", "take", "look", or a
   // combination of "rub" && "lotion" which is used to escape from the Abyss.
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

// End parsing and processing of text command strings.


// Begin functions for text commands that do not require navigation or inventory processing.

   // Update text area displays with message or requested information only.

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

   function lookSee() {
      var playerAction = "txtCommand \"" + txtCommand.value + "\"";
      var message = "Inventory displayed at right -->";
      var multiPurposeText = lookSee;
      updateMultiPurposeTextArea (playerAction, message, multiPurposeText);
   }

   // Provide in-line help prompt when text commands are unrecognized by any other function.
   function unknownTxtCommand() {
      var playerAction = "txtCommand \"" + txtCommand.value + "\"";
      var message = "Please type \"W\", \"N\", \"S\", or \"E\"; then press [Enter] or click [Go].\nYou may also request \"Help\" to view the full list of commands available.";
      updateAllDisplays (playerAction, message);
   }

// End functions for text commands that do not require navigation or inventory processing.
