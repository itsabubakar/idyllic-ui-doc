import { Header } from "idyllic-ui"
import CodeBlock from "../components/CodeBlock"

const Configuration = () => {

    const config = `/** @type {import('tailwindcss').Config} */
    export default {
      content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
        "./node_modules/idyllic-ui/dist/*.js",
      ],
      theme: {
        extend: {},
      },
      plugins: [],
    }`

    return (
        <div className="">
            <Header className="text-gray-800" as='h2'>Configuration</Header>
            <p className="py-4 text-gray-700">To use Idyllic Ui in your projects, you need tailwindcss installed</p>

            <Header className="text-gray-800 pt-4" as='h3'>Add this to your tailwindcss config file</Header>

            <div className="py-4">
                <CodeBlock codeString={config} />
            </div>

        </div>
    )
}
export default Configuration