import React from 'react'
import Card from '../../componets/Card'

const page = () => {
  return (
    <div className='bg-yellow-500 min-h-screen flex flex-col items-center justify-between py-10'>
      <h1>        student id cards</h1>
      <Card  name='Rehman Ali' age={17} rollNo='23356'day='Monday' Class='2&5pm'/>
      <Card name='Ahmad Bilal' age={22} rollNo='127809' day='Saturady'Class='9&12' />
      <Card name='Shoeb Ahmad' age={17} rollNo='44090' day='Monday'Class='2&5' />
      
    </div>
  )
}

export default page
