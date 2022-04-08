var btn_prev = document.querySelector('.buttons .prev');
var btn_next = document.querySelector('.buttons .next');
let photo = document.querySelector('.slider-track')
let item = document.querySelector('#image')
let itemIndex = 0;
var i = 0;
let left = 200;
let slider = document.querySelector('.slider')
let dots = document.querySelectorAll(".dot")
let dotIndex = 0;

function resize() {
    slider.style.width = `${document.body.clientWidth}px` 
    transform()
}

function transform(){
    photo.style.transition = `transform .5s`
    photo.style.transform = `translate3d(-${item.clientWidth * itemIndex}px, 0px, 0px)`;
}

btn_prev.onclick = function(){
    btn_next.classList.remove('hidden')
    itemIndex--
    if(itemIndex == 0){
        btn_prev.classList.add('hidden');
    }
    thisDotIndex = itemIndex
    transform()
    dots.forEach((dot)=>dot.classList.remove('active'));
    dots[thisDotIndex].classList.add("active")
 }

btn_next.onclick = function(){
    btn_prev.classList.remove('hidden')
    itemIndex++
    if(itemIndex>=3){
        btn_next.classList.add('hidden')

    }
    thisDotIndex = itemIndex;
    transform()
    dots.forEach((dot)=>dot.classList.remove('active'));
    dots[thisDotIndex].classList.add("active")
 }

dots.forEach((elem)=>{
    let thisDotIndex = dotIndex;
    dotIndex++
    elem.addEventListener("click", function(){
        transform()
        itemIndex = thisDotIndex;
        dots.forEach((dot)=>dot.classList.remove('active'));
        dots[thisDotIndex].classList.add("active")
        if(thisDotIndex == 0){
            btn_prev.classList.add('hidden')
        } 
        else if(thisDotIndex == 3){
            btn_next.classList.add('hidden')
        } else{
            btn_next.classList.remove('hidden')
            btn_prev.classList.remove('hidden')
        }
    })
})

resize()
window.onresize = resize;