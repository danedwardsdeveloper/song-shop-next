import React from 'react';
import MenuBar from './_components/MenuBar';

export default function StoreLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<div>
			<MenuBar>{children}</MenuBar>
		</div>
	);
}
