const allStars = document.querySelectorAll('.star');
const currentStarRating  = document.querySelector('.currentStarRating');

for(let i=0;i<allStars.length;i++){
    allStars[i].starRating = i+1;
    allStars[i].addEventListener('click',eventHandler);
    allStars[i].addEventListener('mouseover',eventHandler);
    allStars[i].addEventListener('mouseout',eventHandler);

}

function eventHandler(event){
   let starRating= event.target.starRating;
    allStars.forEach((star,index) =>{
        if(event.type==='click'){
            if(index<starRating){
                star.classList.add('yellow');
            }
            else{
                star.classList.remove('yellow');
            }
        }
        if(event.type==='mouseover'){
            if(index<starRating){
                star.classList.add('paleYellow');
            }
            else{
                star.classList.remove('paleYellow');
            }
        }
        if(event.type==='mouseout'){
            star.classList.remove('paleYellow');
        }
        if(event.type==='click'){
            currentStarRating.innerHTML=`You rated ${starRating} out of 5`;
        }
    })
    
}