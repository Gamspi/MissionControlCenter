import React, {ReactElement} from 'react';
import styled from "styled-components";

interface props {
    position?:string
    background?:string
    children?:ReactElement
}

const Header = (props: props) => {
    const SHeader = styled.header<props>`
      position: ${props=> props.position||'fixed'};
      background: ${props=> props.position||"#000"};
      min-width: 100%;
    `

    return <SHeader {...props}/>
};

export default Header;
