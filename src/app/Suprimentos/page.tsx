"use client";
import { useEffect, useState } from "react";
import { SuprimentosI } from "../utils/types/suprimentos";
import { ItemList } from "../components/_Suprimentos/ItemList";
import Link from "next/link";
import { toast } from 'sonner';
// import { useClienteStore } from "@/context/cliente";

// type Inputs = {
//   email: string;
//   senha: string;
//   manter: boolean;
// };

export default function Suprimentos() {
  const [suprimentos, setSuprimentos] = useState<SuprimentosI[]>([]);

  useEffect(() => {
    async function buscaDados() {
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_URL_API}/suprimentos`
      );
      const dados = await response.json();
      console.log(dados);
      setSuprimentos(dados);
    }
    buscaDados();
  }, []);

  const deletarItem = async (idItem: number) => {
    const confirmarExclusao = window.confirm("Tem certeza que deseja excluir este item?");
    if (!confirmarExclusao) {
      return;
    }
    const response = await fetch(`${process.env.NEXT_PUBLIC_URL_API}/suprimentos/${idItem}`, {
      method: 'DELETE',
    });
    console.log(response.status);
    
    if (response.status === 200) {
      toast.success("O item foi excluído!");
      setSuprimentos(prevSuprimentos => prevSuprimentos.filter(item => item.id !== idItem));
    } else {
      toast.error("Ocorreu um erro ao tentar excluir o item!");
    }
  };

  const listaSuprimentos = suprimentos.map((suprimento) => (
    <ItemList data={suprimento} key={suprimento.id} deletarItem={deletarItem} />
  ));

  return (
    <div className="flex flex-col bg-primary-bg m-3">
      <div className="flex gap-2 items-center">
        <Link href="/Suprimentos" className="text-primary-menu font-bold">
          Suprimentos
        </Link>
        <svg
          width="8"
          height="9"
          viewBox="0 0 8 9"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M7.93182 4.90909L0.613636 8.63636V7.18182L6.22727 4.47727L6.18182 4.56818V4.34091L6.22727 4.43182L0.613636 1.72727V0.272727L7.93182 4V4.90909Z"
            fill="#CFCDCC"
          />
        </svg>
      </div>
      <div className="flex justify-between">
        <div className="flex">
          {/* inicio do pesquisar */}
          <div className="relative w-[450px] m-3">
            <input
              type="search"
              id="search-dropdown"
              className="block text-black p-2.5 w-full text-sm rounded-lg border border-gray-300"
              placeholder="Search Mockups, Logos, Design Templates..."
              required
            />
            <button
              type="submit"
              className="absolute top-0 end-0 p-2.5 text-sm font-medium h-full text-white rounded-e-lg"
            >
              <svg
                width="20"
                height="20"
                viewBox="0 0 45 45"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M18.75 33.75C22.0781 33.7493 25.3103 32.6352 27.9319 30.585L36.1744 38.8275L38.8256 36.1763L30.5831 27.9338C32.6344 25.3119 33.7492 22.0789 33.75 18.75C33.75 10.4794 27.0206 3.75 18.75 3.75C10.4794 3.75 3.75 10.4794 3.75 18.75C3.75 27.0206 10.4794 33.75 18.75 33.75ZM18.75 7.5C24.9544 7.5 30 12.5456 30 18.75C30 24.9544 24.9544 30 18.75 30C12.5456 30 7.5 24.9544 7.5 18.75C7.5 12.5456 12.5456 7.5 18.75 7.5Z"
                  fill="#958B8B"
                />
                <path
                  d="M21.3974 16.0988C22.108 16.8113 22.4999 17.7525 22.4999 18.75H26.2499C26.2516 17.7646 26.0579 16.7886 25.6801 15.8784C25.3022 14.9683 24.7478 14.1421 24.0487 13.4475C21.2099 10.6125 16.288 10.6125 13.4512 13.4475L16.0987 16.1025C17.5237 14.6813 19.9799 14.685 21.3974 16.0988Z"
                  fill="#958B8B"
                />
              </svg>
              <span className="sr-only">Search</span>
            </button>
          </div>
          {/* final do terminar */}
        </div>
        <Link
          href="Suprimentos/Cadastro"
          className="flex items-center bg-primary-botaoGG text-white hover:bg-primary-botaoGGHover focus:ring-4 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 text-center"
        >
          Novo Suprimento
        </Link>
      </div>
      <div className="m-3">
        <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
          <table className="w-full text-sm text-left rtl:text-right text-primary-table">
            <thead className="text-base text-primary-table  bg-white border-b-2 border-primary-linetable">
              <tr>
                <th scope="col" className="px-6 py-3">
                  Código
                </th>
                <th scope="col" className="px-6 py-3">
                  Item
                </th>
                <th scope="col" className="px-6 py-3">
                  Quantidade
                </th>
                <th scope="col" className="px-6 py-3">
                  Categoria
                </th>
                <th scope="col" className="px-6 py-3">
                  Ações
                  {/* <span className="sr-only">Ações</span> */}
                </th>
              </tr>
            </thead>
            <tbody >{listaSuprimentos}</tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
