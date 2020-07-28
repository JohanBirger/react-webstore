import styled from'styled-components';
import { dom } from '@fortawesome/fontawesome-svg-core'

dom.watch()

export const Button = styled.button`
text-transform:capitalize;
font-size:1rem;
background: transparent;
border: 0.1rem solid transparent;
color: ${props => props.theme.main};
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


Button.defaultProps = {
    theme:{
        main: "var(--mainWhite)"
    }
}

export const theme = {
    main: "var(--mainWhite)"
}