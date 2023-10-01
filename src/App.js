import './static/css/default.css';
import './static/css/team.css';
import './static/bbleStyle.css';

/* import containers */
import Header from './Components/Header';
import { Features } from './Components/Features';
import { Faq } from './Components/Faq';
import { Conclutions } from './Components/conclution';
import { Beneficios } from './Components/beneficios';
import Team from './Components/team';
import VideoPlayer  from './Components/videoPresentation';



function App() {
  return (
    <>

      <Header />
      <Features />
      <VideoPlayer />
      <Beneficios />
      <Faq />
      <Team/>
      <Conclutions />

    </>
  );
}

export default App;
