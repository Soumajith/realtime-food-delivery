import { Outlet } from "react-router-dom";

const About = () => {
    return (
        <>
        <h1>About Us</h1>
        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sint distinctio eveniet nobis fugiat nulla ipsa quo voluptate! Atque nostrum distinctio doloremque modi ex!</p>
        <Outlet/>
        </>
    )
}

export default About;