"use server"

import { ID } from "node-appwrite";
import { createAdminClient, createSessionClient } from "../appwrite";
import { cookies } from "next/headers";
import { parseStringify } from "@/lib/utils";



interface SignUpParams  {
  firstName?: string;
  lastName?: string;
  address1?: string;
  city?: string;
  state?: string;
  dob?: string;
  email: string;
  password: string;
};

declare interface signInProps {
  email: string;
  password: string;
}

export const signIn = async ({ email, password }: signInProps) => {
  try {
    const { account } = await createAdminClient();
    const session = await account.createEmailPasswordSession(email, password);

    (await cookies()).set("appwrite-session", session.secret, {
      path: "/",
      httpOnly: true,
      sameSite: "strict",
      secure: true,
    });


    return parseStringify(session);
  } catch (error) {
    console.error('Error', error);
  }
}
export const signUp = async (userData:SignUpParams) => {
  const {email, password, firstName, lastName} = userData
  try {
    const { account } = await createAdminClient();

  const newUserAcc = await account.create(ID.unique(), email, password, `${firstName} ${lastName}`);
  const session = await account.createEmailPasswordSession(email, password);

  (await cookies()).set("appwrite-session", session.secret, {
    path: "/",
    httpOnly: true,
    sameSite: "strict",
    secure: true,
  });

  return parseStringify(newUserAcc)
  } catch (error) {
    console.log(error); 
  }
} 

// ... your initilization functions

export async function getLoggedInUser() {
  try {
    const { account } = await createSessionClient();
    const user =  await account.get();
    return parseStringify(user)
  } catch (error) {
    // return null;
    console.log(error);
    
  }
}

export const logoutAccount = async () => {
  try {
    const { account } = await createSessionClient();

    (await cookies()).delete('appwrite-session');

    await account.deleteSession('current');
  } catch (error) {
    // return null;
    console.log(error);
    
  }
}


