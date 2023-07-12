import { collection, doc, setDoc, query, getDocs } from "firebase/firestore"; 
import {db} from '../firebase-config'

export const getAllTest = async () => {
 const q = query(collection(db, 'cities'))
 const snapshot = await getDocs(q)
 return snapshot.docs.map(doc => doc.data())
}