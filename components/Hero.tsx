import { Player, Controls } from '@lottiefiles/react-lottie-player';
import { appName } from '../config.js'
export default function Hero(){
  return(
    <>
  <Player
  autoplay
  loop
  src="/lottie/2023.json"
  style={{ height: '200px', width: '200px' }}
>
  
</Player>
      <div>
       <h1 className="text-2xl text-center"><span className="text-blue-600 font-bold">{appName}</span><span className="text-gray-900 font-bold">bot</span><span className="animate-ping absolute inline-flex flex h-3 w-3 md:hidden rounded-full bg-sky-400 opacity-75"></span> </h1>
       <h1 className="pt-2 text-center font-bold h-90">Welcome 2023 with <span className="text-blue-600 font-bold">{appName}</span><span className="text-gray-900 font-bold">bot</span></h1>
      </div>
    </>
  )
}