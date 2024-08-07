import { Song } from '../../_types/types';
import { formatPrice } from '../../../_utils/numberFormatting';

interface TrendingSongProps {
	song: Song;
}

export default function TrendingProduct({ song }: TrendingSongProps) {
	return (
		<li className="inline-flex w-64 flex-col text-center lg:w-auto">
			<div className="group relative">
				<div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-200">
					<img
						alt={song.title}
						src={song.imageUrl}
						className="h-full w-full object-cover object-center group-hover:opacity-75"
					/>
				</div>
				<div className="mt-6">
					<p className="text-sm text-gray-500">{song.genre}</p>
					<h3 className="mt-1 font-semibold text-gray-900">
						<a href={song.slug}>
							<span className="absolute inset-0" />
							{song.title}
						</a>
					</h3>
					<p className="mt-1 text-gray-900">{formatPrice(song.price)}</p>
				</div>
			</div>
		</li>
	);
}
