import React, {ReactElement} from 'react';
import styled from "styled-components";

interface props {
    position?: string
    children?: ReactElement
}

const Container = (props: props) => {
    const Container = styled.div<props>`
      max-width: 1200px;
      margin: 0 auto;
      padding: 10px;
      box-sizing: content-box
    `
    return <Container {...props}/>


};

export default Container;
