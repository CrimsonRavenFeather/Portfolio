import { Intro } from './Components/Intro';
import { About } from './Components/About';
import { Expertise } from './Components/Expertise';
import { Projects } from './Components/Projects';
import { Footer } from './Components/Footer';

function App() {

  return (
    <>
      <div className='w-full poppins-regular' style={{ backgroundImage: "linear-gradient(51deg , #0F0F0F , #081C3D)" }}>
        <Intro />
        <About />
        <Projects/>
        <Expertise/>
        <Footer/>
      </div>
    </>
  );
}

export default App;
