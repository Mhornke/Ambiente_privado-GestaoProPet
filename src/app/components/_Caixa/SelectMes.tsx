export function SelectMes() {
  return (
    <div>
      <div className="w-[30%]">
        <label htmlFor="" className="font-bold text-black">
          Mês
        </label>
        <select
          id="Categoria"
          className="text-black rounded-[8px] border-none w-[163px] h-[37px] shadow-[1px_1px_2.5px_2px_#00000040] flex items-center justify-center"
        >
          <option selected defaultValue={"Selecione"}>
            Selecione
          </option>
          <option value="Janeiro">Janeiro</option>
          <option value="Fevereiro">Fevereiro</option>
          <option value="Marco">Marco</option>
          <option value="Abril">Abril</option>
          <option value="Maio">Maio</option>
          <option value="Junho">Junho</option>
          <option value="Julho">Julho</option>
          <option value="Agosto">Agosto</option>
          <option value="Setembro">Setembro</option>
          <option value="Outubro">Outubro</option>
          <option value="Novembro">Novembro</option>
          <option value="Dezembro">Dezembro</option>
        </select>
      </div>
    </div>
  );
}
