import Button from "@/components/Button";
import Image from "next/image";

export default function Home() {
  return (
    <main className="h-screen w-full flex justify-center items-center">
        <div className="flex lg:flex-row flex-col pt-[100px]">
        <Button text="easy"/>
        <Button text="medium"/>
        <Button text="hard"/>
        </div>
    </main>
  );
}
