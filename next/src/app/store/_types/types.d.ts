export interface Song {
	id: number;
	imageUrl: string;
	title: string;
	writer: string;
	genre: string;
	duration: number;
	price: number;
	slug: string;
}

export interface SongsArray {
	songs: Song[];
}

export interface Writer {
	name: string;
	description: string;
	imageUrl: string;
	slug: string;
}

export interface WritersArray {
	writers: Writer[];
}
