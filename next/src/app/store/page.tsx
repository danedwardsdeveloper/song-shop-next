import { Metadata } from 'next';

import Hero from './_components/Hero';
import Offers from './_components/Offers';
import TrendingSongs from './_components/TrendingSongs';
import Writers from './_components/Writers';
import SaleTestimonials from './_components/SaleTestimonial';
import SongTable from './_components/SongTable';

import { exampleSongs } from './_exampleData/exampleSongs';
import { exampleTrendingSongs } from './_exampleData/exampleTrendingSongs';
import { exampleWriters } from './_exampleData/exampleWriters';

import { baseMetadata } from '../_library/metadata';

export const metadata: Metadata = {
	...baseMetadata,
	title: 'Store',
};

export default function Page() {
	return (
		<main>
			<Hero />
			<SongTable songs={exampleSongs} />
			<Offers />
			<TrendingSongs songs={exampleTrendingSongs} />
			<Writers writers={exampleWriters} />
			<SaleTestimonials />
		</main>
	);
}
