class slideContent{
    constructor(_title, _content){
        this.title = _title.trim();
        this.content = _content.trim();
    }
}

function slide(_title,_content){
    return new slideContent(_title, _content);
}

export const slideContents=[
    slide(
        'Artigo de Opinião',
        `
        O artigo de opinião é um texto que defende um ponto de vista por meio de argumentos. Por isso, é um gênero argumentativo. Nele, deve ser utilizada linguagem conforme a norma-padrão.
        <br><br>
        Dessa forma, o texto consegue atingir um público maior, já que a intenção é a de que ele alcance e seja compreendido em regiões completamente distintas, onde costuma ter variação linguística – como é o caso dos artigos publicados em jornais de alcance nacional no Brasil.
        <br><br>
        Além disso, o artigo de opinião se trata de uma publicação de imprensa, assim, o assunto nesse tipo de texto costuma ser de relevância coletiva, abordando fatos importantes que tenham ocorrido nos dias ou semanas anteriores.
        <br><br>
        Sendo assim, o gênero tem uma função social clara de promover o debate público sobre as demandas da sociedade.
        <br><br>
        Pense em um acontecimento importante, um tema que apareceu nos últimos dias, algo que necessita do olhar da sociedade.
        <br><br>
        Agora imagine que você vai falar seu ponto de vista para alguém (pode imaginar um amigo) que não está muito por dentro do assunto.
        Inicialmente, você faria uma introdução sobre o caso e daria sua opinião sobre.
        <br><br>
        Pode ser que seu amigo não concorde com sua “tese”. Assim, você começa a desenvolver o assunto usando alguns argumentos, como notícias, pesquisas importantes...
        <br><br>
        No final da conversa, você retoma o ponto inicial, que você introduziu, seu ponto de vista e compara com os argumentos utilizados concluindo sua defesa.
        <br><br>
        É seguindo essa ideia, com alguns poréns, que você construirá seu artigo de opinião, não esquecendo três pontos importantes na sua escrita: o <b>planejamento e projeto</b>; o <b>rascunho</b>; e a <b>revisão</b> do seu texto.
        `
    ),
    slide(
        'Introdução',
        `
        •   Neste primeiro parágrafo, você deve apresentar o tema (assunto) e se posicionar sobre. Qual seu ponto de vista a respeito do tema?
        <br><br>
        •   Talvez você queira começar com:
        <br>
        o	“É de conhecimento geral que...”<br>
        o	“Muito se tem discutido...” <br>
        o	“Pode-se afirmar que...” <br>
        o	“Em face do cenário atual...” <br>
        o	“Segundo a pesquisa...” <br><br>
            Não esqueça de escrever seu parágrafo com uma média de 3 a 5 linhas e contendo dois ou mais pontos finais (nunca um, apenas).
        `
    ),
    slide(
        'Desenvolvimento',
        `
        •	Neste(s) parágrafo(s) você apresentará os argumentos que comprovarão seu ponto de vista apresentado na tese que inseriu no parágrafo de introdução.
        <br>
        <br>
        •	Um argumento costuma ter duas partes: a fundamentação e a análise do fundamento.<br><br>
        •	Fundamentação: informações, fatos, dados, referências, entre outros, que o autor busca para embasar sua opinião.
        <br>
        <br>
        •	Análise do fundamento: trecho em que o autor relaciona o fundamento utilizado com a tese defendida.
        <br>
        <br>
        •	Conectivos que lhe ajudarão a ligar as ideias no desenvolvimento do texto:
        <br>
        o	Adição: além disso, ademais, ainda mais, também...
        <br>
        o	Alternância: quer (x) quer (y), ou, ou (x) ou (y), ora (x) ora (y).
        <br>
        o	Ênfase: certamente, inegavelmente, por certo, indubitavelmente...
        <br>
        o	Condição: caso, eventualmente, se.
        <br>
        o	Dúvida: provavelmente, talvez, possivelmente, é provável que...
        <br>
        o	Causa e consequência: por conseguinte, como resultado, por isso, de fato...
        <br>
        o	Finalidade: a fim de, para que, como, para...
        <br>
        o	Oposição: exceto, posto, conquanto, por mais que...
        <br>
        o	Relevância: a princípio, sobretudo, a priori, em primeiro lugar..
        <br>
        o	Semelhança: da mesma forma, igualmente, assim também...
        `
    ),
    slide(
        'Conclusão',
        `
        •	Neste parágrafo você apresentará uma síntese do desenvolvimento do texto e, em seguida, retomará a tese, agora comprovada pelos argumentos.
        <br><br>
        •	A conclusão repete, resumidamente, a linha argumentativa desenvolvida no texto e, a partir disso, a tese é retomada de forma comprovada
        •	Você pode começar este parágrafo com:
        <br>
        o	Percebe-se;<br>
        o	Destarte;<br>
        o	Assim;<br>
        o	Diante disso;<br>
        o	Em síntese;<br>
        o	Portanto...
        `
    ),
    slide(
        'Exemplo',
        `
        <style>
            .tocenter{ display:inline-block; margin:0 auto; text-align:center; width:100%;}
        </style>

        <span class="tocenter">“Tá com dó do refugiado? Leva pra casa!”</span>
        <br>
        <span class="tocenter">Leonardo Sakamoto</span> 
        <br>
        <span class="tocenter">8/9/2015</span>
        <br>
        <br>
        “Tá com dó? Leva para casa!’’ é uma daquelas frases icônicas, através das quais consegue-se avaliar se o interlocutor merece respeito ou um abraço forte e solidário.
        É utilizada por pessoas com síndrome de pombo-enxadrista (faz sujeira no tabuleiro, joga ignorando regras mínimas de sociabilidade e sai voando, cantando vitória),
        normalmente diante do clamor para políticas voltadas àquela gente pobre, parda, perdida ou violada que habita as frestas das grandes cidades.
        <br>
        <br>
        <span class="tocenter">(...)</span>
        <br>
        <br>
        Tanto na Europa quanto por aqui, ações individuais ajudam a mitigar o impacto inicial dos refugiados, garantindo apoio a quem perdeu tudo.
        E é ótimo que seja assim.
        Mas eles devem ser alvo, principalmente, de uma política pública, com intervenção direta do Estado, única instituição com tamanho e legitimidade para garantir uma ação nacional,
        transnacional e de escala. Porque isso também inclui a garantia da autonomia econômica e social às famílias.
        Quem acha que o Estado é um simples entrave e não a forma que construímos para impedir que nos devoremos, tem dificuldade de entender que o acolhimento de refugiados e migrantes não é caridade individual,mas sim a efetivação de compromissos assumidos internacionalmente por um povo.
        <br>
        <br>
        Ao mesmo tempo, o Estado é responsável por aprovar o mais rápido possível a nova lei brasileira de migração, que facilita a acolhida de estrangeiros de locais com instabilidade, guerras, violações a direitos humanos.
        O projeto, já aprovado no Senado e que está em análise na Câmara dos Deputados (PL 2516/15), repudia a xenofobia, tendo uma caráter mais humanitário que o Estatuto do Estrangeiro atual, um Walking Dead – morto, mas segue aí, atrapalhando.
        Não é a panaceia para todos os problemas, mas um passo importante. Migrantes geram riqueza para seus novos países, mas a narrativa é de que são custosos para o poder público. Prova de que uma mentira contada mil vezes vira verdade.
        <br>
        <br>
        <small> Disponível em: <a  style="color: #fff; display: inline-block; max-width: 100%; word-break: break-word;" target="_blank" rel="noopener norrefer" href="https://blogdosakamoto.blogosfera.uol.com.br/2015/09/08/ta-com-do-do-refugiado-leva-pra-casa"> https://blogdosakamoto.blogosfera.uol.com.br/2015/09/08/ta-com-do-do-refugiado-leva-pra-casa/ </a></small>
        `
    ),
]