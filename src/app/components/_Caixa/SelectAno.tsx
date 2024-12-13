export function SelectAno() {
  return (
    <div>
      <div className="w-[30%]">
        <label htmlFor="" className="font-bold text-black">
          Ano
        </label>
        <select
          id="Categoria"
          className="text-black rounded-[8px] border-none w-[163px] h-[37px] shadow-[1px_1px_2.5px_2px_#00000040] flex items-center justify-center"
        >
          <option selected defaultValue={"Selecione"}>
            Selecione
          </option>
          <option value="2025">2025</option>
          <option value="2024">2024</option>
          <option value="2023">2023</option>
          <option value="2022">2022</option>
          <option value="2021">2021</option>
          <option value="2020">2020</option>
          <option value="2019">2019</option>
          <option value="2018">2018</option>
          <option value="2017">2017</option>
          <option value="2016">2016</option>
          <option value="2015">2015</option>
          <option value="2014">2014</option>
        </select>
      </div>
    </div>
  );
}
