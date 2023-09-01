import 'firebase/app'
import {initializeApp} from 'firebase/app'

import 'firebase/storage'
import { getStorage, ref, listAll, getMetadata, getDownloadURL } from "firebase/storage";

const firebaseConfig = initializeApp( {
  apiKey: "AIzaSyA2t1UcjgLwLpT1OLPa5JldOz9cgU2B3lk",
  authDomain: "pdfviewer-ec3bc.firebaseapp.com",
  projectId: "pdfviewer-ec3bc",
  storageBucket: "pdfviewer-ec3bc.appspot.com",
  messagingSenderId: "164160508922",
  appId: "1:164160508922:web:2af1c39c32e979e8310a43",
  measurementId: "G-Q1CJXFZ6D9"
});

const storage = getStorage(firebaseConfig);

export async function AllListed(folder) {
    // Create a reference under which you want to list
    const listRef = ref(storage, folder);
    try {
      // Find all the prefixes and items.
      const res = await listAll(listRef);
      const itemsWithMetadata = await Promise.all(
        res.items.map(async (itemRef) => {
            const fullPath = itemRef.fullPath;
            const downloadURL = await getDownloadURL(ref(storage, fullPath));
          const metadata = await getMetadata(itemRef);
          return { itemRef, metadata, downloadURL  };
        })
      );
    //  itemsWithMetadata.map((res)=>(console.log("res: ", res)))
      return itemsWithMetadata;
    } catch (error) {
      // Handle the error here
      console.error("An error occurred:", error);
      return [];
    }
  }

export default storage;