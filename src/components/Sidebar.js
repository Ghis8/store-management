import React from 'react'
import {HiOutlineUserGroup} from 'react-icons/hi'
import {MdGridView,MdOutlineInventory} from 'react-icons/md'
import {FaChartBar,FaChartLine,FaShoppingCart} from 'react-icons/fa'
import SideBarItem from './SideBarItem'
import {Link} from 'react-router-dom'


function Sidebar() {

  return (
    <div className='flex flex-col space-y-5 px-8 pt-8 bg-black h-screen'>
        <Link to="/admin"><SideBarItem Icon={MdGridView} title="Dashboard"/></Link>
        <Link to="/stock"><SideBarItem Icon={FaShoppingCart} title="Stock"/></Link>
        <SideBarItem Icon={FaChartBar} title="Products"/>
        <SideBarItem Icon={MdOutlineInventory} title="Sales"/>
        <Link to="/orders"><SideBarItem Icon={FaChartLine} title="Orders"/></Link>
        <SideBarItem Icon={HiOutlineUserGroup} title="Users"/>
    </div>
  )
}

export default Sidebar