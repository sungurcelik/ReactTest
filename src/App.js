import logo from './logo.svg';
import './App.css';
import Header from './Header';

/**
 * Her react componenti bir JS fonksiyonudur
 * JSX yazımı kullanılır
 * JSX içerisinde direkt olarak JS kodları yazabiliriz.
 * {} içerisine yazılması yeterlidir
 * 
 * jsx'te class yerine className kullanılır
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
      <p style={pStyle}>Benim adım {kendiAdim}</p>
    </div >
  );
}

export default App;
