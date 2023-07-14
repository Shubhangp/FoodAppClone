import React, { lazy, Suspense } from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Home";
import Error from "./components/Error";
const RestaurantDetails = lazy(() => import("./components/RestaurentDetails"));
import LocationSearch from "./components/LocationSearch";
import { RouterProvider, createBrowserRouter, Outlet } from "react-router-dom";
import { Auth0Provider } from '@auth0/auth0-react';
const Contact = lazy(() => import("./components/Contact"));
const Search = lazy(() => import("./components/Search"));

const AppLayout = () => {

    const [btnLocation, setBtnLocation] = React.useState(false);

    function handleClick(){
        setBtnLocation(btnLocation => !btnLocation);
    }

    return(
        <div className="_3arMG">
                <Header btnLocation={btnLocation} handleClick={handleClick} />
                <LocationSearch btnLocation={btnLocation} handleClick={handleClick} />
                <Outlet />
        </div>
    )
}

const appRouter = createBrowserRouter([
    {
        path: "/",
        element: <AppLayout />,
        children: [
            {
                path: "/",
                element: <Suspense fallback={<h1>Loading...</h1>}><Body /></Suspense>
            },
            {
                path: "/help",
                element: <Suspense fallback={<h1>Loading...</h1>}><Contact /></Suspense>
            },
            {
                path: "/restaurents/:resId",
                element: <Suspense fallback={<h1>Loading...</h1>}><RestaurantDetails /></Suspense>
            },
            {
                path: "/search",
                element: <Suspense fallback={<h1>Loading...</h1>}><Search /></Suspense>
            }
        ],
        errorElement: <Error />
    },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<Auth0Provider
        domain="dev-wlve64p8zkltmv6z.us.auth0.com"
        clientId="gv9NqcWZG3AsMlAv6HpcNCvkUMh2cugL"
        authorizationParams={{
        redirect_uri: window.location.origin
        }}>
            <RouterProvider router={appRouter} />
        </Auth0Provider>
    );