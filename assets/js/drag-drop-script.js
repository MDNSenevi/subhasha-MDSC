gsap.registerPlugin(Draggable);

var targetAreaLetter = document.querySelector(".letter.placeholder");
var targetAreaDiacrit = document.querySelectorAll(".diacrit.placeholder");
var targetBounds = targetAreaLetter.getBoundingClientRect();

var targetPoints1 = [];

targetPoints1.push({x:targetBounds.left, y:targetBounds.top});
targetPoints1.push({x:targetBounds.right, y:targetBounds.top});
targetPoints1.push({x:targetBounds.left, y:targetBounds.bottom});
targetPoints1.push({x:targetBounds.right, y:targetBounds.bottom});

var draggingTile, draggingTileBounds, targetSnapPoints1;

console.log(targetPoints1);


Draggable.create(".tile", {
     type: "x,y",
     onPress: function() {
          // check if this is a diacrit or letter &
          // highlight appropriate placeholder section
          if(this.target.classList.toString().includes("letter")) {
               targetAreaLetter.classList.add("highlight");
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
               console.log("true");
               targetAreaLetter.classList.remove("highlight");
          } else if (this.target.classList.toString().includes("diacrit")) {
               targetAreaDiacrit.forEach(placeholder => {
                    placeholder.classList.remove("highlight");
               });
          }
     }
});