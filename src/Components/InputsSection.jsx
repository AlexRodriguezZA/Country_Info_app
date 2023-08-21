import Search from "./Search"
import Select from "./Select"
//Esta section va a contener el search para buscar y el select para seleccionar continentes
const InputsSection = ({setRegionSelect, HadlerSearch}) => {
  return (
    <section className="w-full mt-5 flex flex-col items-center md:w-11/12 md:flex-row md:items-center md:justify-between md:md:mt-14">
        <Search HadlerSearch={HadlerSearch}/>
        <div className="w-11/12 md:flex md:justify-end md:items-center">
          <Select setRegionSelect={setRegionSelect}/>
        </div>
    </section>
  )
}

export default InputsSection