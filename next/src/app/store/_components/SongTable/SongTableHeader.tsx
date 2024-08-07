import { ClockIcon, CurrencyPoundIcon } from '@heroicons/react/24/outline';

const headerItems = [
	{ id: 'play', content: null },
	{ id: 'image', content: null },
	{ id: 'title', content: 'Title' },
	{ id: 'writer', content: 'Writer', className: 'hidden sm:table-cell' },
	{ id: 'genre', content: 'Genre', className: 'hidden lg:table-cell' },
	{ id: 'duration', content: <ClockIcon className="size-6" /> },
	{ id: 'price', content: <CurrencyPoundIcon className="size-6" /> },
	{ id: 'controls', content: null },
];

export default function SongTableHeader() {
	return (
		<thead>
			<tr>
				{headerItems.map((item) => (
					<th
						key={item.id}
						scope="col"
						className={`sticky top-0 z-10 border-b border-gray-300 bg-white bg-opacity-75 px-3 py-3.5 text-left text-sm font-semibold text-gray-900 backdrop-blur backdrop-filter ${
							item.className || ''
						}`}
					>
						{item.content}
					</th>
				))}
			</tr>
		</thead>
	);
}
