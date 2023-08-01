import styled from 'styled-components';

export const ContainerInput = styled.div`
    display: block;
    width: 95%;
    height: 7vw;
    border-radius: 10px;
    margin: 0 auto;

    .container-faq {
        display: flex;
        justify-content: center;
        margin: 0 auto 2vw;
    }
`

export const InputArea = styled.form`
display: flex;
width: 100%;
justify-content: space-between;
gap: 1px;
;
input {
    width: 92%;
}
`

export const ContainerCards = styled.div`
    display: flex;
    justify-content: space-around;
    gap: 16px;
    height: 100%;
    width: 100%;
    flex-wrap: wrap;
`