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
          // highlight appropriate placeholder section
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


/* RANDOM TEST STUFF */

/* function(point) {
               var dx = point.x - 50;
               var dy = point.y - 50;

               console.log(`this.x, this.y: ${this.x, this.y}; point.x, point.y: ${point.x, point.y}`);
               if (Math.sqrt(dx * dx + dy * dy) < 100) {
               return { x: 50, y: 25 };
               }
               return point; //otherwise don't change anything.

               // var target = document.querySelector(".placearea");
               // var targetBounds = target.getBoundingClientRect();
               // console.log(targetBounds.top, targetBounds.right, targetBounds.bottom, targetBounds.left);

               // var points = [];

               // points.push({x:targetBounds.left, y:targetBounds.top});
               // points.push({x:targetBounds.right, y:targetBounds.top});
               // points.push({x:targetBounds.left, y:targetBounds.bottom});
               // points.push({x:targetBounds.left, y:targetBounds.bottom});



               // return points;


Draggable.create(".tile", {
     type: "x,y",
     // bounds: ".playarea",
     snap: targetSnapPoints1,
     onPress: function() {
          draggingTile = this.target;
          draggingTileBounds = draggingTile.getBoundingClientRect();

          targetSnapPoints1 =[
               {x: (targetBounds.left-draggingTileBounds.left), y: (targetBounds.top-draggingTileBounds.top)},
               {x: (targetBounds.right-draggingTileBounds.right), y: (targetBounds.top - draggingTileBounds.top)},
               {x: (targetBounds.left-draggingTileBounds.left), y: (targetBounds.bottom-draggingTileBounds.bottom)},
               {x: (targetBounds.right-draggingTileBounds.right), y: (targetBounds.bottom - draggingTileBounds.bottom)},
          ];

          console.log(`targetBounds.left: ${targetBounds.left}, draggingTileBounds.left: ${draggingTileBounds.left}, targetBounds.right: ${targetBounds.right}, draggingTileBounds.right: ${draggingTileBounds.right}, targetBounds.top: ${targetBounds.top}, draggingTileBounds.top: ${draggingTileBounds.top}, targetBounds.bottom: ${targetBounds.bottom}, draggingTileBounds.bottom: ${draggingTileBounds.bottom}`);

          console.log(targetSnapPoints1);

     },
     liveSnap: {
          points: () => {
               var middleXTA = targetBounds.left + (targetArea.clientWidth / 2);
               var middleYTA = targetBounds.top + (targetArea.clientHeight / 2);

               var middleXT = draggingTileBounds.left + (draggingTile.clientWidth/2);
               var middleYT = draggingTileBounds.top + (draggingTile.clientHeight/2);

               middleXTA =  ((middleXTA - middleXT) < 0 ) ? -middleXTA : middleXTA; 
               middleYTA =  ((middleYTA - middleYT) < 0 ) ? -middleYTA : middleYTA;

               return {x: middleXTA, y: middleYTA}
          }, 

          // points: targetSnapPoints1,
          // points: [
          //      {x: 300, y: 100}
          // ],
          // points: () => targetSnapPoints1,
          // points: () => {
          // //     console.log(draggingTile);
          //      var maxX = targetArea.clientWidth - draggingTile.offsetWidth;
          //      var maxY = targetArea.clientHeight - draggingTile.offsetHeight;
          //       console.log(targetBounds.top, targetBounds.right, targetBounds.bottom, targetBounds.left);



          //      // console.log(`maxX: ${maxX}, maxY: ${maxY}, ${draggingTile.offsetWidth}`);


          //      // var targetSnapPoints = [
          //      //      {x: maxX , y:0},
          //      //      {x: 0 , y:maxY},
          //      //      {x: maxX , y:maxY}
          //      // ];

          //      // return targetSnapPoints;
          //      console.log(`targetSnapPoints1: ${targetSnapPoints1[0].x}`);
          //      // return targetSnapPoints1;
          //      return [{x: 593, y: -144}, {x: 600, y: -150}];
          // },

          radius: 15
     },
     onDrag: function() {
          var p = {x: this.x, y: this.y};
          // console.log(`dragging -> ${this.x}, ${this.y}`);
     },
     onRelease: function() {
          console.log(`dropped -> ${this.x}, ${this.y}`);

          console.log(`targetBounds.left: ${targetBounds.left}, draggingTileBounds.left: ${draggingTileBounds.left}, targetBounds.right: ${targetBounds.right}, draggingTileBounds.right: ${draggingTileBounds.right}, targetBounds.top: ${targetBounds.top}, draggingTileBounds.top: ${draggingTileBounds.top}, targetBounds.bottom: ${targetBounds.bottom}, draggingTileBounds.bottom: ${draggingTileBounds.bottom}`);

          var middleXTA = targetBounds.left + (targetArea.clientWidth / 2);
          var middleYTA = targetBounds.top + (targetArea.clientHeight / 2);

          var middleXT = draggingTileBounds.left + (draggingTile.clientWidth/2);
          var middleYT = draggingTileBounds.top + (draggingTile.clientHeight/2);

          middleXTA =  ((middleXTA - middleXT) < 0 ) ? -middleXTA : middleXTA; 
          middleYTA =  ((middleYTA - middleYT) < 0 ) ? -middleYTA : middleYTA; 



          console.log(`targetArea middle point: x: ${middleXTA}, y: ${middleYTA}`);
     }
});
*/