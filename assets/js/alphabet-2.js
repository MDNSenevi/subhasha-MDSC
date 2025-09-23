/*--- GLOBAL PLUGIN(S) ---*/
gsap.registerPlugin(Draggable);

/*--- CLASS / OBJECTS ---*/

class Tile {
     constructor(type, character, matchingDropTarget, currentPosition = null, htmlElem = null) {
          this.type = type; // Whether it's a diacrit or letter tile
          this.character = character; // Keyboard letter associated with the sinhala character - necessary for font representation
          this.matchingDropTarget = matchingDropTarget; // Which drop target this tile can be placed in
          this.currentPosition = currentPosition; // Current position of the tile - used to hittest
          this.htmlElem = htmlElem; // HTML element associated with the tile - used for animations
     }

     removeAnim() {
          // Add animation to remove tile from gameboard here
     }

     addAnim() {
          // Add animation to add to tray
     }
}

class TilePlaceholder {
     constructor(type, location, dropTarget, acceptedTile = null, placedTile = null) {
          this.type = type, // Whether it's a diacrit or letter placeholder
          this.location = location; // Where it's placed relative to other placeholders
          this.dropTarget = dropTarget; // HTML element associated with the placeholder
          this.acceptedTile = acceptedTile; // Accepted tile for the placeholder - used to check correct
          this.placedTile = placedTile; // Currently placed tile for the placeholder - used to check correct
     }

     // Checks if the placed tile is the accepted tile
     checkCorrect() {
          return Object.is(this.acceptedTile, this.placedTile);
     }
}


/*--- PAGE VARIABLES ---*/

// Setting up the tiles

var soundTileSet = [], tile, dropTargets = [], draggableTiles = [];

// Collect relevant HTML objects
const soundTT = document.querySelector("#sound-tray");
const letterP = document.querySelector(".letter.placeholder");
const diacritT = document.querySelector(".diacrit.placeholder.top");
const diacritR = document.querySelector(".diacrit.placeholder.right");
const diacritB = document.querySelector(".diacrit.placeholder.bottom");
const diacritL = document.querySelector(".diacrit.placeholder.left");

const checkButton = document.querySelector("#checkBtn");
const soundButton = document.querySelector("#soundBtn");
const sound = document.querySelector("#sound");

/*--- PAGE FUNCTIONS ---*/

// From ChatGPT
function initDraggables() {
    // Kill old tiles if they exist
    draggableTiles.forEach(t => t.kill());
    draggableTiles = [];

    // Recreate the draggables for all tiles
    draggableTiles = Draggable.create(".tile", {
        type: "x,y",
        onPress: function() {
            // check if this is a diacrit or letter &
            // highlight appropriate placeholder section
            var dropTA = soundTileSet[this.target.dataset.tileIndex].matchingDropTarget;
            dropTA.classList.add("highlight");
        },
        onDrag: function() {
            // check if this is a diacrit or letter
            // highlight appropriate placeholder section (if needed)
        },
        onRelease: function() {
            // check how close the dragging tile is to the placeholder
            // snap into the placeholder if close (later)

            // remove highlight on appropriate placeholder
            var dropTA = soundTileSet[this.target.dataset.tileIndex].matchingDropTarget;
            dropTA.classList.remove("highlight");

            // console.log(dropTA.dataset.dropIndex);
            dropTargets[dropTA.dataset.dropIndex].placedTile = soundTileSet[this.target.dataset.tileIndex];

            // console.log(sound1TileSet[this.target.dataset.tileIndex]);
        }
    });
}

function initPage() {

    // Create the drop target objects
    dropTargets[0] = new TilePlaceholder('letter', 'center', letterP);
    dropTargets[1] = new TilePlaceholder('letter', 'top', diacritT);
    dropTargets[2] = new TilePlaceholder('letter', 'right', diacritR);
    dropTargets[3] = new TilePlaceholder('letter', 'bottom', diacritB);
    dropTargets[4] = new TilePlaceholder('letter', 'left', diacritL);

    // Create the tile objects
    soundTileSet[0] = new Tile('letter', 'o', letterP);
    soundTileSet[1] = new Tile('diacrit', 'q', diacritB);
    soundTileSet[2] = new Tile('diacrit', 'd', diacritR);
    soundTileSet[3] = new Tile('letter', 'l', letterP);
    soundTileSet[4] = new Tile('diacrit', 'a', diacritT);
    soundTileSet[5] = new Tile('diacrit', 'f', diacritL);

    // setup the accepted tiles for relevant placeholder
    dropTargets[0].acceptedTile = soundTileSet[0];
    dropTargets[4].acceptedTile = soundTileSet[5];

    // Create the HTML tiles and append to DOM
    for (let i = 0; i < soundTileSet.length; i++) {
        // assign html element to a tile class
        tile = document.createElement("div");
        tile.classList.add(`tile`);
        tile.classList.add(`${soundTileSet[i].type}`);
        tile.dataset.tileIndex = i;
        tile.innerHTML = soundTileSet[i].character;

        soundTileSet[i].htmlElem = tile;
        
        soundTT.appendChild(tile);
    }

    // Update the data-set in the placeholder to help with highlighting during dragging
    for(let i = 0; i < dropTargets.length; i++) {
        dropTargets[i].dropTarget.dataset.dropIndex = i;
    }

    initDraggables();

    soundButton.addEventListener("click", () => {
        sound.currentTime = 0;
        sound.play();
    });

    checkButton.addEventListener("click", e => {
        e.preventDefault();
        if (dropTargets[0].checkCorrect() && dropTargets[4].checkCorrect()) {
            alert("Got it right!");
            // resetGameboard(2);

            window.location.assign("/alphabet-3.html");

        } else {
            alert("Try again!");
        }
    });

}

/*--- INITIALISE PAGE ---*/

initPage();

/*--- RESET PAGE ---*/
