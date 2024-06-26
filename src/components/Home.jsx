import React, { useEffect, useState } from "react";
import axios from "axios";
import AdCard from "./AdCard";
import HeroImage from "./HeroImage";

const Home = () => {
  const [products, setProducts] = useState([]);
  const fetchData = async () => {
    try {
      const response = await axios.get(
        "http://localhost:8080/api/advertisements/all"
      );

      // sista 6 produkt
      const recentProducts = response.data.slice(-6);
      setProducts(recentProducts);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchData();
    console.log(
      " aciklamalar: axious ile backend e istek atilacak, backend den veriler alinip state guncellenecek setProducts ile guncellenecek" +
        "state ki veriler for (map) döngusu ile    <AdCard />  componentine props verileri gönderilecek  " +
        "adcard componenti gelen propslari kullanacak"
    );
  }, []);

  return (
    <div className="container">
      <HeroImage />
      <h4
        className="text-left mb-2"
        style={{ paddingTop: "25px", paddingLeft: "22px" }}
      >
        Recently added
      </h4>
      <div className="row">
        {products.map((product, index) => (
          <div key={index} className="col-sm-4">
            <AdCard
            id={product.id} // la till denna: Dany
              category={product.category}
              imgUrl={product.imgUrl}
              price={product.price}
              size={product.size}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;
