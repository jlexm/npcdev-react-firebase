import { useEffect, useState } from "react";
import { getAllTest } from "../api/test/test";


export default function HomePage() {

  const [cities, setCities] = useState([])

  useEffect(()=> {
    (async () => {
      const fetchedCities = await getAllTest()
      console.log(fetchedCities)
      setCities(fetchedCities)
    })()
  }, [])

  return (
    <div>
      Home page
      Fetched Cities Example Firebase
      <ul>
        {cities.map((city, i) => <li key={i}>{city.name}</li>)}
      </ul>
    </div>
  );
}
