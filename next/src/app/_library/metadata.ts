import { Metadata } from 'next';
const imageSrc = 'https://songshop.io/social.png';

export const baseMetadata: Metadata = {
	title: {
		template:
			'%s | Song Shop - Buy Pop Song Rights | Alternative to Hiring Songwriters',
		default: `Song Shop | Buy Pop Song Rights | Alternative to Hiring Songwriters`,
	},
	description:
		'Purchase the rights to premium pop songs instantly. Song Shop offers a cost-effective alternative to hiring songwriters. Find your next hit song today.',
	keywords:
		'buy song rights, pop songs for sale, songwriting services, music licensing, ready-made songs, music industry, hit songs',
	openGraph: {
		title: 'Song Shop - Buy Pop Song Rights | Alternative to Hiring Songwriters',
		description:
			'Purchase the rights to premium pop songs instantly. Song Shop offers a cost-effective alternative to hiring songwriters. Find your next hit song today.',
		siteName: 'Song Shop',
		locale: 'en_US',
		type: 'website',
		images: [
			{
				url: imageSrc,
				width: 1200,
				height: 630,
				alt: 'Song Shop - Buy Pop Song Rights',
			},
		],
	},
	twitter: {
		card: 'summary_large_image',
		title: 'Buy Pop Song Rights | Alternative to Hiring Songwriters',
		description:
			'Purchase the rights to premium pop songs instantly. Song Shop offers a cost-effective alternative to hiring songwriters. Find your next hit song today.',
		images: [imageSrc],
	},
	robots: {
		index: true,
		follow: true,
		googleBot: {
			index: true,
			follow: true,
			'max-video-preview': -1,
			'max-image-preview': 'large',
			'max-snippet': -1,
		},
	},
	alternates: {
		canonical: 'https://www.songshop.io',
	},
};
