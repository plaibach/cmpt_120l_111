// BIG Ideas!
// Inventory: list of items in rucksack.
// Inventory: list of items in current location.

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
   //      txtCommand.placeholder = "Yo. Yur shootin' blanks... ya'll gotta type sumptin'!";
   //      document.getElementById("btnTxtCommand").disabled = true;
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
         default: specialTxtCommand();
      }
   }

   // Check txtCommand for substrings "rub" and "lotion"
   // Pass control to escape from the Abyss function.
   function specialTxtCommand() {
      if (currentLoc === "Room4") {
         var playerAction = "txtCommand \"" + txtCommand.value + "\"";
            if ((txtCommand.value.search(/rub/i) !== -1) && (txtCommand.value.search(/lotion/i) !== -1)){
               escapedAbyss(playerAction);
            }  else {
                  unknownTxtCommand();
               }
      }  else {
            unknownTxtCommand();
         }
   }

   // Provide help when text commands are unrecognized by any other function.
   // Bypass navigation processing and proceed to update displays.
   function unknownTxtCommand() {
      var playerAction = "txtCommand \"" + txtCommand.value + "\"";
      var message = "Please enter \"W\", \"N\", \"S\", or \"E\"; then press Enter or click \'Go\"\n(You may use UPPER or lower case letters.)";
      updateAllDisplays (playerAction, message);
   }

//
// END OF TEXT COMMAND PROCESSING
//

//
// BEGINNING OF SEQUENTIAL NAVIGATION PROCESSING
//

   function attemptGoWest(playerAction) {
      // Begin conditionals for function attemptGoWest
      if (currentLoc === "Room1") {
         var message = "Erm... sorry. No place to go in that direction.";
      }  else {
            if (currentLoc === "Room2") {
               var message = "You have entered Room5, the Annex.";
               currentLoc = "Room5";
               if (hasVisitedRoom5 === false) {
                  totalScore = totalScore + 5;
               }
               hasVisitedRoom5 = true;
            }  else {
                  if (currentLoc === "Room3") {
                     var message = "Erm... sorry. No place to go in that direction.";
                  }  else {
                        if (currentLoc === "Room4") {
                           var message = "It rubs the lotion on its skin or else it gets the hose again.";
                        }  else {
                              if (currentLoc === "Room5") {
                                 var message = "Erm... sorry. No place to go in that direction.";
                              }
                           }
                     }
               }
         }
      updateAllDisplays (playerAction, message);
   }

   function attemptGoNorth(playerAction) {
      // Begin conditionals for function attemptGoNorth
      if (currentLoc === "Room1") {
         var message = "You have entered Room2.";
         currentLoc = "Room2";
         if (hasVisitedRoom2 === false) {
            totalScore = totalScore + 5;
         }
         hasVisitedRoom2 = true;
      }  else {
            if (currentLoc === "Room2") {
               var message = "You have entered Room3.";
               currentLoc = "Room3";
               if (hasVisitedRoom3 === false) {
                  totalScore = totalScore + 5;
               }
               hasVisitedRoom3 = true;
            }  else {
                  if (currentLoc === "Room3") {
                     var message = "You have fallen a long distance down into Room4. Welcome to THE ABYSS! There is no way out :-O (Or... is there?)";
                     currentLoc = "Room4";
                     if (hasVisitedRoom4 === false) {
                        totalScore = totalScore + 5;
                     }
                     hasVisitedRoom4 = true;
                  }  else {
                        if (currentLoc === "Room4") {
                           var message = "It rubs the lotion on its skin or else it gets the hose again.";
                        }  else {
                              if (currentLoc === "Room5") {
                                 var message = "Erm... sorry. No place to go in that direction.";
                              }
                           }
                     }
               }
         }
      updateAllDisplays (playerAction, message);
   }

   function attemptGoSouth(playerAction) {
      // Begin conditionals for function attemptGoSouth
      if (currentLoc === "Room1") {
         var message = "Sorry, the door locked behind you when you stepped in. There is a keyhole, but you don't have any keys.";
      }  else {
            if (currentLoc === "Room2") {
               var message = "You have returned to Room1. This isn't getting you anywhere.";
               currentLoc = "Room1";
            }  else {
                  if (currentLoc === "Room3") {
                     var message = "You have returned to Room2. Boring.";
                     currentLoc = "Room2";
                     // In basic sequential (walking) navigation, the totalScore update logic, and hasVisitedRoom# update are not necessary. However, let's leave this code in place, to accomodate implementation of navigation by teleportation, hyperspace, or wormhole.
                     if (hasVisitedRoom2 === false) {
                        totalScore = totalScore + 5;
                     }
                     hasVisitedRoom2 = true;
                  }  else {
                        if (currentLoc === "Room4") {
                           var message = "It rubs the lotion on its skin or else it gets the hose again.";
                        }  else {
                              if (currentLoc === "Room5") {
                                 var message = "Erm... sorry. No place to go in that direction.";
                              }
                           }
                     }
               }
         }
      updateAllDisplays (playerAction, message);
   }

   function attemptGoEast(playerAction) {
      // Begin conditionals for function attemptGoEast
      if (currentLoc === "Room1") {
         var message = "Erm... sorry. No place to go in that direction.";
      }  else {
            if (currentLoc === "Room2") {
               var message = "Erm... sorry. No place to go in that direction.";
            }  else {
                  if (currentLoc === "Room3") {
                     var message = "Erm... sorry. No place to go in that direction.";
                  }  else {
                        if (currentLoc === "Room4") {
                           var message = "It rubs the lotion on its skin or else it gets the hose again.";
                        }  else {
                              if (currentLoc === "Room5") {
                                 var message = "Back in Room2 again. Look at your life. Think about your choices.";
                                 currentLoc = "Room2";
                                 // In basic sequential (walking) navigation, the totalScore update logic, and hasVisitedRoom# update are not necessary. However, let's leave this code in place, to accomodate implementation of navigation by teleportation, hyperspace, or wormhole.
                                 if (hasVisitedRoom2 === false) {
                                    totalScore = totalScore + 5;
                                 }
                                 hasVisitedRoom2 = true;
                              }
                           }
                     }
               }
         }
      updateAllDisplays (playerAction, message);
   }

