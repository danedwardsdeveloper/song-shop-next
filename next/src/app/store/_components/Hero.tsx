const content = {
	heading: 'Find your next hit here',
	tagline:
		'SongShop is your source for professional pop song recording rights',
	button: {
		content: 'Browse the catalogue',
		target: '#',
	},
	image: {
		src: '/concert.webp',
		alt: 'Song Shop | Your source for professional pop song recording rights',
	},
};

export default function Hero() {
	return (
		<div className="relative">
			<div
				aria-hidden="true"
				className="absolute hidden h-full w-2/3 bg-gray-100 lg:block"
			/>
			<div className="relative bg-gray-100 lg:bg-transparent">
				<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:grid lg:grid-cols-2 lg:px-8">
					<div className="mx-auto max-w-2xl py-24 lg:max-w-none lg:py-64">
						<div className="lg:pr-16">
							<h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl xl:text-6xl">
								{content.heading}
							</h1>
							<p className="mt-4 text-xl text-gray-600">
								{content.tagline}
							</p>
							<div className="mt-6">
								<a
									href={content.button.target}
									className="inline-block rounded-md border border-transparent bg-indigo-600 px-8 py-3 font-medium text-white hover:bg-indigo-700"
								>
									{content.button.content}
								</a>
							</div>
						</div>
					</div>
				</div>
			</div>
			<div className="h-48 w-full sm:h-64 lg:absolute lg:right-0 lg:top-0 lg:h-full lg:w-1/3">
				<img
					src={content.image.src}
					alt={content.image.alt}
					className="h-full w-full object-cover object-center"
				/>
			</div>
		</div>
	);
}
