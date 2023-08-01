import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { PacienteService } from '../../Services/Paciente.service';
import * as Styled from './InputPageProntuarios.Style';
import { PacienteCardLista } from '../HomeComponents/PacienteCardLista/PacienteCardLista';



export const InputPageProntuarios = () => {


    const {
        register,
        handleSubmit,
        reset,
        formState:{error},
    } = useForm();

    const [pacienteSelect, setPacienteSelect] = useState([])

    const submitInput = async (dataInput) => {
        const {nome} = dataInput;

        PacienteService.ShowByNome(nome).then(response => {
            !response ? alert("Paciente ão cadastrado") : reset()
            setPacienteSelect(response)
        });

    }

    return(
        
            <Styled.ContainerInput>
                <h4>Encontre o paciente</h4>
                <Styled.InputArea onSubmit={handleSubmit(submitInput)}>
                    <input
                        placeholder='Digite o nome completo do paciente'
                        {...register('nome')}
                    />
                    <button className='botao botao btn btn-primary' type='submit'><span className=' material-symbols-outlined'>Buscar</span></button>
                </Styled.InputArea>
           

            <Styled.ContainerCards>
                {pacienteSelect && pacienteSelect.map(paciente => <PacienteCardLista paciente={paciente} key={paciente.id} /> )}
            </Styled.ContainerCards>
            </Styled.ContainerInput> 
        
    )
}