//
// END OF SEQUENTIAL NAVIGATION PROCESSING
//

//
// BEGINNING OF ARBITRARY NAVIGATION PROCESSING
//

   // This is left over from the guessing exercise, and may be utilized a bit later on.
   // function mustGuess(playerAction) {
   //    var secretNumber = 7;
   //    var stillGuessing = true;
   //    var guessedNumber = prompt("Guess a freakin' number.") ;
   //    guessedNumber = parseInt(guessedNumber);
   //    alert (guessedNumber);
   // }

   // This is where we end up after "rub and "lotion" are parsed while in Room4, the Abyss.
   function escapedAbyss(playerAction) {
      var message = "The scent of the lotion overwhelms you. You fight to hold on to consciousness, but become dizzy and confused. It seems you are tumbling through space; through a blurred jumble of doors and passages.\n\nYour flight halts abruptly and you find yourself suspended and spinning slowly in a room with glowing walls and ceiling. There is no floor below, just a shaft leading downward and away out of sight.\n\nThere is a bright flash and you are released to fall painfully into the chute, tumbling and landing in a heap. Congratulations! You have successfully employed the portal - you escaped the pit, traversed Room 6 and the chute, and made it to the Annex.";
      currentLoc = "Room5";
      if (hasVisitedRoom6 === false) {
         totalScore = totalScore + 5;
      }
      if (hasVisitedRoom5 === false) {
         totalScore = totalScore + 5;
      }
      hasVisitedRoom6 = true;
      hasVisitedRoom5 = true;
      updateAllDisplays (playerAction, message);
   }

//
// END OF ARBITRARY NAVIGATION PROCESSING
//

//
// BEGINNING OF DOCUMENT ELEMENT UPDATES
//

   // Initialize function initializeOnLoad called from the html <body> tag onload event.
      function initializeOnLoad() {
         // Create initial instances of inventory class/prototype items.
         var flannelPajamas = new inventoryItem();
            flannelPajamas.itemName = "Flannel Pajamas";
            flannelPajamas.itemLocation = "Room0";
            flannelPajamas.itemWeight = 5;
            flannelPajamas.itemVolume = 5;
         var wrench = new inventoryItem();
            wrench.itemName = "Wrench";
            wrench.itemLocation = "Room1";
            wrench.itemWeight = 15;
            wrench.itemVolume = 8;
         var goldfingerDvd = new inventoryItem();
            goldfingerDvd.itemName = "Goldfinger DVD";
            goldfingerDvd.itemLocation = "Room2";
            goldfingerDvd.itemWeight = 3;
            goldfingerDvd.itemVolume = 3;
         var yogaPants = new inventoryItem();
            yogaPants.itemName = "Yoga Pants";
            yogaPants.itemLocation = "Room3";
            yogaPants.itemWeight = 5;
            yogaPants.itemVolume = 5;
         var dodgeballBall = new inventoryItem();
            dodgeballBall.itemName = "Dodgeball Ball";
            dodgeballBall.itemLocation = "Room4";
            dodgeballBall.itemWeight = 10;
            dodgeballBall.itemVolume = 30;
         var dogBiscuit = new inventoryItem();
            dogBiscuit.itemName = "Dog Biscuit";
            dogBiscuit.itemLocation = "Room5";
            dogBiscuit.itemWeight = 3;
            dogBiscuit.itemVolume = 3;
         // Set initial display variables and document elements' state.
         var playerAction = "Refresh";
         var message = "You have just entered an unmarked door at the south end of a nondescript building. The door swings gently shut behind you and latches with a slight, yet somehow ominous \"click.\"";
         updateStatusTextArea();
         updateHistoryTextArea(playerAction, message);
         updateInventoryTextArea();
         focusOnTxtCommand();
         setBtnState();
      }

   // Package all functions required to update document elements, passing along local variables for use as necessary.
   function updateAllDisplays(playerAction, message) {
      updateStatusTextArea();
      updateHistoryTextArea(playerAction, message);
      updateInventoryTextArea();
      clearTxtCommand();
      resetTxtCommandPlaceHolder();
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

      // Display contents of rucksack in inventory textarea.
      function updateInventoryTextArea(rucksackCount, rucksackContents) {
         var inventoryTextArea = document.getElementById("taInventory");
         if (rucksackCount !== "0") {
            inventoryTextArea.value = "Inventory: Your Rucksack is empty.";
         }  else {
               inventoryTextArea.value = "Your Rucksack is NOT empty.";
            }

      }

      // Since we are here, user text command input has either been evaluated and utilized, or discarded (and possibly dirty), so reset field to blank.
      function clearTxtCommand() {
         txtCommand.value = "";
      }
 
      // Since we are here, some form of valid button or user text command input has been processed, so reset any special placeholders.
      function resetTxtCommandPlaceHolder() {
         txtCommand.placeholder="Click direction above -or- Enter text command here";
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
