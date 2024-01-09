// usar com o page manipulator https://chromewebstore.google.com/detail/page-manipulator/mdhellggnoabbnnchkeniomkpghbekko

// POR LOJA NO CANTO
const lojaXpath = "/html/body/div[5]/div[1]"
document.evaluate(lojaXpath, document, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null).singleNodeValue.style.width = "100vw" 


// REMOVER ADS FORMA 1
//document.querySelector("#inGameAdsContainer").remove()


// REMOVER ADS FORMA 2
var gameContainer = "/html/body/div[5]/div[2]";
document.evaluate(gameContainer, document, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null).singleNodeValue.style.width = "100vw" 



const xpathCanvas = "/html/body/div[5]/div[2]/div/div[2]/div[3]/canvas"
document.evaluate(xpathCanvas, document, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null).singleNodeValue.style.width = "100vw" 

function aguardarElementoExistir(elementoId) {
    return new Promise((resolve) => {
        const verificarExistencia = () => {
            const elemento = document.getElementById(elementoId);
            if (elemento) {
                resolve(elemento);
            } else {
                setTimeout(verificarExistencia, 100);
            }
        };

        verificarExistencia();
    });
}

async function removerElemento() {
    console.log("Aguardando iframe existir...");

    // Aguarda até que o iframe com id "ifm" exista no DOM
    const meuIframe = await aguardarElementoExistir("ifm");

    console.log("Iframe existe!", meuIframe);

    // Aguarda até que o elemento com id "inGameAdsContainer" exista no documento dentro do iframe
    const inGameAdsContainer = await aguardarElementoExistir("inGameAdsContainer");

    console.log("Elemento dentro do iframe existe!", inGameAdsContainer);

    // Remove o elemento dentro do iframe
    inGameAdsContainer.remove();
}

// Chamando a função assíncrona
removerElemento();

async function ajustarLarguraDoCanvas() {
    console.log("Aguardando canvas existir...");

    // Aguarda até que o elemento com o XPath especificado exista no DOM
    const meuCanvas = await aguardarElementoExistir("/html/body/div[5]/div[2]/div/div[3]/div[3]/canvas");

    console.log("Elemento existe!", meuCanvas);

    // Ajusta a largura do canvas para "100vw"
    meuCanvas.style.width = "100vw";
}

// Chamando a função assíncrona
ajustarLarguraDoCanvas();

async function ajustarLarguraDoElemento() {
    console.log("Aguardando elemento existir...");

    // Aguarda até que o elemento com o XPath especificado exista no DOM
    const meuElemento = await aguardarElementoExistir("/html/body/div[5]/div[2]");

    console.log("Elemento existe!", meuElemento);

    // Ajusta a largura do elemento para "100vw"
    meuElemento.style.width = "100vw";
}

// Chamando a função assíncrona
ajustarLarguraDoElemento();
