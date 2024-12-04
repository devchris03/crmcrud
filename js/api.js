const url = 'http://localhost:4000/clientes';

// crea nuevo cliente
export const newClient = async cliente => {
    
    try {
        await fetch(url, {
            method: 'POST',
            body: JSON.stringify(cliente),
            headers: {
                'Content-Type': 'application/json'
            }
        })

        window.location.href = 'index.html';
    } catch (error) {
        console.log(error)
    }
}

// obtiene clientes
export const getCliente = async () => {
    try {
        const result = await fetch(url);
        const resultado = await result.json();
        return resultado;
    } catch (error) {
        console.log(error)
    }
}


// elimina cliente
export const deleteRegister = async id => {
    try {
        await fetch(`${url}/${id}`, {
            method: 'DELETE',
        })
    } catch (error) {
        console.log(error)
    }
}