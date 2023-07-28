const URL_API = "http://localhost:3000";

export async function ProntuarioService(id) {
    const response = await fetch(`${URL_API}/pacientes/${id}`);
    if (!response.ok) {
      throw new Error('Não foi possível obter os dados do paciente.');
    }
    return response.json();
  }