import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { AllCommunityModule, ModuleRegistry } from 'ag-grid-enterprise';
import './index.css'
import App from './App.tsx'
ModuleRegistry.registerModules([AllCommunityModule]);
createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
