import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Bar from '../components/Bar'
import { appCommands } from '../config.js'
import { useEffect , useState } from 'react'
export default function Commands() {
  const [cmd,setCmd] = useState([])
  useEffect(() => {
    setCmd(appCommands)
  }, [])
  const handleSearch = (e) => {
    e.preventDefault();
    const findI = appCommands.filter(i => i.name.toLowerCase().includes(e.target.snego.value.toLowerCase())) || appCommands.filter(i => i.usage.toLowerCase().includes(e.target.snego.value.toLowerCase())) || appCommands.filter(i => i.description.toLowerCase().includes(e.target.snego.value.toLowerCase()))
    setCmd(findI)
  }
  return (
    <>
      <Bar />
      <Navbar />
      <div className="pt-24">
        <form onSubmit={handleSearch} className="flex items-center justify-center">
          <input type="search" className="px-5 py-3 ring-offset-2 ring-4 ring-blue-600 rounded-2xl" name="snego" placeholder="Search Commands" />
        </form>
        <div className="pt-24"></div>
        <div className="bg-gray-200 rounded-2xl shadow-md flex ">
          {/*31*/}
          <table className="min-w-full divide-y divide-gray-800">
                            <thead className="bg-dark-1">
                            <tr>
                                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-white uppercase tracking-wider text-blue-600 pl-12">
                                    Name
                                </th>
                                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-white uppercase tracking-wider text-blue-600">
                                    Usage
                                </th>
                                
                            </tr>
                            </thead>
                            <tbody className="bg-dark-2 divide-y divide-gray-700">
                              
            {cmd.map((item, index) => {
            return (
               <tr key={item.name}>
                                        <td className="px-6 py-4 whitespace-nowrap">
                                            <div className="flex items-center">
                                                <div className="ml-4">
                                                    <div className="text-sm font-medium text-gray-900">{item.name}</div>
                                                    <div className="text-sm text-blue-600">{item.description}</div>
                                                </div>
                                            </div>
                                        </td>
                 <td className="px-6 py-4 whitespace-nowrap">
                                            <div className="text-sm text-gray-900">{item.usage}</div>
                 </td>
                 

               </tr>

                )
          })}
                            </tbody>
          </table>
          </div>
        
        </div>
        


      <div className="pt-48"></div>
      <Footer />
    </>
  )
}