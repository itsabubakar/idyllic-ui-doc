import CodeBlock from "../../components/CodeBlock"
import { Spinner } from 'idyllic-ui'
import { SpinnerImport, SpinnerPreview, SpinnerVariant, SpinnerExtend, SpinnerSizeVariant } from "./SpinnerSnippets"
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
                    <Spinner />
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
                    <Spinner size="xl" />
                </div>

                <CodeWrapper
                    Idyllic={SpinnerVariant}
                    plainJsx={SpinnerExtend}
                />
            </div>

            {/* Color */}
            <div>
                <h2 className="text-2xl text-gray-800 font-semibold pt-14 pb-5">Spinner Colors</h2>
                {/* Preview */}
                <div className="border border-gray-300 mb-5 py-3 px-2 rounded flex gap-5 flex-wrap">
                    <Spinner color="!border-green-500" />
                    <Spinner color="!border-yellow-500" />
                    <Spinner color="!border-pink-500" />
                    <Spinner color="!border-orange-500" />

                </div>

                <CodeWrapper
                    Idyllic={SpinnerSizeVariant}
                    plainJsx={SpinnerExtend}
                />
            </div>


        </div>
    )
}
export default SpinnerUsage