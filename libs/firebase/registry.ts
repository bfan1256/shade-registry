import {Model} from '@/types/model'
import {db} from '@/libs/firebase/init'
import {doc, getDoc, getDocs, collection} from 'firebase/firestore'


export const getModel = async (id: string): Promise<Model | undefined> => {
  const userRef = await getDoc(doc(db, 'registry', id))
  if (!userRef.exists()) return undefined
  return userRef.data() as Model
}

export const getModels = async (): Promise<Model[] | undefined> => {
  const ref = await getDocs(collection(db, "registry"))
  return ref.docs.map((value) => {
    return value.data() as Model
  })  
}