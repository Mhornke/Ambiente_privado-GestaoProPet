"use client";

// import { useEffect, useState } from "react";
// import { FuncionarioI } from "@/app/utils/types/funcionarios";
// import { FuncionarioList } from "@/app/components/Funcionarios/FuncionarioList";
import { ImagemMini } from "../../../components/_Suprimentos/_Cadastro/ImagemMini";
import Link from "next/link";
import { Datepicker } from "flowbite-react";
import CardAnimal from "@/app/components/_Animais/CardAnimal";
import { useState } from "react";
import { maskCPF, maskTel } from "@/app/components/_Mascaras/masks";

export default function InteressadoCadastro() {
  const [cpf, setCpf] = useState<string>("");
  const [tel, setTel] = useState<string>("");

  function handleChangeMask(event: any) {
    const { value }: { value: string } = event.target;

    setCpf(maskCPF(value) ?? ""); // Se maskCPF(value) for undefined, passa uma string vazia
  }

  function MaskTelFuncion(event: any) {
    const { value }: { value: string } = event.target;

    setTel(maskTel(value) ?? ""); // Se maskTel(value) for undefined, passa uma string vazia
  }

  return (
    <div className="flex flex-col gap-4 p-7 telaPeq:overflow-x-auto overflow-y-auto overflow-x-clip h-[calc(100vh-106px)] w-[calc(100vw-256px)] items-center scroll-smooth">
      <div>
        <div className="flex gap-2 items-center self-start">
          <Link href="/Pessoas/Interessados" className="text-primary-menu">
            Interessados
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
          <Link
            href="/Pessoas/Interessados/Cadastro"
            className="text-primary-menu font-bold"
          >
            Edição de Interessado
          </Link>
        </div>
        <form action="" className="flex flex-col gap-4 ">
          <div className="flex flex-col gap-4 w-[961px] bg-white rounded-[32px] pt-[40px] pl-[64px] pb-[32px] pr-[33px] shadow-lg">
            <div className="flex text-black gap-3 ">
              <div className="h-auto max-w-full rounded-lg">
                <img
                  src="/Teste/Interessado.png"
                  alt=""
                  className="h-auto rounded-lg w-[268px]"
                />
              </div>
              {/* Começo do  form de dado escrito*/}
              <div className="flex flex-col text-black  w-[100%] gap-3 px-[50px]">
                <div className="flex gap-4 justify-start">
                  <div className="flex flex-col w-[60px]">
                    <label htmlFor="" className="font-bold">
                      Código
                    </label>
                    <input
                      type="text"
                      className="rounded-[8px] border-none h-[37px] bg-gray-400 text-center shadow-[1px_1px_2.5px_2px_#00000040] flex items-center justify-center"
                      value={1}
                      disabled
                    />
                  </div>
                  <div className="flex flex-col w-[400px]">
                    <label htmlFor="" className="font-bold">
                      Nome do Interessado
                    </label>
                    <input
                      type="text"
                      className="rounded-[8px] border-none h-[37px] shadow-[1px_1px_2.5px_2px_#00000040] flex items-center justify-center"
                      value={"Simparic cão 20,1 a 40 kg"}
                    />
                  </div>
                </div>
                <div className="flex gap-2 justify-between">
                  <div className="flex flex-col w-[150px]">
                    <label htmlFor="" className="font-bold">
                      CPF
                    </label>
                    <input
                      type="text"
                      onChange={handleChangeMask}
                      value={cpf}
                      maxLength={14}
                      className="rounded-[8px] border-none h-[37px] shadow-[1px_1px_2.5px_2px_#00000040] flex items-center justify-center"
                    />
                  </div>
                  <div className="flex flex-col w-[160px]">
                    <label htmlFor="" className="font-bold">
                      Telefone
                    </label>
                    <input
                      type="text"
                      onChange={MaskTelFuncion}
                      value={tel}
                      maxLength={16}
                      className="rounded-[8px] border-none h-[37px] shadow-[1px_1px_2.5px_2px_#00000040] flex items-center justify-center"
                    />
                  </div>
                  <div className="flex flex-col w-[70px]">
                    <label htmlFor="" className="font-bold">
                      Ativo
                    </label>
                    <div className="">
                      <label className="inline-flex items-center mb-5 cursor-pointer">
                        <input
                          type="checkbox"
                          value=""
                          className="sr-only peer"
                        />
                        <div className="relative w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:w-5 after:h-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
                      </label>
                    </div>
                  </div>
                </div>
                <div className="flex justify-between">
                  <div className="w-[30%]">
                    <label htmlFor="" className="font-bold">
                      Estado Civil
                    </label>
                    <select
                      id="Categoria"
                      className="rounded-[8px] border-none w-[163px] h-[37px] shadow-[1px_1px_2.5px_2px_#00000040] flex items-center justify-center"
                    >
                      <option selected defaultValue={"Antipulgas"}>
                        Selecione
                      </option>
                      <option value="Casado">Casado(a)</option>
                      <option value="Solteiro">Solateiro(a)</option>
                      <option value="Divorciado">Divorciado(a)</option>
                    </select>
                  </div>
                  <div>
                    <label htmlFor="" className="font-bold">
                      Data de Nascimento aproximada
                    </label>
                    {/* <input
                    type="text"
                    className="
                    block
                    w-[150px]
                    h-[37px]
                    p-4 
                    text-black
                    shadow-lg
                    border
                    rounded-lg
                    bg-white
                    text-base
                    border-gray-600
                    placeholder-gray-400
                  "
                  /> */}

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
              </div>
            </div>
            <div className="text-black flex gap-5">
              {/* div pra botao de foto mais fotos */}
              <div className="flex flex-col">
                <p className="font-bold">Adicionar Fotos</p>
                <button>
                  <svg
                    width="90"
                    height="90"
                    viewBox="0 0 90 90"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M15 18.75H63.75V45H71.25V18.75C71.25 14.6137 67.8862 11.25 63.75 11.25H15C10.8637 11.25 7.5 14.6137 7.5 18.75V63.75C7.5 67.8862 10.8637 71.25 15 71.25H45V63.75H15V18.75Z"
                      fill="black"
                      fillOpacity="0.8"
                    />
                    <path
                      d="M30 41.25L18.75 56.25H60L45 33.75L33.75 48.75L30 41.25Z"
                      fill="black"
                      fillOpacity="0.8"
                    />
                    <path
                      d="M71.25 52.5H63.75V63.75H52.5V71.25H63.75V82.5H71.25V71.25H82.5V63.75H71.25V52.5Z"
                      fill="black"
                      fillOpacity="0.8"
                    />
                  </svg>
                </button>
              </div>
              <div className="flex gap-1">
                <ImagemMini caminho="Teste/imagemFake.png" />
                <ImagemMini caminho="Teste/imagemFake.png" />
                <ImagemMini caminho="Teste/imagemFake.png" />
                <ImagemMini caminho="Teste/imagemFake.png" />
              </div>
            </div>
          </div>
          <div className="flex flex-col justify-between gap-6 w-[961px] h-fit text-black bg-white rounded-[32px] px-[64px] py-[45px] shadow-lg">
            <div className="flex justify-between">
              <div className="flex flex-col gap-1">
                <label htmlFor="" className="font-bold">
                  CEP
                </label>
                <input
                  type="text"
                  className="placeholder:italic rounded-[8px] border-none w-[163px] h-[37px] shadow-[1px_1px_2.5px_2px_#00000040] flex items-center justify-center"
                  placeholder="Ex: 96015-560"
                />
              </div>
              <div className="flex flex-col w-[250px] gap-1">
                <label htmlFor="" className="font-bold">
                  Cidade
                </label>
                <input
                  type="text"
                  className="rounded-[8px] border-none h-[37px] shadow-[1px_1px_2.5px_2px_#00000040] flex items-center justify-center"
                />
              </div>
              <div className="flex flex-col w-[200px] gap-1">
                <label htmlFor="" className="font-bold">
                  Bairro
                </label>
                <input
                  type="text"
                  className="rounded-[8px] border-none h-[37px] shadow-[1px_1px_2.5px_2px_#00000040] flex items-center justify-center"
                />
              </div>
            </div>
            <div className="flex justify-between">
              <div className="flex flex-col gap-1">
                <label htmlFor="" className="font-bold gap-1">
                  Estado
                </label>
                <input
                  type="text"
                  className="rounded-[8px] border-none w-[163px] h-[37px] shadow-[1px_1px_2.5px_2px_#00000040] flex items-center justify-center"
                />
              </div>
              <div className="flex flex-col w-[500px] gap-1">
                <label htmlFor="" className="font-bold">
                  Endereço
                </label>
                <input
                  type="text"
                  className="rounded-[8px] border-none h-[37px] shadow-[1px_1px_2.5px_2px_#00000040] flex items-center justify-center"
                />
              </div>
              <div className="flex flex-col gap-1">
                <label htmlFor="" className="font-bold">
                  Número
                </label>
                <input
                  type="text"
                  className="placeholder:italic rounded-[8px] border-none w-[110px] h-[37px] shadow-[1px_1px_2.5px_2px_#00000040] flex items-center justify-center"
                  placeholder="Ex: 1024"
                />
              </div>

              {/* <div>
                <label htmlFor="" flex-col>
                  Referência
                </label>
                <input type="text" />
              </div> */}
            </div>
            <div className="flex justify-between">
              <div className="flex flex-col gap-1">
                <label htmlFor="" className="font-bold">
                  Complemento
                </label>
                <input
                  type="text"
                  className="placeholder:italic rounded-[8px] border-none w-[175px] h-[37px] shadow-[1px_1px_2.5px_2px_#00000040] flex items-center justify-center"
                  placeholder="Ex: Ap 502"
                />
              </div>
              <div className="flex flex-col w-[70%] gap-1">
                <label htmlFor="" className="font-bold">
                  Referência
                </label>
                <input
                  type="text"
                  className="rounded-[8px] border-none placeholder:italic  h-[37px] shadow-[1px_1px_2.5px_2px_#00000040] flex items-center justify-center"
                  placeholder="Ex: Ao lado da loja tal..."
                />
              </div>
            </div>
          </div>
          {"inicio da div que  é de adotou conosco, e quais animais"}
          <div>
            <div className="flex flex-col justify-between gap-3 w-[961px] h-[204px] bg-white rounded-[32px] pt-[17px] pl-[64px] pb-[32px] pr-[33px] shadow-lg">
              <div className="flex">
                <h6 className="text-black font-extrabold w-[60%]">
                  Adotou conosco? Quais Animais?
                </h6>
                <div className="flex justify-between w-[40%] text-black">
                  {/* <div className="flex flex-col">
                  <label htmlFor="">Sim</label>
                  <input type="radio" />
                </div>
                <div className="flex flex-col">
                  <label htmlFor="">Não</label>
                  <input type="radio" />
                </div> */}
                  <div className="flex items-center mb-4">
                    <input
                      id="default-radio-1"
                      type="radio"
                      value=""
                      name="default-radio"
                      className="w-4 h-4 text-primary-cadastroInteressado-radiobutton bg-white focus:ring-0 focus:ring-white"
                    />
                    <label
                      htmlFor="default-radio-1"
                      className="ms-2 text-sm font-extrabold text-gray-900 dark:text-gray-300"
                    >
                      Sim
                    </label>
                  </div>
                  <div className="flex items-center">
                    <input
                      id="default-radio-2"
                      type="radio"
                      value=""
                      name="default-radio"
                      className="w-4 h-4 text-primary-cadastroInteressado-radiobutton bg-white focus:ring-0 focus:ring-white"
                    />
                    <label
                      htmlFor="default-radio-2"
                      className="ms-2 text-sm font-extrabold text-gray-900 dark:text-gray-300"
                    >
                      Não
                    </label>
                  </div>
                </div>
              </div>
              <div className="flex gap-10 items-center">
                <div className="relative w-[60%]">
                  <input
                    type="search"
                    id="search-dropdown"
                    className="block text-black p-2.5 w-full text-sm rounded-lg border border-gray-300"
                    placeholder="Pesquise pelo nome"
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
                  </button>
                </div>
                <button>
                  <svg
                    width="61"
                    height="58"
                    viewBox="0 0 61 58"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <rect width="61" height="58" rx="16" fill="#667088" />
                    <path
                      d="M27.9517 43.8182V13.8182H33.0426V43.8182H27.9517ZM15.4972 31.3636V26.2727H45.4972V31.3636H15.4972Z"
                      fill="white"
                    />
                  </svg>
                </button>
              </div>
            </div>
            <div>
              {"mapemento dos animais"}
              <CardAnimal />
            </div>
          </div>
          <div className="w-[961px] h-[204px] bg-white rounded-[32px] pt-[17px] pl-[64px] pb-[32px] pr-[33px] shadow-lg">
            <h4 className="text-black font-extrabold">Observações</h4>
            <textarea
              name=""
              id=""
              className="w-[859px] h-[107px] bg-white text-black rounded-xl shadow-lg p-2"
            ></textarea>
          </div>
        </form>
        {/* <script src="../path/to/flowbite/dist/flowbite.min.js"></script> */}
      </div>
    </div>
  );
}
