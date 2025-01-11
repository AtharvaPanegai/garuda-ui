/** @format */

import { useState } from "react";
import { signInUser, signUpUser, signOutUser } from "../api/auth";

export const useAuth = () => {
  const [loading, setLoading] = useState(false);

  const signIn = async (email, password) => {
    setLoading(true);
    try {
      const userData = await signInUser(email, password);
      return userData;
    } catch (error) {
      console.error("Sign-in failed", error);
      throw error;
    } finally {
      setLoading(false);
    }
  };

  const signUp = async (userData) => {
    setLoading(true);
    try {
      const signedupUser = await signUpUser(userData);
      return signedupUser;
    } catch (err) {
      console.error("Sign-up failed", err);
      throw err;
    } finally {
      setLoading(false);
    }
  };

  const signOut = async () => {
    setLoading(true);
    try {
      await signOutUser();
    } catch (err) {
      console.error("Sign Out failed", err);
      throw err;
    } finally {
      setLoading(false);
    }
  };

  return { signIn, signUp, signOut, loading };
};
