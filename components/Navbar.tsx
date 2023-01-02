import Link from 'next/link'
export default function Navbar(){
  return(
    <div className="pt-6 bg-primary/5 grid grid-cols-4 gap-3">
    <p className="pl-10 font-bold text-blue-400 light dark:text-blue-600 underline">Test<span className="text-gray-900 font-bold">Bot</span></p>
      <p className="pl-12 md:pl-40 md:pr-4 font-bold"><Link href="/" className="pl-12 md:pl-40 md:pr-4 font-bold">Home</Link>
    </p>
     <p className="pl-6 md:pl-10 md:pr-4">
      <Link href="/commands" >Commands</Link>
     </p>
      <button className="rounded-full hover:w-12 hover:text-center px-0 border-2 border-white/0 hover:bg-gray-900 hover:bg-gray-900 hover:border-blue-600 transition-all duration-200 md:pl-32">⚡</button>
    </div>
  )
}