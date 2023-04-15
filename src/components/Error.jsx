import { useRouteError } from "react-router-dom";
const Error = () => {
    const err = useRouteError();
    return(
        <>
        <h1>{err.status} {err.statusText}</h1>
        <p>Something Went Wrong!</p>
        {console.log(err)}
        </>
    )
}
export default Error;