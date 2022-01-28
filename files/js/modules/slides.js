import L from './lobo.js';
import slideContents from './slideContents.js';
export default function slides(){

    

    let currentSlideIndex = 0;

    const slidesSection = document.querySelector("#slides");


    //slides
    const slidesWrapper = slidesSection.querySelector('.slides-wrapper');
  

    function getSlideContent(_content){
        return `
            <div>
                <h1>${_content.title}</h1>
                <p>${_content.content}</p>
            </div>
        `
    }



    //bullets
    const bulletsContainer = slidesSection.querySelector('.bullets');


    slideContents.forEach(_content=>{
        L.appendNode(slidesWrapper, getSlideContent(_content));
        L.appendNode(bulletsContainer, '<div></div>');
    });
    const slides = Array.from(slidesWrapper.querySelectorAll('div'));
    const bullets = Array.from(bulletsContainer.querySelectorAll('div'));


    //selecionando primeiro slide
    changeCurrentActiveSlide(0);


    for (let i = 0; i < bullets.length; i++) {
        bullets[i].addEventListener('click',()=>{
            changeCurrentActive(bullets, i);
            changeCurrentActive(slides, i);
        });
    }


    function changeCurrentActive(_array, _index){
        _array.forEach(_item=>{
            _item.classList.remove('active');
         }) 
        _array[_index].classList.add('active');
    }

    function changeCurrentActiveSlide(_i){
        currentSlideIndex = _i;
        //clamp index
        if(currentSlideIndex<0){
            currentSlideIndex=0;
        }else if (currentSlideIndex > bullets.length - 1){
            currentSlideIndex = bullets.length - 1;
        }
        changeCurrentActive(bullets, currentSlideIndex);
        changeCurrentActive(slides, currentSlideIndex);
    }


     //click nas setas
    slidesSection.querySelector('.l > i').addEventListener('click',()=>{
        changeCurrentActiveSlide(currentSlideIndex - 1);
    });
    slidesSection.querySelector('.r > i').addEventListener('click',()=>{
        changeCurrentActiveSlide(currentSlideIndex + 1);
    });



}