import { INewUser } from "@/types";
import { ID } from "appwrite";
import { account } from "./config";
export async function createUserAccount(user: INewUser) {
  try {
    const newAccount = await account.create(
      ID.unique(),
      user.email,
      user.password,
      user.name
    );
    console.log(newAccount);
    console.log("email: " + user.email);
    console.log("password: " + user.password);
    console.log("name: " + user.name);

    return newAccount;
  } catch (error) {
    return error;
  }
}
