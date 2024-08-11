import { useState } from "react";
import Button2 from "./Button2";
import InputField from "./InputField";

const Form = () => {
  const [isim, setIsim] = useState();
  const [soyisim, setSoyisim] = useState();
  const [yas, setYas] = useState();
  return (
    <form action="">
      <InputField
        labelTitle={"Adınızı Giriniz"}
        placeTitle={"Adınız"}
        onChange={(e) => setIsim(e.target.value)}
      />
      <InputField
        labelTitle={"Soyadınızı Giriniz"}
        placeTitle={"Soyadınız"}
        onChange={(e) => setSoyisim(e.target.value)}
      />
      <InputField
        labelTitle={"Yaşınızı Giriniz"}
        placeTitle={"Yaşınız"}
        onChange={(e) => setYas(e.target.value)}
      />

      <Button2
        onClick={() => console.log(isim, soyisim, yas)}
        buttonTitle={"Formu Gönder"}
        buttonColor={"purple"}
      />
    </form>
  );
};

export default Form;
