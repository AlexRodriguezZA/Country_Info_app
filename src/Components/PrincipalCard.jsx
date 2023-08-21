import { Link } from "wouter";

const PrincipalCard = ({ country }) => {
  return (
    <Link
      href={`/Detail/${country.name.common}`}
      className="w-3/4 h-80 mb-14 rounded-lg shadow-md hover:cursor-pointer hover:shadow-xl flex flex-col bg-white rounded-t-lg md:w-64 dark:bg-darkBlue"
    >
      <div className="w-full rounded-t-lg h-40">
        <img
          className="w-full h-full rounded-t-lg object-cover "
          src={country.flags.svg}
          alt={country.flags.alt}
        />
      </div>
      <div className="w-full mt-5 mb-8 ml-5">
        <h2 className="font-extrabold text-xl dark:text-white">
          {country.name.common}
        </h2>
        <p className="font-semibold mt-3 dark:text-white">
          Population:{" "}
          <span className="dark:text-darkGray">{country.population}</span>
        </p>
        <p className="font-semibold dark:text-white">
          Region: <span className="dark:text-darkGray">{country.region}</span>{" "}
        </p>

        {country.capital ? (
          <p className="font-semibold dark:text-white">
            Capital:{" "}
            <span className="dark:text-darkGray">{country.capital[0]}</span>{" "}
          </p>
        ) : (
          <p className="font-semibold dark:text-white">
            Capital: <span className="dark:text-darkGray">None</span>{" "}
          </p>
        )}
      </div>
    </Link>
  );
};

export default PrincipalCard;
