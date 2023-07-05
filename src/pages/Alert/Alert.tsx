import { Link, Outlet } from "react-router-dom";
import Nav from "../../components/Nav";


const Alert = () => {



    return (
        <div className="">
            <div>
                <h1 className="text-3xl text-gray-800 font-semibold pb-5">Alert</h1>
                <p className="text-gray-700 max-w-3xl">Alert component is a component that is used to display an Alert.</p>
            </div>

            <div className="bg-white mt-4">

                <Nav>
                    <Link to={"/documentation/alert"} className="text-gray-600 text-sm py-2 px-6 block hover:text-blue-500 focus:outline-none border-b-[2px] font-medium border-gray-500 -mb-[1.4px]">
                        Usage
                    </Link>
                    <Link to={"/documentation/alert/props"} className="text-gray-600 border-gray-500 text-sm py-2 px-6 block hover:text-blue-500 focus:outline-none -mb-[1.4px]">
                        Props
                    </Link>
                </Nav>

            </div>

            <div className="">
                <Outlet />
            </div>
        </div>
    )
}
export default Alert