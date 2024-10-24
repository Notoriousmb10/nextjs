"use client";
import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();

  const handleNavigation = () => {
    router.push("players/info?search=yashbhingarde");
  };

  return (
    <div className="font-bold text-3xl text-center">
      <h1>Hi</h1>
      <button className="p-2 bg-teal-300 rounded-lg " onClick={handleNavigation}>Navigate To players</button>
    </div>
  );
}
