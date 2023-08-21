//Componentes
import BackButton from "../Components/BackButton";
import CardDetail from "../Components/CardDetail";
import Loading from "../Components/Loading";


//Funciones y hooks
import { useState, useEffect } from "react";
import { useRoute } from "wouter";
import { getCountry } from "../utils/getCountry";

const DetailPage = () => {
  const [match, params] = useRoute("/Detail/:name");
  const [country, setCountry] = useState();
  const [loading, setLoading] = useState(false)
  useEffect(() => {
    setLoading(true)
    const getPais = async () => {
      const data = await getCountry(params.name);
      setCountry(data);
      setLoading(false)
    };
    getPais();
  }, []);

  return (
    <section className="w-full flex flex-col items-center max-w-[1500px]">
      <div className="w-10/12 mt-10">
        <BackButton />
      </div>

    {
      loading && <Loading/>
    }
     {
      country && <CardDetail dataCountry={country[0]} />
     }
    </section>
  );
};

export default DetailPage;
