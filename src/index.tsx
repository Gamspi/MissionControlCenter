import React from "react";
import { createRoot } from 'react-dom/client';
import Core from "./Core/Core";

const container:any = document.getElementById("app");
const root = createRoot(container)
root.render(
    <Core/>
)
