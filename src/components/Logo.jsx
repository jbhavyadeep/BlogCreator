import React from 'react';

function Logo({ width = '100px' }) {
    return (
        <div className='w-15 '>
            <img
                className='rounded-xl'
                src="https://images.pexels.com/photos/262508/pexels-photo-262508.jpeg?auto=compress&cs=tinysrgb&w=1200" />
        </div>
    )
}

export default Logo;