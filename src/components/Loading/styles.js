import styled from 'styled-components';

export const Container = styled.div`
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%); 
`
export const Lcontainer = styled.div`
    width: 150px;
    height: 150px;
    box-sizing: border-box;
    border-radius: 50%;
    border-top: 8px solid #e74c3c;
    position: relative;
    animation: a1 2s linear infinite;

    &::before, &::after {
        content: '';
        width: 150px;
        height: 150px;
        position: absolute;
        left: 0;
        top: -8px;
        box-sizing: border-box;
        border-radius: 50%; 
    }

    &::before{
        border-top: 8px solid #e67e22;
        transform: rotate(120deg);
    }
    &::after{
        border-top: 8px solid #3498db;
        transform: rotate(240deg);
    }

    span{
        font-family: "montserrat", sans-serif;
        position: absolute;
        width: 150px;
        height: 150px;
        color: #fff;
        text-align: center;
        line-height: 150px;
        animation: a2 2s linear infinite;
    }

    @keyframes a1 {
        to{
        transform: rotate(360deg); 
        }
    }

    @keyframes a2 {
        to{
            transform: rotate(-360deg); 
        }
    }
`
