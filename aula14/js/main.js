document.getElementById('enviar').addEventListener('click', () => {
    let senha = document.getElementById('senha').value;
    let confirme_senha = document.getElementById('senha_confirmation').value;
    
    if(senha === confirme_senha) {
        
        let mensagem = document.getElementById('message_success');
        console.log(mensagem);
        if(mensagem.textContent === '') {
            insert = mensagem.innerHTML,
            insertMessage = 'senhas estão iguais';
            insert = insertMessage+insert
            mensagem.innerHTML = insert
        } 
    } else {
        let mensagem = document.getElementsByClassName('message_error');
        for(let i = 0; i < mensagem.length; i++) {
            if(mensagem[i].textContent === '') {
                let insert = mensagem[i].innerHTML,
                insertMessage = 'Senhas estão diferentes';
                insert = insertMessage+insert
                mensagem[i].innerHTML = insert
            }
        }
    }
})