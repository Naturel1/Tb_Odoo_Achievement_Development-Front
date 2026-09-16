const apiBase = import.meta.env.VITE_API_URL_BASE;

/* Partie simulation */
const data = [
    {
        id: 1,
        username: "JohnDoeDu1348",
        email: "John.Doe@gmail.com",
        password: "Test1234="
    },
    {
        id: 2,
        username: "JaneDoeDu1348",
        email: "Jane.Doe@gmail.com",
        password: "Test1234="
    }
]

const dataList = () => {
    return data.map(user => ({
        id: user.id,
        username: user.username
    }))
}

const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms)); 
/* */

export async function login(username, password) {
    await delay(1000);

    const userInData = data.find(user => user.username == username);

    if (userInData && userInData.password == password) {
        return ({
            token: '0000000',
            user: dataList().find(user => user.id = userInData.id)
        });
    } else {
        throw new Error ("Username ou mot de passe incorrect");
    }
}