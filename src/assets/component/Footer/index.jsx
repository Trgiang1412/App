import React from 'react'
import qrCode from '../../image/qrCode.svg'
import qrCodeSmall from '../../image/qrCodeSmall.svg'
import appStore from '../../image/appStore.svg'
import chPlay from '../../image/chPlay.svg'
import './styles.css'
function Footer() {
  return (
    <div className='footer'>
      <div className='footer_download'>
         <div>
          <img src={qrCodeSmall} alt="" />
         </div>
         <div>
          <div>
            <img src={appStore} alt="" />
          </div>
          <div>
            <img src={chPlay} alt="" />
          </div>
         </div>
      </div>
      <div className='footer_list'>
        <ul>
          <li>Giới thiệu</li>
          <li>Sản phẩm</li>
          <li>Chính sách</li>
        </ul>
        <ul style={{marginLeft: '6rem'}}>
          <li>Tin tức</li>
          <li>Câu hỏi thường gặp</li>
        </ul>
      </div>
      <div className='footer_qr'>
        <img src={qrCode} alt="" />
      </div>
    </div>
  )
}

export default Footer