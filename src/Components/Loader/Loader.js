import Loader from "react-loader-spinner";
import "./Loader.style.css"

export function MyLoader() {

    return (
        <div className="loader">
        <Loader type="TailSpin" color="#ff4e00" height={80} width={80}  />
        </div>
    )
}