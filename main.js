let form = document.getElementById('formularioValidado');

form.addEventListener("submit", function (evento) {
    evento.preventDefault(); //Para evitar que lo envie automaticamente
    
    let regexCard = /[0-9]{16,16}/
    let regexCvc = /[0-9]{3}/
    //let regexAmount = /[0-9]{1,}/
    //let regexFirstname = /[a-zA-Z]+/
    //let regexLastname = /[a-zA-Z]+/
    //let regexPostalcode = /[a-zA-Z0-9]+/

    if (evento.target.numbercard.value !== '' && regexCard.test(evento.target.numbercard.value)) {
        evento.target.submit();
    } else {
        let smallTagCard = document.querySelector('[id=smallnumbercard]');
        smallTagCard.style.color = "red";
        smallTagCard.style.display = 'block';
        smallTagCard.innerHTML = "Ingresar una tarjeta valida";
    }
})