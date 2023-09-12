const move_image = document.querySelector("#img");

let x = 0;
let y = 0;


function moveimage(xmove, ymove){
   x = x + xmove;
   y = y + ymove;
   move_image.style.transform = `translate(${x}px, ${y}px)`;
   move_image.style.transition = "transform 2s";

}

document.addEventListener("keyup", (Event) => {
    document.querySelector("span").innerText = Event.key;
    // console.log(Event.key);
    if(Event.key === "ArrowUp") {
        moveimage(0, -30)
    }
    else if(Event.key === "ArrowDown") {
        moveimage(0, 30)
    }
    else if(Event.key === "ArrowLeft") {
        moveimage(-30, 0)
    }
    else if (Event.key === "ArrowRight") {
        moveimage(30, 0)
    }
});