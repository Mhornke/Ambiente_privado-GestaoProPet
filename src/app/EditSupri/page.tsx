"use client";
import { useForm } from "react-hook-form";
import { useRouter } from "next/navigation";
import { Just_Me_Again_Down_Here } from "next/font/google";

const font = Just_Me_Again_Down_Here({
  weight: ["400"],
  subsets: ["latin"],
});

export default function cardTest() {
  return (
    <>
      <div className="bg-primary-bg flex justify-center"></div>
    </>
  );
}
