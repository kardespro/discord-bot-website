import { appName } from '../config.js'

export default function Footer(){
  return(
    <div className="text-center">
    <p className="font-bold">Copyright ©️ {new Date().getFullYear()} - <span className="font-bold text-blue-600">{appName}</span><span className="text-gray-900 font-bold">Bot</span> </p>
      <p className="font-bold"> Made By <a href="https://github.com/kardespro"><span className="text-blue-600 font-bold">Ne</span><span className="text-gray-900 font-bold">go</span></a></p>
    </div>
  )
}