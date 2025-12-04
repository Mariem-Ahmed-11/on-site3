const offers = document.getElementById("offers-items");
const prev = document.getElementById("prev");
const next = document.getElementById("next");
let index = 0 ;
function slide(o){
    const total = offers.children.length;
    index = (index + o + total )% total;
    offers.style.transform = `translate(-${index*100}%)`;
    offers.style.transition = `all 1.5s`;
}
next.onclick  = () => slide(1);
prev.onclick  = () => slide(-1);
setInterval(()=>slide(1),5000);

