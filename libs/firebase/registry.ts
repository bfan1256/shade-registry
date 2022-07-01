import {Model} from '@/types/model'
import {db} from '@/libs/firebase/init'
import {doc, getDoc, getDocs, collection, setDoc, increment, updateDoc} from 'firebase/firestore'


export const getModel = async (id: string): Promise<Model | undefined> => {
  const userRef = await getDoc(doc(db, 'registry', id))
  if (!userRef.exists()) return undefined
  return { id: userRef.id, ...userRef.data() } as Model
}

export const incrementModelView = async (id: string): Promise<void> => {
  return await updateDoc(doc(db, 'registry', id), {
    views: increment(1)
  })
}

export const getModels = async (): Promise<Model[] | undefined> => {
  const ref = await getDocs(collection(db, "registry"))
  return ref.docs.map((value) => {
    return { id: value.id, ...value.data() } as Model
  })  
}