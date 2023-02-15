import styled from "@emotion/styled";

const StartPageWrapper=styled.div`
display: flex;
flex-direction: column;
justify-content: center;
align-items: flex-start;
padding-left: 50px;
padding-right: 50px;
`

const WrapperText=styled.p`
color: white;
font-size: 45px;
font-weight: 200;
margin:0;
`
const ModalText=styled.p`
color: white;
font-size: 36px;
font-weight: 200;
text-align: center;
`
const MenuTitle=styled.h1`
color: white;
font-size: 100px;
font-weight: 400;
margin-bottom: 0;
margin-top: 0;
`
const MenuLink=styled.a`
color: white;
font-size: 40px;
font-weight: 200;
margin-bottom: 0;
margin-top: 0;
cursor: pointer;
&:hover {
    opacity: 0.5;
    font-weight: 400;
    color: rgb(73, 138, 235);
    }
`
const WrapperButton=styled.button`
font-size: 36px;
padding: 30px;
margin-bottom: 82px;
border-radius: 10px;
background-color: rgba(28,28,28,0);
border: 2px rgb(73, 138, 235) solid;
color: rgb(73, 138, 235);
cursor: pointer;
text-align: center;
&:hover {
    opacity: 0.5;
    }
`
const ModalButton=styled.button`
font-size: 36px;
padding: 30px;
margin-bottom: 36px;
border-radius: 10px;
background-color: rgba(28,28,28,0);
border: 2px rgb(73, 138, 235) solid;
color: rgb(73, 138, 235);
cursor: pointer;
text-align: center;
&:hover {
    opacity: 0.5;
    }
`

export {WrapperText, MenuTitle, StartPageWrapper, WrapperButton, ModalText, ModalButton, MenuLink}