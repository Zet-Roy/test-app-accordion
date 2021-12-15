import React, { useState } from 'react'
import './index.scss'

const Accordeon = ({ title, description }) => {

    const [visible, setVisible] = useState(false)

    const handleOpenBlock = () => {
        setVisible(!visible)
    }

    const styleVisible = visible ? 'BlockContent--open' : 'BlockContent--close'
    const styleIcon = visible ? 'TriangleUp' : 'TriangleDown'

    return (
        <div className='Accordeon'>
            <div className='BlockHeader' onClick={handleOpenBlock}>
                <span className='Title'>{title}</span>
                <div className={`${styleIcon}`} />
            </div>
            <div className={`BlockContent ${styleVisible}`}>
                <hr />
                <div className='BlockDescription'>
                    <img src="/images/globe_icon.png" alt="" />
                    <div className='Description'>
                        {description}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Accordeon