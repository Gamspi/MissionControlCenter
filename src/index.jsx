import React from "react";
import { createRoot } from 'react-dom/client';
import Core from "./Core/Core.jsx";

const container = document.getElementById("app");
const root = createRoot(container)
root.render(
    <Core/>
)
