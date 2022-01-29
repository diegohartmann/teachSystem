export let currentSlideIndex = 0;
export function changeCurrentActiveSlide(_i, _slideArray, _bulletsArray){
    currentSlideIndex = _i;
    //circle index
    circleIndex(_slideArray, _bulletsArray);
    changeCurrentActive(_bulletsArray, currentSlideIndex);
    changeCurrentActive(_slideArray, currentSlideIndex);
}
function changeCurrentActive(_array, _index){
    _array.forEach(_item=>{
        _item.classList.remove('active');
    }) 
    _array[_index].classList.add('active');
}
function circleIndex(_slideArray, _bulletsArray){
    if(currentSlideIndex<0){
        currentSlideIndex= _bulletsArray.length - 1;
        return;
    }
    if (currentSlideIndex > _bulletsArray.length - 1){
        currentSlideIndex = 0;
    }
}