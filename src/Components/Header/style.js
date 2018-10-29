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

export const Repo = styled.div`
    button{
        width: 120px;
        height: 35px;
        border: 0;
        background-color: #000;
        color: #fff;
        display: flex;
        align-items: center;
        justify-content: center;
        border-radius: 5px;
        margin: 30px 15px 30px 0;
        cursor: pointer;
    }

    ul{
        list-style: none;

        li{
            font-size: 14px;
            color: #000;
            line-height: 20px;
        }
    }

    @media screen and (max-width: 768px) {
        
            button{
                width: 100%;
                margin: 30px 0 50px 0;
            }
       
    }
`; 


export const Star = styled.div`
    button{
        width: 120px;
        height: 35px;
        border: 0;
        background-color: #000;
        color: #fff;
        display: flex;
        align-items: center;
        justify-content: center;
        border-radius: 5px;
        margin: 30px 0 30px 0;
        cursor: pointer;
    }

    ul{
        list-style: none;

        li{
            font-size: 14px;
            color: #000;
            line-height: 20px;
        }
    }

    @media screen and (max-width: 768px) {
        
        button{
            width: 100%;
            margin: 30px 0 50px 0;
        }
       
    }
`; 
