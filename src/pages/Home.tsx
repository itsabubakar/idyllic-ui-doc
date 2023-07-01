import { useContext } from 'react';
import Hero from '../components/Hero'
import Sidebar from '../components/Sidebar';
import { AppContext } from '../context/Context';

const Home = () => {
    const { sidebarOpen } = useContext(AppContext)

    return (
        <>
            <div className="flex  relative">
                <div className={`${sidebarOpen ? 'absolute h-full' : 'hidden'} z-10   bg-white sm:relative`}>
                    <Sidebar />
                </div>
                <div className="p-5 sm:px-14 sm:py-10">
                    <Hero />
                </div>
            </div>
        </>)
}
export default Home