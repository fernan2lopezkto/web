import './static/css/default.css';

/* import containers */
import Header from './Containers/Header';
import Navigation from './Containers/Navigation';
import { Features } from './Containers/Features';
import { Faq } from './Containers/Faq';
import { Conclutions } from './Containers/conclution';
import { Footer } from './Containers/Footer';
import { Beneficios } from './Containers/beneficios';
import Example from './Containers/screnshot';
import { Cards } from './Containers/cards';



function App() {
  return (
    <>
    
      <Navigation />
      <Header />
      <Features />
      
            <Example />
            
      <Beneficios />
      <Faq />
      <Conclutions />
      
      <Footer />

    </>
  );
}

export default App;
