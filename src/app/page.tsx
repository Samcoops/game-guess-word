import Button from "@/components/HandleGameButton";
import Image from "next/image";

export default function Home() {
  return (
    <main className="h-screen w-full flex justify-center items-center">
        <div className="flex lg:flex-row flex-col">
        <Button level="easy"/>
        <Button level="medium"/>
        <Button level="hard"/>
        </div>
    </main>
  );
}
