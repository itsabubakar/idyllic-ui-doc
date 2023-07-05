import { useState } from 'react';
import Code from '../components/Code';
import Linker from '../components/Linker';
import { Header } from 'idyllic-ui';


const Installation = () => {

    const [packageManager, setPackageManager] = useState('npm i')

    const setActive = (e: any) => {
        let tabs = e.target.parentElement.childNodes;
        for (let i = 0;i < tabs.length;i++) {
            tabs[i].classList.remove('border-b-2')
        }
        e.target.classList.add('border-b-2');
        let manager = e.target.textContent
        if (manager === 'npm') {
            setPackageManager('npm i')
        } else if (manager === 'pnpm') {
            setPackageManager('pnpm add')
        } else {
            setPackageManager('yarn add')
        }
    }

    const code = ` ${packageManager} idyllic-ui`


    return (
        <div>
            <div>
                <Header as='h2' className=" font-bold text-gray-800">Installation</Header>
                <p className="text-base text-gray-700 pt-6">To use Idyllic UI in your React project, run one of the following commands in your terminal:</p>

                <div className="bg-white mt-4">
                    <nav className="flex" onClick={setActive}>
                        <button className="text-gray-600 text-sm py-2 px-6 block hover:text-blue-500 focus:outline-none border-b-2 font-medium border-gray-500 -mb-[2px]">
                            npm
                        </button>
                        <button className="text-gray-600 -mb-[2px] border-gray-500 text-sm py-2 px-6 block hover:text-blue-500 focus:outline-none">
                            pnpm
                        </button>
                        <button className="text-gray-600 -mb-[2px] border-gray-500 text-sm py-2 px-6 block hover:text-blue-500 focus:outline-none">
                            yarn
                        </button>
                    </nav>
                </div>

                <div className='mt-5 rounded'>
                    <Code acceptCopy={true} variant="black">{code}</Code>


                </div>
                <p className='text-base text-gray-700 mt-8'>After installing Idyllic UI, you can start using it by importing the components where you need them.</p>
                <p className='text-base mt-2 text-gray-700'>This can be anywhere you can use a React component.</p>
                <p className='text-base mt-2 text-gray-700'>You can also copy the jsx if you don't want to install the library .</p>

                <Linker pageLink={'configuration'} />

            </div>
        </div>
    )
}
export default Installation