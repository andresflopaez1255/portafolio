import { useEffect, useState } from 'react'
import {  getWorkInfo } from '../../firebase/firebase.functions'

export default function useWorkExperience() {
    const [workData, setWorkData] = useState<string>("")
    useEffect(() => {
        const getData = async () => {
            const workInfo =  await getWorkInfo()
            console.log("usehook",workInfo)
            setWorkData(workInfo[0].information)
        }
    
        getData()
       }, [])
  return {
    workData
  }
}