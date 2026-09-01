"use client"

import { CircleArrowLeft } from "lucide-react"
import { useRouter } from "next/navigation";

export default function ReturnButton() {
  const router = useRouter();
  const handleReturn = () => {
    router.back()
  }
  return (
    <button onClick={handleReturn}>
      <CircleArrowLeft />
    </button>

  )
}
