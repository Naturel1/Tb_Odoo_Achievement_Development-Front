import { useNavigate } from "react-router-dom"
import { useAtom } from "jotai"

import { tokenAtom } from "../store"

export function useAuth() {
    const [token] = useAtom(tokenAtom)
    const nav = useNavigate()
    if(!token) {
        nav('/')
    }
}