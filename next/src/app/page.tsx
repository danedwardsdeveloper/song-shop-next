import Image from 'next/image';
import Link from 'next/link';
import { Metadata } from 'next';

import { baseMetadata } from './_library/metadata';

export const metadata: Metadata = {
	...baseMetadata,
	title: `Coming soon | Song Shop - Buy Pop Song Rights | Alternative to Hiring Songwriters`,
};

export default function Home() {
	return (
		<div className="bg-white">
			<div className="relative">
				<div className="mx-auto max-w-7xl">
					<div className="relative z-10 pt-14 lg:w-full lg:max-w-2xl">
						<svg
							viewBox="0 0 100 100"
							preserveAspectRatio="none"
							aria-hidden="true"
							className="absolute inset-y-0 right-8 hidden h-full w-80 translate-x-1/2 transform fill-white lg:block"
						>
							<polygon points="0,0 90,0 50,100 0,100" />
						</svg>

						<div className="relative px-6 py-32 sm:py-40 lg:px-8 lg:pb-56 lg:pr-0">
							<div className="mx-auto max-w-2xl lg:mx-0 lg:max-w-xl">
								<div className="hidden sm:mb-10 sm:flex">
									<div className="relative rounded-full px-3 py-1 text-sm leading-6 text-gray-500 ring-1 ring-gray-900/10 hover:ring-gray-900/20">
										Put yourself on the map with an incredible song{' '}
										{/* <Link
											href="/newsletter"
											className="whitespace-nowrap font-semibold text-indigo-600"
										>
											<span
												aria-hidden="true"
												className="absolute inset-0"
											/>
											Join the newsletter{' '}
											<span aria-hidden="true">&rarr;</span>
										</Link> */}
									</div>
								</div>
								<h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
									Your next hit is just a click away
								</h1>
								<p className="mt-6 text-lg leading-8 text-gray-600">
									Launching soon,{' '}
									<span className="text-blue-600">songshop.io </span>
									will bring you exclusive rights to premium pop bops
									crafted by industry-leading writers and producers.
									Skip the writing process and go straight to success.
								</p>
								<div className="mt-10 flex items-center gap-x-6">
									<Link
										href="newsletter"
										className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
									>
										Join the newsletter
									</Link>
									{/* <Link
										href="/store"
										className="text-sm font-semibold leading-6 text-gray-900"
									>
										Sneak peak <span aria-hidden="true">→</span>
									</Link> */}
								</div>
							</div>
						</div>
					</div>
				</div>
				<div className="bg-gray-50 lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2">
					<Image
						alt="Purchase the rights to an incredible pop song at songshop.io"
						src="/concert.webp"
						className="aspect-[3/2] object-cover lg:aspect-auto lg:h-full lg:w-full"
						width={2688}
						height={1920}
						priority
					/>
				</div>
			</div>
		</div>
	);
}
