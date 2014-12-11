// Paul C. Laibach
   // Introduction to Programming
   // Final Project - Game v1.0
   // Due 2014.12.11

      // Functions available and required parameters:

         // updateMultiPurposeTextArea(playerAction, message, multiPurposeText)
         // updateAllDisplays(playerAction, message)

            // (...playerAction...)     function invoked and raw player command that invoked function  Appended taHistory
            // (...message ...)         responses from game logic                                      Appended to taHistory
            // (...multiPurposeText...) temporary text to be displayed separate from gameplay          Displays in taMultiPurpose

         // Use of the updateAllDisplays function clears any prior multiPurposeText

//
// BEGINNING OF DOCUMENT ELEMENT UPDATES
//

// Initialize function initializeOnLoad called only from the html <body> tag onload event.
function initializeOnLoad() {
   // Indicate "Refresh" upon onload. This will be the playerAction displayed when first landing at page or upon subsequent refresh.
   var playerAction = "Refresh";
   // Set initial display history text variable
   var message = "You have just entered an unmarked door at the south end of a nondescript building. The door swings gently shut behind you and latches with a slight, yet somehow ominous \"click.\"";
   updateCoreDisplays(playerAction, message);
   // document elements' state.
   // document.getElementById("btnTxtCommand").disabled = true;
}

// Display "Help" or "useful" or any other temporary text we don't want to include in taHistory or taStatus.
function updateMultiPurposeTextArea(playerAction, message, multiPurposeText) {
   var multiPurposeTextArea = document.getElementById("taMultiPurpose");
   multiPurposeTextArea.value = multiPurposeText;
   updateCoreDisplays(playerAction, message);
}

// Begin functions required to update document elements, passing along local variables for use as necessary.
function updateAllDisplays(playerAction, message) {
   clearMultiPurposeTextArea();
   updateCoreDisplays(playerAction, message);
}

// Clear out the multiPurposeTextArea when processing any subsequent input.
function clearMultiPurposeTextArea() {
   var multiPurposeTextArea = document.getElementById("taMultiPurpose");
   multiPurposeTextArea.value = "";
}

// Package functions to follow initializeOnLoad, updateMultiPurposeTextArea, and updateAllDisplays functions.
function updateCoreDisplays(playerAction, message) {
   updateHistoryTextArea(playerAction, message);
   updateStatusTextArea();
   clearTxtCommand();
   resetTxtCommandPlaceHolder();
   focusOnTxtCommand();
   setBtnState();
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

   // Display current score and location in status textarea.
   function updateStatusTextArea() {
      var statusTextArea = document.getElementById("taStatus");
      statusTextArea.value = "Score: " + totalScore + "\n" + "Current Location: " + currentLoc;
   }

   // Since we are here, user text command input has either been evaluated and utilized, or discarded (and possibly dirty), so reset field to blank.
   function clearTxtCommand() {
      txtCommand.value = "";
   }

   // Since we are here, some form of valid button or user text command input has been processed, so reset any special placeholders.
   function resetTxtCommandPlaceHolder() {
      txtCommand.placeholder="Type a command or \"Help\" then press [Enter].";
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
