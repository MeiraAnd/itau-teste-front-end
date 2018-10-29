import  styled from 'styled-components';

export const Container = styled.div` 

    .boxInfos{
        display: flex;
        flex-wrap: wrap;
    
        .infosUser{
            display: flex;
            margin: 40px 0 0 8px;
            

            .avatar{
                width: 150px;
                height: 150px;
                display: flex;
                align-items: center;
                
                background-color: #ccc;

                img{
                    width: 100%;
                    margin: 0 auto;
                }
            }

            .infos{
                margin: 0 10px;

                h1{
                    font-size: 20px;
                    color: #000;
                    margin-bottom: 10px;
                }

                ul{
                    list-style: none;

                    li{
                        font-size: 12px;
                    }
                }
            }
        }
    }

    @media screen and (max-width: 768px) {
        
    }
`;


