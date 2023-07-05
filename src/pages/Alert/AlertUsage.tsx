import CodeBlock from "../../components/CodeBlock"
import { Alert } from 'idyllic-ui'
import { AlertImport, AlertVariant, AlertExtend, AlertPreview, AlertJSX } from "./AlertSnippets"
import CodeWrapper from "../../components/CodeWrapper"


const AlertUsage = () => {

    return (
        <div className="max-w-3xl">

            {/* Import */}
            <div>
                <h2 className="text-2xl text-gray-800 font-semibold pt-10 pb-5">Import</h2>
                <CodeBlock codeString={AlertImport} />
            </div>

            {/* Usage */}
            <div>
                <h2 className="text-2xl text-gray-800 font-semibold pt-14 pb-5">Usage</h2>
                {/* Preview */}
                <div className="border border-gray-300 mb-5 py-3 px-2 rounded">
                    <Alert>This is an alert</Alert>
                </div>
                <CodeBlock codeString={AlertPreview} />
            </div>


            {/* Types */}
            <div>
                <h2 className="text-2xl text-gray-800 font-semibold pt-14 pb-5">Alert Types</h2>
                {/* Preview */}
                <div className="border border-gray-300 mb-5 py-3 px-2 rounded flex gap-5 flex-wrap">
                    <Alert type="success">Alert</Alert>
                    <Alert type="info">Alert</Alert>
                    <Alert type="warning">Alert</Alert>
                    <Alert type="error">Alert</Alert>
                </div>

                <CodeWrapper
                    title="Alert"
                    Idyllic={AlertVariant}
                    plainJsx={AlertJSX}
                />
            </div>

            {/* Extending styles with tailwindcss */}
            <div>
                <h2 className="text-2xl text-gray-800 font-semibold pt-14 pb-5">Extend</h2>
                <p className="text-gray-700">Easily extend styles with tailwindcss by passing them into <span className="text-blue-500">className</span> prop. You can add any valid tailwindcss class</p>
                {/* Preview */}
                <div className="border border-gray-300 my-5 py-3 px-2 rounded flex gap-5 flex-wrap">
                    <Alert className="bg-green-500 text-white">Alert</Alert>
                    <Alert className="bg-red-500 text-white " >Alert</Alert>
                    <Alert className="bg-gray-500 text-white" >Alert</Alert>
                    <Alert className="bg-yellow-500 text-white">Alert</Alert>
                </div>
                <CodeBlock codeString={AlertExtend} />
            </div>
        </div>
    )
}
export default AlertUsage