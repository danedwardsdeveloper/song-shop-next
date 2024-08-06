'use client';

import Image from 'next/image';
import { useState } from 'react';
import Link from 'next/link';

import NewsletterForm from './NewsletterForm';

export default function Newsletter() {
	const [message, setMessage] = useState('');

	return (
		<div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
			<div className="sm:mx-auto sm:w-full sm:max-w-sm">
				<Link href="/">
					<Image
						alt="Song Shop logo"
						src="/musicNote.svg"
						className="mx-auto h-10 w-auto"
						width={24}
						height={24}
					/>
				</Link>
				<h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
					Sign up to our newsletter
				</h2>
			</div>

			<div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
				<NewsletterForm setMessage={setMessage} />
				{message && (
					<p className="mt-10 text-center text-sm text-red-500">
						{message}
					</p>
				)}
			</div>
		</div>
	);
}
