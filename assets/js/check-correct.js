checkButton1.addEventListener("click", e => {
     e.preventDefault();
     // show(checkButton1.dataset.goto);

//      dropTargets[0].acceptedTile = sound1TileSet[0];
// dropTargets[4].acceptedTile = sound1TileSet[5];
// dropTargets[2].acceptedTile = sound1TileSet[2];
     if (dropTargets[0].checkCorrect() && dropTargets[4].checkCorrect() && dropTargets[2].checkCorrect()) {
          alert("Got it right!");
     } else {
          alert("Try again!");
     }


});

checkButton2.addEventListener("click", e => {
     e.preventDefault();
     // show(checkButton2.dataset.goto);
});