checkButton1.addEventListener("click", e => {
     e.preventDefault();
     if (dropTargets[0].checkCorrect() && dropTargets[4].checkCorrect() && dropTargets[2].checkCorrect()) {
          alert("Got it right!");
          // resetGameboard(2);

          window.location.assign("/alphabet-2.html");

     } else {
          alert("Try again!");
     }


});

// checkButton2.addEventListener("click", e => {
//      e.preventDefault();
//      if (dropTargets[0].checkCorrect() && dropTargets[4].checkCorrect() && dropTargets[2].checkCorrect()) {
//           alert("Got it right!");
//           // resetGameboard(2);

//           window.location.assign("/alphabet-2.html");

//      } else {
//           alert("Try again!");
//      }


// });