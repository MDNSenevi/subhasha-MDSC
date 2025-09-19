gsap.registerPlugin(Flip);

// Move this to the general logic page
const checkButton1 = document.querySelector("#check1btn");
const checkButton2 = document.querySelector("#check2btn");
let current = document.querySelector(".sound-section.active");


let isAnimating = false;

// Trasition logic - as per ChatGPT
function show(elementID) {
     if (isAnimating) return;

     const next = document.getElementById(elementID);

     if (!next || next === current) return;

     isAnimating = true;

     gsap.set(next, {
          xPercent: 100,
          opacity: 0,
          pointerEvents: 'all'
     });

     const timeline1 = gsap.timeline({
          defaults: {
               durations: 0.6, 
               ease: 'power3.inOut'
          },
          onComplete: () => {
               
               console.log(current);
               current.classList.remove('active');
               next.classList.add('active');

               gsap.set([current, next], {clearProps: 'all'});

               current = next;
               isAnimating = false;
          }
     });

     timeline1.to(current, {xPercent: -20, opacity: 0}, 0)
       .to(next, {xPercent: 0, opacity: 1}, 0);
}
