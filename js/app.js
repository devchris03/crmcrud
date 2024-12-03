import {getCliente} from './api.js';

(function() {
    const list = document.querySelector('#list');

    window.addEventListener('DOMContentLoaded', showClient);

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
}) ()