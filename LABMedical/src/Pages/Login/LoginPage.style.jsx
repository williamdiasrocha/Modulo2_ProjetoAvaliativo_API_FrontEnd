import styled from "styled-components";
import PropTypes from "prop-types";

export const Login = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  justify-content: center;
  align-items: center;
`;

export const ContainerLogin = styled.div`
  display: flex;
  flex-direction: space-around;
  align-items: center;
  margin: 0 auto !important;
  width: 100%;
  height: auto;
  font-size: 0.9em;
`;
export const ImageLogin = styled.img`
  display: flex;
  justify-content: center;
  width: 40vw;
  height: auto;
  margin: 0 10vw;
`;

/* export const FormLoginStyle = styled.form`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 0 auto !important;
  color: "black";
  width: 30vw;
  height: 90vh;
  font-size: 0.9em;
  margin: 0em;
  padding: 0.4em 1em;
  position: relative;

  legend {
    font-size: 3rem;
    font-weight: bold;
    color: #424949 ;
    width: 20vw;

    margin-bottom: 4vh;
  }

  .criarConta {
    font-size: .7rem;
    margin-bottom: .5rem;
    text-align: start;

  }
` */

export const LabelCriarConta = styled.div`
  display: flex;
  justify-content: right;
  width: 20vw;
  margin-bottom: 0;
  align-items: center;
`;

export const DivCriarConta = styled.div`
  display: flex;
  justify-content: right;

  width: 95vw;
  margin: 2vw 0 50vw;
  align-items: center;
  position: absolute;
`;

export const BarraCentral = styled.div`
  display: flex;
  justify-content: center !important;
  width: 0.35vw;
  height: 100vh;
  background: #355495;
  margin-left: 5vw;
`;

export const ButtonHeaderLogin = styled.button`
  background: ${({ $outlined }) => {
    return $outlined ? "transparent" : "#fff";
  }};
  width: 7vw;
  font-size: 0.9em;
  margin-left: 1rem;
  padding: 0.2em 0.4em 0.2em;
  border: 1.5px solid #4682b4;
  border-radius: 7px;
  color: #4682b4;
  font-weight: bold;

  &:disabled {
    cursor: not-allowed;
  }
`;

ButtonHeaderLogin.propTypes = {
  $outlined: PropTypes.bool,
};
