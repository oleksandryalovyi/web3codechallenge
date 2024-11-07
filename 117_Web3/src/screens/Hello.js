import LogoImage from "../assets/images/logo.png";
import M1 from "../assets/images/1.jpg";
import M2 from "../assets/images/2.jpg";
import M3 from "../assets/images/3.jpg";
import M4 from "../assets/images/4.jpg";
import M5 from "../assets/images/5.jpg";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

const Hello = () => {
    return (
        <div className="flex flex-col min-h-screen">
            <div className="flex flex-col items-center justify-center py-16">
                <div className=" w-24 md:w-36 lg:w-48">
                    <img className="w-full" src={LogoImage} alt="logo"/>
                </div>
                <div className="font-bold mt-4"><h4>Secure and Seamless Crypto Shopping</h4></div>
            </div>
            <div className="flex-1 flex justify-center items-center ">
                <div className="flex flex-col md:flex-row items-center w-5/6 m-auto md:w-5/6 xl:w-4/6">
                    <div className="w-60 md:w-80 lg:w-96">
                        <Carousel showThumbs={false} showStatus={false} showIndicators={false} showArrows={false} autoPlay infiniteLoop>
                            <div className="">
                                <img className="" src={M1} alt="Merch 1"/>
                            </div>
                            <div className="">
                                <img className="" src={M2} alt="Merch 2"/>
                            </div>
                            <div className="">
                                <img className="" src={M3} alt="Merch 3"/>
                            </div>
                            <div className="">
                                <img className="" src={M4} alt="Merch 4"/>
                            </div>
                            <div className="">
                                <img className="" src={M5} alt="Merch 5"/>
                            </div>
                        </Carousel>
                    </div>
                    <div className="md:-ml-24 mt-0 md:-mt-12 text-sm md:text-md lg:text-lg z-10">
                        <div className="mb-8 mt-8 ml-24 p-12">
                            <p>Welcome to our cutting-edge e-commerce platform, where the power of cryptocurrencies meets online shopping. </p>
                            <br/>
                            <p>Shop with ease and security using your preferred digital currencies, as we revolutionize the way you transact online. Embrace the future of e-commerce and experience a seamless integration of blockchain technology and shopping convenience on our cryptocurrency-friendly marketplace.</p>
                            <br/>
                            <a href="/merch" className="mt-8"><b>👉 SHOPPING</b></a>
                        </div>
                    </div>
                </div>
            </div>
            <div className="flex justify-between py-8 m-auto font-bold text-sm md:text-md lg:text-lg">
                <a href="/merch" className="p-2">Home</a>
                <a href="/product" className="p-2">Product</a>
                <a href="/exchange" className="p-2">Exchange</a>
                <a href="/prices" className="p-2">Coins</a>
                <a href="/about" className="p-2">About</a>
            </div>
        </div>
    );
}

export default Hello;