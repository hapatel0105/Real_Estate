import video1 from '../assets/video1.mp4';
import video2 from '../assets/video2.mp4';

const Hero = () => {
  return (
    <div className='flex flex-col items-center mt-6 lg:mt-20' id='hero'>
        <h1 className='text-4xl sm:text-6xl lg:text-7xl text-center tracking-wide'>
            RealEstate business tools 
            <span className="bg-gradient-to-r from-blue-500 to-blue-800 text-transparent bg-clip-text">
                {" "}
                for developers
            </span>
        </h1>
        <p className='mt-10 text-lg text-center text-neutral-500 max-w-4xl'>
            Empower your business and bring your ideas to life with our intuitive development tools.
            Get Started today and turn your imagination into immersive reality!
        </p>
        <div className="flex justify-center my-10">
            <a href='#' className='bg-gradient-to-r from-blue-500 to-blue-800 py-3 px-4 mx-3 rounded-md'>
                Start for free
            </a>
            <a href='#' className='py-3 px-4 mx-3 rounded-md border'>
                Documentation
            </a>
        </div>
        <div className='flex mt-10 justify-center'>
            <video autoPlay loop muted className='rounded w-1/2 border border-blue-700 shadow-blue-400 mx-2 my-4'>
                <source src={video1} type='video/mp4' />
                Your browser does not support video format
            </video>
            <video autoPlay loop muted className='rounded w-1/2 border border-blue-700 shadow-blue-400 mx-2 my-4'>
                <source src={video2} type='video/mp4' />
                Your browser does not support video format
            </video>
        </div>
    </div>
  )
}

export default Hero