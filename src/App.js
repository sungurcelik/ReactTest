import logo from './logo.svg';
import './App.css';
import Header from './Header';
import Form from './Form';

/**
 * Her react componenti bir JS fonksiyonudur
 * JSX yazımı kullanılır
 * JSX içerisinde direkt olarak JS kodları yazabiliriz.
 * {} içerisine yazılması yeterlidir
 * 
 * jsx'te class yerine className kullanılır
 * for yerine htmlFor kullanılır
 * style yazarken obje şeklinde yazılır
 */

function App() {
  let kendiAdim = "Salih"

  const pStyle = {
    color: "red",
    fontSize: "35px",
  }
  return (
    <div>
      <Header />
      <Form />
    </div >
  );
}

export default App;
