export function removeUnusedStyles(...classes: string[]): string {
	return classes.filter(Boolean).join(' ');
}
