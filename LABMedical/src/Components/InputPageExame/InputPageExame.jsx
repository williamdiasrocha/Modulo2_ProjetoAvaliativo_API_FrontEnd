import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { PacienteService } from '../../Services/Paciente.service';
import * as Styled from './InputPageExame.Style';
import { FormExame } from '../FormularioExame/FormularioExame';


export const InputPageExame = () => {


    const {
        register,
        handleSubmit,
        reset,
        formState:{error},
    } = useForm();

    const [pacienteSelect, setPacienteSelect] = useState(null)

    const submitInput = async (dataInput) => {
        const {nome} = dataInput;
        
        const paciente = await PacienteService.ShowByEmail(nome);
        if(!paciente) {
            alert("Usuário não cadastrado")
            setPacienteSelect(null);
            reset();

        } else {
            setPacienteSelect(paciente);
            reset();
        }
       
    
    }

    return(
        <>
            <Styled.ContainerInput>
                <h4>Encontre o paciente</h4>
                <Styled.InputArea onSubmit={handleSubmit(submitInput)}>
                    <input
                        placeholder='Digite o email do paciente'
                        {...register('nome')}
                    />
                    <button className='botao botao btn btn-primary' type='submit'><span className='material-symbols-outlined'>Buscar</span></button>
                </Styled.InputArea>
           

            <Styled.ContainerCards>
                {pacienteSelect && (
                    <FormExame paciente={pacienteSelect}/>
                )}
            </Styled.ContainerCards>
            </Styled.ContainerInput> 
        </>
    )
}