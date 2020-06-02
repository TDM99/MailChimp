import styled from 'styled-components';

export const Container = styled.div`
    text-align: center;
    margin: 80px auto;
    max-width: 380px;
    background-color: rgb(36, 41, 46);
    border-radius: 25px;
    padding: 20px;
`
export const H1 = styled.h1`
    color: #fff;
    font-weight: 400;
`
export const P = styled.p`
    color: rgb(160, 162, 164);
    font-size: 17px;
    margin-bottom: 20px;
`
export const Input = styled.input`
    border: none;
    background-color: rgb(53, 59, 66);
    padding: 20px 15px;
    color: rgb(172, 174, 178);
    font-size: 15px;
    border-radius: 12px;
    margin-top: 15px;
    outline: none;
    width: 40%;
    margin-right: 10px;

    &[type="email"]{
        width: 90%;
    }
    &:last-of-type{
        margin-right: 0;
    }
`
export const FsName = styled.div`
    display: inline;

    @media (max-width: 678px){
        input{
            width: 90%;
            margin: 15px 0;
        }
    }
`
export const Button = styled.button`
    font-size: 17px;
    width: 97%;
    margin: 35px 0 15px 0;
    border: none;
    padding: 20px;
    border-radius: 12px;
    background-color: rgb(0, 102, 255);
    color: rgb(255, 255, 255);
    font-weight: 700;
    box-shadow: 0 2px 6px rgba(0, 102, 255, 0.767);
    outline: none;
`