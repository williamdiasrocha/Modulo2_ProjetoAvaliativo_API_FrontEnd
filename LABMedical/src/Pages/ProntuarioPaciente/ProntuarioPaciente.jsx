import * as Styled from './ProntuarioPaciente.style';

import { useContext, useEffect, useState } from 'react';
import { HeaderContext } from '../../Context/HeaderContext.jsx';

import { useLocation } from 'react-router-dom';

import { PacienteService } from '../../Services/Paciente.service.jsx';
import { ConsultaService } from '../../Services/Consulta.service.jsx';
import { ExameService } from '../../Services/Exame.service.jsx';

import CardConsulta from '../../Components/CardConsulta/CardConsulta.jsx';

import CardExame from '../../Components/CardExame/CardExame.jsx';

export const ProntuarioPage = () => {


  const [paciente, setPaciente] = useState()
  const [consulta, setConsulta] = useState()
  const [exame, setExame] = useState()
  

  const { setData } = useContext(HeaderContext)
  const {pathname} = useLocation()

  useEffect(() => {
    setData({       
      titulo: 'PRONTUÁRIO DO PACIENTE',}) 
      const location = pathname.split('/')
      const pacienteId = location[location.length - 1]
      const consultaId = location[location.consulta]
      const exameId = location[location.exame]
      
      const asyncFn = async () => {
        await PacienteService.Show(pacienteId).then(async (response)  => {
          setPaciente(response)
          await ConsultaService.Get().then(res => setConsulta(res.filter(cc => cc.pacienteId === response.id)))
          await ExameService.Get().then(res => setExame(res.filter(e => e.pacienteId === response.id)))
        })

        
      }
      asyncFn()
    }, []);

  

    const render = () => {
        return (

          <>          
          
            <Styled.Prontuario>
            <Styled.HeaderProntuario>
                <Styled.Title>{paciente?.nome}</Styled.Title>
                <Styled.Label>Convênio: {paciente?.convenio}</Styled.Label>
                <Styled.Label>Nacimento: {paciente?.nasc}</Styled.Label>
                <Styled.Label>Contato: {paciente?.tel}</Styled.Label>
            </Styled.HeaderProntuario>

            <Styled.CorpoProntuario>

            <Styled.SubTitle><span>1</span>Consulta</Styled.SubTitle>

              <Styled.RenderResultados>
                  {consulta && consulta.map(consulta => <CardConsulta consulta={consulta} key={consulta.id} />)}
              </Styled.RenderResultados>

            <Styled.SubTitle><span>2</span>Exame</Styled.SubTitle>

              <Styled.RenderResultados>
                  {exame && exame.map(exame => <CardExame exame={exame} key={exame.id} />)}       
              </Styled.RenderResultados>
            </Styled.CorpoProntuario>
          </Styled.Prontuario>

          </>
      )
    }

    return render()
    
  }