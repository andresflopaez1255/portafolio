import { useEffect, useState } from 'react'
import { getTecnologies } from '../../firebase/firebase.functions'
import { DocumentData } from 'firebase/firestore'

export default function useTecnologies() {
    const [tecnologies, setTecnologies] = useState<DocumentData[]>([])
    useEffect(() => {
        const getData = async () => {
            const tecnologies =  await getTecnologies()
            
            setTecnologies(tecnologies)
        }
    
        getData()
       }, [])
  return {
    tecnologies
  }
}