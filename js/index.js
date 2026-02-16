function clearForm() {
    document.getElementById('contactForm').reset()
}

function saveForm() {

    const name = document.getElementById('name').value
    const email = document.getElementById('email').value
    const password = document.getElementById('password').value
    const message = document.getElementById('message').value

    //Verificar se há campos vazios

    if (document.getElementById('name').value == '') {
        alert('Campo nome vazio!')
        return
    }
    if (document.getElementById('email').value ==''){
        alert('Campo e-mail vazio!')
        return
    }
    if (document.getElementById('password').value == ''){
        alert('Campo de senha vazio!')
        return
    }
    

    //verificar se já existem dados no localStorage

    let saveData = JSON.parse(localStorage.getItem('formData')) || []

    //criando objeto com os dados do formulário

    const formData = {
        name: name,
        email: email,
        password: password,
        message: message
    }

    //Adicionar dados ao array
    saveData.push(formData)

    //Salvar array atualizando no localStorage
    localStorage.setItem('formData', JSON.stringify(saveData))

    //Exibir alerta de sucesso

    alert('Formulário enviado com sucesso!')

    clearForm()
}

