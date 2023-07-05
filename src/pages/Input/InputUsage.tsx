import CodeBlock from "../../components/CodeBlock"
import { Input } from 'idyllic-ui'
import CodeWrapper from "../../components/CodeWrapper"


const InputUsage = () => {

    return (
        <div className="max-w-3xl">

            {/* Import */}
            <div>
                <h2 className="text-2xl text-gray-800 font-semibold pt-10 pb-5">Import</h2>
                {/* <CodeBlock codeString={ButtonImport} /> */}
            </div>

            {/* Usage */}
            <div>
                <h2 className="text-2xl text-gray-800 font-semibold pt-14 pb-5">Usage</h2>
                {/* Preview */}
                <div className="border border-gray-300 mb-5 py-3 px-2 rounded">
                    <Input type="text" label="Label" />
                </div>
                {/* <CodeBlock codeString={ButtonPreview} /> */}
            </div>


            {/* Types */}
            <div>
                <h2 className="text-2xl text-gray-800 font-semibold pt-14 pb-5">Button Types</h2>
                {/* Preview */}
                <div className="border border-gray-300 mb-5 py-3 px-2 rounded flex gap-5 flex-wrap">
                    {/* <Button type="light">Button</Button>
                    <Button type="dark">Button</Button>
                    <Button type="light-outline">Button</Button>
                    <Button type="dark-outline">Button</Button> */}
                </div>

                {/* <CodeWrapper
                    Idyllic={ButtonVariant}
                    plainJsx={ButtonExtend}
                /> */}
            </div>

            {/* Extending styles with tailwindcss */}
            <div>
                <h2 className="text-2xl text-gray-800 font-semibold pt-14 pb-5">Extend</h2>
                <p className="text-gray-700">Easily extend styles with tailwindcss by passing them into <span className="text-blue-500">className</span> prop. You can add any valid tailwindcss class</p>
                {/* Preview */}
                <div className="border border-gray-300 my-5 py-3 px-2 rounded flex gap-5 flex-wrap">
                    {/* <Button className="bg-green-500 text-white hover:text-black">Button</Button>
                    <Button className="bg-red-500 text-white  hover:text-black" >Button</Button>
                    <Button className="bg-gray-500 text-white hover:text-black" >Button</Button>
                    <Button className="bg-yellow-500 text-white hover:text-black">Button</Button> */}
                </div>
                {/* <CodeBlock codeString={ButtonExtend} /> */}
            </div>
        </div>
    )
}
export default InputUsage