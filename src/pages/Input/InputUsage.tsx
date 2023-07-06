import CodeBlock from "../../components/CodeBlock"
import { Input } from 'idyllic-ui'
import CodeWrapper from "../../components/CodeWrapper"
import { InputImport, InputJSX, InputPreview, InputTypes } from "./InputSnippets"


const InputUsage = () => {

    return (
        <div className="max-w-3xl">

            {/* Import */}
            <div>
                <h2 className="text-2xl text-gray-800 font-semibold pt-10 pb-5">Import</h2>
                <CodeBlock codeString={InputImport} />
            </div>

            {/* Usage */}
            <div>
                <h2 className="text-2xl text-gray-800 font-semibold pt-14 pb-5">Usage</h2>
                {/* Preview */}
                <div className="border border-gray-300 mb-5 py-3 px-2 rounded">
                    <Input label="Email" type="email" />
                </div>
                <CodeBlock codeString={InputPreview} />
            </div>


            {/* Types */}
            <div>
                <h2 className="text-2xl text-gray-800 font-semibold pt-14 pb-5">Input Types</h2>
                {/* Preview */}
                <div className="border border-gray-300 mb-5 py-3 px-2 rounded flex gap-5 flex-wrap">
                    <Input label="Email" type="email" />
                    <Input label="Password" type="password" />
                    <Input label="Number" type="number" />
                    <Input label="Text" type="text" />

                </div>

                <CodeWrapper
                    title="Input"
                    Idyllic={InputTypes}
                    plainJsx={InputJSX}
                />
            </div>


        </div>
    )
}
export default InputUsage