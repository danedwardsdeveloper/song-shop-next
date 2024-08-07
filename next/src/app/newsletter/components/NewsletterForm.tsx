'use client';

import React, { useState, ChangeEvent, FormEvent } from 'react';
import FormInput from './FormInput';
import CheckboxInput from './CheckboxInput';
import SubmitButton from './SubmitButton';

interface FormData {
	FIRSTNAME: string;
	EMAIL: string;
	OPT_IN: boolean;
}

interface NewsletterFormProps {
	setMessage: (message: string) => void;
}

export default function NewsletterForm({ setMessage }: NewsletterFormProps) {
	const [formData, setFormData] = useState<FormData>({
		FIRSTNAME: '',
		EMAIL: '',
		OPT_IN: false,
	});

	const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
		const value =
			event.target.type === 'checkbox'
				? event.target.checked
				: event.target.value;
		setFormData({ ...formData, [event.target.name]: value });
	};

	const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
		event.preventDefault();
		setMessage('');

		try {
			const response = await fetch('/api/', {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json',
				},
				body: JSON.stringify({
					email: formData.EMAIL,
					name: formData.FIRSTNAME,
				}),
			});

			const data = await response.json();

			if (response.ok) {
				setMessage('Subscription successful!');
				setFormData({ FIRSTNAME: '', EMAIL: '', OPT_IN: false });
			} else {
				throw new Error(data.error || 'An error occurred');
			}
		} catch (error) {
			setMessage('An error occurred. Please try again.');
			console.error('Error:', error);
		}
	};

	return (
		<form className="space-y-6" onSubmit={handleSubmit}>
			<FormInput
				id="name"
				name="FIRSTNAME"
				type="text"
				label="Name"
				value={formData.FIRSTNAME}
				onChange={handleChange}
				required
				autoComplete="given-name"
			/>
			<FormInput
				id="email"
				name="EMAIL"
				type="email"
				label="Email"
				value={formData.EMAIL}
				onChange={handleChange}
				required
				autoComplete="email"
			/>
			<CheckboxInput
				name="OPT_IN"
				checked={formData.OPT_IN}
				onChange={handleChange}
				label="I agree to receive your newsletters and accept the data privacy statement."
			/>
			<SubmitButton text="Subscribe" />
		</form>
	);
}
