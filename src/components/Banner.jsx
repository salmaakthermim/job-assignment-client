import React from 'react';
import { TypeAnimation } from 'react-type-animation';

const Banner = () => {
    return (
        <div>
            <section
                className="relative mt-5  bg-cover bg-center h-screen flex items-center justify-center text-center"
                style={{
                    backgroundImage: `url('https://i.ibb.co/XLFKjYm/lovepik-overhead-view-of-young-people-in-study-group-image-352041216.jpg')`, // Replace with your actual image URL
                }}
            >

                <div className="absolute inset-0  "></div>


                <div className="  px-4 max-w-2xl">
                    <h1 className="text-white text-4xl sm:text-5xl  font-bold mb-6">
                       
                        Hello Friends</h1>
                    <p className=" text-white  mb-8">
                        Online group study typically refers to a collaborative learning
                        approach where individuals, often students, come together over the
                        internet to study and learn together. This can be done through
                        various online platforms, video conferencing tools, or specialized
                        study groups on educational websites or social media.
                        <TypeAnimation
                            sequence={[
                                // Same substring at the start will only be typed out once, initially
                                'In online  group study',
                                1000, // wait 1s before replacing "Mice" with "Hamsters"
                                'participants share resources',
                                1000,
                                'discuss topics',
                                1000,
                                'solve problems',
                                1000
                                
                               
                            ]}
                            wrapper="span"
                            speed={50}
                            style={{ display: 'inline-block' }}
                            repeat={Infinity}
                        />
                        
                    </p>
                    <button className="bg-gradient-to-r from-pink-500 to-blue-500 text-white font-bold py-2 px-4 rounded shadow-lg hover:from-pink-600 hover:to-blue-600 transition duration-300">
                        Get Started
                    </button>

                </div>
            </section>
        </div>
    );
};

export default Banner;