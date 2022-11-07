import React from 'react'
import { Footer } from './Footer'
import { TopNav } from './TopNav'

export const Layout = ({children}) => {
  return (
    <div>
       <TopNav/>
     <div className='layout pt-5 mt-5 '>{children}</div>  
    
        <Footer/>
        </div>
  )
}
