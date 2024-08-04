import Button from "@/components/Button";
import Image from "next/image";

export default function Home() {
  return (
    <main className="h-screen w-full flex lg:flex-row flex-col justify-center items-center">
        <Button text="easy"/>
        <Button text="medium"/>
        <Button text="hard"/>
    </main>
  );
}
