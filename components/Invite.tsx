import { appInviteUrl } from '../config.js'
import { Player, Controls } from '@lottiefiles/react-lottie-player';
import { useRouter } from 'next/router'
export default function Invite(){
  const router = useRouter()
  return(
    <div className="justify-center items-center">
       <Player
  autoplay
  loop
  src="/lottie/invite.json"
  style={{ height: '200px', width: '200px' }}
>
       </Player>
    
    <h1 className="pt-9 text-center text-blue-600">Do you like our bot? Let's Add to Your Server  ! </h1>
      <br/>
      <div className="flex items-center justify-center">
      
    <button className="mx-auto text-center w-32 py-3 px-5 rounded-2xl bg-blue-600 text-gray-50 ring-offset-2 ring-4 ring-blue-600" onClick={() => router.push(`${appInviteUrl}`)}>Invite</button>
      </div>
     </div>
  )
}