gsap.registerPlugin(Flip);

const checkButton1 = document.querySelector("#check-1-btn");
const checkButton2 = document.querySelector("#check-2-btn");
let current = document.querySelector(".sound-section.active");
console.log(current);

let isAnimating = false;

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

checkButton1.addEventListener("click", e => {
     e.preventDefault();
     show(checkButton1.dataset.goto);
});

checkButton2.addEventListener("click", e => {
     e.preventDefault();
     show(checkButton2.dataset.goto);
});

