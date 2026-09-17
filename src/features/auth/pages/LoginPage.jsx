import { useNavigate } from "react-router-dom";
import { useActionState } from "react";
import { useSetAtom } from "jotai";

import { tokenAtom, userAtom } from "../store";
import { login } from "../services/Auth.service";
import { setAuthToken } from "../../../shared";

export default function LoginPage() {
    const setToken = useSetAtom(tokenAtom);
    const setUserConnected = useSetAtom(userAtom);
    
    const nav = useNavigate();

    async function loginAction(prevState, formdata) {
        const username = formdata.get("username");
        const password = formdata.get("password");

        try {
            const data = await login(username, password);
            if (data && data.token) {
                setAuthToken(data.token);
                setToken(data.token);
                setUserConnected(data.user);

                nav('/');
            }
        }
        catch(error) {
            return {
                message: error.message || error.toString()
            }
        } 
    }

    const [state, handleAction, isPending] = useActionState(loginAction, {message : ""});

    return (
        <section>
            { 
                state && state.message &&
                <p className="error">{state.message}</p>
            }
            <form action={handleAction}>
                <label htmlFor="username">Username : </label>
                <input id="username" name="username" type="text" />

                <br/>
                
                <label htmlFor="password">Password : </label>
                <input id="password" name="password" type="password" />

                <br/>

                <button type="submit" disabled={isPending}>Connexion</button>
            </form>
        </section>
    )
}