import styled from'styled-components';
import { faHome } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { dom } from '@fortawesome/fontawesome-svg-core'

dom.watch()

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
