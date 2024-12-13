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
    <div className="bg-primary-bg flex gap-2 m-4">
      <div className="flex flex-col gap-14">
        <div>
          <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
            <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
              <thead className="text-xs text-gray-700  bg-white dark:bg-white dark:text-gray-400 border-b-2 border-primary-bgHeader">
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
              <tbody>
                <tr className="bg-white border-b dark:bg-white dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                  <td className="px-6 py-4">4</td>
                  <th
                    scope="row"
                    className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-primary-menu"
                  >
                    Ração Golden Mega Frang e Arroz 15kg
                  </th>
                  <td className="px-6 py-4">2 Pc</td>
                  <td className="px-6 py-4">Ração</td>
                  <td className="px-6 py-4 text-right">
                    {/* <a href="#" className="font-medium text-blue-600 dark:text-blue-500 hover:underline">Edit</a> */}
                    <button>
                      <img src="./Acoes.svg" alt="" />
                    </button>
                  </td>
                </tr>
                <tr className="bg-white border-b dark:bg-white dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                  <td className="px-6 py-4">2</td>
                  <th
                    scope="row"
                    className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-primary-menu"
                  >
                    Simparic 80mg cães 20,1 a 40kg
                  </th>
                  <td className="px-6 py-4">4 Un</td>
                  <td className="px-6 py-4">Antipulgas</td>
                  <td className="px-6 py-4 text-right">
                    {/* <a href="#" className="font-medium text-blue-600 dark:text-blue-500 hover:underline">Edit</a> */}
                    <button>
                      <img src="./Acoes.svg" alt="" />
                    </button>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
        <div>
          <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
            <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
              <thead className="text-xs text-gray-700  bg-white dark:bg-white dark:text-gray-400 border-b-2 border-primary-bgHeader">
                <tr>
                  <th scope="col" className="px-6 py-3">
                    Código
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Nome
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Função
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Telefone
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Ações
                    {/* <span className="sr-only">Ações</span> */}
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr className="bg-white border-b dark:bg-white dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                  <td className="px-6 py-4">4</td>
                  <th
                    scope="row"
                    className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-primary-menu"
                  >
                    Giovane Chaves
                  </th>
                  <td className="px-6 py-4">Walker</td>
                  <td className="px-6 py-4">(53) 98235 1048</td>
                  <td className="px-6 py-4 text-right">
                    {/* <a href="#" className="font-medium text-blue-600 dark:text-blue-500 hover:underline">Edit</a> */}
                    <button>
                      <img src="./Acoes.svg" alt="" />
                    </button>
                  </td>
                </tr>
                <tr className="bg-white border-b dark:bg-white dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                  <td className="px-6 py-4">2</td>
                  <th
                    scope="row"
                    className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-primary-menu"
                  >
                    Márcia de Souza Menezes
                  </th>
                  <td className="px-6 py-4">Veterinário</td>
                  <td className="px-6 py-4">(53) 98516 1593</td>
                  <td className="px-6 py-4 text-right">
                    {/* <a href="#" className="font-medium text-blue-600 dark:text-blue-500 hover:underline">Edit</a> */}
                    <button>
                      <img src="./Acoes.svg" alt="" />
                    </button>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}
