function setEnvironmentVariable(name: string) {
	const value = process.env[name];
	if (value === undefined || value === null) {
		throw new Error(
			`Environment variable "${name}" is missing or undefined.`
		);
	}
	return value;
}

export const mailchimpApiKey = setEnvironmentVariable('MAILCHIMP_API_KEY');
export const allowedOriginString = setEnvironmentVariable('ALLOWED_ORIGINS');
