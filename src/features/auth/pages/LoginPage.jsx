import { useNavigate } from "react-router-dom";
import { useActionState, useEffect } from "react";
import { useAtom } from "jotai";

import { tokenAtom, userAtom } from "../store";

import { login } from "../services/Auth.service";


export default function LoginPage() {
    const [_token, setToken] = useAtom(tokenAtom);
    const [userConnected, setUserConnected] = useAtom(userAtom);
    
    const nav = useNavigate();

    async function loginAction(prevState, formdata) {
        const username = formdata.get("username");
        const password = formdata.get("password");

        try {
            await login(username, password).then(
                data => {
                    if (data && data.token) {
                        setToken(data.token);
                        setUserConnected(data.user);

                        nav('/');
                    }
                }
            )
        }
        catch(error) {
            return {
                message: error.toString()
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