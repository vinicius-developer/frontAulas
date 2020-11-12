const boxResult = document.getElementsByClassName('result');

document.getElementById('calc').addEventListener('click', () => {
    let precoUnit = parseFloat(document.getElementById('precounit').value)
    let qtde = parseInt(document.getElementById('qtde').value)
    let desconto, totalPag;

    let precoTotal = precoUnit * qtde;

     if(qtde<=5) {
        desconto = 2/100*precoTotal;
    } else if (qtde > 5 && qtde <= 10) {
        desconto = 3/100*precoTotal;
    } else {
        desconto = 5/100*precoTotal;
    }

    totalPag = precoTotal-desconto;

    totalPag = totalPag.toLocaleString('pt-br', {style: 'currency', currency: "BRL"})
    desconto = desconto.toLocaleString('pt-br', {style: 'currency', currency: "BRL"})
    precoTotal = precoTotal.toLocaleString('pt-br', {style: 'currency', currency: "BRL"})

    document.getElementById('precotot').value = precoTotal
    document.getElementById('descont').value = desconto
    document.getElementById('totalpagar').value = totalPag

})