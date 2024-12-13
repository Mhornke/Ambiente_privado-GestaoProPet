import { SuprimentosI } from "@/app/utils/types/suprimentos";
import Link from "next/link";
import Select from "../_Testes/Select";
import { AcoesHamburguer } from '../_Testes/modalAcoes'
import { MdEdit, MdOutlineDelete } from "react-icons/md";
import { useState } from "react";


// Função para escolher o ícone de sexo
// export const iconeSexo = (sexo: string) => {
//   switch (sexo) {
//     case 'Macho':
//       return <FontAwesomeIcon icon={faMars} className="w-5 h-5 mr-2 text-blue-500" />;
//     case 'Femea':
//       return <FontAwesomeIcon icon={faVenus} className="w-5 h-5 mr-2 text-pink-500" />;
//     default:
//       return null;
//   }
// };

export function ItemList({ data, deletarItem }: { data: SuprimentosI, deletarItem: (idItem: number) => void }) {

  return (
    <tr className="bg-white border-b  border-primary-linetable  hover:bg-gray-400 hover:text-white">
      <td className="px-6 py-4">{data.id}</td>
      <td className="px-6 py-4">{data.nome}</td>
      <td className="px-6 py-4">
        {data.estoque} {data.unidade}
      </td>
      <td className="px-6 py-4">{data.categoria.nome}</td>
      <td className="px-6 py-4 text-right absolute">
        {/* <button>
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M12 2C13.1046 2 14 2.89543 14 4C14 5.10457 13.1046 6 12 6C10.8954 6 10 5.10457 10 4C10 2.89543 10.8954 2 12 2Z"
              fill="currentColor"
            />
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M12 10C13.1046 10 14 10.8954 14 12C14 13.1046 13.1046 14 12 14C10.8954 14 10 13.1046 10 12C10 10.8954 10.8954 10 12 10Z"
              fill="currentColor"
            />
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M12 18C13.1046 18 14 18.8954 14 20C14 21.1046 13.1046 22 12 22C10.8954 22 10 21.1046 10 20C10 18.8954 10.8954 18 12 18Z"
              fill="currentColor"
            />
          </svg>
        </button> */}
        {/* <Select idItem={data.id} /> */}
        <div className="flex space-x-2 ">
          <Link href={`/Suprimentos/editar/${data.id}`}>
            <MdEdit size={20} className=" hover:text-yellow-300" />
          </Link>
         
            <MdOutlineDelete size={20}
              className="  hover:text-red-600"
              onClick={() => deletarItem(data.id)} />
          
        </div>
      </td>
    </tr>
  );
}
