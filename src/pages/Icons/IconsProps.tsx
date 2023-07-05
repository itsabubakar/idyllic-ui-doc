import Props from "../../components/Props"

const IconsProps = () => {
    return (
        <div className="max-w-3xl">
            <div>
                <h2 className="text-2xl text-gray-800 font-semibold pt-10 pb-5">Icons props</h2>
                <p className="text-gray-700">These are props specific to the <span className="text-blue-500">Icons</span> component:</p>
            </div>

            {/* Type */}

            <Props
                header="size"
                description="The size of the icon"
                type={`"sm" | "md" | "lg"`}
                defaultValue="sm"
            />



            {/* cn */}
            <Props
                header="className"
                description="Extend the styles or add unique classes to the component"
                type="property"
                defaultValue=""
            />

        </div>
    )
}
export default IconsProps