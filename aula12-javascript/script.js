
const button = document.getElementById('button-form')

button.addEventListener('click', function(e) {
    const val = document.getElementById('input-form').value
    let arr = val.split(',')
    
    for(let i = 0; i<arr.length; i++) {
        let quadrado = parseInt(arr[i]) * parseInt(arr[i]);
        document.write("O quadrado de " + arr[i] + " é: " + quadrado +"<br>");
    }
});