function gerarTabuada() {
    const container = document.getElementById('tabuadaContainer');
    for (let i = 1; i <= 10; i++) {
        const tabela = document.createElement('div');
        tabela.className = 'tabuada';

        const titulo = document.createElement('h3');
        titulo.innerText = `Tabuada do ${i}`;
        tabela.appendChild(titulo);

        for (let j = 1; j <= 10; j++) {
            const resultado = document.createElement('p');
            resultado.innerText = `${i} x ${j} = ${i * j}`;
            tabela.appendChild(resultado);
        }
        
        container.appendChild(tabela);
    }
}

window.onload = gerarTabuada;
