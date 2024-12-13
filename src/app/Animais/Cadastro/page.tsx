"use client";

import { Datepicker } from "flowbite-react/components/Datepicker";
import { toast } from "sonner";
import Cookies from "js-cookie";
import { Just_Me_Again_Down_Here } from "next/font/google";
import { useState, useEffect, useCallback, ChangeEvent } from "react";
import { maskCPF, maskTel } from "@/app/components/_Mascaras/masks";
import Link from "next/link";
import { ImagemMini } from "@/app/components/_Suprimentos/_Cadastro/ImagemMini";
import { Controller, useForm } from "react-hook-form";
import { EspecieI } from "@/app/utils/types/EspecieI";

const font = Just_Me_Again_Down_Here({
  weight: ["400"],
  subsets: ["latin"],
});

type InputsI = {
  example: string;
  exampleRequired: string;
};
type Inputs = {
  nome: string
  isAtivo: boolean
  peso: Number
  porte: string
  sexo: string
  nascimentoApx: Date
  castacao: string
  castracaoApx: Date
  status: string
  especieId: number
  observacoes: string
  
  fotos: File[]
}


export default function CadastroAnimal() {
  

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
    control,
    setFocus,
    reset,
  } = useForm<Inputs>();

  const [codigo, setCodigo] = useState("");
  const [nome, setnome] = useState(String);
  const [isAtivo, setIsAtivo] = useState<string>();
  const [peso, setpeso] = useState(String);
  const [porte, setporte] = useState(String);
  const [nascimento, setnascimento] = useState<Date>();
  const [castrado, setCastrado] = useState(String);
  const [dataCastra, setDataCastra] = useState<Date>(() => new Date());
  const [status, setStatus] = useState<string>();
  const [fotos, setFotos] = useState([]);

  const [listaEspecies, setListaEspecies] = useState<EspecieI[]>([
    { id: 1, nome: "Cachorro" },
    { id: 2, nome: "Gato" },
  ]);

  const [sexo, setSexo] = useState<string>("");
  const [fileName, setFileName] = useState<string | null>(null);

  const formData = new FormData()
  

  // useEffect(() => {
  //   async function getEspecies() {
  //     try {
  //       const response = await fetch(
  //         `${process.env.NEXT_PUBLIC_URL_API}/especies`
  //       );

  //       if (!response.ok) throw new Error("Erro ao buscar espécies.");
  //       const dados = await response.json();
  //       setListaEspecies(dados);
  //     } catch (error) {
  //       toast.error("Erro ao carregar espécies.");
  //     }
  //   }
  //   getEspecies();
  //   setFocus("nome");
  // }, [setFocus]);
 

  const optionsEspecie = listaEspecies.map((especie) => (
    <option key={especie.id} value={especie.id}>
      {especie.nome}
    </option>
  ));
 
  
  async function incluirAnimal(data: Inputs) {
    const novoAnimal = {
      ...data,
      especieId: Number(data.especieId),
    };
    console.log("dados passados ", novoAnimal);

    try {
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_URL_API}/animais`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${Cookies.get("admin_logado_token") || ""}`, //retirar || ""
          },
          body: JSON.stringify(novoAnimal),
        }
      );

      // Captura e log da resposta da API
      const responseData = await response.json();
      console.log("Response Data:", responseData);

      if (response.ok) {
        toast.success("Ok! Animal cadastrado com sucesso.");
        const formData = new FormData();
        data.fotos.forEach((foto) => {
          formData.append("fotos", foto);
        });
        const fotosResponse = await fetch(`${process.env.NEXT_PUBLIC_URL_API}/fotos`,
          {
            method: "POST",
            body: formData
          })
        reset();
      } else {
        console.error("Erro no cadastro:", responseData);
        toast.error("Erro no cadastro do animal.");
      }
    } catch (error) {
      console.error("Erro no fetch:", error);
      toast.error("Erro na comunicação com o servidor.");
    }
    console.log(novoAnimal);
  }

  return (
    <div className="flex flex-col p-7">
      <div className="flex gap-2 items-center">
        <Link href="/Animais" className="text-primary-menu">
          Animais
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
        <Link href="/Animais/Cadastro" className="text-primary-menu font-bold">
          Edição de Animal
        </Link>
      </div>
      <form
        action=""
        className="flex flex-col gap-4"
        onSubmit={handleSubmit(incluirAnimal)}
      >
        <div className="flex flex-col gap-7 w-[961px] bg-white rounded-[32px] py-[40px] pl-[64px] pr-[33px] shadow-lg">
          <div className="flex text-black">
            <div className="h-auto max-w-[370px] rounded-lg">
              <img src="/Teste/Duke.png" alt="" className="h-auto rounded-lg" />
            </div>
            {/* Começo do  form de dado escrito*/}
            <div className="flex flex-col text-black  w-[100%] gap-3 ps-[50px]">
              <div className="flex gap-4 justify-start">
                <div className="flex flex-col w-[60px]">
                  <div className="font-bold">Código</div>
                  <div className="rounded-[8px] border-none h-[37px] bg-gray-400 text-center shadow-[1px_1px_2.5px_2px_#00000040] flex items-center justify-center">
                    {codigo}
                  </div>
                </div>
                <div className="flex flex-col w-[100%]">
                  <label htmlFor="nome" className="font-bold">
                    Nome do Animal
                  </label>
                  <input
                    id="nome"
                    type="text"
                    className="rounded-[8px] border-none h-[37px] shadow-[1px_1px_2.5px_2px_#00000040] flex items-center justify-center"
                    
                    {...register("nome")}
                  />
                </div>
                <div className="flex flex-col w-[70px]">
                  <label htmlFor="isAtivo" className="font-bold">
                    Ativo
                  </label>
                  <div className="">
                    <label className="inline-flex items-center mb-5 cursor-pointer">
                      <input
                        type="checkbox"
                        className="sr-only peer"
                        {...register("isAtivo")}
                      />
                      <div className="relative w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:w-5 after:h-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
                    </label>
                  </div>
                </div>
              </div>
              <div className="flex gap-2 justify-between">
                <div className="flex flex-col w-[60px]">
                  <label htmlFor="" className="font-bold">
                    Peso
                  </label>
                  <input
                    id="peso"
                    type="number"
                    className="rounded-[8px] border-none h-[37px] shadow-[1px_1px_2.5px_2px_#00000040] flex items-center justify-center"
                    
                    {...register("peso")}
                  />
                </div>
                <div className="flex flex-col">
                  <label htmlFor="" className="font-bold">
                    Porte
                  </label>
                  <select
                    id="porte"
                    {...register("porte")}
                    defaultValue="selecione"
                    className="rounded-[8px] w-fit border-none h-[37px] shadow-[1px_1px_2.5px_2px_#00000040] flex items-center justify-center"
                  >
                    <option value="" selected>
                      Selecione
                    </option>
                    <option value="PP">PP</option>
                    <option value="P">P</option>
                    <option value="M">M</option>
                    <option value="G">G</option>
                    <option value="GG">GG</option>
                  </select>
                </div>
                <div className="">
                  <label htmlFor="" className="font-bold">
                    Nascimento aproximado
                  </label>
                  <Controller
                    name="nascimentoApx"
                    control={control}
                    render={({ field }) => (
                      <div className="relative max-w-sm">
                        <Datepicker
                          language="pt-BR"
                          translate="yes"
                          id="nascimentoApx"
                          value={field.value}
                          onChange={(nascimentoApx) =>
                            field.onChange(nascimentoApx)
                          }
                        />
                      </div>
                    )}
                  />
                </div>
              </div>
              <div className="flex justify-between">
                <div className="">
                  <label htmlFor="lblCastrado" className="font-bold">
                    Castrado(a)
                  </label>
                  <select
                    id="castacao"
                    defaultValue={"selecione"}
                    {...register("castacao")}
                    className="rounded-[8px] w-[-webkit-fill-available] border-none h-[37px] shadow-[1px_1px_2.5px_2px_#00000040] flex items-center justify-center"
                  >
                    <option value="selecione" selected>
                      Selecione
                    </option>
                    <option value="Verificar">Verificar</option>
                    <option value="Nao">Não</option>
                    <option value="Pelo_Abrigo">Pelo Abrigo</option>
                    <option value="Ja_Veio_Castrado">Já veio castrado</option>
                  </select>
                </div>
                <div className="">
                  <label htmlFor="" className="font-bold">
                    Castração data Aproximada
                  </label>
                  <div className="flex ">
                    <Controller
                      name="castracaoApx"
                      control={control}
                      render={({ field }) => (
                        <div className="relative max-w-sm">
                          <Datepicker
                            language="pt-BR"
                            translate="yes"
                            id="castracaoApx"
                            value={field.value}
                            onChange={(castracaoApx) =>
                              field.onChange(castracaoApx)
                            }
                          />
                        </div>
                      )}
                    />
                  </div>
                </div>
              </div>
              <div className="flex gap-10">
                <div className="flex flex-col w-[150px]">
                  <label htmlFor="" className="font-bold">
                    Status
                  </label>
                  <select
                    id="Status"
                    defaultValue={"selecione"}
                    {...register("status")}
                    className="rounded-[8px] w-[-webkit-fill-available] border-none h-[37px] shadow-[1px_1px_2.5px_2px_#00000040] flex items-center justify-center"
                  >
                    <option value="selecione" selected>
                      Selecione
                    </option>
                    <option value="Verificar">Verificar</option>
                    <option value="Lar_Temporario">Lar Temporario</option>
                    <option value="Disponive_Para_Adocao">
                      Disponível para Adoção
                    </option>
                    <option value="Solteiro">Adotado(a)</option>
                  </select>
                </div>
                <div className="flex flex-col w-[150]">
                  <label htmlFor="" className="font-bold">
                    Espécie
                  </label>
                  <select
                    id="especieId"
                    defaultValue={"selecione"}
                    {...register("especieId")}
                    className="rounded-[8px] w-[-webkit-fill-available] border-none h-[37px] shadow-[1px_1px_2.5px_2px_#00000040] flex items-center justify-center"
                  >
                    <option value="selecione" selected>
                      Selecione
                    </option>
                    <option value="1">Cachorro</option>
                    <option value="2">Gato</option>
                  </select>
                </div>
                <div className="flex flex-col w-[150]">
                  <label htmlFor="sexo" className="font-bold">
                    Sexo
                  </label>
                  <select
                    id="sexo"
                    defaultValue={"selecione"}
                    {...register("sexo")}
                    className="rounded-[8px] w-[-webkit-fill-available] border-none h-[37px] shadow-[1px_1px_2.5px_2px_#00000040] flex items-center justify-center"
                  >
                    <option selected value={"selecione"}>
                      Selecione
                    </option>
                    <option value="Nao_Identificado">Não Identificado</option>
                    <option value="Verificar">Verificar</option>
                    <option value="Macho">Macho</option>
                    <option value="Femea">Fêmea</option>
                  </select>
                </div>
              </div>
            </div>
          </div>
          <div className="text-black flex justify-between items-end gap-[10rem]">
            <div className="flex flex-col gap-1 w-fit justify-center items-center">
              <p className="font-bold">Adicionar Fotos</p>
              <div className="py-2 flex justify-center rounded-[8px] shadow-[1px_1px_2.5px_2px_#00000040]">
                <input
                  type="file"
                  id="fotos"
                  className=""
                  placeholder="none"
                  {...register("fotos")}
                />
                {/* Botão estilizado */}
                <label
                  htmlFor="fileInput"
                  className="cursor-pointer  text-white py-2 rounded-md  transition"
                >
                  {fileName ? `Arquivo: ${fileName}` : ""}
                  <svg
                    width="186"
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
                </label>
              </div>
            </div>
            <div className="flex justify-between w-[calc(100%-126px)]">
              <ImagemMini caminho="Teste/imagemFake.png" />
              <ImagemMini caminho="Teste/imagemFake.png" />
              <ImagemMini caminho="Teste/imagemFake.png" />
              <ImagemMini caminho="Teste/imagemFake.png" />
            </div>
          </div>
        </div>
        <div className="w-[961px] h-[204px] bg-white rounded-[32px] pt-[17px] pl-[64px] pb-[32px] pr-[33px] shadow-lg">
          <h4 className="text-black font-extrabold">Observações</h4>
          <textarea
            id=""
            {...register("observacoes")}
            className="w-[859px] h-[107px] bg-white rounded-xl shadow-lg"
          ></textarea>
        </div>
        <button type="submit" className="text-black bold">
          salvar
        </button>
      </form>
    </div>
  );
}
