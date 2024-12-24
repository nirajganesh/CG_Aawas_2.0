import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { BrowserRouter, Route, Routes } from 'react-router'
import { LoginPage } from './pages/onboarding/signin/index.tsx'
import { DashboardPage } from './pages/dashboard/index.tsx'

createRoot(document.getElementById('root')!).render(
  <BrowserRouter>
    <StrictMode>
      <Routes>
        <Route path="/" element={<App />} />

        {/* onboarding */}
        <Route path="/login" element={<LoginPage />} />

        {/* dashboard */}
        <Route path="/dashboard" element={<DashboardPage />} />
      </Routes>
    </StrictMode>
  </BrowserRouter>
)
