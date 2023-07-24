import axios from 'axios';

const URL_API = 'http://localhost:3000'

export async function loginApi(email, password) {
    const response = await fetch(`${URL_API}/usuarios`)
    const usuarios =  await response.json()
    const usuario = usuarios.find(usuario => usuario.email === email && usuario.password === password)

    return usuario
}

export const cadastrarUsuario = async (usuario) => {
    try {
        const response = await axios.post(`${URL_API}/usuarios`, usuario);
        return response.data;
    } catch (error) {
        console.error('Erro ao cadastrar usuário: ', error);
        throw error;
    }
}

