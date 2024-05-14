import AdCard from "./AdCard";
import React, { useEffect, useState } from "react";
import axios from "axios";

const Home = () => {
  const [products, setProducts] = useState([
    {
      category: "gömlek",
      imgUrl:
        "https://plus.unsplash.com/premium_photo-1667428818562-fc8379f23bfe?q=80&w=1854&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      price: 50,
      size: "large",
    },
  ]);

  const fetchData = async () => {
    try {
      const response = await axios.get("https://api.example.com/data");
      console.log(response.data); // Process the data returned by the API
      // setProducts(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchData();
    /* notes from videos

17. satirda axios.gette bulunan endpoint guncellenecek
18. satirda backkendden gelen veri consolda yazildi, gelen veriye bak adCard da göndermis oldugumuz propslari 
gelen veriye göre guncelle
backendden gelen bilgilere göre adCard propslari guncellendikten sonra 19. satirda yotuma alinan setProduct yorumdan kalkacak

6. satirda tanimladigimiz useState default degeri bos array olacak. yani useState([]) olacak.
son olarak adCard componentinde propslar yeni degerleri ile guncellenecek


 */
    console.log(
      "axious ile backend e istek atilacak, backend den veriler alinip state guncellenecek setProducts ile guncellenecek" +
        "state ki veriler for (map) döngusu ile    <AdCard />  componentine props verileri gönderilecek  " +
        "adcard componenti gelen propslari kullanacak"
    );
  }, []);

  return (
    <div className="container">
      <div className="row">
        {products.map((product, index) => (
          <div key={index} className="col-sm-4">
            <AdCard
              key={index}
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
