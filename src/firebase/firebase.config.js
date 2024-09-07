import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyDItIAI4f9mV6Go187PxY2feIredZIX9Bc",
  authDomain: "furni-flex-c5b60.firebaseapp.com",
  projectId: "furni-flex-c5b60",
  storageBucket: "furni-flex-c5b60.appspot.com",
  messagingSenderId: "322344462486",
  appId: "1:322344462486:web:efa547a3ed61c5d9277ab7"
};

const app = initializeApp(firebaseConfig);

export default app