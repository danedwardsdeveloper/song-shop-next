interface ApiResponse {
	message: string;
	messageColour: 'blue' | 'green' | 'yellow' | 'red';
	user: UserType | null;
}

interface UserType {
	firstName: string;
	lastName: string;
	email: string;
	songsForSale: Song[] | null;
	songsPurchased: Song[] | null;
}

interface Song {
	title: string;
	writers: Writer[];
	priceInPounds: number;
	durationInSeconds: number;
	streams: number;
	primaryGenre: Genre;
	allGenres: Genre[];
}

interface Writer {
	name: string;
}

type Genre = 'Pop' | 'Disco' | 'Adult contemporary' | 'RnB' | 'Ballad';
