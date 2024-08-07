interface CheckboxInputProps {
	name: string;
	checked: boolean;
	onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
	label: string;
}

export default function CheckboxInput({
	name,
	checked,
	onChange,
	label,
}: CheckboxInputProps) {
	return (
		<div className="flex items-center justify-between">
			<label>
				<input
					type="checkbox"
					name={name}
					checked={checked}
					onChange={onChange}
					className="mr-2"
				/>
				{label}
			</label>
		</div>
	);
}
