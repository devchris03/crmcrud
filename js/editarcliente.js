import {getData} from './api.js';

(function() {

    // campos del formulario
    const nombreInput = document.querySelector('#nombre');
    const emailInput = document.querySelector('#email');
    const telefonoInput = document.querySelector('#telefono');
    const empresaInput = document.querySelector('#empresa');

    document.addEventListener('DOMContentLoaded', async () => {
        const urlParametro = new URLSearchParams(window.location.search);
        const idClient = urlParametro.get('id');
        const client = await getData(idClient);
        showData(client);
    })

    // muestra datos del cliente en el formulario
    function showData(client) {
        const {nombre, telefono, empresa, email, id} = client;

        nombreInput.value = nombre;
        telefonoInput.value = telefono;
        empresaInput.value = empresa;
        emailInput.value = email;
    }
})()