export const getRegion = async (region) => {
    const URL = `https://restcountries.com/v3.1/region/${region}`;
    try {
      const response = await fetch(URL);
      if (response.ok) {
        const data = await response.json();
        //console.log(data);
        return data;
      } else {
        console.error(
          `Error en la solicitud: ${response.status} ${response.statusText}`
        );
        return null;
      }
    } catch (error) {
      console.error("Ocurrió un error:", error);
    }
  };
  