import styled from 'styled-components';

export const Form = styled.div`
    background-color: #ccc;
    height: 60px;

    section{
        width: 100%;
        max-width: 80%;
        height: 100%;
        margin: 0 auto;
        }

    form{
        width: 100%;
        display: flex;

        input{
            width: 100%;
            height: 35px;
            margin: 10px 0 10px 0;
            padding-left: 10px;
            border: 0;
        }

        button{
            height: 35px;
            margin-top: 10px;
            border: 0;
            padding: 10px;
            cursor: pointer;
        }
    }

    
`; 