import { NavLink } from "react-router-dom"
import { AppContext } from "../context/Context"
import { useContext } from 'react'

const Sidebar = () => {

    const links = {
        forms: {
            buttons: '/documentation/button',
            inputs: '/'
        },
        Feedback: {
            Alert: '/documentation/alert',
            spinner: '/',
            skeleton: '/'
        },
        Typography: {
            header: '/'
        },

        layout: {
            container: '/'
        },
        Media: {
            icons: '/',
        },
        others: {
            shadows: '/'
        },
    }

    const { sidebarOpen, setSidebarOpen } = useContext(AppContext)

    const handleClick = () => {
        setSidebarOpen(!sidebarOpen)
    }


    return (
        <div className="w-52 border-r min-h-screen flex flex-col px-5  h-full">
            <h2 className="text-base text-gray-800 mt-10 font-semibold px-2">Setup</h2>
            <div className="flex flex-col">
                <NavLink
                    className={({ isActive }) => (isActive ? 'link active-link' : 'link')}
                    to='/documentation/installation'>Installation</NavLink>
                <NavLink className={({ isActive }) => (isActive ? 'link active-link' : 'link')} to='/documentation/configuration'>Configuration</NavLink>
            </div>

            <h2 className="text-base text-gray-800 mt-4 font-semibold pl-2">Components</h2>

            {
                Object.entries(links).map(([key, val]) => {
                    return <div className="flex flex-col">
                        <h3 key={key} className="text-base text-gray-800 mt-2 font-medium capitalize pl-2 mb-1">{key}</h3>
                        {
                            Object.entries(val).map(([k, v]) => {
                                return <div>
                                    <NavLink key={k} onClick={handleClick} to={v} className={({ isActive }) => (isActive ? 'text-sm font-medium  text-gray-700  py-1 hover:text-blue-500 capitalize inline-flex active-link px-2' : 'text-xs font-medium  text-gray-700  py-1 hover:text-blue-500 capitalize inline-flex px-2')}>{k}</NavLink>
                                </div>

                            })
                        }
                    </div>

                })
            }

        </div>
    )
}
export default Sidebar