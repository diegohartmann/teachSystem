import L from './lobo.js';
export default function slides(){

    class slideContent{
        constructor(_title, _content){
            this.title = _title;
            this.content = _content;
        }
    }
    const slideContents=[
        new slideContent('Conteudo 1', 'kkk mama minha rola'),
        new slideContent('Conteudo 2', 'oi bb te amo'),
        new slideContent('Conteudo 3', 'nossa to todo cagado alguém me ajuda'),
        new slideContent('tutulo', 'nossa to todo cagado alguém me ajuda'),
    ]

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
        _array[_index]?.classList.add('active');
    }

    function changeCurrentActiveSlide(_i){
        changeCurrentActive(bullets, _i);
        changeCurrentActive(slides, _i);
    }



     //click nas setas
     const arrowL = slidesSection.querySelector('.l');
     const arrowR = slidesSection.querySelector('.r');
     arrowL.addEventListener('click',()=>{
        if(currentSlideIndex>0){
            currentSlideIndex--;
        }
        changeCurrentActiveSlide(currentSlideIndex);
     });
     arrowR.addEventListener('click',()=>{
        if(currentSlideIndex<bullets.length-1){
            currentSlideIndex++;
        }
        changeCurrentActiveSlide(currentSlideIndex);
     });
 


}