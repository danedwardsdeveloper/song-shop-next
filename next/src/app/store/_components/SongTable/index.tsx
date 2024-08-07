import type { SongsArray } from '../../_types/types';

import SongTableHeader from './SongTableHeader';
import SongTableBody from './SongTableBody';

export default function SongTable({ songs }: SongsArray) {
	return (
		<div className="mt-12 sm:px-6 lg:px-8 mx-4">
			<h3 className="text-2xl font-semibold leading-6 text-gray-900">
				Find your next hit
			</h3>

			<div className="mt-8 flow-root">
				<div className="-mx-4 -my-2 sm:-mx-6 lg:-mx-8">
					<div className="inline-block min-w-full py-2 align-middle">
						<table className="min-w-full border-separate border-spacing-0">
							<SongTableHeader />
							<SongTableBody songs={songs} />
						</table>
					</div>
				</div>
			</div>
		</div>
	);
}
