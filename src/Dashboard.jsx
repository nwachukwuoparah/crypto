import React from 'react'
import './dashboard.css'
import { HashRouter as Router, Routes, Route } from "react-router-dom";
import Sidebar from './SIDE_BAR/Sidebar'
import { MdHome } from "react-icons/md";
import { BiCoinStack } from "react-icons/bi";
import { IoIosTimer } from "react-icons/io";
import { GiCardExchange } from "react-icons/gi";
import { HiOutlineUsers } from "react-icons/hi";
import { AiOutlineLink } from "react-icons/ai";
import { RiCoinsLine } from "react-icons/ri";
import { RiFileList3Line } from "react-icons/ri";
import { CiSettings } from "react-icons/ci";
import { TiDocumentText } from "react-icons/ti";
import { BiDockBottom } from "react-icons/bi";
import { BsBell } from "react-icons/bs";
import { HiOutlineUserCircle } from "react-icons/hi";
import { MdKeyboardArrowDown } from "react-icons/md";
import PaymentLink from './Paymentlink/PaymentLink';
import Newlink from './NEW_LINK/Newlink';
import CoinStore from './COIN_STORE/Coin_store';
function Dashboard(props) {
  const Item = [
    {
      title: "OVERVIEW",
      title1: "Dashboard",
      title2: "Balance",
      title3: "Reports",
      icon1: <MdHome fontSize={25} />,
      icon2: <BiCoinStack fontSize={25} />,
      icon3: <IoIosTimer fontSize={25} />,
    },
    {
      title: "BUSINESS",
      title1: "Transactions",
      title2: "Customers",
      icon1: <GiCardExchange fontSize={25} />,
      icon2: <HiOutlineUsers fontSize={25} />,
    }, {
      title: "TOOLS",
      title1: "Payment links",
      title2: "Payment Buttons",
      title3: "Invoice",
      icon1: <AiOutlineLink fontSize={25} />,
      icon2: <RiCoinsLine fontSize={25} />,
      icon3: <RiFileList3Line fontSize={25} />,
    }, {
      title: "OPERATIONS",
      title1: "Settings",
      title2: "Api Docs",
      icon1: <CiSettings fontSize={25} />,
      icon2: <TiDocumentText fontSize={25} />,
    },
  ]
  return (
    <div className='Dashboard_contain'>
      <div className='Dashboard_left'>
        <div className='side_bar_cont'>
          <div className='Logo'>
            <h2>Pluto</h2>
          </div>
          {Item?.map((i) => (
            <Sidebar {...i} />
          ))}
        </div>

      </div>

      <div className='Dashboard_rigth'>
        <div className='Dashboard_rigth_head'>
          <div className='Dashboard_rigth_head_contain'>
            <div className='Dashboard_rigth_head_nav1'><BiDockBottom /><p>Got an issue?</p></div>
            <BsBell />
            <div className='Dashboard_rigth_head_nav2'>
              <HiOutlineUserCircle />
              <p>Chris</p>
              <MdKeyboardArrowDown />
            </div>
          </div>
        </div>
        <Routes>
          <Route path={'/'} element={<PaymentLink />} />
          <Route path={'/newlink'} element={<Newlink />} />
          <Route path={'/coinStore'} element={<CoinStore />} />
        </Routes>
      </div>
    </div>
  )
}
export default Dashboard