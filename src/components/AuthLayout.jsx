import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";


export default function Protected({ children, authentication = true }) {

    const navigate = useNavigate();
    const [loader, setlLoader] = useState(true);
    const authStatus = useSelector(state => state.auth.status)

    useEffect(() => {

        //TODO: make it easy
        if (authentication && authStatus !== authentication) {
            navigate("/login")
        } else if (!authentication && authStatus !== authentication) {
            navigate("/")
        }
        setlLoader(false)
    }, [authStatus, navigate, authentication])

    return loader ? <h1>Loading...</h1> : <>{children}</>

}