// import { discount, Discount, robot } from '../assets'
import { discount, robot } from '../assets';
import styles from '../../../Style';
import GetStarted from './GetStarted';



const Hero = () => (

    <section id="home" className={`flex md:flex-row flex-col ${styles.paddingY}`}>
        <div className={`flex-1 ${styles.flexStart} flex-col xl:px-0 sm:px-16 px-6`}>
            <div className="flex flex-row items-center py-[6px] px-4 w-15 bg-discount-gradient rounded-[10px] mb-2">
                <img src={discount} alt="discount" className="w-[32px] h-[32px]" />
                <p className={`${styles.paragraph} ml-2`}>
                    <span className="text-white">20%</span> Discount for {" "}
                    <span className="text-white">1 Month</span> Account
                </p>
            </div>

            <div className="flex flex-row justify-between items-center w-full">
                <h1 className="flex-1 font-poppins font-semibold ss:text-[72px] text-[52px] text-white ss:leading-[100px] leading-[75px]">
                    The Next
                    <br className="sm:block hidden" />{" "}
                    <span className="text-gradient">Generation</span>{" "}
                </h1>
                <div className="ss:flex hidden md:mr-4 mr-0">
                    <GetStarted />
                </div>
            </div>

            <h1 className="font-poppins font-semibold ss:text-[69px] text-[52px] text-white ss:leading-[100px] leading-[75px] w-full">
                Payment Method
            </h1>
            <p className={`${styles.paragraph} max-w-[470px] mt-5 text-dimWhite`}>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Beatae laborum dicta ex expedita assumenda? Quo excepturi voluptatum non, nulla illo saepe debitis praesentium facilis cumque aperiam laudantium quisquam illum ab obcaecati aliquid laborum sit! Ullam nesciunt quae laboriosam porro, vitae nam repellat modi corporis nihil distinctio maxime voluptas voluptatum provident eaque qui harum eius ipsa.
            </p>
        </div>

        <div className="flex-1 flex justify-center items-center ${styles.flexCenter} md:MY-0 MY-10 relative">
            <img src={robot} alt="billing" className="w-[100%] h-[100%] md:w-[80%] md:h-[80%] relative z-[5]" />
            <div className='absolute z-[0] w-[40%] h-[35%] top-0 pink__gradient' />
            <div className='absolute z-[1] w-[80%] h-[80%] rounded-full bottom-40 white_gradinet' />
            <div className='absolute z-[0] w-[50%] h-[50%] right-20 bottom-20 blue__gradient ' />

        </div>
        <div className='ss:hidden ${styles.flexCenter}'>
            <GetStarted />
        </div>
    </section>

)


export default Hero
