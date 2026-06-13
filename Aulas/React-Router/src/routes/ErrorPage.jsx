import { useRouteError } from "react-router-dom"



const ErrorPage = () => {
    const error = useRouteError();

    console.error(error)
    return (
        <div>
            <h1>Ops!</h1>
            <h2>Temos um problema </h2>
            <p>{error.error.message}</p>
            <p>{error.statusText}</p>
        </div>
    )
}

export default ErrorPage