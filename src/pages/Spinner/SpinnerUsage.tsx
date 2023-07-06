import CodeBlock from "../../components/CodeBlock"
import { Spinner } from 'idyllic-ui'
import { SpinnerImport, SpinnerPreview, SpinnerVariant, SpinnerJSX, SpinnerSizeVariant } from "./SpinnerSnippets"
import CodeWrapper from "../../components/CodeWrapper"


const SpinnerUsage = () => {

    return (
        <div className="max-w-3xl">

            {/* Import */}
            <div>
                <h2 className="text-2xl text-gray-800 font-semibold pt-10 pb-5">Import</h2>
                <CodeBlock codeString={SpinnerImport} />
            </div>

            {/* Usage */}
            <div>
                <h2 className="text-2xl text-gray-800 font-semibold pt-14 pb-5">Usage</h2>
                {/* Preview */}
                <div className="border border-gray-300 mb-5 py-3 px-2 rounded">
                    <Spinner color="dark" />
                </div>
                <CodeBlock codeString={SpinnerPreview} />
            </div>


            {/* Size */}
            <div>
                <h2 className="text-2xl text-gray-800 font-semibold pt-14 pb-5">Spinner Sizes</h2>
                {/* Preview */}
                <div className="border border-gray-300 mb-5 py-3 px-2 rounded flex gap-5 flex-wrap">
                    <Spinner size="sm" />
                    <Spinner size="md" />
                    <Spinner size="lg" />
                </div>

                <CodeWrapper
                    title="Spinner"
                    Idyllic={SpinnerVariant}
                    plainJsx={SpinnerJSX}
                />
            </div>

            {/* Color */}
            <div>
                <h2 className="text-2xl text-gray-800 font-semibold pt-14 pb-5">Spinner Colors</h2>
                {/* Preview */}
                <div className="border border-gray-300 mb-5 py-3 px-2 rounded flex gap-5 flex-wrap items-center">
                    <Spinner color="dark" />
                    <span className="bg-gray-800 rounded p-2">
                        <Spinner color="light" />
                    </span>

                </div>

                <CodeWrapper
                    title="Spinner"
                    Idyllic={SpinnerSizeVariant}
                    plainJsx={SpinnerJSX}
                />
            </div>


        </div>
    )
}
export default SpinnerUsage