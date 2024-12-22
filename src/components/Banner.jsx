import React from 'react';

const Banner = () => {
    return (
        <div>
            <section
                className="relative mt-5  bg-cover bg-center h-screen flex items-center justify-center text-center"
                style={{
                    backgroundImage: `url('https://i.ibb.co/XLFKjYm/lovepik-overhead-view-of-young-people-in-study-group-image-352041216.jpg')`, // Replace with your actual image URL
                }}
            >
                {/* Overlay */}
                <div className="absolute inset-0 bg-black bg-opacity-50"></div>

                {/* Content */}
                <div className=" text-white px-4 max-w-2xl">
                    <h1 className="text-4xl sm:text-5xl  font-bold mb-6">Hello Friends</h1>
                    <p className="   mb-8">
                        Online group study typically refers to a collaborative learning
                        approach where individuals, often students, come together over the
                        internet to study and learn together. This can be done through
                        various online platforms, video conferencing tools, or specialized
                        study groups on educational websites or social media. In online
                        group study, participants share resources, discuss topics, solve
                        problems, and help each other understand the subject matter.
                    </p>
                    <button className="btn btn-primary px-6 py-3 text-lg font-medium">
                        Get Started
                    </button>
                </div>
            </section>
        </div>
    );
};

export default Banner;