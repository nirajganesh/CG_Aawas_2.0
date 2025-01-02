import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Route, Routes } from 'react-router'
import { AuthLayout } from './components/layouts/AuthLayout.tsx'
import './index.css'
import { DashboardPage } from './pages/dashboard/index.tsx'
import { LoginPage } from './pages/onboarding/signin/index.tsx'

createRoot(document.getElementById('root')!).render(
  <BrowserRouter>
    <StrictMode>
      <Routes>
        {/* onboarding */}
        <Route path="/login" element={<LoginPage />} />

        <Route path="/" element={<AuthLayout />}>
          {/* dashboard */}
          <Route path="/dashboard" element={<DashboardPage />} />
        </Route>
      </Routes>
    </StrictMode>
  </BrowserRouter>
)
