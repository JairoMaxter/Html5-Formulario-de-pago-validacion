let form = document.getElementById('formularioValidado');

form.addEventListener("submit", function (evento) {
    evento.preventDefault(); //Para evitar que lo envie automaticamente
    var regexgood = 0
    let regexCard = /[0-9]{13,16}/
    let regexCvc = /[0-9]{3}/
    let regexAmount = /^[+]?([.]\d+|\d+[.]?\d*)$/
    let regexFirstname = /[a-zA-Z]/
    let regexLastname = /[a-zA-Z]/
    let regexPostalcode = /[a-zA-Z0-9]+/
    let regexStates = /[a-zA-Z]/
    let regexCity = /[a-zA-Z]/
    let regexmessage = /[a-zA-Z0-9]+/

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

//Validador de CVC

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

//Validador de Amount

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

//Validador de Firstname

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

//Validador de Lastname

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

//Validador de City

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

//Validador de States

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

//Validador de Postalcode

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

//Validador de Kindofcard

    var kindofcard = document.getElementsByName('kindofcard');

    if (!(kindofcard[0].checked || kindofcard[1].checked || kindofcard[2].checked || kindofcard[3].checked)) {
        let smallkindofcard = document.querySelector('[id=smallkindofcard]');
        smallkindofcard.style.color = "red";
        smallkindofcard.style.display = 'block';
        smallkindofcard.innerHTML = "Selecciona tipo de tarjeta";
    } else {
        var regexgood = regexgood + 1;
        let smallkindofcard = document.querySelector('[id=smallkindofcard]');
        smallkindofcard.innerHTML = "";
    }

//Validador de message

if (evento.target.message.value !== '' && regexmessage.test(evento.target.message.value)) {
    var regexgood = regexgood + 1;
    let smallmessage = document.querySelector('[id=smallmessage]');
    smallmessage.style.color = "black";
    smallmessage.innerHTML = "Add any notes here";
} else {
    let smallmessage = document.querySelector('[id=smallmessage]');
    smallmessage.style.color = "red";
    smallmessage.innerHTML = "Please add any notes here";
}

//Contador para realizar submit

    if (regexgood === 10) {
        evento.target.submit(); //Para hacer el submit
    } else {
        let alertrow = document.querySelector('[id=alertrow]'); //Para cuadro de alerta
        alertrow.innerHTML = '<div class="alert alert-danger" id="fielsmissing" name="fielsmissing" role="alert">Algunas casillas estan incorrectas</div>';
    }
})