import { LancamentoI } from "@/app/utils/types/lancamento";
import { Datepicker } from "flowbite-react/components/Datepicker";
import { useState } from "react";
import { maskDinheiro } from "../_Mascaras/masks";

const saidaVazia: LancamentoI = {
  id: 0,
  dia: 0,
  mes: "",
  ano: 0,
  tipo: "",
  descricao: "",
  valor: 0,
  origem: "",
  isEntrada: false,
};
const entradaVazia: LancamentoI = {
  id: 0,
  dia: 0,
  mes: "",
  ano: 0,
  tipo: "",
  descricao: "",
  valor: 0,
  origem: "",
  isEntrada: true,
};

export function ModalLancamento({ data }: { data: LancamentoI }) {
  const [value, setValue] = useState(data.valor);

  function darLog() {
    let x = String(data.valor);
    console.log(typeof x);
  }

  function dataHojeCarregar() {
    let dataAtual = new Date();
    let dataBrasilia = dataAtual.toLocaleString("pt-BR", {
      timeZone: "America/Sao_Paulo",
    });
    let dataFormatada = new Date(dataBrasilia).toLocaleDateString("pt-BR");

    console.log(dataFormatada);

    // let dia = dataAtual.getDay;
    // let mes = dataAtual.getMonth;
    // let ano = dataAtual.getFullYear;
    // console.log(dia);
    // console.log(mes);
    // console.log(ano);
  }

  return (
    <div
      id="default-modal"
      tabIndex={-1}
      aria-hidden="true"
      className="hidden overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 justify-center items-center w-full md:inset-0 h-[calc(100%-1rem)] max-h-full"
    >
      <div className="relative p-4 w-full max-w-2xl max-h-full">
        <div className={`relative bg-white rounded-lg shadow dark:bg-gray-700`}>
          <div
            className={`flex items-center justify-between p-4 md:p-5 border-b rounded-t ${
              data.isEntrada
                ? "bg-primary-caixa-Entrada"
                : "bg-primary-caixa-Saida"
            }`}
          >
            <h3
              className={`text-xl font-semibold ${
                data.isEntrada ? "text-[#2C2C2C]" : "text-white"
              }`}
            >
              {data.isEntrada ? "Entrada" : "Saída"}
            </h3>
            <button
              type="button"
              className={`${
                data.isEntrada
                  ? "text-[#2C2C2C] hover:bg-[#2C2C2C] hover:text-primary-caixa-Entrada"
                  : "text-white hover:bg-white hover:text-primary-caixa-Saida"
              } bg-transparent  rounded-[16px] text-sm w-8 h-8 ms-auto inline-flex justify-center items-center`}
              data-modal-hide="default-modal"
            >
              <svg
                className="w-3 h-3"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 14 14"
              >
                <path
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
                />
              </svg>
              <span className="sr-only">Close modal</span>
            </button>
          </div>
          <div className="p-4 md:p-5 space-y-4">
            <div className="flex">
              <div></div>
              <div className="flex items-center gap-4">
                {/* div do calendario */}
                <label htmlFor="" className="font-bold text-black">
                  Data do Lançamento
                </label>
                <div className="relative max-w-sm">
                  <div className="absolute inset-y-0 start-0 flex items-center ps-3.5 pointer-events-none">
                    <svg
                      className="w-4 h-4 text-gray-500 dark:text-gray-400"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M20 4a2 2 0 0 0-2-2h-2V1a1 1 0 0 0-2 0v1h-3V1a1 1 0 0 0-2 0v1H6V1a1 1 0 0 0-2 0v1H2a2 2 0 0 0-2 2v2h20V4ZM0 18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8H0v10Zm5-8h10a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2Z" />
                    </svg>
                  </div>
                  <div className="relative max-w-sm">
                    {/* <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                          <svg
                            className="w-4 h-4 text-gray-500 dark:text-gray-400"
                            aria-hidden="true"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="currentColor"
                            viewBox="0 0 20 20"
                          >
                            <path d="M20 4a2 2 0 0 0-2-2h-2V1a1 1 0 0 0-2 0v1h-3V1a1 1 0 0 0-2 0v1H6V1a1 1 0 0 0-2 0v1H2a2 2 0 0 0-2 2v2h20V4ZM0 18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8H0v10Zm5-8h10a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2Z" />
                          </svg>
                        </div> */}
                    <Datepicker translate="yes" />
                  </div>
                </div>
              </div>
            </div>
            <div className="flex text-black gap-4 items-center">
              <label className="font-bold">Descrição</label>
              <textarea
                value={data.descricao}
                className="rounded-[8px] border-none  h-[100px] w-full shadow-[1px_1px_2.5px_2px_#00000040] flex items-center justify-center"
              />
            </div>
            <div className="text-black flex gap-4">
              <div className="flex gap-4 items-center">
                <label className="font-bold">Origem</label>
                <input
                  type="text"
                  value={data.origem}
                  className="rounded-[8px] border-none h-[37px] shadow-[1px_1px_2.5px_2px_#00000040] flex items-center justify-center"
                />
              </div>
              <div className="flex gap-4 items-center">
                <label htmlFor="" className="font-bold">
                  Valor
                </label>
                <input
                  type="text"
                  value={maskDinheiro(String(value))}
                  className="rounded-[8px] border-none h-[37px] shadow-[1px_1px_2.5px_2px_#00000040] flex items-center justify-center"
                />
              </div>
            </div>
          </div>
          <div className="flex items-center p-4 md:p-5 border-t border-gray-200 rounded-b dark:border-gray-600">
            <button
              data-modal-hide="default-modal"
              onClick={dataHojeCarregar}
              type="button"
              className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              Salvar
            </button>
            <button
              data-modal-hide="default-modal"
              type="button"
              className="py-2.5 px-5 ms-3 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
            >
              Limpar
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

// <!-- Main modal -->

// function x({ data }: { data: LancamentoI }, tipo: string){}
