import styled from'styled-components';

export const ButtonContainer = styled.button`
text-transform:capitalize;
font-size:1rem;
background: transparent;
border: 0.1rem solid transparent;
color: var(--mainBlack);
color:${props => props.cart ? "var(--mainYellow)":"var(--mainBlack)"};
padding:0.2rem 0.5rem;
cursor:pointer;
margin:0.2rem 0.5rem 0.2rem 0;
transition:all 0.35s ease-in-out;
&:hover{
    background:${props => props.cart ? "var(--mainYellow)":"var(--mainBlack)"};
    color: var(--mainWhite);
    border: 0.1rem solid var(--mainBlack);
    border-color:${props => props.cart ? "var(--mainYellow)":"var(--mainBlack)"};
    border-radius:0.1rem;
}
&:focus{
    outline:none;
}

`;
