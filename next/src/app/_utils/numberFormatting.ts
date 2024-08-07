export function formatDuration(seconds: number): string {
	const minutes = Math.floor(seconds / 60);
	const remainingSeconds = seconds % 60;
	return `${minutes}:${remainingSeconds.toString().padStart(2, '0')}`;
}

export function formatPrice(pence: number): string {
	const pounds = pence / 100;
	return `£${pounds.toLocaleString('en-GB', {
		minimumFractionDigits: 0,
		maximumFractionDigits: 2,
	})}`;
}
