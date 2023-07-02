import { useContext } from 'react';
import Hero from '../components/Hero'
import Sidebar from '../components/Sidebar';
import { AppContext } from '../context/Context';

const Home = () => {
    const { sidebarOpen } = useContext(AppContext)

    return (
        <>
            <div className="flex relative sm:justify-center">
                <div className={`${sidebarOpen ? 'absolute h-full sm:hidden' : 'hidden'} z-10   bg-white sm:relative`}>
                    <Sidebar />
                </div>
                <div className="-mt-20">
                    <Hero />
                </div>
            </div>
        </>)
}
export default Home