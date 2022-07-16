import { Client, Account, Models } from "appwrite";
import { useState, useEffect } from "react";

export const useAppwrite = () => {
  const [client, setClient] = useState<null | Client>(null);
  const [account, setAccount] = useState<null | Account>(null);
  const [sessions, setSessions] = useState<null | Models.SessionList>(null);
  const [user, setUser] = useState<null | Models.Preferences>(null);

  const endpoint = process.env.NEXT_PUBLIC_APPWRITE_END_POINT;
  const projectId = process.env.NEXT_PUBLIC_APPWRITE_PROJECT_ID;

  // Initialize Client
  useEffect(() => {
    if (!endpoint || !projectId) {
      console.error("Missing env variables for Appwrite");
      return;
    }
    if (!client) {
      const n = new Client();
      n.setEndpoint(endpoint).setProject(projectId);
      setClient(n);
    }
  }, []);

  // Initialize services
  useEffect(() => {
    if (!client) return;
    if (!account) {
      setAccount(new Account(client));
    }
  }, [client]);

  /*
   * Account Session Tracking
   */

  const createSession = async (account: Account) => {
    try {
      await account.createOAuth2Session(
        "auth0",
        `${location.origin}/`,
        `${location.origin}/?login=failed`
      );
    } catch (error) {
      throw error;
    }
  };

  const getSessions = async (account: Account) => {
    try {
      const sessions = await account.getSessions();
      console.log(sessions);
      setSessions(sessions);
    } catch (error) {
      //   throw error;
    }
  };

  useEffect(() => {
    if (!account) return;
    console.log("getting sessions");
    getSessions(account);
  }, [account]);

  useEffect(() => {
    if (!account) return;
    if (
      !sessions ||
      !sessions?.total ||
      !sessions?.sessions?.filter(
        (s) => new Date(s?.expire * 1000) > new Date()
      )?.length
    ) {
      console.log("creating session", sessions);
      createSession(account);
    }
  }, [sessions]);

  const get = async () => {
    if (!account) return null;
    try {
      return await account.get();
    } catch (error) {
      throw error;
    }
  };

  const deleteSessions = async () => {
    if (!account) return null;
    try {
      return await account.deleteSessions();
    } catch (error) {
      throw error;
    }
  };

  return { client, account };
};
