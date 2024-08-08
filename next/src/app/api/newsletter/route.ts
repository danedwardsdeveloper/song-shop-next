import { NextResponse } from 'next/server';

export async function GET() {
	return NextResponse.json({
		message: 'Song Shop newsletter API',
	});
}
