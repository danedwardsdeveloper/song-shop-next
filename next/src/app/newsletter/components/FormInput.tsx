interface FormInputProps {
	id: string;
	name: string;
	type: string;
	label: string;
	value: string;
	onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
	required?: boolean;
	autoComplete?: string;
}

export default function FormInput({
	id,
	name,
	type,
	label,
	value,
	onChange,
	required,
	autoComplete,
}: FormInputProps) {
	return (
		<div>
			<label
				htmlFor={id}
				className="block text-sm font-medium leading-6 text-gray-900"
			>
				{label}
			</label>
			<div className="mt-2">
				<input
					id={id}
					name={name}
					type={type}
					required={required}
					autoComplete={autoComplete}
					value={value}
					onChange={onChange}
					className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 pl-2"
				/>
			</div>
		</div>
	);
}
