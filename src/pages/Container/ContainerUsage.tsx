import CodeBlock from "../../components/CodeBlock"
import { Container } from 'idyllic-ui'
import { ContainerImport, ContainerPreview, ContainerExtend, ContainerJSX } from "./ContainerSnippets"
import CodeWrapper from "../../components/CodeWrapper"


const ContainerUsage = () => {

    return (
        <div className="max-w-3xl">

            {/* Import */}
            <div>
                <h2 className="text-2xl text-gray-800 font-semibold pt-10 pb-5">Import</h2>
                <CodeBlock codeString={ContainerImport} />
            </div>

            {/* Usage */}
            <div>
                <h2 className="text-2xl text-gray-800 font-semibold pt-14 pb-5">Usage</h2>
                {/* Preview */}
                <div className="border border-gray-300 mb-5 py-3 px-2 rounded">
                    <Container>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo ab ipsam ullam nostrum libero dignissimos aliquid quia sed sequi officia numquam tempore a, obcaecati magnam earum officiis aut. Beatae, quis?</p>
                    </Container>
                </div>
                <CodeWrapper Idyllic={ContainerPreview} plainJsx={ContainerJSX} title={'Container'} />
            </div>


            {/* Extending styles with tailwindcss */}
            <div>
                <h2 className="text-2xl text-gray-800 font-semibold pt-14 pb-5">Extend</h2>
                <p className="text-gray-700">Easily extend styles with tailwindcss by passing them into <span className="text-blue-500">className</span> prop. You can add any valid tailwindcss class</p>
                {/* Preview */}
                <div className="border border-gray-300 my-5 py-3 px-2 rounded flex gap-5 flex-wrap">
                    <Container className="rounded p-5 bg-gray-800 text-white">
                        <p>
                            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eos, reiciendis explicabo similique odit possimus odio excepturi nihil earum nostrum ipsam, quo maiores tempora optio! Totam molestias explicabo dolore numquam accusamus.
                        </p>
                    </Container>

                </div>
                <CodeBlock codeString={ContainerExtend} />
            </div>
        </div>
    )
}
export default ContainerUsage