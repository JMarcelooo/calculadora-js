

function addValor(id){
    var display = document.getElementById("resultado");
    display.value += id;
    display.innerText += id;

}

function clearScreen() {
    var display = document.getElementById("resultado");
    display.value = "";
    display.innerText = "";
}

function calcular(){
    try{
        var result = eval(resultado.value);
        
        if(isNaN(result) || !isFinite(result)){
            resultado.innerText = "Erro";
        } else {
            resultado.innerText = result;
            resultado.value = result;
        }

    } catch(error) {
        resultado.innerText = "Erro";
    }
}


// Função para lidar com eventos de teclado
function handleKeyDown(event) {
    // Verifica se a tecla pressionada é Enter (código 13)
    if (event.keyCode === 13) {
        calcular(); // Chama a função calculate
    }
}

// Adiciona um ouvinte de eventos de teclado ao documento
document.addEventListener("keydown", handleKeyDown);
