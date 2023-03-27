import { getFirestore } from "firebase/firestore";
import { app } from '../app';


export * from './useCreateAuthUser';

export const db = getFirestore(app);

