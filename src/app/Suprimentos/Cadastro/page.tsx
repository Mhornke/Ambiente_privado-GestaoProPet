"use client";
import { useEffect, useState } from "react";
import Link from "next/link";
import { ImagemMini } from "../../components/_Suprimentos/_Cadastro/ImagemMini";
import { useForm } from 'react-hook-form'
import { toast } from "sonner";

type Inputs = {
  codigo: number
  nome: string
  categoriaId: number
  marca: string
  estoque: number
  unidade: string
  estq_min: number
  descricao: string
}





export default function CadastroSuprimento() {
  const { register, handleSubmit, reset } = useForm<Inputs>();

  async function cadastroSuprimento(data: Inputs) {
    console.log("dados enviados", data);
    const formatData = {
      ...data,
      codigo: Number(data.codigo),
      estoque: Number(data.estoque),
      estq_min: Number(data.estq_min),
      categoriaId: Number(data.categoriaId),
    }


    const response = await fetch(`${process.env.NEXT_PUBLIC_URL_API}/suprimentos`,
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formatData)
      })
    console.log("dados vindo pro método", data);
    if (response.status == 201) {
      toast.success("Suprimento cadastrado com sucesso!");
      reset();
    } else {
      toast.error("Houve um erro ao cadastrar o suprimento.");
    }

  }

  return (
    <div className="flex flex-col gap-4 p-7">
      <div className="flex gap-2 items-center">
        <Link href="/Suprimentos" className="text-primary-menu">
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
        <Link
          href="/Suprimentos/Cadastro"
          className="text-primary-menu font-bold"
        >
          Cadastro de Suprimento
        </Link>
      </div>
      <form action="" className="flex flex-col gap-4" onSubmit={handleSubmit(cadastroSuprimento)}>
        <div className="flex flex-col gap-4 w-[961px] bg-white rounded-[32px] pt-[17px] pl-[64px] pb-[32px] pr-[33px] shadow-lg">
          <div className="flex text-black gap-3">
            <div className="h-auto max-w-full rounded-lg">
              <img
                src="https://images.tcdn.com.br/img/img_prod/1259715/antipulgas_e_carrapatos_simparic_para_caes_de_5_1_a_10_kg_3_unidades_20_mg_28_1_a91e2179153acf045891b18be7e99366.jpg"
                alt=""
                className="h-auto rounded-lg w-[200px]"
              />
            </div>
            {/* Começo do  form de dado escrito*/}
            <div className="flex flex-col text-black">
              <div className="flex gap-2">
                <div>
                  <label htmlFor="" className="font-bold">
                    Código
                  </label>
                  <input
                    type="number"
                    className="
                    block
                    w-[71px]
                    h-[37px]
                    p-4
                    cursor-not-allowed
                    text-white
                    shadow-md
                    rounded-lg
                    bg-primary-bloqueado
                    text-base
                    border-gray-600
                    placeholder-gray-400
                    disabled
                    readonly
                    "
                    id="codigo"
                    {...register("codigo")}

                  />
                </div>
                <div>
                  <label htmlFor="" className="font-bold">
                    Nome do Item
                  </label>
                  <input
                    type="text"
                    className="
                    block
                    w-[350px]
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
                    id="nome"
                    {...register("nome")}
                    value={"Simparic cão 20,1 a 40 kg"}
                  />
                </div>
              </div>
              <div className="flex gap-2">
                <div className="">
                  <label htmlFor="" className="font-bold">
                    Categoria
                  </label>
                  {/* <input
                    type="number"
                    className="
                    block
                    w-[71px]
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
                  <select
                    className="
                    bg-white
                    border
                    border-gray-300
                    text-black
                    text-sm rounded-lg
                    focus:ring-blue-500
                    focus:border-blue-500
                    block
                    w-full
                    p-2.5
                    dark:border-gray-600
                    dark:focus:ring-blue-500
                    dark:focus:border-blue-500"
                    id="categoriaId"
                    {...register("categoriaId")}
                  >
                    {/* Trocar o valor para numero para enviar pro back */}
                    <option selected defaultValue={"Antipulgas"}>
                      Selecione
                    </option>
                    <option value="1">Antipulgas</option>
                    <option value="2">Cama</option>
                    <option value="3">Ração</option>
                  </select>
                </div>
                <div>
                  <label htmlFor="" className="font-bold">
                    Marca
                  </label>
                  <input
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
                    id="marca"
                    {...register("marca")}
                  />
                </div>
              </div>
              <div className="flex gap-2">
                <div className="flex flex-col">
                  <label htmlFor="" className="font-bold">
                    Estoque
                  </label>
                  <input
                    type="number"
                    className="
                    block
                    w-[71px]
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
                    id="estoque"
                    {...register("estoque")}
                    min={0}
                  />
                </div>
                <div>
                  <label htmlFor="" className="font-bold">
                    Unidade
                  </label>
                  {/* <input
                    type="number"
                    className="
                    block
                    w-[71px]
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
                  <select
                    className="
                    bg-white
                    border
                    border-gray-300
                    text-black
                    text-sm rounded-lg
                    focus:ring-blue-500
                    focus:border-blue-500
                    block
                    w-full
                    p-2.5
                    dark:border-gray-600
                    dark:focus:ring-blue-500
                    dark:focus:border-blue-500"
                    id="unidade"
                    {...register("unidade")}
                  >
                    <option selected defaultValue={"Un"}>
                      Selecione
                    </option>
                    <option value="Un">Un</option>
                    <option value="Kg">Kg</option>
                    <option value="Pc">Pc</option>
                  </select>
                </div>
                <div>
                  <label htmlFor="" className="font-bold">
                    Quant. Min Estoque
                  </label>
                  <div className="flex gap-2 items-center">
                    <input
                      type="number"
                      className="
                    block
                    w-[71px]
                    h-[37px]
                    p-4 
                    text-black
                    shadow-lg
                    border
                    rounded-lg
                    bg-white
                    text-base
                    placeholder-gray-400
                  "
                      id="estq_min"
                      {...register("estq_min")}
                      value={1}
                    />
                    <p className="">Kg</p>
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
              {/* <ImagemMini />
              <ImagemMini />
              <ImagemMini />
              <ImagemMini /> */}
            </div>
          </div>
        </div>
        <div className="w-[961px] h-[204px] bg-white rounded-[32px] pt-[17px] pl-[64px] pb-[32px] pr-[33px] shadow-lg">
          <h4 className="text-black font-extrabold">Descrição do Item</h4>
          <textarea
            id="descricao"
            {...register("descricao")}
            className="w-[859px] h-[107px] bg-white text-black rounded-xl shadow-lg p-2"
          ></textarea>
        </div>
        <button type="submit" className="p-3 bg-black">Salvar</button>
      </form>
    </div>
  );
}
