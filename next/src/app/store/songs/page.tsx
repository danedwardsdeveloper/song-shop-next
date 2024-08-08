import SongTable from '../_components/SongTable';

import { exampleSongs } from '../_exampleData/exampleSongs';

export default function AllSongsPage() {
	return (
		<>
			<h1>All songs page</h1>
			<SongTable songs={exampleSongs} />
		</>
	);
}
