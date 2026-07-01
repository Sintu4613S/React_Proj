import React from 'react'
import Userlogo from '../assets/Userlogo.png';
import { FaYoutubeSquare, FaFacebook, FaInstagram, FaGoogle } from "react-icons/fa";
import { CiHeart } from "react-icons/ci";
import { BiMessageRounded, BiShare } from "react-icons/bi";

const Profileicon = (props) => {
  return (
    <div className="container d-flex justify-content-center gap-3" >
      <a href="www.google.com" target='_blank'>
        <FaYoutubeSquare size={35} color='red' />
      </a>
      <a href="www.google.com" target='_blank'>
        <FaFacebook size={35} />
        {/* {props.icon} */}
      </a>
      <a href="www.google.com" target='_blank'>
        <FaInstagram size={35} color='pink' />
      </a><a href="www.google.com" target='_blank'>
        <FaGoogle size={35} color='red' />
      </a>
    </div>

  )

}
const Userprofile = (props) => {
  return (
    <div>
      <div className="container" >
        <div className="card">
          <div className="container text-bg-primary p-3 rounded-top" style={{ height: "8rem" }}>
            < img src={Userlogo} className="card-img-top  mx-auto d-block" alt="..." style={{ width: "130px" }} />
          </div>
          <div className="card-body">
            <h5 className="card-title text-center my-2">{props.title}</h5>
            <p className=" text-center">{props.desc}</p>
            <Profileicon />
            < div className="container d-flex justify-content-between mt-3">
              <button className="btn btn-primary">Subscribe</button>
              <button className="btn btn-primary">Message</button>
            </div>
            <div className="container d-flex justify-content-between mt-3">
              <div>
                <p className="card-text">
                  <CiHeart /><strong>1.5M |</strong>
                </p>
              </div>
              <div>
                <p className="card-text">
                  <BiMessageRounded /> <strong>1.5k |</strong>
                </p>
              </div>
              <div>
                <p className="card-text">
                  < BiShare /><strong>12.4k</strong>
                </p>
              </div>


            </div>
          </div>
        </div>


      </div>

    </div >
  )
}

export default Userprofile
