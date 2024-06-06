import React from 'react'
import './ParentOne.css'

const ParentOne = () => {
    return (
        <div className='parentOne'>
            <label className="switch">
                <input type="checkbox" />
                <span className="slider round"></span>
            </label>
        </div>
    )
}

export default ParentOne