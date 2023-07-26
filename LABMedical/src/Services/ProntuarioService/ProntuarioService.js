export async function ProntuarioService(query) {
  try {
    const response = await fetch(
      `http://localhost:3000/pacientes?query=${query}`
    );
    const data = await response.json();

    if (data.length === 0) {
      alert("Paciente não encontrado.");
    } else {
      const pacienteEncontrado = data.find(
        (paciente) => paciente.nome.toLowerCase() === query.toLowerCase()
      );

      if (pacienteEncontrado) {
        // Retorne o paciente encontrado ou faça algo com ele aqui
        return pacienteEncontrado;
      } else {
        alert("Paciente não encontrado.");
      }
    }
  } catch (error) {
    console.error("Erro ao buscar pacientes:", error);
    throw new Error("Erro ao buscar pacientes.");
  }
}
