"use client";

import { usePathname, useSearchParams } from "next/navigation";

export default function PlayerInfo() {

  const pathName = usePathname();
  const searchQuery = useSearchParams()

  return (
    <div className="font-bold text-3xl text-center">
      <h1>PlayerInfo {pathName}, {searchQuery}</h1>
    </div>
  );
}
