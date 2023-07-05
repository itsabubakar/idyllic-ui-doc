
export const ButtonImport = `import {Button} from 'idyllic-ui`

export const ButtonPreview = `<Button>Button</Button>`

export const ButtonVariant = `<Button type="light">Button</Button>
<Button type="dark">Button</Button>
<Button type="light-outline">Button</Button>
<Button type="dark-outline">Button</Button>`

export const ButtonExtend = `<Button className="bg-green-500 text-white hover:text-black">Button</Button>
<Button className="bg-red-500 text-white  hover:text-black" >Button</Button>
<Button className="bg-gray-500 text-white hover:text-black" >Button</Button>
<Button className="bg-yellow-500 text-white hover:text-black">Button</Button>`

export const ButtonJSX = `<button type='button' className={"inline-flex items-center justify-center px-4 py-2 text-base font-medium leading-6 text-gray-600  transition duration-150 ease-in-out  border border-gray-200 rounded shadow-sm hover:bg-gray-50 focus:outline-none focus:shadow-none"}>
light
</button>
<button type='button' className={"inline-flex items-center justify-center px-4 py-2 font-medium tracking-wide leading-6 text-white transition duration-150 ease-in-out bg-gray-900 rounded hover:bg-gray-800 focus:shadow-outline focus:outline-none "}>
 dark
</button>
<button type='button' className={"inline-flex  items-center justify-center rounded border-2   px-4 py-2 text-base text-gray-600 font-medium  leading-6 transition duration-150 ease-in-out hover:bg-neutral-500 hover:bg-opacity-10 hover:text-gray-600 focus:border-gray-600 focus:text-gray-600 focus:outline-none focus:ring-0 active:border-gray-700 active:text-gray-700"} {...props}>
light-outline
</button>
<button type='button' className={"inline-flex rounded border-2 border-neutral-800 px-4 py-2 text-base text-neutral-800 font-medium  leading-6  transition duration-150 ease-in-out hover:border-neutral-100 hover:bg-neutral-500 hover:bg-opacity-10 hover:text-neutral-800 focus:border-neutral-800 focus:text-neutral-800 focus:outline-none focus:ring-0 active:border-neutral-900 active:text-neutral-900"} {...props}>
dark-outline
</button>
`