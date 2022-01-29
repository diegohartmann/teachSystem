export default function getSlideContent(_content){
    return `
        <div>
            <h1>${_content.title}</h1>
            <p>${_content.content}</p>
            <br><br>
        </div>
    `
}