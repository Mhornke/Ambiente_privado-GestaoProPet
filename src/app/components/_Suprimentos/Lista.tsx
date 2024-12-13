export function Lista() {
  return (
    <>
      <div className="bg-primary-bg m-3">
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
              <tbody>
                <tr className="bg-white border-b border-primary-linetable hover:bg-gray-400 hover:text-white">
                  <td className="px-6 py-4">4</td>
                  <td className="px-6 py-4">
                    Ração Golden Mega Frang e Arroz 15kg
                  </td>
                  <td className="px-6 py-4">2 Pc</td>
                  <td className="px-6 py-4">Ração</td>
                  <td className="px-6 py-4 text-right">
                    {/* <a href="#" className="font-medium text-blue-600 dark:text-blue-500 hover:underline">Edit</a> */}
                    <button>
                      {/* <img src="./Acoes.svg" alt="" /> */}
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
                    </button>
                  </td>
                </tr>
                <tr className="bg-white border-b border-primary-linetable hover:bg-gray-400 hover:text-white">
                  <td className="px-6 py-4">2</td>
                  <td className="px-6 py-4">Simparic 80mg cães 20,1 a 40kg</td>
                  <td className="px-6 py-4">4 Un</td>
                  <td className="px-6 py-4">Antipulgas</td>
                  <td className="px-6 py-4 text-right">
                    <button>
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
                    </button>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  );
}
