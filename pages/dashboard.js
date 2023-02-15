
import { useState, useEffect } from 'react'
import { getSession, signIn } from 'next-auth/react'


function Dashboard() {
    const [loading, setLoding] = useState(true)

    useEffect(()=> {
        const securePage = async() => {
            const session = await getSession()
            if(!session){
                signIn()
            }else{
                setLoding(false)
            }
        }
        securePage()
    },[])
    if (loading){return <h2>Loading...</h2>}
    
  return (
    <h1>Dashboard</h1>
  )
}

export default Dashboard