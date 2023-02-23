import './coinstore.css'

import React from 'react'
import { Navigate, useNavigate } from 'react-router-dom';
import { MdOutlineContentCopy } from "react-icons/md";
import { MdDeleteOutline } from "react-icons/md";
import { BsThreeDots } from "react-icons/bs";
import { AiOutlineArrowLeft } from "react-icons/ai";
import { BsFunnel } from "react-icons/bs";
import { TbQrcode } from "react-icons/tb";
export default function CoinStore(props) {
 const  Navigate = useNavigate()
  return (
    <div className='coinStore'>
      <div className='coinStore_top'>
        <div  className='coinStore_top_nav'>
          <AiOutlineArrowLeft onClick={() => { Navigate('/') }} fontSize={25} />
          <p>Back to Payment Links</p>
        </div>
      </div>


      <div className='coinStore_bottom'>
        <div className='coinStore_bottom_left'>
          <div className='coinStore_bottom_left_top'>
            <div className='coinStore_bottom_left_top_wrap'>

              <div className='coinStore_bottom_left_top_top'>
                <h3>Mycoin store</h3><button className='coinStore_bottom_left_top_top_button'>Preview link</button>
                <span className='coinStore_bottom_left_top_span'>
                  <TbQrcode />
                  <p>QR code</p>
                </span>
              </div>

              <div className='coinStore_bottom_left_top_bottom'>
                <div className='coinStore_bottom_left_top_bottom_P'>
                  <p>linkgflink.bottom_left_top_wrap_bottom</p>
                </div>

                <div className='coinStore_bottom_left_top_wrap_bottom_button'><MdOutlineContentCopy /></div>
                <div className='coinStore_bottom_left_top_wrap_bottom_button'><MdDeleteOutline /></div>
                <div className='coinStore_bottom_left_top_wrap_bottom_button'><BsThreeDots /></div>
              </div>
            </div>
          </div>

          <div className='coinStore_bottom_left_middle'>
            <div className='coinStore_bottom_left_middle_wrap'>
              <div className='coinStore_bottom_left_middle_details'> <p>Status</p> <span><p>Active</p></span></div>
              <div className='coinStore_bottom_left_middle_details'> <p>Date created</p> <p>Jun, 26,7:13 PM</p></div>
              <div className='coinStore_bottom_left_middle_details'> <p>Link type</p> <p>one-time</p></div>
              <div className='coinStore_bottom_left_middle_details'> <p>Current type</p> <p>NGN</p></div>
              <div className='coinStore_bottom_left_middle_details'> <p>Amount</p> <p>NGN 50,000</p></div>
            </div>
          </div>

          <div className='coinStore_bottom_left_bottom'>
            <div className='coinStore_bottom_left_bottom_wrap'>
              <div className='coinStore_bottom_left_middle_details'><h4>Accepted currencies</h4> <p>Manage</p></div>
              <div className='coinStore_bottom_left_middle_details'><div><p>Bitcoin (BTC)</p></div><button>Disble</button></div>
              <div className='coinStore_bottom_left_middle_details'><div><p>Bitcoin (BTC)</p></div><button>Disble</button></div>
              <div className='coinStore_bottom_left_middle_details'><div><p>Bitcoin (BTC)</p></div><button>Disble</button></div>
              <div className='coinStore_bottom_left_bottom_P'>
                <p>Click "Manage" to turn on additional payment methods. Accepting more payment methods may improve conversion, particularly fro international customers.</p>
              </div>

            </div>
          </div>
        </div>

        <div className='coinStore_bottom_rigth'>
          <div className='coinStore_bottom_rigth_wrap'>
            <div className='coinStore_bottom_rigth_wrap_top'>
              <div className='coinStore_bottom_rigth_wrap_top_title'><p>Recent activities</p><div className='coinStore_bottom_rigth_wrap_top_sort'><BsFunnel /> Sort by</div></div>
              <div className='coinStore_bottom_rigth_wrap_top_title'><p>Amount</p><p>Customer</p></div>

              <div className='coinStore_bottom_rigth_wrap_top_status_wrap'>
                <div className='coinStore_bottom_rigth_wrap_top_status'>
                  <div className='coinStore_bottom_rigth_wrap_top_status_text1'><h5>NGN 30,000.02</h5><p>BTC 0.3044</p></div>
                  <div className='coinStore_bottom_rigth_wrap_top_status_text2'><h5>Christian jumbo Akpanudo</h5><p>nwachukwuoparah@gmail.com</p></div>
                </div>
                <div className='coinStore_bottom_rigth_wrap_top_status'>
                  <div className='coinStore_bottom_rigth_wrap_top_status_text1'><h5>NGN 30,000.02</h5><p>BTC 0.3044</p></div>
                  <div className='coinStore_bottom_rigth_wrap_top_status_text2'><h5>Christian jumbo Akpanudo</h5><p>nwachukwuoparah@gmail.com</p></div>
                </div>
                <div className='coinStore_bottom_rigth_wrap_top_status'>
                  <div className='coinStore_bottom_rigth_wrap_top_status_text1'><h5>NGN 30,000.02</h5><p>BTC 0.3044</p></div>
                  <div className='coinStore_bottom_rigth_wrap_top_status_text2'><h5>Christian jumbo Akpanudo</h5><p>nwachukwuoparah@gmail.com</p></div>
                </div>
                <div className='coinStore_bottom_rigth_wrap_top_status'>
                  <div className='coinStore_bottom_rigth_wrap_top_status_text1'><h5>NGN 30,000.02</h5><p>BTC 0.3044</p></div>
                  <div className='coinStore_bottom_rigth_wrap_top_status_text2'><h5>Christian jumbo Akpanudo</h5><p>nwachukwuoparah@gmail.com</p></div>
                </div>
                <div className='coinStore_bottom_rigth_wrap_top_status'>
                  <div className='coinStore_bottom_rigth_wrap_top_status_text1'><h5>NGN 30,000.02</h5><p>BTC 0.3044</p></div>
                  <div className='coinStore_bottom_rigth_wrap_top_status_text2'><h5>Christian jumbo Akpanudo</h5><p>nwachukwuoparah@gmail.com</p></div>
                </div>
                <div className='coinStore_bottom_rigth_wrap_top_status'>
                  <div className='coinStore_bottom_rigth_wrap_top_status_text1'><h5>NGN 30,000.02</h5><p>BTC 0.3044</p></div>
                  <div className='coinStore_bottom_rigth_wrap_top_status_text2'><h5>Christian jumbo Akpanudo</h5><p>nwachukwuoparah@gmail.com</p></div>
                </div>
                <div className='coinStore_bottom_rigth_wrap_top_status'>
                  <div className='coinStore_bottom_rigth_wrap_top_status_text1'><h5>NGN 30,000.02</h5><p>BTC 0.3044</p></div>
                  <div className='coinStore_bottom_rigth_wrap_top_status_text2'><h5>Christian jumbo Akpanudo</h5><p>nwachukwuoparah@gmail.com</p></div>
                </div>
                <div className='coinStore_bottom_rigth_wrap_top_status'>
                  <div className='coinStore_bottom_rigth_wrap_top_status_text1'><h5>NGN 30,000.02</h5><p>BTC 0.3044</p></div>
                  <div className='coinStore_bottom_rigth_wrap_top_status_text2'><h5>Christian jumbo Akpanudo</h5><p>nwachukwuoparah@gmail.com</p></div>
                </div>
                <div className='coinStore_bottom_rigth_wrap_top_status'>
                  <div className='coinStore_bottom_rigth_wrap_top_status_text1'><h5>NGN 30,000.02</h5><p>BTC 0.3044</p></div>
                  <div className='coinStore_bottom_rigth_wrap_top_status_text2'><h5>Christian jumbo Akpanudo</h5><p>nwachukwuoparah@gmail.com</p></div>
                </div>
                <div className='coinStore_bottom_rigth_wrap_top_status'>
                  <div className='coinStore_bottom_rigth_wrap_top_status_text1'><h5>NGN 30,000.02</h5><p>BTC 0.3044</p></div>
                  <div className='coinStore_bottom_rigth_wrap_top_status_text2'><h5>Christian jumbo Akpanudo</h5><p>nwachukwuoparah@gmail.com</p></div>
                </div>
                <div className='coinStore_bottom_rigth_wrap_top_status'>
                  <div className='coinStore_bottom_rigth_wrap_top_status_text1'><h5>NGN 30,000.02</h5><p>BTC 0.3044</p></div>
                  <div className='coinStore_bottom_rigth_wrap_top_status_text2'><h5>Christian jumbo Akpanudo</h5><p>nwachukwuoparah@gmail.com</p></div>
                </div>
                <div className='coinStore_bottom_rigth_wrap_top_status'>
                  <div className='coinStore_bottom_rigth_wrap_top_status_text1'><h5>NGN 30,000.02</h5><p>BTC 0.3044</p></div>
                  <div className='coinStore_bottom_rigth_wrap_top_status_text2'><h5>Christian jumbo Akpanudo</h5><p>nwachukwuoparah@gmail.com</p></div>
                </div>
                <div className='coinStore_bottom_rigth_wrap_top_status'>
                  <div className='coinStore_bottom_rigth_wrap_top_status_text1'><h5>NGN 30,000.02</h5><p>BTC 0.3044</p></div>
                  <div className='coinStore_bottom_rigth_wrap_top_status_text2'><h5>Christian jumbo Akpanudo</h5><p>nwachukwuoparah@gmail.com</p></div>
                </div>
                <div className='coinStore_bottom_rigth_wrap_top_status'>
                  <div className='coinStore_bottom_rigth_wrap_top_status_text1'><h5>NGN 30,000.02</h5><p>BTC 0.3044</p></div>
                  <div className='coinStore_bottom_rigth_wrap_top_status_text2'><h5>Christian jumbo Akpanudo</h5><p>nwachukwuoparah@gmail.com</p></div>
                </div>
                <div className='coinStore_bottom_rigth_wrap_top_status'>
                  <div className='coinStore_bottom_rigth_wrap_top_status_text1'><h5>NGN 30,000.02</h5><p>BTC 0.3044</p></div>
                  <div className='coinStore_bottom_rigth_wrap_top_status_text2'><h5>Christian jumbo Akpanudo</h5><p>nwachukwuoparah@gmail.com</p></div>
                </div>
                <div className='coinStore_bottom_rigth_wrap_top_status'>
                  <div className='coinStore_bottom_rigth_wrap_top_status_text1'><h5>NGN 30,000.02</h5><p>BTC 0.3044</p></div>
                  <div className='coinStore_bottom_rigth_wrap_top_status_text2'><h5>Christian jumbo Akpanudo</h5><p>nwachukwuoparah@gmail.com</p></div>
                </div>
                <div className='coinStore_bottom_rigth_wrap_top_status'>
                  <div className='coinStore_bottom_rigth_wrap_top_status_text1'><h5>NGN 30,000.02</h5><p>BTC 0.3044</p></div>
                  <div className='coinStore_bottom_rigth_wrap_top_status_text2'><h5>Christian jumbo Akpanudo</h5><p>nwachukwuoparah@gmail.com</p></div>
                </div>
                <div className='coinStore_bottom_rigth_wrap_top_status'>
                  <div className='coinStore_bottom_rigth_wrap_top_status_text1'><h5>NGN 30,000.02</h5><p>BTC 0.3044</p></div>
                  <div className='coinStore_bottom_rigth_wrap_top_status_text2'><h5>Christian jumbo Akpanudo</h5><p>nwachukwuoparah@gmail.com</p></div>
                </div>
                <div className='coinStore_bottom_rigth_wrap_top_status'>
                  <div className='coinStore_bottom_rigth_wrap_top_status_text1'><h5>NGN 30,000.02</h5><p>BTC 0.3044</p></div>
                  <div className='coinStore_bottom_rigth_wrap_top_status_text2'><h5>Christian jumbo Akpanudo</h5><p>nwachukwuoparah@gmail.com</p></div>
                </div>
                <div className='coinStore_bottom_rigth_wrap_top_status'>
                  <div className='coinStore_bottom_rigth_wrap_top_status_text1'><h5>NGN 30,000.02</h5><p>BTC 0.3044</p></div>
                  <div className='coinStore_bottom_rigth_wrap_top_status_text2'><h5>Christian jumbo Akpanudo</h5><p>nwachukwuoparah@gmail.com</p></div>
                </div>
                <div className='coinStore_bottom_rigth_wrap_top_status'>
                  <div className='coinStore_bottom_rigth_wrap_top_status_text1'><h5>NGN 30,000.02</h5><p>BTC 0.3044</p></div>
                  <div className='coinStore_bottom_rigth_wrap_top_status_text2'><h5>Christian jumbo Akpanudo</h5><p>nwachukwuoparah@gmail.com</p></div>
                </div>
              </div>

            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
