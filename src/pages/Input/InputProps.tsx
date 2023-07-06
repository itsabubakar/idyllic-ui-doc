import Props from "../../components/Props"

const InputProps = () => {
    return (
        <div className="max-w-3xl">
            <div>
                <h2 className="text-2xl text-gray-800 font-semibold pt-10 pb-5">Input props</h2>
                <p className="text-gray-700">These are props specific to the <span className="text-blue-500">Input</span> component:</p>
            </div>

            {/* Type */}

            <Props
                header="type"
                description="The visual color appearance of the component"
                type={`"email" | "password" | "number" | "text"`}
                defaultValue="text"
            />

            {/* error */}
            <Props
                header="error"
                description="adds a red border to the input"
                type="boolean"
                defaultValue="false"
            />

        </div>
    )
}
export default InputProps