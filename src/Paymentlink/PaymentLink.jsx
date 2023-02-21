import './paymentlink.css'
import React from 'react'
import { RxDotFilled } from "react-icons/rx";
import { useNavigate } from 'react-router-dom';
export default function PaymentLink(props) {
  const navigate = useNavigate()

  return (
    <div className='Paymentlink'>
      <div className='Paymentlink_wrap'>
        <div className='Paymentlink_head'>
          <div className='Paymentlink_head_top'>

            <div className='title'>
              <h1>Payment Links</h1>
              <p>You have generated 5 payment links</p>
            </div>
            <button onClick={() => { navigate('/newlink') }}  >Create new link</button>
          </div>

          <div className='Paymentlink_head_buttom'>
            <div className='Paymentlink_head_buttom_left'>
              <p>Link Title</p>
              <p className='Paymentlink_head_buttom_left_P'>Type</p>
            </div>


            <div className='Paymentlink_head_buttom_left'>
              <p>Amount</p>
              <p className='Paymentlink_head_buttom_left_P'>Status</p>
            </div>
          </div>

          
        </div>
        <div className='Links_cont'>
          <div className='Links'>
            <div className='Paymentlink_head_buttom_left'>
              <p>Mycoin store</p>
              <p>One-time</p>
            </div>
            <div className='Paymentlink_head_buttom_left'>
              <div>
                <p>KES 30,405.02</p>
                <p className='Paymentlink_head_buttom_left_P1'>Fixed</p>
              </div>
              <div className='active'>
                <RxDotFilled color={'green'} />
                <p>Active</p>
              </div>
            </div>
          </div>
          {/* <div className='Links_navs'>
            <p style={{ color: '#7139CD' }} >Preview link</p>
            <p>Copy link</p>
            <p>Manage link</p>
          </div> */}
        </div>

      </div>
    </div>
  )
}
