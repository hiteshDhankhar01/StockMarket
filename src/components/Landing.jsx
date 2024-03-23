import BullImg from '../assets/Bull.png'
import buildingImg from '../assets/building.png'
import moonImg from '../assets/moon.png'

const Landing = () => {
    return (

        <div className="relative h-screen  bg-gradient-to-b from-[#440943] to-[#B10251] abg-[#FAFAFA]  aoverflow-hidden w-full text-white ">
            <img className='w-[3rem] absolute top-[8rem] left-[12rem]' src={moonImg} alt="" />
            {/* <img className='w-[40rem] mt-4' src={BullImg} alt="" /> */}
            {/* <svg className="absolute -top-[25rem]  left-[25%] w-[100rem]" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
                
                <defs>
                    <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" style={{ stopColor: '#FF0066', stopOpacity: 1 }} />
                        <stop offset="100%" style={{ stopColor: '#6600FF', stopOpacity: 1 }} />
                    </linearGradient>
                </defs>
                
                <path fill="url(#gradient)" d="M52.6,-52.7C68.4,-36.9,81.4,-18.4,81.3,-0.1C81.2,18.2,67.9,36.5,52.2,49.9C36.5,63.3,18.2,71.9,-2.4,74.3C-23.1,76.7,-46.2,73,-61,59.6C-75.8,46.2,-82.2,23.1,-81.2,1.1C-80.1,-20.9,-71.4,-41.9,-56.7,-57.7C-41.9,-73.4,-20.9,-84.1,-1.2,-82.8C18.4,-81.6,36.9,-68.4,52.6,-52.7Z" transform="translate(100 100)" />
            </svg> */}
            {/* <img className=' absolute bottom-0' src={buildingImg} alt="" /> */}
            <div className='building absolute bottom-0 w-full'>
                sdfsdfsdf
            </div>
        </div>

    )
}

export default Landing 