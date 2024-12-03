import {showAlert} from './funciones.js';

(function() {
    const form = document.querySelector('#form');
    form.addEventListener('submit', validateClient);


    // validamos cliente
    function validateClient(event) {
        event.preventDefault();

        const nombre = document.querySelector('#nombre').value.trim();
        const email = document.querySelector('#email').value.trim();
        const telefono = document.querySelector('#telefono').value.trim();
        const empresa = document.querySelector('#empresa').value.trim();

        const objClient = {
            nombre,
            email,
            telefono,
            empresa
        }

        if(validate(objClient)) {
            showAlert('Todos los campos son obligatorios', 'error');
            return;
        }

        showAlert('Cliente registrado', 'success')
    }

    // Valida valores del formulario
    function validate(obj) {
        return !Object.values(obj).every(input => input !== ''.trim())
    }


})();