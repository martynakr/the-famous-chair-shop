import firestore from "./firestore" 

const cleanRecord  = (docSnapshot) => ({
    id: docSnapshot.id,
    ...docSnapshot.data()
})

export const getProducts = async () => {
    const colRef = firestore.collection("chairs")
    console.log(colRef)
    const snapshot = await colRef.get() 
    console.log(snapshot.docs)
    const docs = snapshot.docs
    return docs.map((doc) => ({
        id: doc.id,
        ...doc.data()
    }))

}


export const findProduct = async (id) => {
    const colRef = firestore.collection("chairs")
    const docRef = colRef.doc(id)
    const docSnap = await docRef.get()
    return cleanRecord(docSnap)

}