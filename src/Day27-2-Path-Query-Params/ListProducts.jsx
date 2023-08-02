import { useParams, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";

export default function ListProduct() {
  const [data, setData] = useState([]);
  const { id } = useParams();
  const location = useLocation();

  const queryParams = new URLSearchParams(location.search);

  const queryParamsObj = {};
  queryParams.forEach((value, key) => {
    queryParamsObj[key] = value;
  });
  console.log("queryParamsObj=", queryParamsObj);

  let fetchdata = async () => {
    let data = await fetch(`https://dummyjson.com/products/${id}`);
    let jsondata = await data.json();
    console.log(jsondata);
    setData(jsondata);
  };
  useEffect(() => {
    fetchdata();
  }, []);

  if (data.length === 0) {
    return <div>No result found</div>;
  }
  return (
    <div>
      <h1>Listproduct</h1>
      <div>
        <p>Title :{data.title}</p>
        <p>Price :{data.price}</p>
        <p>Desciption :{data.description}</p>
      </div>
    </div>
  );
}
