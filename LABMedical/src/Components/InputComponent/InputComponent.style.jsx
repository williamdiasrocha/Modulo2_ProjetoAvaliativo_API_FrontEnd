import styled from 'styled-components';

export const InputGroup = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: ${({ $width }) => ($width ? $width : '100%')};
`;

export const Label = styled.label`
  display: flex;
  align-items: flex-start;
  gap: 0.625rem;
  align-self: stretch;
  color: ${({$color}) => { return $color === 'danger' ? '#BE2E2E' : '#5281DC'}};
  font-size: 0.75rem;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  width: 80%;

`;

export const InputContainer = styled.div`
  display: flex;
  justify-content: baseline;
  justify-items: baseline;
  flex-wrap: wrap;
  gap: 2vw;
  width: 100%;
 
`
export const Input = styled.input`
  display: flex;
  padding: 0.3rem;
  
  align-items: flex-start;
  align-self: stretch;
  border-radius: 0.2rem;
  border: 1px solid ${({$color}) => { return $color === 'danger' ? '#BE2E2E' : '#5281DC'}};
  width: ${({ $width }) => ($width ? $width : '100%')};
  height: ${({ $height }) => ($height ? $height : '100%')};
  
  `;

export const TextArea = styled.textarea`
  display: flex;
  padding: 0.5rem;
  align-items: flex-start;
  align-self: stretch;
  border-radius: 0.3125rem;
  border: 1px solid ${({$color}) => { return $color === 'danger' ? '#BE2E2E' : '#5281DC'}};;
  height: ${({ $height }) => ($height ? $height : '100%')};

`;


export const Icon = styled.button`
  position: absolute;
  cursor: pointer;
  background: transparent;
  border: none;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: .5rem 13.3rem;
  color: ${({$color}) => { return $color === 'danger' ? '#BE2E2E' : '#5281DC'}};;
`