"use client";

import { Just_Me_Again_Down_Here } from "next/font/google";
import CardAnimal from "../components/_Animais/CardAnimal";
import Link from "next/link";

const font = Just_Me_Again_Down_Here({
  weight: ["400"],
  subsets: ["latin"],
});
// import { useClienteStore } from "@/context/cliente";

// type Inputs = {
//   email: string;
//   senha: string;
//   manter: boolean;
// };

export default function Animais() {
  return (
    <div className="flex flex-col p-7 gap-4">
      <div className="flex justify-between">
        <div>
          <input
            type="text"
            className="w-[677px] h-[61px] rounded-2xl shadow"
            placeholder="Pesquise pelo nome"
          />
        </div>
        <Link
          href="Animais/Cadastro"
          className="flex items-center bg-primary-botaoGG text-white hover:bg-primary-botaoGGHover font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2"
        >
          Novo Animal
        </Link>
      </div>
      <div className="flex gap-11">
        <CardAnimal />
        <CardAnimal />
      </div>
    </div>
  );
}
