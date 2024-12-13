import { Just_Me_Again_Down_Here } from "next/font/google";

const font = Just_Me_Again_Down_Here({
  weight: ["400"],
  subsets: ["latin"],
});

export default function CardAnimal() {
  return (
    <div>
      <a className="cursor-pointer bg-gray-300">
        <div className="bg-primary-bg">
          <div className="max-w-sm rounded-3xl overflow-hidden shadow-lg bg-white px-5 py-2">
            <h3
              className={`font-bold text-black text-4xl mb-3 ${font.className} text-5xl text-center`}
            >
              Dobby
            </h3>
            <img
              className="w-full rounded-3xl"
              src="https://www.pedigree.com.br/sites/g/files/fnmzdf2401/files/2023-11/como-ajudar-cao-de-rua%20.jpg"
              alt="Sunset in the mountains"
            />
            <div className=" pt-4 pb-2">
              <table className="min-w-full">
                <tbody className="text-gray-700 text-sm font-light">
                  <tr>
                    <td className="py-3 ps-2 pe-6 text-left whitespace-nowrap">
                      <img
                        src="./AnimalCard/Bolo.svg"
                        className="inline me-1"
                      />
                      <span className="text-gray-700 font-semibold">
                        Adulto
                      </span>
                    </td>
                    <td className="py-3 px-6 text-left whitespace-nowrap">
                      <img
                        src="./AnimalCard/Macho.svg"
                        className="inline me-1"
                      />
                      <span className="text-gray-700 font-semibold">Macho</span>
                    </td>
                    <td className="py-3 ps-6 pe-2 text-right whitespace-nowrap">
                      <img
                        src="./AnimalCard/Pata.svg"
                        className="inline me-1"
                      />
                      <span className="text-gray-700 font-semibold">
                        Cachorro
                      </span>
                    </td>
                  </tr>
                  <tr>
                    <td className="py-3 ps-2 pe-6 text-left whitespace-nowrap">
                      <img
                        src="./AnimalCard/Balanca.svg"
                        className="inline me-1"
                      />
                      <span className="text-gray-700 font-semibold">12 Kg</span>
                    </td>
                    <td className="py-3 px-6 text-left whitespace-nowrap">
                      <img
                        src="./AnimalCard/Regua.svg"
                        className="inline me-1"
                      />
                      <span className="text-gray-700 font-semibold">M</span>
                    </td>
                    <td className="py-3 ps-6 pe-2 text-right whitespace-nowrap">
                      <img
                        src="./AnimalCard/Tesoura.svg"
                        className="inline me-1"
                      />
                      <span className="text-gray-700 font-semibold">
                        Castrado
                      </span>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </a>
    </div>
  );
}
