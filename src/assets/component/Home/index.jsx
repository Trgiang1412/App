import React, { useEffect, useState } from 'react'
import { Popover, Steps, Row, Col, Button, Card, Table } from 'antd';
import arrow from '../../image/arrow.svg'
import axios from 'axios';
import './styles.css'
function Home() {
  const [data, setData] = useState()
  const [item, setItem] = useState()
  const [count, setCount] = useState()
    useEffect(() => {
      axios.get(`https://mocki.io/v1/e32d215a-360a-45e6-8155-ecae0af80225`)
      .then(res => {
        setData(res.data.data.order.getByCodeAndPhone)
      })
      .catch(error => console.log(error));
    }, [])
    const customDot = (dot, { status, index }) => (
        <Popover
            content={
                <span>
                    step {index} status: {status}
                </span>
            }
        >
            {dot}
        </Popover>
    );
    useEffect(() => {
        if(data?.fullEvents?.length > 0){
            const _data = data
            const list = _data?.fullEvents?.map( (i, index) => {
                i.title = i.name
                return i
            })
            const totalPass = list.filter(i => i.state == 'PAST')
            setCount(totalPass.length)
            setItem(list)
        }
        
      }, [data])
   
    const columns = [
        {
            title: 'STT',
            dataIndex: 'STT',
            key: 'STT',
            width: 60,
            align: 'center',
            render: (value, record, index) => index + 1,
        },
        {
            title: 'Hình ảnh',
            dataIndex: 'product.imageURL',
            key: 'product.imageURL',
            align: 'center',
            render: (value, record, index) => <><img style={{width: '70px', height: '60px'}} src={record.product.imageURL} alt="" /></>,
        },
        {
            title: 'Mã sản phẩm',
            dataIndex: 'productCode',
            key: 'productCode',
        },
        {
            title: 'Tên Sản phẩm',
            dataIndex: 'productName',
            key: 'productName',
        },
        {
            title: 'Phân loại',
            dataIndex: 'productCode',
            key: 'productCode',
        },
        {
            title: 'Số lượng',
            dataIndex: 'quantity',
            key: 'quantity',
            width: 80,
            render: (value, record, index) => value + ' ' + record.product.uom.name,
        },
    ];
    return (
        <>
            <div className='menu'>
                <div className='menu_block'>
                    <span className='menu_block_text'>Trang chủ </span><img src={arrow} alt="" /> <span className='menu_block_text'>Tra cứu hành trình đơn hàng</span>
                </div>
            </div>
            <div className='home_lt'>
                <div className='home_lt_block'>
                    <Row>
                        <Col span={6} style={{ marginLeft: '2rem' }}>
                            <div>
                                <p className='home_lt_block_text'>Lộ trình đơn hàng</p>
                                <p className='home_lt_block_text_t'>Mã đơn hàng:<span>{data?.number}</span></p>
                            </div>
                        </Col>
                        <Col span={10}>
                            <div>
                                <Steps
                                    progressDot={customDot}
                                    items={[
                                        {
                                            title: data?.senderAddress,
                                        },
                                        {
                                            title: data?.receiverContactAddress,
                                        },

                                    ]}
                                />
                            </div>
                        </Col>
                    </Row>
                </div>
                <div className='home_lt_qt'>
                    <Row>
                        <Col span={20} offset={2}>
                            <Steps current={count} size="small" labelPlacement="vertical" items={item} />
                        </Col>
                    </Row>
                </div>
                <div className='home_bt'>
                    <Button className='home_bt_tt' type="primary">Thông tin chi tiết</Button>
                    <Button className='home_bt_kn'>Khiếu nại</Button>
                </div>
            </div>
            <div className='home_tt'>
                <Row>
                    <Col span={6}>
                        <Card>
                            <p className='card_title'>Thông tin đơn hàng</p>
                            <div className='card_content_one'>
                                <p className='card_content_text'>Người nhận</p>
                                <p className='card_content_ct'>{data?.receiverContactName}</p>
                                <p className='card_content_ct'>{data?.receiverContactPhone}</p>
                                <p className='card_content_ct'>{data?.receiverContactAddress}</p>
                            </div>

                            <div className='card_content_tow'>
                                <p className='card_content_text'>Người gửi</p>
                                <p className='card_content_ct'>	{data?.senderName}</p>
                                <p className='card_content_ct'>	{data?.senderPhone}</p>
                                <p className='card_content_ct'>	{data?.senderAddress}</p>
                            </div>
                            <div className='card_content_three'>
                                <p className='card_content_t'>Đơn vị vận chuyển: <span className='card_content_ct cart_vt'>Giao hàng nhanh</span> </p>
                                <p className='card_content_t'>Phương thức thanh toán: <span className='card_content_ct cart_vt'>COD</span> </p>
                            </div>
                        </Card>
                    </Col>
                    <Col span={1}>

                    </Col>
                    <Col className='block_tow' span={17}>
                        <Col span={18} offset={3} className='table_ct'>
                            <p className='table_title'>Chi tiết đơn hàng</p>
                            <Table
                                tableLayout="fixed"
                                pagination={false}
                                columns={columns}
                                dataSource={data?.items}
                            />
                            <p className='table_title_t'>Tổng thanh toán đơn hàng: <span className='table_total'>{data?.total.toLocaleString()} đ</span></p>
                        </Col>
           
                    </Col>
                </Row>
            </div>
        </>


    )
}

export default Home