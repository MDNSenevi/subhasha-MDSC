gsap.registerPlugin(Draggable);

// Draggable logic to highlight the drop targets
Draggable.create(".tile", {
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