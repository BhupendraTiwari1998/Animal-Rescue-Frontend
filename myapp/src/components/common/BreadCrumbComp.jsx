import React from 'react'
import Breadcrumb from 'react-bootstrap/Breadcrumb';
import { Link } from 'react-router-dom'

const BreadCrumbComp = ({ title, crumb }) => {
    return (
        <div className='bread' >
            <Breadcrumb>
                <div className='d-flex mx-auto'>
                    <Breadcrumb.Item href="#"><Link to='/' className='my1'>Home</Link></Breadcrumb.Item>
                    <Breadcrumb.Item active style={{ color: 'white' }}>{crumb}</Breadcrumb.Item>
                </div>
            </Breadcrumb>
            <h1 style={{ fontSize: '45px', color: 'white', }}>{title}</h1>
        </div>
    )
}

export default BreadCrumbComp