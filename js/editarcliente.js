import {getData, updateClient} from './api.js';
import {showAlert, validate} from './funciones.js';

(function() {

    // campos del formulario
    const nombreInput = document.querySelector('#nombre');
    const emailInput = document.querySelector('#email');
    const telefonoInput = document.querySelector('#telefono');
    const empresaInput = document.querySelector('#empresa');
    const idInput = document.querySelector('#id');

    document.addEventListener('DOMContentLoaded', async () => {
        const urlParametro = new URLSearchParams(window.location.search);
        const idClient = urlParametro.get('id');
        const client = await getData(idClient);
        showData(client);

        const form = document.querySelector('#form');
        form.addEventListener('submit', validateClient);
    })



    // muestra datos del cliente en el formulario
    function showData(client) {
        const {nombre, telefono, empresa, email, id} = client;

        nombreInput.value = nombre;
        telefonoInput.value = telefono;
        empresaInput.value = empresa;
        emailInput.value = email;
        idInput.value = id
    }

    // valida datos
    function validateClient(event) {
        event.preventDefault();

        const objClient = {
            nombre: nombreInput.value,
            telefono: telefonoInput.value,
            empresa: empresaInput.value,
            email: emailInput.value,
            id: idInput.value,
        }

        console.log(objClient)

        if(validate(objClient)) {
            showAlert('Todos los campos son obligatorios', 'error');
            return;
        }

        showAlert('Cliente registrado', 'success');

        updateClient(objClient)
    }
})()