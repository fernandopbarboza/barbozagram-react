import React from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import { ChakraProvider, defaultSystem, Theme } from '@chakra-ui/react'
import App from './App.jsx'
import './index.css'

createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <ChakraProvider value={defaultSystem}>
        <Theme appearance="dark">
          <App />
        </Theme>
      </ChakraProvider>
    </BrowserRouter>
  </React.StrictMode>
)