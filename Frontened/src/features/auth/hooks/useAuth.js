import { useContext, useEffect } from "react";
import { AuthContext } from "../auth.context";
import { login, register, logout, getMe } from "../services/auth.api";



export const useAuth = () => {

    const context = useContext(AuthContext)
    const { user, setUser, loading, setLoading , loadingMessage, setLoadingMessage } = context


    const handleLogin = async ({ email, password }) => {
        setLoading(true)
        setLoadingMessage("Logging you in ...")
        try {
            const data = await login({ email, password })
            setUser(data.user)
            return data
        } catch (err) {
          console.log(err)
          
        } finally {
            setLoading(false)
            setLoadingMessage("");
        }
    }

    const handleRegister = async ({ username, email, password }) => {
        setLoading(true)
         setLoadingMessage("Creating your account...");

        try {
            const data = await register({ username, email, password })
            setUser(data.user)
        } catch (err) {
            console.log(err)
        } finally {
            setLoading(false)
            setLoadingMessage("");
        }
    }

    const handleLogout = async () => {
        setLoading(true)
        try {
            await logout()
            setUser(null)
        } catch (err) {
           console.log(err)
        } finally {
            setLoading(false)
            setLoadingMessage("");
        }
    }

    useEffect(() => {

        const getAndSetUser = async () => {
            try {

                const data = await getMe()
                setUser(data.user)
            } catch (err) {console.log(err) } finally {
                setLoading(false)
                setLoadingMessage("");
            }
        }

        getAndSetUser()

    },  [setUser, setLoading, setLoadingMessage])

    return { user, loading, loadingMessage, handleRegister, handleLogin, handleLogout ,  setLoadingMessage, }
}
