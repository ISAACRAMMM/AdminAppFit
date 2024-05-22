import { useState } from 'react'

import './App.css'
import { TablaAlimentos } from './components/TablaAlimentos'
import { AgregarAlimento } from './components/Agregar'

function App() {
  

  return (
   <>
<AgregarAlimento />
<TablaAlimentos />
</>
  )
} 

export default App
