import CodeBlock from "../../components/CodeBlock"
import { Header } from 'idyllic-ui'
import { HeaderExtend, HeaderImport, HeaderJSX, HeaderPreview, HeaderVariant } from "./HeaderSnippets"
import CodeWrapper from "../../components/CodeWrapper"


const HeaderUsage = () => {

    return (
        <div className="max-w-3xl">

            {/* Import */}
            <div>
                <h2 className="text-2xl text-gray-800 font-semibold pt-10 pb-5">Import</h2>
                <CodeBlock codeString={HeaderImport} />
            </div>

            {/* Usage */}
            <div>
                <h2 className="text-2xl text-gray-800 font-semibold pt-14 pb-5">Usage</h2>
                {/* Preview */}
                <div className="border border-gray-300 mb-5 py-3 px-2 rounded">
                    <Header as='h1'>Header</Header>
                </div>
                <CodeBlock codeString={HeaderPreview} />
            </div>


            {/* Types */}
            <div>
                <h2 className="text-2xl text-gray-800 font-semibold pt-14 pb-5">Header Types</h2>
                {/* Preview */}
                <div className="border border-gray-300 mb-5 py-3 px-2 rounded flex gap-5 flex-wrap">
                    <Header as="h1">H1</Header>
                    <Header as="h2">H2</Header>
                    <Header as="h3">H3</Header>
                    <Header as="h4">H4</Header>
                    <Header as="h5">H5</Header>
                    <Header as="h6">H6</Header>
                </div>

                <CodeWrapper
                    title="Header"
                    Idyllic={HeaderVariant}
                    plainJsx={HeaderJSX}
                />
            </div>

            {/* Extending styles with tailwindcss */}
            <div>
                <h2 className="text-2xl text-gray-800 font-semibold pt-14 pb-5">Extend</h2>
                <p className="text-gray-700">Easily extend styles with tailwindcss by passing them into <span className="text-blue-500">className</span> prop. You can add any valid tailwindcss class</p>
                {/* Preview */}
                <div className="border border-gray-300 my-5 py-3 px-2 rounded flex gap-5 flex-wrap">
                    <Header className="text-red-500" as="h1">H1</Header>
                    <Header className="text-green-500" as="h2">H2</Header>
                    <Header className="text-blue-500" as="h3">H3</Header>
                    <Header className="text-yellow-500" as="h4">H4</Header>
                    <Header className="text-gray-500" as="h5">H5</Header>
                    <Header as="h6">H6</Header>
                </div>
                <CodeBlock codeString={HeaderExtend} />
            </div>
        </div>
    )
}
export default HeaderUsage