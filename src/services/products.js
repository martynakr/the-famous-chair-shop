import firestore from "./firestore" 

const cleanRecord  = (docSnapshot) => ({
    id: docSnapshot.id,
    ...docSnapshot.data()
})

export const getProducts = async () => {
    const colRef = firestore.collection("chairs")
    const snapshot = await colRef.get() 
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

export const updateProduct = async (id, partial) => {
    const colRef = firestore.collection("chairs")
    const docRef = colRef.doc(id)
    await docRef.update(partial)
}


export const getCart = async () => {
    const colRef = firestore.collection("cart")
    const snapshot = await colRef.get() 
    const docs = snapshot.docs
    return docs.map((doc) => ({
        id: doc.id,
        ...doc.data()
    }))

}

export const createCartItem = async (cart) => {
    const colRef = firestore.collection("cart")
    const docRef = colRef.doc()
    await docRef.set(cart)

}

export const deleteCartItem = async (id) => {
    const colRef = firestore.collection("cart")
    const docRef = colRef.doc(id)
    await docRef.delete();
}

export const updateCart = async (id, partial) => {
    const colRef = firestore.collection("cart")
    const docRef = colRef.doc(id)
    await docRef.update(partial)
}