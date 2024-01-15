import { collection, query, getDocs, DocumentData } from "firebase/firestore";
import {db} from "./firebase"

const getInfoProjects = async () =>{
    const request = query(collection(db, "projects"));
    const data: DocumentData[] = []
    const querySnapshot = await getDocs(request);
    querySnapshot.forEach((doc) => {
      data.push(doc.data())
    });

    return data
}

const getWorkInfo = async () =>{
  const request = query(collection(db, "work-expierence"));
  const data: DocumentData[] = []
  const querySnapshot = await getDocs(request);
  querySnapshot.forEach((doc) => {
    data.push(doc.data())
  });

  return data
}


export {
    getInfoProjects,
    getWorkInfo
}



