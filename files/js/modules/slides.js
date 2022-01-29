import L from './lobo.js';
import {slideContents} from './slideContents.js';
import getSlideContent from './getSlideContent.js';
import {currentSlideIndex, changeCurrentActiveSlide} from './slideChanger.js';


export default function slides(){
    const slidesSection = document.querySelector("#slides");
    //slides
    const slidesWrapper = slidesSection.querySelector('.slides-wrapper');
    //bullets
    const bulletsContainer = slidesSection.querySelector('.bullets');

    slideContents.forEach(_content=>{
        L.appendNode(slidesWrapper, getSlideContent(_content));
        L.appendNode(bulletsContainer, '<div></div>');
    });
    const slides = Array.from(slidesWrapper.querySelectorAll('div'));
    const bullets = Array.from(bulletsContainer.querySelectorAll('div'));

    //selecionando primeiro slide
    changeCurrentActiveSlide(0, slides, bullets);

    //click nas bullets
    for (let i = 0; i < bullets.length; i++) {
        bullets[i].addEventListener('click',()=>{
            changeCurrentActiveSlide(i, slides, bullets);
        });
    }

    //click nas setas
    slidesSection.querySelector('.l > i').addEventListener('click',()=>{
        changeCurrentActiveSlide(currentSlideIndex - 1, slides, bullets);
    });
    slidesSection.querySelector('.r > i').addEventListener('click',()=>{
        changeCurrentActiveSlide(currentSlideIndex + 1, slides, bullets);
    });

}