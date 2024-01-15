import { useEffect, useState } from 'react'
import { getInfoProjects } from '../../firebase/firebase.functions'
import { DocumentData } from 'firebase/firestore'

export default function useDataProjects() {
    const [projectsData, setprojectsData] = useState<DocumentData>([])
    useEffect(() => {
        const getData = async () => {
            const projects =  await getInfoProjects()
            setprojectsData(projects)
        }
    
        getData()
       }, [])
  return {
    projectsData
  }
}
