
// OBJECT CODE

class Tile {
     constructor(type, character, matchingDropTarget, currentPosition = null, htmlElem = null) {
          this.type = type;
          this.character = character;
          this.matchingDropTarget = matchingDropTarget;
          this.currentPosition = currentPosition;
          this.htmlElem = htmlElem;
     }

     removeAnim() {
          // Add animation to remove tile from gameboard here
     }

     addAnim() {
          // Add animation to add to tray
     }
}

// Might not need this
class TilePlaceholder {
     constructor(type, location, dropTarget, acceptedTile = null, placedTile = null) {
          this.type = type,
          this.location = location;
          this.dropTarget = dropTarget;
          this.acceptedTile = acceptedTile;
          this.placedTile = placedTile;
     }

     checkCorrect() {
          return Object.is(this.acceptedTile, this.placedTile);
     }
}


// SETTING UP THE TILES

var soundTileSet = [], tile, dropTargets = [];

// Collect relevant HTML objects

const sound1TT = document.querySelector("#sound1-tray");
const letterP = document.querySelector(".letter.placeholder");
const diacritT = document.querySelector(".diacrit.placeholder.top");
const diacritR = document.querySelector(".diacrit.placeholder.right");
const diacritB = document.querySelector(".diacrit.placeholder.bottom");
const diacritL = document.querySelector(".diacrit.placeholder.left");

// create the droptargets objects
dropTargets[0] = new TilePlaceholder('letter', 'center', letterP);
dropTargets[1] = new TilePlaceholder('letter', 'top', diacritT);
dropTargets[2] = new TilePlaceholder('letter', 'right', diacritR);
dropTargets[3] = new TilePlaceholder('letter', 'bottom', diacritB);
dropTargets[4] = new TilePlaceholder('letter', 'left', diacritL);

//  create the tiles for screen 1
soundTileSet[0] = new Tile('letter', 'l', letterP);
soundTileSet[1] = new Tile('diacrit', 'q', diacritB);
soundTileSet[2] = new Tile('diacrit', 'd', diacritR);
soundTileSet[3] = new Tile('letter', 'o', letterP);
soundTileSet[4] = new Tile('diacrit', 'a', diacritT);
soundTileSet[5] = new Tile('diacrit', 'f', diacritL);

// setup the accepted tiles for relevant placeholder
dropTargets[0].acceptedTile = soundTileSet[0];
dropTargets[4].acceptedTile = soundTileSet[5];
dropTargets[2].acceptedTile = soundTileSet[2];


// Adding the tiles to the tray
for (let i = 0; i < soundTileSet.length; i++) {
     // assign html element to a tile class
     tile = document.createElement("div");
     tile.classList.add(`tile`);
     tile.classList.add(`${soundTileSet[i].type}`);
     tile.dataset.tileIndex = i;
     tile.innerHTML = soundTileSet[i].character;

     soundTileSet[i].htmlElem = tile;
     
     sound1TT.appendChild(tile);
}


// Update the data-set in the placeholder
for(let i = 0; i < dropTargets.length; i++) {
     // console.log(i);
     // console.log(dropTargets[i].dropTarget.dataset.dropIndex);
     dropTargets[i].dropTarget.dataset.dropIndex = i;
}