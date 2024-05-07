import React from 'react'

function Navbar({data}) {
  return (
    <div className='w-full px-16 py-3 flex justify-between items-center'>
        <img className='w-24 h-25 object-cover' src="https://www.scdn.co/i/_global/open-graph-default.png"></img>
        <div className='flex p-2 bg-orange-600 text-white rounded-md text-sm gap-4'>
           <h3>Favourites</h3>
           <h4>{data.filter(item=>item.added).length}</h4>
        </div>
    </div>
  )
}

export default Navbar