import { PlayIcon } from '@heroicons/react/24/solid';
import { EllipsisHorizontalIcon } from '@heroicons/react/24/outline';
import Image from 'next/image';
import { formatDuration, formatPrice } from '../../../_utils/numberFormatting';

import { Song, SongsArray } from '@/app/_types/types';

export default function SongTableBody({ songs }: SongsArray) {
	const cellData = (song: Song) => [
		{
			content: <PlayIcon className="size-6" />,
			className: 'pl-4 pr-3 sm:pl-6 lg:pl-8',
		},
		{
			content: (
				<Image
					src={song.imageUrl}
					alt={`Image for ${song.title}`}
					className="h-10 w-10 rounded"
					width={40}
					height={40}
				/>
			),
		},
		{
			content: song.title,
			className: 'font-medium text-gray-900 pl-4 pr-3 sm:pl-6 lg:pl-8',
		},
		{ content: song.writer, className: 'hidden sm:table-cell' },
		{ content: song.genre, className: 'hidden lg:table-cell' },
		{ content: formatDuration(song.duration) },
		{ content: formatPrice(song.price) },
		{
			content: <EllipsisHorizontalIcon className="size-6" />,
			className: 'text-right sm:pr-8 lg:pr-8',
		},
	];

	const baseClassNames = 'whitespace-nowrap py-4 px-3 text-sm text-gray-500';

	return (
		<tbody>
			{songs.map((song, index) => (
				<tr key={song.id} className="hover:bg-slate-100">
					{cellData(song).map((cell, cellIndex) => (
						<td
							key={cellIndex}
							className={`${baseClassNames} ${cell.className || ''} ${
								index !== songs.length - 1
									? 'border-b border-gray-200'
									: ''
							}`}
						>
							{cell.content}
						</td>
					))}
				</tr>
			))}
		</tbody>
	);
}
