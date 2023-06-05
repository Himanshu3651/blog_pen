"use client";
import React from 'react'
//import { Children } from 'react/cjs/react.production.min'
import '@styles/global.css';
import Nav from "@components/Nav";
import Provider from "@components/Provider";
import { ThemeProvider } from 'next-themes';

export const metadata={
    title:"A Creative Pen",
    description:'Latest Blogs'
}

const RootLayout = ({children}) => {
  return (
    <html lang='en'>
        <body>
           
            <Provider>
            <div className='main'>
                <div className='gradient'/>
            </div>
            <main className='app'>
                <Nav/>
                {children}
            </main>
            </Provider>
            
        </body>
    </html>
  )
}

export default RootLayout