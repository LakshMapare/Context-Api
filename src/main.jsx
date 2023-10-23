import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import  MyContext  from './Healper/Context.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)

export default function RootLayout({children}){
  return(
    <html lang='en'>
      <body suppressHydrationWarning>
        <MyContext value={username}>
          {children}

        </MyContext>
        
      </body>

    </html>
  )
}
