"use client";

import Image from "next/image";
import 'animate.css';
import {useEffect, useState} from "react";
import HorizontalInfiniteCarousel from "@/app/components/vertical-slider";
import HoverPlayGif from "@/app/components/HoverPlayGif";

export default function Home() {

    const [showContactForm, setShowContactForm] = useState(false);

    useEffect(() => {
        const timer = setTimeout(() => {
            setShowContactForm(true);
        }, 2000);
        return () => clearTimeout(timer);
    }, []);

    const items = [
        "Custom Software Development",
        "SAAS",
        "Mobile App Development",
        "Development Services",
        "AWS Cloud-Based Services",
        "Web Development",
    ];


    return (
        <div className="grid grid-rows-[1fr_auto] items-center min-h-screen p-8 pb-20 gap-16 sm:p-20">
            <div className={"fixed left-0 h-screen w-screen flex justify-center items-center z-50"}>
                <div className={'absolute bottom-0'}>
                    <HorizontalInfiniteCarousel items={items}/>
                </div>

            </div>
            <div className={'bg-white h-screen w-screen fixed left-0 z-20 animate__animated animate__slideInOut'}>

            </div>
            <div
                className={'bg-zinc-700 h-screen w-screen fixed -left-0 z-30 animate__animated animate__slideInLeft animate-delay-fast'}>

            </div>
            <div
                className={'bg-zinc-800 h-screen w-screen fixed -left-0 z-30 animate__animated animate__slideInLeft animate__delay-1s'}>

            </div>
            <div
                className={'bg-background h-screen w-screen fixed -left-0 z-40 animate__animated animate__slideInLeft animate-delay-faster'}>

            </div>
            <header className="absolute top-10 right-20  row-start-2 w-full flex flex-col items-center sm:items-end gap-4 z-50">
                <div className={'flex gap-6 flex-wrap items-center animate__animated animate__fadeInLeft animate-delay-faster font-neueBook'}>
                    <a
                        className="flex items-center gap-2 hover:underline hover:underline-offset-4"
                        href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <Image
                            aria-hidden
                            src="https://nextjs.org/icons/file.svg"
                            alt="File icon"
                            width={16}
                            height={16}
                        />
                        Learn
                    </a>
                    <a
                        className="flex items-center gap-2 hover:underline hover:underline-offset-4"
                        href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <Image
                            aria-hidden
                            src="https://nextjs.org/icons/window.svg"
                            alt="Window icon"
                            width={16}
                            height={16}
                        />
                        Clientele
                    </a>
                    <a
                        className="flex items-center gap-2 hover:underline hover:underline-offset-4"
                        href="https://nextjs.org?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <Image
                            aria-hidden
                            src="https://nextjs.org/icons/globe.svg"
                            alt="Globe icon"
                            width={16}
                            height={16}
                        />
                        Find Out More →
                    </a>
                </div>
            </header>
            <main className="absolute flex flex-grow flex-col gap-8 justify-center row-start-1 items-center sm:items-start animate__animated animate__slideInRight animate-delay-fast z-50 pb-20">
                <div className={'text-white font-neueBold text-9xl '}>
                    Kromeon
                </div>
                <div className="text-sm text-center sm:text-left font-[family-name:var(--font-geist-mono)] absolute -bottom-10 animate__animated animate__fadeInDown animate-delay-faster
                 animate-delay-fast">
                    <div className="mb-2 text-2xl">
                        Deploying your next...
                        <code className="text-6xl bg-black/[.05] dark:bg-white/[.06] px-1 py-0.5 rounded font-semibold">
                            idea
                        </code>
                    </div>
                </div>
            </main>
            <footer className="row-start-2 w-full flex flex-col items-center sm:items-end gap-4 z-50 mb-10">
                {showContactForm && (
                    <div className="flex justify-end border-r mb-4 h-[370px] pr-4 animate-slideUp text-right">
                        <div className="flex-row">
                            <div className="font-neueBook text-4xl tracking-widest">CONTACT</div>
                            <div>
                                <input
                                    className="font-neueThin text-3xl text-white bg-transparent outline-none text-right mt-10 animate-fadeInOut focus:animate-none"
                                    placeholder="First Name"
                                />
                            </div>
                            <div>
                                <input
                                    className="font-neueThin text-3xl text-white bg-transparent outline-none text-right my-8 animate-fadeInOut focus:animate-none"
                                    placeholder="Last Name"
                                />
                            </div>
                            <div>
                                <input
                                    className="font-neueThin text-3xl text-white bg-transparent outline-none text-right mb-10 animate-fadeInOut focus:animate-none"
                                    placeholder="Email"
                                />
                            </div>
                            <HoverPlayGif animatedGif={'/enterButtonAnimated.gif'} staticImage={'/enterButton.png'}/>
                        </div>
                    </div>
                )}
            </footer>
        </div>

    )
}
