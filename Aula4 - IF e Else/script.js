document.getElementById('forma').addEventListener('submit', function(event) {
    event.preventDefault();
    const lados = parseInt(document.getElementById('figuraInput').value);
    const { resultado, imagemSrc } = LadoFigura(lados);

    const resultadoDiv = document.getElementById('resultado');
    resultadoDiv.innerHTML = `<h3>${resultado}</h3>`;
    if (imagemSrc) {
        resultadoDiv.innerHTML += `<img src="${imagemSrc}" alt="${resultado}" class="figure-img mt-2">`;
    }
});

function LadoFigura(figura) {
    let resultado = '';
    let imagemSrc = '';
    
    switch (figura) {
        case 3: 
            resultado = "Triângulo<br>Formulas para saber área e perímetro:<br>";
            resultado += "Perímetro: é igual à soma do comprimento de todos os lados<br>";
            resultado += "Área: multiplicar a base (b) pela altura (h)<br>";
            imagemSrc = "https://static.dicionariodesimbolos.com.br/upload/42/a0/triangulo-5_xl.jpeg";
            break;
        case 4: 
            resultado = "Quadrado<br>Formulas para saber área e perímetro:<br>";
            resultado += "Perímetro: p = 4.l<br>";
            resultado += "Área: multiplicar a base (b) pela altura (h)<br>";
            imagemSrc = "https://images.vexels.com/content/139342/preview/basic-square-outline-4756c9.png";
            break;
        case 5:
            resultado = "Pentágono<br>Formulas para saber área e perímetro:<br>";
            resultado += "Perímetro: p = 5.l<br>";
            resultado += "Área: A = 1/4 √5(5+2√5).l² <br>";
            imagemSrc = "https://images.vexels.com/content/139250/preview/pentagon-stroke-shape-b8021d.png";
            break;
        case 6:
            resultado = "Hexágono<br>Formulas para saber área e perímetro:<br>";
            resultado += "Perímetro: 6.l<br>";
            resultado += "Área: A = 6l²√3/4<br>";
            imagemSrc = "https://cdn-icons-png.flaticon.com/512/462/462061.png";
            break;
        case 7:
            resultado = "Heptágono<br>Formulas para saber área e perímetro:<br>";
            resultado += "Perímetro: p = 7.l<br>";
            resultado += "Área: A = 7/4.l².cot(π/7)<br>";
            imagemSrc = "https://images.vexels.com/content/139196/preview/heptagon-geometric-shape-outline-a0aeea.png";
            break;
        case 8:
            resultado = "Octógono<br>Formulas para saber área e perímetro:<br>";
            resultado += "Perímetro: p = 8.l<br>";
            resultado += "Área: A = 2.(1+√²).l² <br>";
            imagemSrc = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRuOA1d20Oe0ccyD1YManLmeQzrZyYjgE_sUA&s";
            break;
        case 9:
            resultado = "Eneágono<br>Formulas para saber área e perímetro:<br>";
            resultado += "Perímetro: p = 9.l<br>";
            resultado += "Área: A = 9/4.l².cot(π/9)<br>";
            imagemSrc = "https://i.pinimg.com/474x/02/08/e8/0208e8b4370284dc6ba5bb4c25cb57d7.jpg";
            break;
        case 10:
            resultado = "Decágono<br>Formulas para saber área e perímetro:<br>";
            resultado += "Perímetro: p = 10.l<br>";
            resultado += "Área: A = 5/2.l².cot(π/10)<br>";
            imagemSrc = "https://images.vexels.com/media/users/3/139178/isolated/preview/a0d86d964e17ed9604cd45cffaba1eb6-forma-de-dec-gono.png";
            break;
        case 11:
            resultado = "Undecágono<br>Formulas para saber área e perímetro:<br>";
            resultado += "Perímetro: p = 11.l<br>";
            resultado += "Área: A = 11/4.l².cot(π/11)<br>";
            imagemSrc = "https://media.brainly.com.br/image/rs:fill/w:640/q:75/plain/https://pt-static.z-dn.net/files/d23/35e2f4343275034aa275b0dd44183035.png";
            break;
        default:
            resultado = "Não implementei ainda";
            imagemSrc = '';
    }
    
    return { resultado, imagemSrc };
}
