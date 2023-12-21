import './App.css'
import { Parallax } from 'react-parallax'
import Streme from "./images/streame.jpg"
import JunglePath from "./images/junglePath.jpg"
import Grapes from "./images/grapes.jpg"
import WoodCabin from "./images/woodCabin.jpg"


function App() {

  return (
    <div className='App'>
          <Parallax  strength={500} bgImage={Streme}>
            <div className='content'>
              <div className='text-content'>Normal Parallax</div>
            </div>
          </Parallax>

          <Parallax  strength={500} blur={{min: -20, max: 15}} bgImage={JunglePath}>
            <div className='content'>
              <div className='text-content'>Blur Parallax</div>
            </div>
          </Parallax>

          <Parallax  strength={-500} bgImage={Grapes}>
            <div className='content'>
              <div className='text-content'>Reverse Parallax</div>
            </div>
          </Parallax>

          <Parallax  strength={500} bgImage={WoodCabin}>
            <div className='content'>
              <div className='text-content'>Normal Parallax</div>
            </div>
          </Parallax>
    </div>
  )
}

export default App
