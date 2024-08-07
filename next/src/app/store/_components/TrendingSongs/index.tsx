import { SongsArray } from '../../_types/types';
import TrendingSong from './TrendingSong';

const linkContent = {
	content: `View more`,
	target: '/',
};

export default function TrendingSongs({ songs }: SongsArray) {
	return (
		<section aria-labelledby="trending-heading" className="bg-white">
			<div className="py-16 sm:py-24 lg:mx-auto lg:max-w-7xl lg:px-8 lg:py-32">
				<div className="flex items-center justify-between px-4 sm:px-6 lg:px-0">
					<h2
						id="trending-heading"
						className="text-2xl font-bold tracking-tight text-gray-900"
					>
						Most streamed songs
					</h2>
					<a
						href="#"
						className="hidden text-sm font-semibold text-indigo-600 hover:text-indigo-500 sm:block"
					>
						{linkContent.content}
						<span aria-hidden="true"> &rarr;</span>
					</a>
				</div>

				<div className="relative mt-8">
					<div className="relative w-full overflow-x-auto">
						<ul
							role="list"
							className="mx-4 inline-flex space-x-8 sm:mx-6 lg:mx-0 lg:grid lg:grid-cols-4 lg:gap-x-8 lg:space-x-0"
						>
							{songs.map((song) => (
								<TrendingSong key={song.id} song={song} />
							))}
						</ul>
					</div>
				</div>

				<div className="mt-12 px-4 sm:hidden">
					<a
						href={linkContent.target}
						className="text-sm font-semibold text-indigo-600 hover:text-indigo-500"
					>
						{linkContent.content}
						<span aria-hidden="true"> &rarr;</span>
					</a>
				</div>
			</div>
		</section>
	);
}
