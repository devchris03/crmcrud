import {getCliente, deleteRegister} from './api.js';

(function() {
    const list = document.querySelector('#list');

    window.addEventListener('DOMContentLoaded', showClient);
    list.addEventListener('click', confirmClient);

    // muestra clientes
    async function showClient() {
        const clients = await getCliente();

        clients.forEach(client => {
            const {nombre, email, telefono, empresa, id} = client;

            const item = document.createElement('TR');

            item.innerHTML = `
                <td>
                    <p class="nameCliente">${nombre}</p>
                    <p>${email}</p>
                </td>
                <td>${telefono}</td>
                <td>${empresa}</td>
                <td>
                    <a href="./editar-cliente.html?id=${id}" aria-label="editar cliente" class="buttonAction edit">Editar</a>
                    <a href="#" data-cliente="${id}" aria-label="eliminar cliente" class="buttonAction delete">Eliminar</a>
                </td>
                `;

            list.appendChild(item);
        })
    }

    // confirma eliminación de cliente
    function confirmClient(event) {
        if(event.target.classList.contains('delete')) {
            
            const clientId = event.target.dataset.cliente;
            
            const result = confirm('¿Deseas eliminar este registro?');

            if(result) {
                deleteRegister(clientId);
            }
        }
    }
}) ()