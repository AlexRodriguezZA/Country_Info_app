const Continentes = [
  { nombre: "Africa", id: "1", value: "africa" },
  { nombre: "Asia", id: "2", value: "asia" },
  { nombre: "Europa", id: "3", value: "europe" },
  { nombre: "America", id: "4", value: "america" },
  { nombre: "Oceanía", id: "5", value: "oceania" },
];

const Select = ({setRegionSelect}) => {
  return (
    <select onChange={(e)=> setRegionSelect(e.target.value)} className="rounded-sm w-1/2 text-center text-bold text-xs bg-white h-12 shadow-md mt-10 hover:cursor-pointer dark:bg-darkBlue dark:text-veryLightGray md:mt-0 md:w-40">
      <option className="w-full" defaultValue value="">
        Filter by region
      </option>
      {Continentes.map((Continente) => (
        <option
          className="w-full font-bold"
          key={Continente.id}
          value={Continente.value}
        >
          {Continente.nombre}
        </option>
      ))}
    </select>
  );
};

export default Select;
