import styled from 'styled-components';
import PropTypes from 'prop-types';

export const Form = styled.form`
  display: inline-flex;
  padding: 2rem;
  width: 95%;
  height: auto;
  flex-direction: column;
  justify-content: center;
/*   align-items: flex-start; */
  gap: 1rem;
  border-radius: 0.625rem;
  background: #FFF;
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
  margin: 20px;
`;

export const Header = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-around;


  align-items: flex-start;
  gap: 0.5rem;
  align-self: stretch;

`;

export const InputGroup = styled.div`
  display: flex;
  padding: 0.325rem;
/*   flex-direction: column; */
  justify-content: center;
  align-items: center;
  gap: 0.625rem;
  width: ${({ $width }) => ($width ? $width : '100%')};

  
`;

export const Button = styled.button`
  display: flex;
  padding: 0.5rem 1rem;
  justify-content: center;
  align-items: center;
  align-self: center;
  width: ${({$width}) => $width ? $width : '95%'};
  border-radius: 0.3125rem;
  background: ${({ $outlined }) => { return $outlined ? 'transparent' : 'rgba(82, 129, 220, 1)'}};
  border:  ${({ $outlined }) => { return !$outlined ? 0 : '1px solid rgba(82, 129, 220, 1)'}};
  color: ${({ $outlined }) => { return !$outlined ? '#EFEFEF' : 'rgba(82, 129, 220, 1)'}};
  font-size: 0.75rem;
  font-style: normal;
  font-weight: 700;
  line-height: normal;

  opacity: ${({$active}) => { return $active ? 1 : .5 }};
  cursor: pointer;

  &:disabled {
    cursor: not-allowed;
  }
`;

Button.propTypes = {
  $outlined: PropTypes.bool,
  $width: PropTypes.any,
  $active: PropTypes.any,
}

export const ButtonDel = styled.button`
  display: flex;
  padding: 0.5rem 1rem;
  justify-content: center;
  align-items: center;
  align-self: center;
  width: ${({$width}) => $width ? $width : '95%'};
  border-radius: 0.3125rem;
  background: ${({ $outlined }) => { return $outlined ? 'transparent' : '#fff'}};
  border:  ${({ $outlined }) => { return !$outlined ? '1px solid #FF0000' : '1px solid #FF0001'}};
  color: ${({ $outlined }) => { return !$outlined ? '#FF0000' : 'rgba(82, 129, 220, 1)'}};
  font-size: 0.75rem;
  font-style: normal;
  font-weight: 700;
  line-height: normal;

  opacity: ${({$active}) => { return $active ? 1 : .5 }};
  cursor: pointer;

  &:disabled {
    cursor: not-allowed;
  }
`;

ButtonDel.propTypes = {
  $outlined: PropTypes.bool,
  $width: PropTypes.any
}

export const Action = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  align-self: stretch;
`;

export const Title = styled.legend`
  display: flex;
  color: #000;
  font-size: 1.5rem;
  font-style: normal;
  font-weight: 700;
  justify-content: left;
  width: 100%;
`;


export const LabelRecuperarSenha = styled.label`
  display: flex;
    justify-content: center;
    width: 100%;
    color: #4682B4;
    font-size: .7rem;
  
`;


export const LabelSwitch = styled.div`
  display: flex;
  width: 100%;
  height: auto;
  font-size: 0.8rem;
  color: #4682B4;
  justify-content: right;
  margin: auto;
  align-items: center;
`

export const SwitchBtn = styled.div`
  display: flex;
  width: 5%;
  height: auto;
  align-items: center;
  justify-content: center;
  background-color: none;
  margin: auto;
`



export const MainForm = styled.div`
    display: flex;

    justify-content: center;
    flex-wrap: wrap;
    width: ${({ $width }) => ($width ? $width : '100%')};

`