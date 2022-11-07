
import './App.css';
import NavBar from './components/navBar';
import Footer from './components/footer';
import Catalogue from './pages/catalogue.';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.js';


function App() {
  return (
<div>
  <NavBar></NavBar>
  <Catalogue></Catalogue>
 
  <Footer></Footer>
</div>
  );
}
export default App;
