let form = document.getElementById('formularioValidado');

form.addEventListener("submit", function (evento) {
    evento.preventDefault(); //Para evitar que lo envie automaticamente
    var regexgood = 0
    let regexCard = /9[0-9]{16}/
    let regexCvc = /[0-9]{3}/
    let regexAmount = /[0-9]{1,}/
    let regexFirstname = /[a-zA-Z]+/
    let regexLastname = /[a-zA-Z]+/
    let regexPostalcode = /[a-zA-Z0-9]+/
    let regexStates = /[a-zA-Z]+/
    let regexCity = /[a-zA-Z]+/

    if (evento.target.numbercard.value !== '' && regexCard.test(evento.target.numbercard.value)) {
        var regexgood = regexgood + 1; //Contador para saber cuando hacer sumit
        let smallTagCard = document.querySelector('[id=smallnumbercard]');
        smallTagCard.innerHTML = ""; //Para borrar small al rescribir value valido
    } else {
        let smallTagCard = document.querySelector('[id=smallnumbercard]');
        smallTagCard.style.color = "red";
        smallTagCard.style.display = 'block';
        smallTagCard.innerHTML = "Ingresar una tarjeta valida"; //Para indicar value incorrecto debajo del imput
    }

    if (evento.target.numbercvc.value !== '' && regexCvc.test(evento.target.numbercvc.value)) {
        var regexgood = regexgood + 1;
        let smallnumbercvc = document.querySelector('[id=smallnumbercvc]');
        smallnumbercvc.innerHTML = "";
    } else {
        let smallnumbercvc = document.querySelector('[id=smallnumbercvc]');
        smallnumbercvc.style.color = "red";
        smallnumbercvc.style.display = 'block';
        smallnumbercvc.innerHTML = "Ingresar una cvc valido";
    }

    if (evento.target.amount.value !== '' && regexAmount.test(evento.target.amount.value)) {
        var regexgood = regexgood + 1;
        let smallamount = document.querySelector('[id=smallamount]');
        smallamount.innerHTML = "";
    } else {
        let smallamount = document.querySelector('[id=smallamount]');
        smallamount.style.color = "red";
        smallamount.style.display = 'block';
        smallamount.innerHTML = "Ingresar una monto valido";
    }

    if (evento.target.firstname.value !== '' && regexFirstname.test(evento.target.firstname.value)) {
        var regexgood = regexgood + 1;
        let smallfirstname = document.querySelector('[id=smallfirstname]');
        smallfirstname.innerHTML = ""; 
    } else {
        let smallfirstname = document.querySelector('[id=smallfirstname]');
        smallfirstname.style.color = "red";
        smallfirstname.style.display = 'block';
        smallfirstname.innerHTML = "Ingresar Nombre Valido";
    }

    if (evento.target.lastname.value !== '' && regexLastname.test(evento.target.lastname.value)) {
        var regexgood = regexgood + 1;
        let smalllastname = document.querySelector('[id=smalllastname]');
        smalllastname.innerHTML = "";
    } else {
        let smalllastname = document.querySelector('[id=smalllastname]');
        smalllastname.style.color = "red";
        smalllastname.style.display = 'block';
        smalllastname.innerHTML = "Ingresar Apellido valido";
    }

    if (evento.target.city.value !== '' && regexCity.test(evento.target.city.value)) {
        var regexgood = regexgood + 1;
        let smallcity = document.querySelector('[id=smallcity]');
        smallcity.innerHTML = "";
    } else {
        let smallcity = document.querySelector('[id=smallcity]');
        smallcity.style.color = "red";
        smallcity.style.display = 'block';
        smallcity.innerHTML = "Ingresar una Ciudad valida";
    }

    if (evento.target.state.value !== 'Pick a state' && regexStates.test(evento.target.state.value)) {
        var regexgood = regexgood + 1;
        let smallstate = document.querySelector('[id=smallstate]');
        smallstate.innerHTML = "";
    } else {
        let smallstate = document.querySelector('[id=smallstate]');
        smallstate.style.color = "red";
        smallstate.style.display = 'block';
        smallstate.innerHTML = "Seleciona un Estado";
    }

    if (evento.target.postalcode.value !== '' && regexPostalcode.test(evento.target.postalcode.value)) {
        var regexgood = regexgood + 1;
        let smallpostalcode = document.querySelector('[id=smallpostalcode]');
        smallpostalcode.innerHTML = "";
    } else {
        let smallpostalcode = document.querySelector('[id=smallpostalcode]');
        smallpostalcode.style.color = "red";
        smallpostalcode.style.display = 'block';
        smallpostalcode.innerHTML = "Ingresar un Codigo Postal valido";
    }

    if (regexgood === 8){
        evento.target.submit(); //Para hacer el sumit
    } else {
        let alertrow = document.querySelector('[id=alertrow]'); //Para cuadro de alerta
        alertrow.innerHTML = '<div class="alert alert-danger" id="fielsmissing" name="fielsmissing" role="alert">Some fields are missing</div>';
    }
})