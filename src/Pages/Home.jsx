//Componentes
import InputsSection from "../Components/InputsSection";
import ListCards from "../Components/ListCards";
import Loading from "../Components/Loading";

//Funciones y hooks
import { FetchCountries } from "../utils/FetchCountries";
import { getRegion } from "../utils/getRegion";
import { useEffect, useState } from "react";

const Home = () => {
  const [Countries, setCountries] = useState([]);
  const [RegionSelect, setRegionSelect] = useState("");
  const [SearchFilter, setSearchFilter] = useState("");

  const [loading, setloading] = useState(false);

  const HadlerSearch = (e) => {
    setSearchFilter(e.target.value);
  };

  useEffect(() => {
    setloading(true);
    //Función para traer todas los paises
    const getCountries = async () => {
      const data = await FetchCountries();
      setCountries(data);
      setloading(false);
    };

    //Función para traer los paises de una determinada región
    const getCountriesRegion = async () => {
      const data = await getRegion(RegionSelect);
      setCountries(data);
      setloading(false);
    };

    //Evaluamos si existe una región seleccionada por el usuario
    if (RegionSelect) {
      getCountriesRegion(); //si es así lo que hacemos es traer los paises de esa región
    } else {
      getCountries(); //Caso contrario traemos todos lo paises nuevamente
    }
  }, [RegionSelect]);

  let Paises = [];
  if (!SearchFilter) {
     Paises = Countries;
  } else {
     Paises = Countries.filter((country) =>
      country.name.common
        .toLowerCase()
        .includes(SearchFilter.toLowerCase())
    );
  }
  return (
    <section className="w-full flex flex-col items-center max-w-[1500px]">
      <InputsSection
        setRegionSelect={setRegionSelect}
        HadlerSearch={HadlerSearch}
      />
      {loading && <Loading />}
      {Countries && <ListCards Countries={Paises} />}
    </section>
  );
};

export default Home;
