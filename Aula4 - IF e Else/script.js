function LadoFigura(figura) {
    switch (figura) {
        case 3: 
            console.log("Triângulo");
            break;
        case 4: 
            console.log("Quadrado");
            break;
        case 5:
            console.log("Pentágono");
            break;
        case 6:
            console.log("Hexágono");
            break;
        case 7:
            console.log("Heptágono");
            break;
        case 8:
            console.log("Octógono");
            break;
        case 9:
            console.log("Eneágono");
            break;
        case 10:
            console.log("Decágono");
            break;
          default:
              console.log("Não implementei ainda");
    }
}
LadoFigura(4)

    let fig = prompt("Quantos lados tem a figura? ");
    if (fig === 3) {
        console.log("Triângulo");
    } else if (fig === 4) {
        console.log("Quadrado");
    } else if (fig === 5) {
        console.log("Pentágono");
    } else if (fig === 6) {
        console.log("Hexágono");
    } else if (fig === 7) {
        console.log("Heptágono");
    } else if (fig === 8) {
        console.log("Octógono");
    } else if (fig === 9) {
        console.log("Eneágono");
    } else if (fig === 10) {
        console.log("Decágono");
    } else {
        console.log("Não implementei ainda");
    }
