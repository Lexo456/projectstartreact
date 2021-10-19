import axios from "axios";

const resp = axios
  .get("https://restcountries.com/v3.1/all")
  .then(function (res) {
    console.log(res);
  });

const Countries = () => {
  //    récuprération des données de l'API

  <div>
    {resp.map(function (item) {
      <li>{item.name.common}</li>;
    })}
  </div>;
};
export default Countries;
