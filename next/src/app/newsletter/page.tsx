import { Metadata } from 'next';

import { baseMetadata } from '../_library/metadata';
import NewsletterForm from './NewsletterForm';
import Image from 'next/image';

export const metadata: Metadata = {
	...baseMetadata,
	title: 'Newsletter',
	description: 'Learn more about our company',
};

export default function NewsletterPage() {
	return (
		<div className="flex min-h-full flex-1">
			<div className="flex flex-1 flex-col justify-center px-4 py-12 sm:px-6 lg:flex-none lg:px-20 xl:px-24">
				<NewsletterForm />
			</div>

			<div className="relative hidden w-0 flex-1 lg:block">
				<Image
					alt="Subscribe to the songshop.io newsletter"
					src="/subscribe.webp"
					className="absolute inset-0 h-full w-full object-cover"
					height={1500}
					width={1000}
				/>
			</div>
		</div>
	);
}
