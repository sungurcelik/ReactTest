/**
 * Component yazım kuralı
 * Her react componenti bir js fonksiyonudur
 * Baş harfi büyük harfle başlar
 * içerisinde mutlkaa bir jsx return eder
 * daha sonra istenilen yerlerde kullanılmak üzere export edilir
 */
// JS fonksiyonu baş harfi büyük

import Button from "./Button";
import Button2 from "./Button2";
function Header() {
  //içerisinde JSX return etme
  return (
    // jsx koları
    <header>
      <h1>Fcoder</h1>
      <nav>
        <a href="">Ana Sayfa</a>
        <a href="">Ürünler</a>
        <a href="">Hakkımızda</a>
        <a href="">İletişim</a>
      </nav>
      <div>
        {/* <Button buttonText={"Kullanıcı Girişi"} />
        <Button buttonText={"Yönetici Girişi"} />
        <Button buttonText={"Kayıt Ol"} /> */}
        <Button2 buttonTitle = {"Kullanici Girişi"} buttonColor={"greenyellow"}/>
        <Button2 buttonTitle = {"Yönetici Girişi"} buttonColor={'orangered'} />
      </div>
    </header>
  );
}
// dışarıya çıkartma
export default Header;
