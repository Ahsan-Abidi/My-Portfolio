const image =
document.querySelector(".profile-pic");

if(window.innerWidth > 768){
   // tracking code
}
(e)=>{

    if(!image) return;

    const x =
    (window.innerWidth/2 - e.pageX)
    / 35;

    const y =
    (window.innerHeight/2 - e.pageY)
    / 35;

    image.style.transform =
    `rotateY(${-x}deg)
     rotateX(${y}deg)`;

};