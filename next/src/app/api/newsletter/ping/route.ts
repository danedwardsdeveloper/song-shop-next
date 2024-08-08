import { NextRequest, NextResponse } from 'next/server';

import { mailchimpApiKey } from '@/app/environment';

export async function GET(request: NextRequest) {
	const url = `https://us21.api.mailchimp.com/3.0/ping`;

	try {
		console.log('Attempting to ping Mailchimp...');
		const response = await fetch(url, {
			method: 'GET',
			headers: {
				Authorization: `Bearer ${mailchimpApiKey}`,
				'Content-Type': 'application/json',
			},
		});

		if (!response.ok) {
			throw new Error(`HTTP error! status: ${response.status}`);
		}

		const data = await response.json();
		console.log('Mailchimp response:', data);

		if (data && typeof data === 'object' && 'health_status' in data) {
			return new NextResponse(data.health_status, {
				status: 200,
				headers: { 'Content-Type': 'text/plain' },
			});
		} else {
			console.error('Unexpected response structure from Mailchimp:', data);
			throw new Error('Unexpected response structure from Mailchimp');
		}
	} catch (error) {
		console.error('Error pinging Mailchimp:', error);

		if (error instanceof Error) {
			return new NextResponse(
				`Failed to ping Mailchimp API: ${error.message}`,
				{
					status: 500,
					headers: { 'Content-Type': 'text/plain' },
				}
			);
		} else {
			return new NextResponse('An unknown error occurred', {
				status: 500,
				headers: { 'Content-Type': 'text/plain' },
			});
		}
	}
}
