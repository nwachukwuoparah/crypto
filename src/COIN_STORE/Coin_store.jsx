import './coinstore.css'

import React from 'react'

export default function CoinStore(props) {

  return (
    <div className='coinStore'>
      <div className='coinStore_top'>

      </div>


      <div className='coinStore_bottom'>
        <div className='coinStore_bottom_left'>
          <div className='coinStore_bottom_left_top'>
            <div className='coinStore_bottom_left_top_wrap'>

              <div className='coinStore_bottom_left_top_top'>
                <h3>Mycoin store</h3><button className='coinStore_bottom_left_top_top_button'>Preview link</button>
                <span className='coinStore_bottom_left_top_span'>
                  <p>QR code</p>
                </span>
              </div>

              <div className='coinStore_bottom_left_top_wrap_bottom'>
                <p>linkgflink.bottom_left_top_wrap_bottom</p>
                <div className='coinStore_bottom_left_top_wrap_bottom_button'></div>
                <div className='coinStore_bottom_left_top_wrap_bottom_button'></div>
                <div className='coinStore_bottom_left_top_wrap_bottom_button'></div>
              </div>
            </div>
          </div>

          <div className='coinStore_bottom_left_middle'>
            <div className='coinStore_bottom_left_middle_wrap'>
              <div className='coinStore_bottom_left_middle_details'> <p>Status</p> <span><p>Active</p></span></div>
              <div className='coinStore_bottom_left_middle_details'> <p>Date created</p> <p>Active</p></div>
              <div className='coinStore_bottom_left_middle_details'> <p>Link type</p> <p>Active</p></div>
              <div className='coinStore_bottom_left_middle_details'> <p>Current type</p> <p>Active</p></div>
              <div className='coinStore_bottom_left_middle_details'> <p>Amount</p> <p>Active</p></div>
            </div>
          </div>

          <div className='coinStore_bottom_left_bottom'>
            <div className='coinStore_bottom_left_bottom_wrap'>
              <div className='coinStore_bottom_left_middle_details'><h4>Accepted currencies</h4> <p>Manage</p></div>
              <div className='coinStore_bottom_left_middle_details'><div><p>Bitcoin (BTC)</p></div><button>Disble</button></div>
              <div className='coinStore_bottom_left_middle_details'><div><p>Bitcoin (BTC)</p></div><button>Disble</button></div>
              <div className='coinStore_bottom_left_middle_details'><div><p>Bitcoin (BTC)</p></div><button>Disble</button></div>
              <p></p>
            </div>
          </div>
        </div>



        <div className='coinStore_bottom_rigth'>

        </div>
      </div>
    </div>
  )
}
