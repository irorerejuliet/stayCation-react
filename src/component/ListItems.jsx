import React from 'react'

const ListItems = ({mainImage, id, name, location}) => {
  return (
    <div key={id}>
      <img src={mainImage} alt={name} className='rounded-2xl w-full h-auto object-cover' />
      <h2 className='font-medium text-[1.25rem] leading-[30px] text-secondary'>{name}</h2>
      <p className='font-light text-[0.939rem] leadimg-[32.5px] text-tertiary'>{location}</p>
    </div>
  )
}

export default ListItems
