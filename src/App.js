import React, { lazy, Suspense, useState } from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider, createBrowserRouter, Outlet } from "react-router-dom";
import Header from "./components/Header/Header";
const LocationSearch = lazy(() => import("./components/Location/LocationSearch"));
import Body from "./components/Home/Home";
const RestaurantDetails = lazy(() => import("./components/ResMenu/RestaurentDetails"));
const Search = lazy(() => import("./components/Search/Search"));
const Contact = lazy(() => import("./components/Help/Contact"));
const Cart = lazy(() => import("./components/Cart/Cart"));
import Error from "./components/Error/Error";
import { Auth0Provider } from '@auth0/auth0-react';
import UserLocation from "./utils/UserLocation";
import { Provider } from "react-redux";
import appStore from "./redux_utilis/appStore";

const AppLayout = () => {

    const [btnLocation, setBtnLocation] = useState(false);
    const [latlng, setLatlng] = useState([]);
    const [placeName, setPlaceName] = useState([]);
    
    function handleClick(){
        setBtnLocation(btnLocation => !btnLocation);
    }

    return(
        <Provider store={appStore}>
            <UserLocation.Provider value={{latitude: latlng.lat, longitude: latlng.lng}}>
                <div className="_3arMG">
                    <Header btnLocation={btnLocation} handleClick={handleClick} placeName={placeName} />
                    <Suspense fallback={<h1></h1>}>
                        <LocationSearch btnLocation={btnLocation} handleClick={handleClick} setLatlng={setLatlng} setPlaceName={setPlaceName} />
                    </Suspense>
                    <Outlet />
                </div>
            </UserLocation.Provider>
        </Provider>
    )
}

const appRouter = createBrowserRouter([
    {
        path: "/",
        element: <AppLayout />,
        children: [
            {
                path: "/",
                element: <Suspense fallback={<h1></h1>}><Body /></Suspense>
            },
            {
                path: "/restaurents/:resId",
                element: <Suspense fallback={<h1></h1>}><RestaurantDetails /></Suspense>
            },
            {
                path: "/search",
                element: <Suspense fallback={<h1></h1>}><Search /></Suspense>
            },
            {
                path: "/help",
                element: <Suspense fallback={<h1></h1>}><Contact /></Suspense>
            },
            {
                path: "/checkout",
                element: <Suspense fallback={<h1></h1>}><Cart /></Suspense>
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