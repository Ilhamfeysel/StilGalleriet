import AdCard from "./AdCard";
import React, { useEffect, useState } from "react";
import axios from "axios";

const Home = () => {
  const [products, setProducts] = useState([
    {
      category: "gömlek",
      img: "https://plus.unsplash.com/premium_photo-1667428818562-fc8379f23bfe?q=80&w=1854&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      price: 50,
      size: "large",
    },
  ]);

  const fetchData = async () => {
    try {
      const response = await axios.get("https://api.example.com/data");
      console.log(response.data); // Process the data returned by the API
      setProducts(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchData();

    console.log(
      "axious ile backend e istek atilacak, backend den veriler alinip state guncellenecek setProducts ile guncellenecek" +
        "state ki veriler for (map) döngusu ile    <AdCard />  componentine props verileri gönderilecek  " +
        "adcard componenti gelen propslari kullanacak"
    );
  }, []);

  return (
    <div>
      {products.map((product) => (
        <AdCard
          category={product.category}
          img={product.img}
          price={product.price}
          size={product.size}
        />
      ))}
    </div>
  );
};

export default Home;
