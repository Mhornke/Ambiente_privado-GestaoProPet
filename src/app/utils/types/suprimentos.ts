import { CategoriaI } from "./categorias";

export interface SuprimentosI {
  id: number;
  nome: string;
  categoria: CategoriaI;
  categoriaID: number;
  estoque: number;
  unidade: string;
}
