"use client";

import { usePathname, useSearchParams } from "next/navigation";

export default function PlayerInfo({searchParams}) {

  const pathName = usePathname();
  const searchQuery = useSearchParams()
  console.log(searchParams)

  return (
    <div className="font-bold text-3xl text-center">
      <h1>PlayerInfo</h1>
    </div>
  );
}
