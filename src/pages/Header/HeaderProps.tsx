import Props from "../../components/Props"

const HeaderProps = () => {
    return (
        <div className="max-w-3xl">
            <div>
                <h2 className="text-2xl text-gray-800 font-semibold pt-10 pb-5">Header props</h2>
                <p className="text-gray-700">These are props specific to the <span className="text-blue-500">Header</span> component:</p>
            </div>

            {/* Type */}

            <Props
                header="as"
                description="Set the type of header to be used"
                type={`"h1" | "h2" | "h3" | "h4" | "h5" | "h6"`}
                defaultValue="h1"
            />


            {/* classNamw */}
            <Props
                header="className"
                description="Extend the styles or add unique classes to the component"
                type="property"
                defaultValue=""
            />

        </div>
    )
}
export default HeaderProps