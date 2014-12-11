// Paul C. Laibach
   // Introduction to Programming
   // Final Project - Game v1.0
   // Due 2014.12.11

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

   function takeItem() {
      var playerAction = "txtCommand \"" + txtCommand.value + "\"";
      var message = "takeItem message";
      var multiPurposeText = "takeItem multiPurposeText";
      updateMultiPurposeTextArea (playerAction, message, multiPurposeText);
   }

   function dropItem() {
      var playerAction = "txtCommand \"" + txtCommand.value + "\"";
      var message = "Ehhh... You better hang on to that.";
      var multiPurposeText = "dropItem multiPurposeText";
      updateMultiPurposeTextArea (playerAction, message, multiPurposeText);
   }

   function findItem() {
      var playerAction = "txtCommand \"" + txtCommand.value + "\"";
      var message = "Find it yourself, bitch.";
      var multiPurposeText = "findItem multiPurposeText";
      updateMultiPurposeTextArea (playerAction, message, multiPurposeText);
   }
