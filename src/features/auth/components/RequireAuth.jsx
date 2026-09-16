import { useNavigate } from "react-router-dom"
import { useAtom } from "jotai"

import { tokenAtom } from "../store"
import { useEffect } from "react"

export default function RequireAuth({children}) {
    const [token] = useAtom(tokenAtom)
    const nav = useNavigate()

    useEffect(() => {
        console.log(token)
        if (!token) {
            nav('/login', {replace: true});
        }
    }, [token, nav]);

    if (!token) {
        return null;
    }

    return children;
}