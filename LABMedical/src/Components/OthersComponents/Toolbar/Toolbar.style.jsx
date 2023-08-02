import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  width: 100%;
  height: 3rem;
  justify-content: space-between;
  background-color: #0f4571; 

  color: white;
`;

export const UserHeader = styled.div`
    display: flex;
    align-items: center;
    width: 12rem;
    margin-right: 3%;
    padding: 0;
    justify-content: space-between;
    

img{
  width: 3vw;
  height: 3vw;
  cursor: pointer;
  margin: .25vw auto;
  border-radius: 1.5rem;
  padding: .3rem;
  border: .1rem solid white;
}

`

export const TxtHeader = styled.h3`
    display: flex;
    justify-content: left;
    width: 60vw;
    margin: 0vw 0 0 1vw;
    padding-left: 0vw;
    align-items: center;

`

export const TxtUser = styled.h6`
    display: flex;
    justify-content: right;
    width: 60vw;
    margin: 0;
    padding-right: .5vw;
`