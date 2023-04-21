import React from 'react'
import reactLogo from '../../image/logo.svg'
import search from '../../image/search.svg'
import { Button } from 'antd'

// import { Search } from '../../Icon/Search'
import './styles.css'
function Header() {
    return (
        <div className='header'>
            <img className='header_logo' src={reactLogo} alt="" />
            <div className='header_bt'>
                <Button type="primary">Liên hệ</Button>
                <div className='header_bt_search'>
                    <img src={search} alt="" />
                </div>
            </div>

        </div>
    )
}

export default Header