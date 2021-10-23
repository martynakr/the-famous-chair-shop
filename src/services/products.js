import firestore from "./firestore" 

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
