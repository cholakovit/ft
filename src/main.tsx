import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

const clientQuery = new QueryClient({ defaultOptions: { queries: { staleTime: 5000, gcTime: 3 * ( 60 * 1000 ) } } })

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <QueryClientProvider client={clientQuery}>
      <App />
    </QueryClientProvider>
  </React.StrictMode>,
)
