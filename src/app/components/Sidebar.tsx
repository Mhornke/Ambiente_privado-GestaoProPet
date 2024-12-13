"use client";

import Link from "next/link";
import {} from "flowbite";

export function Sidebar() {
  return (
    // <aside>
    //   <h1 className="text-primary-black">Gestão Pro Pet</h1>
    //   <Link href={""}>Início</Link>
    //   <Link href={""}>Animais</Link>
    //   <Link href={""}>Suprimentos</Link>
    //   <Link href={""}>Pessoas</Link>
    //   <Link href={""}>Caixa</Link>
    //   <Link href={""}>Configurações</Link>
    // </aside>
    <div className="top-0 left-0 w-64 transition-transform -translate-x-full sm:translate-x-0 h-[calc(100vh-106px)] shadow-[0_35px_60px_-15px_rgba(0,0,0,0.3)]">
      {/* <button
        data-drawer-target="sidebar-multi-level-sidebar"
        data-drawer-toggle="sidebar-multi-level-sidebar"
        aria-controls="sidebar-multi-level-sidebar"
        type="button"
        className="inline-flex items-center p-2 mt-2 ms-3 text-sm text-gray-500 rounded-lg sm:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
      >
        <span className="sr-only">Open sidebar</span>
        <svg
          className="w-6 h-6"
          aria-hidden="true"
          fill="currentColor"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            clip-rule="evenodd"
            fill-rule="evenodd"
            d="M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zm0 10.5a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5a.75.75 0 01-.75-.75zM2 10a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 10z"
          ></path>
        </svg>
      </button> */}
      <aside
        id="sidebar-multi-level-sidebar"
        className=" top-0 left-0 z-40 w-64 transition-transform -translate-x-full sm:translate-x-0 h-[calc(100vh-106px)]"
        aria-label="Sidebar"
      >
        {/*no ClassName do elemento acima, estava com a class fixed no inicio, para deixar o side bar fixo*/}
        <div className="px-3 py-4 overflow-y-auto  bg-white min-h-full">
          {/*h-full div acima */}
          <ul className="space-y-2 font-medium">
            <li>
              <Link
                href="/Dashboard"
                className="flex items-center p-2 text-white rounded-lg dark:text-white  hover:bg-primary-menuSelecionado dark:hover:bg-primary-menuSelecionado group"
              >
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  xmlns="http://www.w3.org/2000/svg"
                  className="group-hover:text-white text-primary-menu"
                >
                  <path
                    d="M22.1836 11.8359L13.1273 2.78437L12.5203 2.17734C12.382 2.03994 12.1949 1.96283 12 1.96283C11.805 1.96283 11.618 2.03994 11.4797 2.17734L1.81639 11.8359C1.67467 11.9771 1.56266 12.1452 1.48698 12.3304C1.41131 12.5156 1.37349 12.714 1.37577 12.9141C1.38514 13.7391 2.07186 14.3977 2.89686 14.3977H3.89296V22.0312H20.107V14.3977H21.1242C21.525 14.3977 21.9023 14.2406 22.1859 13.957C22.3256 13.8178 22.4362 13.6523 22.5114 13.4701C22.5867 13.2878 22.625 13.0925 22.6242 12.8953C22.6242 12.4969 22.4672 12.1195 22.1836 11.8359ZM13.3125 20.3437H10.6875V15.5625H13.3125V20.3437ZM18.4195 12.7102V20.3437H14.8125V15C14.8125 14.482 14.393 14.0625 13.875 14.0625H10.125C9.60702 14.0625 9.18749 14.482 9.18749 15V20.3437H5.58046V12.7102H3.33046L12.0023 4.04531L12.5437 4.58672L20.6719 12.7102H18.4195Z"
                    fill="currentColor"
                  />
                </svg>
                <span className="flex-1 ms-3 whitespace-nowrap text-primary-menu font-bold group-hover:text-white">
                  Início
                </span>
              </Link>
            </li>
            <li>
              <Link
                href="/Animais"
                className="flex items-center p-2 text-white rounded-lg dark:text-white  hover:bg-primary-menuSelecionado dark:hover:bg-primary-menuSelecionado group"
              >
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="group-hover:text-white text-primary-menu"
                >
                  <path
                    d="M17.9452 14.277C17.5863 12.9758 16.8103 11.8283 15.7365 11.0106C14.6626 10.1928 13.3501 9.75 12.0003 9.75C10.6505 9.75 9.33796 10.1928 8.26408 11.0106C7.19021 11.8283 6.41428 12.9758 6.05534 14.277L5.19996 17.3778C5.04638 17.9345 5.02347 18.5192 5.13301 19.0863C5.24255 19.6533 5.48158 20.1874 5.83147 20.6469C6.18136 21.1064 6.63265 21.4788 7.15015 21.7352C7.66765 21.9916 8.23738 22.125 8.81492 22.125H15.1856C15.7632 22.125 16.3329 21.9916 16.8504 21.7352C17.3679 21.4788 17.8192 21.1064 18.1691 20.6469C18.519 20.1874 18.758 19.6533 18.8675 19.0863C18.9771 18.5192 18.9542 17.9345 18.8006 17.3778L17.9452 14.277ZM16.9757 19.738C16.7667 20.0147 16.4961 20.2389 16.1854 20.3929C15.8747 20.5468 15.5324 20.6263 15.1856 20.625H8.81492C8.46839 20.625 8.12655 20.545 7.81604 20.3912C7.50553 20.2373 7.23475 20.0138 7.02481 19.7382C6.81488 19.4625 6.67146 19.142 6.60573 18.8018C6.54001 18.4615 6.55376 18.1107 6.64592 17.7767L7.50129 14.6759C7.77293 13.6912 8.36014 12.8228 9.17282 12.204C9.9855 11.5851 10.9788 11.25 12.0003 11.25C13.0218 11.25 14.015 11.5851 14.8277 12.204C15.6404 12.8228 16.2276 13.6912 16.4992 14.6759L17.3546 17.7767C17.4481 18.1106 17.4625 18.4617 17.3968 18.8021C17.331 19.1426 17.1869 19.4629 16.9757 19.738Z"
                    fill="currentColor"
                  />
                  <path
                    d="M6.84864 10.7958C6.97914 9.98014 6.80608 9.10699 6.36114 8.33655C5.91621 7.56611 5.24646 6.97966 4.47503 6.68486C3.64891 6.36935 2.80628 6.4196 2.10157 6.82629C0.700617 7.63516 0.331945 9.62871 1.27989 11.2703C1.72469 12.0407 2.39449 12.6273 3.16591 12.922C3.50763 13.0551 3.87086 13.1246 4.23761 13.1269C4.69452 13.1285 5.1437 13.009 5.53938 12.7805C6.24368 12.3738 6.70868 11.6689 6.84864 10.7958ZM5.36739 10.5587C5.30036 10.9772 5.09505 11.3049 4.78928 11.4815C4.48352 11.658 4.09708 11.6719 3.70099 11.5207C3.25038 11.3486 2.85185 10.9933 2.57875 10.5203C2.05375 9.6109 2.17853 8.51402 2.85157 8.12533C3.02076 8.02932 3.21237 7.97986 3.40689 7.98199C3.58937 7.98388 3.76996 8.0191 3.93977 8.08591C4.39038 8.25808 4.78891 8.61335 5.062 9.08637C5.3351 9.55938 5.44352 10.0824 5.36739 10.5587Z"
                    fill="currentColor"
                  />
                  <path
                    d="M7.01103 7.68829C7.54362 8.11406 8.15182 8.33578 8.76687 8.33573C8.9511 8.33567 9.13479 8.31586 9.31479 8.27662C10.8956 7.93298 11.854 6.14648 11.4514 4.29422C11.2625 3.42487 10.8032 2.66217 10.1582 2.1465C9.46746 1.59431 8.64931 1.3853 7.8544 1.55817C6.27369 1.90177 5.31523 3.68827 5.71784 5.54053C5.9068 6.40992 6.36608 7.17262 7.01103 7.68829ZM8.17296 3.02395C8.24585 3.00824 8.32021 3.00038 8.39478 3.00052C8.67359 3.00052 8.96037 3.10959 9.22151 3.31837C9.59824 3.61955 9.8696 4.07934 9.98557 4.61311C10.2087 5.63944 9.7556 6.64598 8.99618 6.81108C8.65114 6.88608 8.27876 6.78164 7.94773 6.51693C7.571 6.21572 7.29964 5.75592 7.18367 5.2222C6.9605 4.19559 7.41359 3.18905 8.17296 3.02395Z"
                    fill="currentColor"
                  />
                  <path
                    d="M21.8987 6.82628C21.1943 6.4196 20.3512 6.36935 19.5252 6.68486C18.7538 6.97956 18.084 7.56611 17.6392 8.33655C17.1944 9.10699 17.0213 9.98031 17.1517 10.7958C17.2915 11.6689 17.7564 12.3738 18.461 12.7805C18.8566 13.009 19.3058 13.1285 19.7627 13.1268C20.1295 13.1246 20.4927 13.0551 20.8344 12.922C21.6059 12.6273 22.2757 12.0407 22.7205 11.2703C23.6683 9.62871 23.2996 7.63516 21.8987 6.82628ZM21.4215 10.5203C21.1484 10.9933 20.7499 11.3486 20.2993 11.5207C19.9034 11.672 19.5168 11.6581 19.2111 11.4814C18.9053 11.3048 18.7001 10.9772 18.633 10.5587C18.5567 10.0824 18.6651 9.55957 18.9382 9.08678C19.2114 8.614 19.6099 8.2585 20.0605 8.08633C20.2303 8.01946 20.4109 7.98417 20.5934 7.98222C20.7879 7.98009 20.9795 8.02955 21.1487 8.12556C21.8217 8.51392 21.9466 9.61066 21.4215 10.5203Z"
                    fill="currentColor"
                  />
                  <path
                    d="M14.6855 8.27654C14.8655 8.31578 15.0492 8.3356 15.2334 8.33565C15.8484 8.33565 16.4569 8.11398 16.9893 7.68822C17.6342 7.17259 18.0935 6.40984 18.2824 5.5405C18.6851 3.68823 17.7266 1.90173 16.1459 1.55814C15.351 1.38536 14.5328 1.59423 13.8421 2.14647C13.1971 2.66209 12.7378 3.42484 12.5489 4.29414C12.1463 6.1464 13.1047 7.9329 14.6855 8.27654ZM14.0147 4.6128C14.1307 4.07903 14.402 3.61905 14.7788 3.31806C15.04 3.10928 15.3267 3.0002 15.6055 3.0002C15.6801 3.00007 15.7544 3.00792 15.8273 3.02364C16.5867 3.18873 17.0398 4.19551 16.8167 5.22161C16.7006 5.75537 16.4293 6.21536 16.0526 6.51639C15.7217 6.78104 15.3495 6.88548 15.0042 6.81053C14.2447 6.64567 13.7916 5.63898 14.0147 4.6128Z"
                    fill="currentColor"
                  />
                </svg>
                <span className="flex-1 ms-3 whitespace-nowrap text-primary-menu font-bold group-hover:text-white">
                  Animais
                </span>
              </Link>
            </li>
            <li>
              <Link
                href="/Suprimentos"
                className="flex items-center p-2 text-white rounded-lg dark:text-white  hover:bg-primary-menuSelecionado dark:hover:bg-primary-menuSelecionado group"
              >
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="group-hover:text-white text-primary-menu"
                >
                  <path
                    d="M11.0287 2.53961C11.6327 2.20402 12.3672 2.20402 12.9713 2.5396L20.4856 6.71425C20.8031 6.89062 21 7.22524 21 7.5884V15.8232C21 16.5495 20.6062 17.2188 19.9713 17.5715L12.9713 21.4604C12.3672 21.796 11.6327 21.796 11.0287 21.4604L4.02871 17.5715C3.39378 17.2188 3 16.5495 3 15.8232V7.5884C3 7.22524 3.19689 6.89062 3.51436 6.71425L11.0287 2.53961Z"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M7.5 4.5L16.5 9.5V13"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M6 12.3281L9 14"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M3 7L12 12M12 12L21 7M12 12V21.5"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinejoin="round"
                  />
                </svg>
                <span className="flex-1 ms-3 whitespace-nowrap text-primary-menu font-bold group-hover:text-white">
                  Suprimentos
                </span>
              </Link>
            </li>
            <li>
              <button
                type="button"
                className="flex items-center w-full p-2 text-base text-white transition duration-75 rounded-lg group hover:bg-primary-menuSelecionado group"
                aria-controls="dropdown-example"
                data-collapse-toggle="dropdown-example"
              >
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="group-hover:text-white text-primary-menu"
                >
                  <path
                    d="M16.7194 19.7519L16.0789 14.6279C15.8912 13.1266 14.615 12 13.1021 12H12.0004H10.8987C9.38573 12 8.10952 13.1266 7.92186 14.6279L7.28136 19.7519C7.13215 20.9456 8.06292 22 9.26591 22H12.0004H14.7348C15.9378 22 16.8686 20.9456 16.7194 19.7519Z"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M12 8C13.6569 8 15 6.65685 15 5C15 3.34315 13.6569 2 12 2C10.3431 2 9 3.34315 9 5C9 6.65685 10.3431 8 12 8Z"
                    stroke="currentColor"
                    strokeWidth="2"
                  />
                  <path
                    d="M4 11C5.10457 11 6 10.1046 6 9C6 7.89543 5.10457 7 4 7C2.89543 7 2 7.89543 2 9C2 10.1046 2.89543 11 4 11Z"
                    stroke="currentColor"
                    strokeWidth="2"
                  />
                  <path
                    d="M20 11C21.1046 11 22 10.1046 22 9C22 7.89543 21.1046 7 20 7C18.8954 7 18 7.89543 18 9C18 10.1046 18.8954 11 20 11Z"
                    stroke="currentColor"
                    strokeWidth="2"
                  />
                  <path
                    d="M3.99993 14H3.69418C2.71651 14 1.88213 14.7068 1.7214 15.6712L1.38806 17.6712C1.18489 18.8903 2.12497 20 3.36085 20H6.99993"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M20 14H20.3057C21.2834 14 22.1178 14.7068 22.2785 15.6712L22.6119 17.6712C22.815 18.8903 21.8751 20 20.6392 20C19.4775 20 18.0952 20 17 20"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
                <span className="flex-1 ms-3 text-left rtl:text-right whitespace-nowrap text-primary-menu font-bold group-hover:text-white">
                  Pessoas
                </span>
                <svg
                  className="w-3 h-3 group-hover:text-white text-primary-menu"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 10 6"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="m1 1 4 4 4-4"
                  />
                </svg>
              </button>
              <ul id="dropdown-example" className="hidden py-2 space-y-2">
                <li>
                  <Link
                    href="/Pessoas/Funcionarios"
                    className="flex items-center w-full p-2 text-primary-menu transition duration-75 rounded-lg pl-11 group hover:text-white hover:bg-primary-menuSelecionado"
                  >
                    Funcionários
                  </Link>
                </li>
                <li>
                  <Link
                    href="/Pessoas/Interessados"
                    className="flex items-center w-full p-2 text-primary-menu transition duration-75 rounded-lg pl-11 group hover:text-white  hover:bg-primary-menuSelecionado"
                  >
                    Interessados
                  </Link>
                </li>
              </ul>
            </li>
            <li>
              <Link
                href="/Caixa"
                className="flex items-center p-2 text-white rounded-lg dark:text-white  hover:bg-primary-menuSelecionado dark:hover:bg-primary-menuSelecionado group"
              >
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="group-hover:text-white text-primary-menu"
                >
                  <path
                    d="M12 12.5C10.067 12.5 8.5 14.067 8.5 16C8.5 17.933 10.067 19.5 12 19.5C13.933 19.5 15.5 17.933 15.5 16C15.5 14.067 13.933 12.5 12 12.5ZM10.5 16C10.5 15.1716 11.1716 14.5 12 14.5C12.8284 14.5 13.5 15.1716 13.5 16C13.5 16.8284 12.8284 17.5 12 17.5C11.1716 17.5 10.5 16.8284 10.5 16Z"
                    fill="currentColor"
                  />
                  <path
                    d="M18.5525 4.80313L15.071 0L2.2688 10.0632L1.55816 10.0567L1.55806 10.0669H1V23H24V10.0669H22.9467L20.8501 4.03249L18.5525 4.80313ZM20.6318 10.0669H9.64857L17.8291 7.32304L19.4959 6.79805L20.6318 10.0669ZM16.3881 5.52908L7.94325 8.36159L14.6309 3.10477L16.3881 5.52908ZM3.19048 18.8707V14.194C4.12407 13.8692 4.86401 13.1411 5.19398 12.2224H19.8055C20.1355 13.1414 20.8756 13.8698 21.8095 14.1945V18.8729C20.8759 19.1977 20.136 19.9258 19.806 20.8445H5.19626C4.8661 19.9246 4.12525 19.1956 3.19048 18.8707Z"
                    fill="currentColor"
                  />
                </svg>

                <span className="flex-1 ms-3 whitespace-nowrap text-primary-menu font-bold group-hover:text-white">
                  Caixa
                </span>
              </Link>
            </li>
            <li>
              <Link
                href="#"
                className="flex items-center p-2 text-white rounded-lg hover:bg-primary-menuSelecionado group"
              >
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="group-hover:text-white text-primary-menu"
                >
                  <path
                    d="M14 3.2686C14 2.56797 13.432 2 12.7314 2H11.2686C10.568 2 10 2.56797 10 3.2686C10 3.84745 9.60365 4.34302 9.0652 4.55546C8.97998 4.58908 8.89547 4.62413 8.81172 4.66056C8.2807 4.89156 7.64975 4.82144 7.24027 4.41197C6.74474 3.91643 5.94132 3.91643 5.44579 4.41197L4.41187 5.44588C3.91632 5.94143 3.91632 6.74487 4.41187 7.24042C4.82135 7.6499 4.89147 8.28086 4.66049 8.81189C4.62408 8.89559 4.58906 8.98004 4.55546 9.0652C4.34302 9.60365 3.84744 10 3.2686 10C2.56797 10 2 10.568 2 11.2686V12.7314C2 13.432 2.56797 14 3.2686 14C3.84744 14 4.34302 14.3963 4.55546 14.9348C4.58906 15.02 4.62408 15.1044 4.66049 15.1881C4.89148 15.7191 4.82135 16.3501 4.41187 16.7596C3.91632 17.2551 3.91632 18.0586 4.41187 18.5541L5.44578 19.588C5.94132 20.0836 6.74474 20.0836 7.24028 19.588C7.64975 19.1786 8.28071 19.1084 8.81173 19.3394C8.89548 19.3759 8.97998 19.4109 9.0652 19.4445C9.60365 19.657 10 20.1526 10 20.7314C10 21.432 10.568 22 11.2686 22H12.7314C13.432 22 14 21.432 14 20.7314C14 20.1526 14.3963 19.657 14.9348 19.4445C15.02 19.4109 15.1045 19.3759 15.1882 19.3395C15.7192 19.1085 16.3501 19.1786 16.7595 19.5881C17.255 20.0836 18.0584 20.0836 18.5539 19.5881L19.588 18.554C20.0835 18.0585 20.0835 17.2552 19.588 16.7597C19.1785 16.3502 19.1084 15.7193 19.3394 15.1883C19.3759 15.1046 19.4109 15.02 19.4445 14.9348C19.657 14.3964 20.1526 14 20.7314 14C21.432 14 22 13.432 22 12.7314V11.2686C22 10.568 21.432 10 20.7314 10C20.1526 10 19.657 9.60365 19.4445 9.0652C19.4109 8.97996 19.3759 8.89544 19.3394 8.81166C19.1084 8.28068 19.1785 7.64977 19.588 7.24033C20.0835 6.74483 20.0835 5.94147 19.588 5.44597L18.5539 4.41193C18.0584 3.91642 17.255 3.91642 16.7595 4.41193C16.3501 4.82138 15.7192 4.8915 15.1882 4.66052C15.1045 4.6241 15.02 4.58907 14.9348 4.55546C14.3963 4.34302 14 3.84744 14 3.2686Z"
                    stroke="currentColor"
                    strokeWidth="2"
                  />
                  <path
                    d="M16 12C16 14.2091 14.2091 16 12 16C9.79086 16 8 14.2091 8 12C8 9.79086 9.79086 8 12 8C14.2091 8 16 9.79086 16 12Z"
                    stroke="currentColor"
                    strokeWidth="2"
                  />
                </svg>
                <span className="flex-1 ms-3 whitespace-nowrap text-primary-menu font-bold group-hover:text-white">
                  Configurações
                </span>
              </Link>
            </li>
          </ul>
        </div>
      </aside>
    </div>
  );
}
