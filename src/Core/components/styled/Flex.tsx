import React, {ReactElement} from 'react';
import styled from "styled-components";

interface propsFlex {
    direction: string
    justify: string
    index: string
    children?: ReactElement
}

const Flex = (props:propsFlex) => {
    const StiledFlex = styled.div<propsFlex>`
      display: flex;
      flex-direction: ${props=>props.direction||"inherit"};
      justify-content: ${props=>props.justify||"inherit"};
      z-index: ${props=>props.index||"0"};
    `
    return <StiledFlex {...props}/>
};

export default Flex;
