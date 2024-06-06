import { useEffect, useState } from "react";
import "./styles.css";

export default function App() {
  const url = "https://freetestapi.com/api/v1/cars";
  const [data, setData] = useState([]);
  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        setData(data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <h2>Start editing to see some magic happen!</h2>
      {data.map((car) => {
        return (
          <ul>
            <li>
              <h1>
                {" "}
                {car.make} {car.model} {car.year}
              </h1>
              <h3>Transmission : {car.transmission} </h3>
              <h4>Price : {car.price} </h4>
            </li>
          </ul>
        );
      })}
    </div>
  );
}
