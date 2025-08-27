var soundButton = document.querySelector("#sound1Btn");
var sound1 = document.querySelector("#sound-1");

soundButton.addEventListener("click", () => {
     sound1.currentTime = 0;
     sound1.play();
});
