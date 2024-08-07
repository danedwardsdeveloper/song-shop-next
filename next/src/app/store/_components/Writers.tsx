import Image from 'next/image';

import { WritersArray } from '../_types/types';

export default function Writers({ writers }: WritersArray) {
	return (
		<section aria-labelledby="collections-heading" className="bg-gray-100">
			<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
				<div className="mx-auto max-w-2xl py-16 sm:py-24 lg:max-w-none lg:py-32">
					<h2
						id="collections-heading"
						className="text-2xl font-bold text-gray-900"
					>
						Popular writers
					</h2>

					<div className="mt-6 space-y-12 lg:grid lg:grid-cols-3 lg:gap-x-6 lg:space-y-0">
						{writers.map((writer) => (
							<div key={writer.name} className="group relative">
								<div className="relative h-80 w-full overflow-hidden rounded-lg bg-white sm:aspect-h-1 sm:aspect-w-2 lg:aspect-h-1 lg:aspect-w-1 group-hover:opacity-75 sm:h-64">
									<Image
										alt={writer.name}
										src={writer.imageUrl}
										className="h-full w-full object-cover object-center"
										height={1280}
										width={1280}
									/>
								</div>
								<h3 className="mt-6 text-sm text-gray-500">
									<a href={writer.slug}>
										<span className="absolute inset-0" />
										{writer.name}
									</a>
								</h3>
								<p className="text-base font-semibold text-gray-900">
									{writer.description}
								</p>
							</div>
						))}
					</div>
				</div>
			</div>
		</section>
	);
}
