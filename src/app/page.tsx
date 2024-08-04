"use client"
import Button from "@/components/HandleGameButton";
import Image from "next/image";
import { useEffect, useRef } from "react";
import Typed from 'typed.js';

export default function Home() {
  const el = useRef(null);

  useEffect(() => {
    const typed = new Typed(el.current, {
      strings: ['Choose a difficulty', 'to start the Game'],
      typeSpeed: 100,
      loop: true,
      loopCount: Infinity,
    });

    return () => {
      // Destroy Typed instance during cleanup to stop animation
      typed.destroy();
    };
  }, []);
  return (
    <main className="h-[calc(100vh-125px)] w-full flex flex-col justify-evenly items-center">
        <div className="text-7xl text-center font-bold px-5 h-[100px]">
          <span ref={el} />
        </div>
        <div className="flex lg:flex-row flex-col p-5">
        <Button level="easy"/>
        <Button level="medium"/>
        <Button level="hard"/>
        </div>
    </main>
  );
}
