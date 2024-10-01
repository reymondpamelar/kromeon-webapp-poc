import React, { useState } from "react";

const HoverPlayGif = ({ staticImage, animatedGif, altText }) => {
    const [isHovered, setIsHovered] = useState(false);

    return (
        <div
            className=" flex justify-end items-center"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
            {/* Image that changes src on hover */}
            <button>
                <img
                    src={isHovered ? animatedGif : staticImage}
                    alt={altText}
                    className="w-20 h-20 object-cover rounded-lg shadow-lg transition duration-300 ease-in-out transform hover:scale-105"
                />
            </button>
        </div>
    );
};

export default HoverPlayGif;