import { atom } from "jotai";
import { getAuthToken } from "../../../shared";

export const tokenAtom = atom(getAuthToken() || '');
export const userAtom = atom(null);