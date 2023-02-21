import './newlink.css'
import React from 'react'
import { RxCross2 } from "react-icons/rx";
import { CgImage } from "react-icons/cg";
import { useNavigate } from 'react-router-dom';
export default function Newlink(props) {
  const navigate = useNavigate()

  return (
    <div className='newlink'>

      <div className='newlink_top'>
        <div className='newlink_top_wrap'>
          <div className='newlink_top_text'>
            <RxCross2 fontSize={25} onClick={ ()=>{navigate('/')}} />
            <h2>Create new payment link</h2>
          </div>
          <button className='newlink_top_button'>Create Link</button>
        </div>
      </div>


      <div className='newlink_wrap'>
        <div className='newlink_left'>
          <div className='newlink_left_wrap'>
            <div className='newlink_left_top'>
              <h3>Provide details about your link</h3>


              <div className='newlink_left_top_image'>
                <label className='newlink_left_top_file'>
                  <input type='file' />
                  <CgImage fontSize={40} />
                </label>
                <span className='newlink_left_top_image_text'>
                  <h3>
                    Upload Link Image
                  </h3>
                  <p>Recommended size - 512px X 512px Fomart - JPG or PNG, under 1MB in size.</p>
                </span>

              </div>
            </div>


            <div className='newlink_left_wrap_bottom'>
              <label className='label'>
                <p>Link title</p>
                <input type="text" placeholder='Name of your link' />
              </label>

              <label className='label'>
                <p>Link description (optional)</p>
                <textarea required type="text" id="w3review" name="description" maxLength="50%" rows="5" cols="20">
                  Write a brief description about your link
                </textarea>
              </label>
              <label className='label'>
                <p>Amount</p>
                <input type="text" />
              </label>
            </div>

          </div>
        </div>


        <div className='newlink_right'>
          <div className='newlink_right_wrap'>
            <div className='newlink_right_text'>
              <h2>Preview</h2>
              <p>this is the preview of how your link would appear to a customer</p>
              <p>Customize your branding</p>
            </div>
            <form className='form'>
              <div className='newlink_right_top_image'>
                <label className='newlink_right_top_file'>
                  <input type='file' />
                  <CgImage fontSize={25} />
                </label>
                <span className='newlink_right_top_image_text'>
                  <h3>
                    My payment link title
                  </h3>
                  <p>Your product description goes here</p>
                </span>
              </div>



              <div className='newlink_right_wrap_bottom'>
                <label className='newlink_right_label'>
                  <p>Link title</p>
                  <input type="text" placeholder='Name of your link' />
                </label>

                <label className='newlink_right_label'>
                  <p>Link title</p>
                  <input type="text" placeholder='Name of your link' />
                </label>

                <label className='newlink_right_label'>
                  <p>Amount</p>
                  <input type="text" />
                </label>
                <label className='newlink_right_label'>
                  <input type="text" />
                </label>
              </div>

            </form>
          </div>
        </div>
      </div >


    </div >
  )
}
