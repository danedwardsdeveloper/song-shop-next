import Image from 'next/image';
import Link from 'next/link';

export default function CompanyLogo({ target = '/' }) {
	return (
		<Link href={target}>
			<Image
				className="h-8 w-auto"
				alt="Song Shop logo | Buy the rights to premium pop songs at songshop.io."
				src="/musicNote.svg"
				height={32}
				width={32}
			/>
		</Link>
	);
}
