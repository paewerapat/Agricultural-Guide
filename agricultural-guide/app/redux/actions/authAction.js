import { toast } from "react-toastify"
import { currentUser, login, logout } from "../slices/userSlice";


export const loginAction = (userData) => async (dispatch) => {
    try {
        const res = await fetch('/api/auth/login', {
            method: 'POST',
            body: JSON.stringify(userData)
        })
        const jsonRes = await res.json();
        console.log("jsonRes ---> ", jsonRes)
        localStorage.setItem("auth-token", jsonRes.token);
        const payload = {
            ...jsonRes.payload,
            token: jsonRes.token
        }
        dispatch(login(payload));
        return toast.info(jsonRes.msg);
    } catch (err) {
        console.error("[authAction]login - ", err)
        return toast.error(err.msg);
    }
}

export const getCurrentUser = (token) => async (dispatch) => {
    try {
        const res = await fetch('/api/auth/current-user', {
            method: 'POST',
            headers: {
                token: token
            }
        })
        const jsonRes = await res.json();
        return dispatch(currentUser(jsonRes.payload));
    } catch (err) {
        console.error("[authAction]currentUser - ", err);
        return toast.error(err.msg);
    }
}

export const logoutUser = () => async (dispatch) => {
    try {
        dispatch(logout());
        localStorage.removeItem("auth-token");
        return toast.info("Logout successful")
    } catch (err) {
        console.error("[authAction]logoutUser - ", err);
        return toast.error(err.msg);
    }
}