const URL_API = 'http://localhost:3000'

export async function loginApi(email, password) {
    const response = await fetch(`${URL_API}/usuarios`)
    const usuarios =  await response.json()
    const usuario = usuarios.find(usuario => usuario.email === email && usuario.password === password)

    return usuario
}