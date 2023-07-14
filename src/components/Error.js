import React from "react";
import { useRouteError } from "react-router-dom";
import Header from "./Header";

const Error = () => {
    const err = useRouteError();
    console.log(err);

    return (<div>
        <Header />
        <h1>Oops!!</h1>
        <h2>Something wents wrong</h2>
        <h3>{err.status}: {err.statusText}</h3>
    </div>)
}

export default Error;