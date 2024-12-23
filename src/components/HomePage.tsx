import {Outlet} from "react-router-dom";

const HomePage = () => {
    return (
        <>
            <Outlet/>
            <p>Welcome Home!</p>
        </>
    );
};

export default HomePage;