// muestra alerta
export function showAlert(msg, type) {
    const exist = document.querySelector('.alert');

    if(!exist) {
        const alert = document.createElement('P');
        alert.textContent = msg;
        alert.classList.add('alert')

        type === 'error' ? alert.classList.add('error') : alert.classList.add('success');

        document.querySelector('#form').appendChild(alert);

        setTimeout(() => {
            alert.remove();
        }, 3000)
    }
}

// Valida valores del formulario
export function validate(obj) {
    return !Object.values(obj).every(input => input !== '')
}