import Props from "../../components/Props"

const AlertProps = () => {
    return (
        <div className="max-w-3xl">
            <div>
                <h2 className="text-2xl text-gray-800 font-semibold pt-10 pb-5">Alert props</h2>
                <p className="text-gray-700">These are props specific to the <span className="text-blue-500">Alert</span> component:</p>
            </div>

            {/* Type */}

            <Props
                header="type"
                description="The visual color appearance of the component"
                type={`"success" | "info" | "warning" | "error"`}
                defaultValue="info"
            />



            {/* className */}
            <Props
                header="className"
                description="Extend the styles or add unique classes to the component"
                type="property"
                defaultValue=""
            />

        </div>
    )
}
export default AlertProps