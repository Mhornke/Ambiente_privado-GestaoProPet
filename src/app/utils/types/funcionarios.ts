import { FuncaoI } from "./funcao";

export interface FuncionarioI {
  id: number;
  nome: string;
  telefone: string;
  funcaoPrincipalId: number;
  funcaoPrincipal: FuncaoI;
}
