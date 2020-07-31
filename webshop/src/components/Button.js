import styled from'styled-components';
import { dom } from '@fortawesome/fontawesome-svg-core'

dom.watch()

export const Button = styled.button`
text-transform:capitalize;
font-size:1rem;
background: transparent;
border: 0.1rem solid transparent;
color:${props => props.cart ? "var(--appleBlue)":"var(--mainBlack)"};
padding:0.2rem 0.5rem;
cursor:pointer;
margin:0.2rem 0.5rem 0.2rem 0;
transition:all 0.35s ease-in-out;
border-radius:1rem;
letter-spacing:0.05rem !important;
&:hover{
    background:${props => props.cart ? "var(--appleBlue)":"var(--mainBlack)"};
    color: var(--mainWhite);
    border: 0.1rem solid var(--mainBlack);
    border-color:${props => props.cart ? "var(--appleBlue)":"var(--mainBlack)"};
    border-radius:1rem;
}
&:focus{
    outline:none;
}

`;
