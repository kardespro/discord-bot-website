import { Player, Controls } from '@lottiefiles/react-lottie-player';
import { appDatabaseName , appServerLocation } from '../config.js'
export default function Features(){
  return(
    <>
    <div className="pt-4 md:grid md:grid-cols-2 md:gap-4">
      <hr />
     <div className="">
     <Player
  autoplay
  loop
  src="/lottie/keyboard.json"
  style={{ height: '200px', width: '200px' }}
>
       </Player>
     </div>
    
      
    <div>
    
      <h1 className="text-blue-600 font-bold text-center">Infrastructure</h1>
      <p className="text-md text-center text-gray-900 font-bold">We add speed to our speed with our strong infrastructure</p>

    </div>

  
    </div>

      {/* 2 */}
    <div className="pt-4 md:grid md:grid-cols-2 md:gap-4">
      <hr />
     <div className="">
     <Player
  autoplay
  loop
  src="/lottie/speed.json"
  style={{ height: '200px', width: '200px' }}
>
       </Player>
     </div>
    
      
    <div>
    
      <h1 className="text-blue-600 font-bold text-center">Speed</h1>
      <p className="text-md text-center text-gray-900 font-bold">Do not experience delays with our servers located in {appServerLocation}! </p>

    </div>

  
    </div>


  {/* 3 */}
    <div className="pt-4 md:grid md:grid-cols-2 md:gap-4">
      <hr />
     <div className="">
     <Player
  autoplay
  loop
  src="/lottie/shield.json"
  style={{ height: '200px', width: '200px' }}
>
       </Player>
     </div>
    
      
    <div>
    
      <h1 className="text-blue-600 font-bold text-center">Protect</h1>
      <p className="md:pl-2 text-md text-center text-gray-900 font-bold">Your information is stored in our database in a protected and encrypted form. No 3rd party access to our database. We've Using {appDatabaseName} database for Protection </p>

    </div>

  
    </div>
  

  {/* 4 */}
    <div className="pt-4 md:grid md:grid-cols-2 md:gap-4">
      <hr />
     <div className="">
     <Player
  autoplay
  loop
  src="/lottie/webdashboard.json"
  style={{ height: '200px', width: '200px' }}
>
       </Player>
     </div>
    
      
    <div>
    
      <h1 className="text-blue-600 font-bold text-center">Web Dashboard</h1>
      <p className="md:pl-2 text-md text-center text-gray-900 font-bold">Easily Control More Features In Web Dashboard . You Haven't Seen Such Web Dashboard :) </p>

    </div>

  
    </div>
  
  

      
    </>
  )
}