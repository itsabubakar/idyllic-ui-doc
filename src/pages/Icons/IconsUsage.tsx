import { IconsImport, IconsJSX, IconsPreview, IconsVariant } from "./IconsSnippets"
import CodeBlock from "../../components/CodeBlock"
import { Avatar, ArrowUp, ArrowDown, ArrowLeft, ArrowRight, Menu, Close } from 'idyllic-ui'
import CodeWrapper from "../../components/CodeWrapper"


const IconsUsage = () => {

    return (
        <div className="max-w-3xl">

            {/* Import */}
            <div>
                <h2 className="text-2xl text-gray-800 font-semibold pt-10 pb-5">Import</h2>
                <CodeBlock codeString={IconsImport} />
            </div>

            {/* Usage */}
            <div>
                <h2 className="text-2xl text-gray-800 font-semibold pt-14 pb-5">Usage</h2>
                {/* Preview */}
                <div className="border border-gray-300 mb-5 py-3 px-2 rounded">
                    <Avatar />
                </div>
                <CodeBlock codeString={IconsPreview} />
            </div>


            {/* Types */}
            <div>
                <h2 className="text-2xl text-gray-800 font-semibold pt-14 pb-5">Available Icons</h2>
                {/* Preview */}
                <div className="border border-gray-300 mb-5 py-3 px-2 rounded flex gap-5 flex-wrap">
                    <Avatar size="sm" color="#bd1414" />
                    <ArrowDown color="#44af74" />
                    <ArrowLeft />
                    <ArrowRight />
                    <ArrowUp />
                    <Menu />
                    <Close />
                </div>

                <CodeWrapper
                    title="Icons"
                    Idyllic={IconsVariant}
                    plainJsx={IconsJSX}
                />
            </div>

        </div>
    )
}
export default IconsUsage