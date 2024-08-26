import Logo from '../../img/Logo.svg'


const Footer = () => {
  return (
    <div className="w-full bg-white px-4 py-6 mt-5 pl-[50px] " >
        <div className="container flex m-auto  justify-between">
            <div className="logo">
                <img src={Logo} alt="" />
            </div>
            <div className='pr-[50px]'>
                <ul className='w-[500px] font-bold items-center justify-between flex gap-5 '>
                    <li>About</li>
                    <li>Contact</li>
                    <li>Socials</li>
                </ul>
                <div className='flex items-center justify-between'>
                    <ul className='text-gray-600 text-[14px]'>
                        <li>How it works</li>
                        <li>FAQ</li>
                        <li>Blog</li>
                        <li>Terms of Service</li>
                    </ul>
                    <ul  className='text-gray-600 text-[14px]'>
                        <li>Events</li>
                        <li>Partners</li>
                        <li>Jobs</li>
                        <li>Press</li>
                    </ul>
                    <ul  className='text-gray-600 text-[14px]'>
                        <li>Discord</li>
                        <li>Twitter</li>
                        <li>Instagram</li>
                        <li>Facebook</li>
                    </ul>
                </div>
            </div>

        </div>
        <br />
        <hr />
        <br />
        <p className="text-center text-gray-600 text-[12px]">Copyright @ 2022. All rights reserved</p>
    </div>
  )
}

export default Footer