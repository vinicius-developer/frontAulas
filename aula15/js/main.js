const boxMessageError = document.getElementsByClassName('message-error')

boxMessageError[0].style.visibility = 'hidden';

document.getElementById('submit').addEventListener('click', () => {
    const senha = document.getElementById('senha').value;
    if(senha === "proa" || senha === "PROA" || senha === "Proa") {
        window.location.href = "file:///C:/Users/vinic/OneDrive/%C3%81rea%20de%20Trabalho/front-end%20PROA/aula15/calculos.html"
    } else {
        const boxMessageError = document.getElementsByClassName('message-error');
        boxMessageError[0].style.visibility = "visible"
    }
})






