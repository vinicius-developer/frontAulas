document.querySelector('#btn').addEventListener('dblclick', () => {
    let nome, sobrenome, dep, total;
    
    nome = document.getElementById('nome').value
    sobrenome = document.getElementById('sobrenome').value
    dep = parseInt(document.getElementById('dependentes').value)
    total = dep*150

    total = total.toLocaleString('pt-br', {style: 'currency', currency: 'BRL'})


    
    document.write(total);

    //document.write(nome + sobrenome + " possui " + dep + " dependentes.") 
})