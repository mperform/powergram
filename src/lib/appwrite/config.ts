import { Client, Account, Databases, Storage, Avatars } from 'appwrite';

export const appwriteConfig = {
    projectId: import.meta.env.VIT_APPWRITE_PROJECT_ID,
    url: import.meta.env.VITE_APPWRITE_URL
}
const client = new Client()
    .setEndpoint(appwriteConfig.url) // Your API Endpoint
    .setProject('6593b2f1c2576de138be');               // Your project ID
export const account = new Account(client);
export const databases = new Databases(client);
export const storage = new Storage(client);
export const avatars = new Avatars(client);