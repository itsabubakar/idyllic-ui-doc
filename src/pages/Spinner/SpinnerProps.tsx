import Props from "../../components/Props"

const SpinnerProps = () => {
    return (
        <div className="max-w-3xl">
            <div>
                <h2 className="text-2xl text-gray-800 font-semibold pt-10 pb-5">Spinner props</h2>
                <p className="text-gray-700">These are props specific to the <span className="text-blue-500">Spinner</span> component:</p>
            </div>

            {/* Type */}

            <Props
                header="size"
                description="The size of the component"
                type={`property`}
                defaultValue="8"
            />



            {/* className */}
            <Props
                header="color"
                description="Changes the border of the spinner either dark or light"
                type="'dark' | 'light'"
                defaultValue="black"
            />

        </div>
    )
}
export default SpinnerProps