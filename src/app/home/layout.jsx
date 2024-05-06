import React from 'react'
import HeaderComponent from '@/components/HeaderComponent'
import FooterComponent from '@/components/FooterComponent'

const layout = () => {
  return (
    <div className="flex flex-col contianer">
      <HeaderComponent />
      <h1>Home</h1>
      <FooterComponent/>
    </div>
  )
}

export default layout