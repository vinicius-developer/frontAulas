document.querySelector('#btn').addEventListener('click', () => {
    let n1, n2;

    n1 = parseInt(document.getElementById('n1').value)
    n2 = parseInt(document.getElementById('n2').value)

    alert ('Soma = ' + (n1+n2) )
})