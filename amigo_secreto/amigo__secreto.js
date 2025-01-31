let amigos = []


function adicionarAmigo() {
    let inputNome = document.getElementById("amigo"); 
    let nome = inputNome.value.trim(); 

    if (nome == "") {
        alert("Por favor, insira um nome."); 
        return;
    }

    if (amigos.includes(nome)) {
        alert("Esse nome já está na lista."); 
        return;
    }
    amigos.push(nome); 
    atualizarLista(); 
    inputNome.value = ""; 

}

function atualizarLista() {
    let lista = document.getElementById("listaAmigos");
    lista.innerHTML = ""; 
    
    for (let i = 0; i < amigos.length; i++) {
        let item = document.createElement("li");
        item.textContent = amigos[i];
        lista.appendChild(item);
    }
}

function sortearAmigo() {

    if (amigos.length === 0) {
        alert("A lista de amigos está vazia. Adicione pelo menos um nome antes de sortear.");
        return;
    }
    
    let indiceSorteado = Math.floor(Math.random() * amigos.length);
    let amigoSorteado = amigos[indiceSorteado];
    
    document.getElementById("resultado").innerHTML = `Amigo sorteado: <strong>${amigoSorteado}</strong>`;

// Efeito de confete
confetti({
    particleCount: 100, // Quantidade de partículas
    spread: 70, // Quão espalhado o confete será
    origin: { y: 0.6 } // Origem do confete (y: 0.6 significa que começa um pouco acima do centro)
});

}