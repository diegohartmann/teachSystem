import L from './lobo.js';


export default function copyButton(){
    const area = document.querySelector("#notes > textarea");

    
    document.querySelector("#notes > #copyButton").addEventListener('click',()=>{
        L.copy(area.value);
        L.saveItem('text_content', area.value);
    })
    if(L.getItem('text_content').value !== 'undefined'){
        area.innerText = L.getItem('text_content');
    }
}