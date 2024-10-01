import React from "react";

const HorizontalInfiniteCarousel = ({ items }) => {
    // Duplicate the items once to create a smooth loop
    const doubledItems = [...items, ...items, ...items, ...items, ...items];

    return (
        <div className="relative overflow-hidden w-full mb-16 mx-auto rounded-lg">
            <div className="flex items-center gap-16 animate-marquee">
                {doubledItems.map((item, index) => (
                    <div
                        key={index}
                        className="flex-shrink-0 flex items-center justify-center text-white text-lg font-neueThin mx-2"
                        style={{ minWidth: "200px" }} // Set consistent width for each item
                    >
                        {item}
                    </div>
                ))}
            </div>

            {/* Inline CSS animation styles */}
            <style jsx>{`
                .animate-marquee {
                    display: flex;
                    animation: marquee 60s linear infinite; /* Adjust speed as needed */
                }

                @keyframes marquee {
                    0% {
                        transform: translateX(0);
                    }
                    100% {
                        transform: translateX(-30%); /* Scroll by 50% to seamlessly show the second set */
                    }
                }
            `}</style>
        </div>
    );
};

export default HorizontalInfiniteCarousel;
