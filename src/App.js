import './static/css/default.css';
import './static/css/team.css';

/* import containers */
import Header from './Containers/Header';
import Navigation from './Containers/Navigation';
import { Features } from './Containers/Features';
import { Faq } from './Containers/Faq';
import { Conclutions } from './Containers/conclution';
import { Beneficios } from './Containers/beneficios';
import Team from './Containers/team';
import VideoPlayer  from './Containers/videoPresentation';



function App() {
  return (
    <>
      <Navigation />
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
