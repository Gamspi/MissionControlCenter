import React, {FC} from 'react';
import  {createGlobalStyle} from "styled-components";
import './Core.scss'

const Core: FC = () => {
    const Global = createGlobalStyle`
      * {
        box-sizing: border-box;
        margin: 0;
        padding: 0;
        color: white;
      }

      body {
        background: #2e2e2e;

      }
    `
    return (
        <>
            <Global/>


        </>
    );
};

export default Core;
