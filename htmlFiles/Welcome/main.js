import { account} from "./appwrite";

const loginScreen =document.getElementById('login-screen')
const loginbtn=document.getElementById('google-login')

loginbtn.addEventListener("click", handleLogin);


async function handleLogin() {
  loginbtn.addEventListener("click", () => {
  account.createOAuth2Session(
    "google",
    "http://127.0.0.1:3000",
    "http://127.0.0.1:3000/login-fail"
  );
});

    
}

async function getUser() {
    try {
        const user = await account.get()
        renderProfileScreen(user)

    } catch (error) {
        renderLoginScreen()
    }
}

function renderLoginScreen(){
    loginScreen.classList.remove('hidden')

}