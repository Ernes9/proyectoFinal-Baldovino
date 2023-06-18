import { initializeApp } from "firebase/app"
import { addDoc, collection, getFirestore } from "firebase/firestore"

const firebaseConfig = {
    apiKey: "AIzaSyAS3ZhekaN2Ln7uAYkp3hnCk3i27ZE9wAI",
    authDomain: "trendcity-90b9e.firebaseapp.com",
    projectId: "trendcity-90b9e",
    storageBucket: "trendcity-90b9e.appspot.com",
    messagingSenderId: "472093517352",
    appId: "1:472093517352:web:648038f7d194bffe3f371d"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);

export async function createOrder(data) {
    const ordersCollectionRef = collection(db, "orders");
    const response = await addDoc(ordersCollectionRef, data);
    return response.id;
}
