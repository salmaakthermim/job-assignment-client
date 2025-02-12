import React from 'react';

const OnlineEducation = () => {
    return (
        <div>
            <div className="flex flex-col md:flex-row md:gap-10 p-8  "  data-aos="fade-up" data-aos-delay="200">
                <div className="md:w-1/2 "  >
                    <div className="relative">
                        <div className="absolute  left-0   text-black rounded-bl-lg p-4">
                            <h2 className="text-4xl font-bold">20</h2>
                            <p>Years of Working Experience</p>
                        </div>
                        <img
                            src="https://i.ibb.co.com/fxmFmDc/download-1.jpg"
                            alt="Working together"
                            className="w-full rounded-lg shadow-lg max-w-md"
                        />
                    </div>

                </div>
                <div className="md:w-1/2 flex flex-col justify-center">
                    <h1 className="text-5xl font-extrabold text-orange-500">Welcome To Skans</h1>
                    <h2 className="text-4xl font-bold text-orange-500">Online Education Learning</h2>
                    <p className="mt-4 ">
                        There are many variations of passages of available but the majority have suffered alteration in some form, by injected humour or randomised words which don look even slightly believable.
                    </p>
                    <ul className="list-disc list-inside mt-4 ">
                        <li>Lorem Ipsum is not simply random text</li>
                        <li>If you are going to use a passage</li>
                        <li>Making this the first true generator on the Internet</li>
                        <li>Various versions have evolved over the years</li>
                    </ul>
                    <div className="mt-8 space-x-4">
                        <button className="bg-gradient-to-r from-pink-500 to-blue-500 text-white font-bold py-2 px-4 rounded shadow-lg hover:from-pink-600 hover:to-blue-600 transition duration-300">Paid Courses</button>
                        <button className="bg-gradient-to-r from-blue-500 to-green-500 text-white py-2 px-4 rounded">Free Courses</button>
                     

                    </div>
                </div>
            </div>
        </div>
    );
};

export default OnlineEducation;