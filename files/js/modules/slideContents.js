class slideContent{
    constructor(_title, _content){
        this.title = _title.trim();
        this.content = _content.trim();
    }
}

function create(_title,_content){
    return new slideContent(_title, _content);
}

const slideContents=[
    create(
        'Artigo de Opinião',
        `
        Sobre kk
        `
    ),
    create(
        'Introdução',
        `
        A introdução consiste em apresentar o cu kkkk.
        `
    ),
    create(
        'Desenvolvimento',
        `
        Eu te amo sério mano não é meme.
        `
    ),
    create(
        'Conclusão',
        `
        Nossa to todo cagado alguém me ajuda.
        `
    ),
]

export default slideContents;