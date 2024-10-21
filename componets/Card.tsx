interface Tcard{
    name:string;
    age:number;
    rollNo:string;
    day:string;
    Class:string;

}
import React from 'react'

const Card = ({name , age ,rollNo ,day ,Class } :Tcard) => {
  return (<div className='flex flex-col bg-red-400 rounded-lg p-4' style={{ border: '2px solid black' }}>


      <h3 className='text-xl font-semibold text-gray-800'> Name:{name}</h3>
      <p className='text-gray-600'>Age:{age}</p>
      <p className='text-gray-600'>Roll No{rollNo}</p>
      <p className='text-gray-600'>Day:{day}</p>
      <p className=' text-gray-600'>Class:{Class}</p>

    </div>
  );
}

export default Card
