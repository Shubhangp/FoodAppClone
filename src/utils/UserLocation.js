import { createContext } from "react";

const UserLocation = createContext({
    latitude: "",
    longitude: ""
});

export default UserLocation;