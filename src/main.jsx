import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import { ClerkProvider } from '@clerk/clerk-react'
import App from './App'
import './index.css'

const clerkPubKey = import.meta.env.VITE_CLERK_PUBLISHABLE_KEY

if (!clerkPubKey) {
  throw new Error("Missing Publishable Key")
}

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter future={{ v7_startTransition: true }}>
      <ClerkProvider 
        publishableKey={clerkPubKey}
        routerPush={(to) => window.history.pushState(null, '', to)}
        routerReplace={(to) => window.history.replaceState(null, '', to)}
      >
        <App />
      </ClerkProvider>
    </BrowserRouter>
  </React.StrictMode>
)