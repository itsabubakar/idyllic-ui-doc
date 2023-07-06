
export const InputImport = `import {Input} from 'idyllic-ui`

export const InputPreview = `<Input label="Email" type="email" />`

export const InputTypes = `<Input label="Email" type="email" />
<Input label="Password" type="password" />
<Input label="Number" type="number" />
<Input label="Text" type="text" />`

export const InputJSX = `<div className="w-full h-full">
<label htmlFor={id} className="block text-sm font-medium text-gray-800 pb-1">
    {label}
</label>

<input
    type={type}
    id={id}
    placeholder={placeholder}
    className={"mt-1 w-full border rounded-md  px-3 py-2"}
/>
</div>`

