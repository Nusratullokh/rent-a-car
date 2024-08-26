import { CgProfile } from "react-icons/cg"; 
import { IoMdSettings } from "react-icons/io"; 
import { AiTwotoneBell } from "react-icons/ai"; 
import { AiFillHeart } from "react-icons/ai"; 
import Logo from '../../img/Logo.svg'
import Avatar from '../../img/Image.svg'

const Nav = () => {
  return (
    <div className="w-full px-4 py-6  bg-[white] flex items-center justify-between">
        <div className="container flex items-center m-auto justify-between">
          <div className="logo-search flex items-center gap-10">
              <div className="logo">
                  <img src={Logo} alt="" />
              </div>
              <div className="search">
                  <input type="text" className='w-[300px] border rounded-full px-4 py-1' placeholder="Search" />
              </div>
          </div>
          <div className="icons flex items-center gap-5">
              <div className="like-icon border rounded-full p-2">
                <AiFillHeart className="text-[#596780]"/>
              </div>
              <div className="notification-icon border rounded-full p-2">
                <AiTwotoneBell className="text-[#596780]"/>
              </div>
              <div className="settings-icon border rounded-full p-2">
                <IoMdSettings className="text-[#596780]"/>
              </div>
              <div className="profile-icon border rounded-full p-2">
                <img src={Avatar} alt="" />
              </div>
          </div>
        </div>
    </div>
  )
}

export default Nav