import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Allcontext from './context/Allcontext.jsx'

createRoot(document.getElementById('root')).render(
    <Allcontext>
        <App />
    </Allcontext>
)
