import React from 'react'

function Spinner() {
    return (
        <div className='spinner-border spinner-border-sm mx-2' role='status'>
            <span className="visually-hidden">Loading...</span>
        </div>
    )
}

export default Spinner