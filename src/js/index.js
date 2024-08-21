import React from 'react'
import {createRoot} from 'react-dom/client'
import "../styles/index.css";
import Layout from './layout.js'

createRoot(document.querySelector("#app")).render(<Layout/>)

