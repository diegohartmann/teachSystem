export default function copyButton(){
    document.querySelector("#notes > #copyButton").addEventListener('click',()=>{
        navigator.clipboard.writeText(document.querySelector("#notes > textarea").value)
    })
}