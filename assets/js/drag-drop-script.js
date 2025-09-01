gsap.registerPlugin(Draggable);

const targetAreaLetter = document.querySelectorAll(".letter.placeholder");
const targetAreaDiacrit = document.querySelectorAll(".diacrit.placeholder");

var draggingTile, draggingTileBounds, targetSnapPoints1;

// Draggable logic to highlight the drop targets
Draggable.create(".tile", {
     type: "x,y",
     onPress: function() {
          // check if this is a diacrit or letter &
          // highlight appropriate placeholder section
          if(this.target.classList.toString().includes("letter")) {
               targetAreaLetter.forEach(letter => {
                    letter.classList.add("highlight");
               });
          } else if (this.target.classList.toString().includes("diacrit")) {
               targetAreaDiacrit.forEach(placeholder => {
                    placeholder.classList.add("highlight");
               });
          }
     },
     onDrag: function() {
          // check if this is a diacrit or letter
          // highlight appropriate placeholder section (if needed)
     },
     onRelease: function() {
          // check how close the dragging tile is to the placeholder
          // snap into the placeholder if close

          // remove highlight on appropriate placeholder
          if(this.target.classList.toString().includes("letter")) {
              targetAreaLetter.forEach(letter => {
                    letter.classList.remove("highlight");
               });
          } else if (this.target.classList.toString().includes("diacrit")) {
               targetAreaDiacrit.forEach(placeholder => {
                    placeholder.classList.remove("highlight");
               });
          }
     }
});