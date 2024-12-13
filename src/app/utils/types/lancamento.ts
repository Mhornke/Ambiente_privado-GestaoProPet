export interface LancamentoI {
  id: number;
  dia: number;
  mes: string;
  ano: number;
  tipo: string;
  descricao: string;
  valor: number;
  origem: string;
  isEntrada: boolean;
}
