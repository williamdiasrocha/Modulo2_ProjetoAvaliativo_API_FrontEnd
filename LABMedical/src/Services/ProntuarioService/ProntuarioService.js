export async function ProntuarioService(pacienteId) {
    const response = await fetch(`http://localhost:3000/pacientes/${pacienteId}`);
    if (!response.ok) {
      throw new Error('Não foi possível obter os dados do paciente.');
    }
    return response.json();
  }