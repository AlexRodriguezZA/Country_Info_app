import PrincipalCard from "./PrincipalCard";

const ListCards = ({ Countries }) => {
  return (
    <section className="w-full h-72 mt-5 mb-5 grid grid-cols-1 place-items-center md:grid-cols-2 lg:grid-cols-4 md:w-11/12 md:mt-14">
      {Countries &&
        Countries.map((country, index) => (
          <PrincipalCard key={index} country={country} />
        ))}
    </section>
  );
};

export default ListCards;
