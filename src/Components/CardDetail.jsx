// import imagen_de_prueba from "../assets/ad.png";

import Map from "./Maps/Map";
import CountryName from "./CountryName";

const CardDetail = ({ dataCountry }) => {
  return (
    <div className="w-10/12 mt-12 mb-10 grid grid-cols-1 place-items-center md:grid-cols-2 md:w-11/12">
      <div className="w-full md:w-10/12 animate-fade ">
        <img
          className="rounded-sm"
          src={dataCountry.flags.svg}
          alt={`flags country ${dataCountry.name.common}`}
        />
      </div>

      {/* secciones del titulo, datos y el mapa con la ubicación */}
      <div className="mt-10 w-full grid grid-col-1 gap-3">
        <h1 className="text-xl mb-5 font-extrabold dark:text-white md:text-2xl">
          {dataCountry.name.common}
        </h1>
        <div className="w-full flex flex-col md:flex-row">
          <section className="w-full flex flex-col gap-3">
            <p className="font-semibold dark:text-white">
              Official name:{" "}
              <span className="text-darkGray">
                {dataCountry.name.official}
              </span>
            </p>
            <p className="font-semibold dark:text-white">
              Capital:{" "}
              <span className="text-darkGray">{dataCountry.capital}</span>
            </p>
            <p className="font-semibold dark:text-white">
              Population:{" "}
              <span className="text-darkGray">
                {dataCountry.population}
              </span>
            </p>
            <p className="font-semibold dark:text-white">
              Region:{" "}
              <span className="text-darkGray">{dataCountry.region}</span>
            </p>
            <p className="font-semibold dark:text-white">
              Sub-region:{" "}
              <span className="text-darkGray">
                {dataCountry.subregion}
              </span>
            </p>
          </section>{" "}
          <section className="w-full h-[210px] mt-10 flex justify-center  gap-2  md:mt-0">
            <Map dataCountry={dataCountry} />
          </section>
        </div>

        {/* seccion de los paises limitrofes que tiene */}
        <section className="w-full mt-5 flex flex-col">
          <h2 className="text-sm font-extrabold dark:text-white ">
            Border Countries:
          </h2>

          <div className="w-full flex flex-wrap gap-1 mt-3">
            {dataCountry.borders ? (
              dataCountry.borders.map((country, index) => (
                <CountryName key={index} name={country} />
              ))
            ) : (
              <p className="w-24 text-sm font-semibold dark:text-white">None</p>
            )}
          </div>
        </section>
      </div>
    </div>
  );
};

export default CardDetail;
