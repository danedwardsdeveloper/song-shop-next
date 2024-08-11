import { cleanEnv, makeValidator, str } from 'envalid';

const nonEmptyStr = makeValidator((value) => {
	if (value.trim() === '') throw new Error('Value cannot be an empty string');
	return value;
});

const commaSeparatedArray = makeValidator((value) => {
	const baseMessage = `Comma separated string must`;
	if (typeof value !== 'string') throw new Error(`${baseMessage} be a string`);
	const trimmedValue = value.trim();
	if (trimmedValue === '') throw new Error(`${baseMessage} not be empty`);

	const array = trimmedValue
		.split(',')
		.map((item) => item.trim())
		.filter(Boolean);
	if (array.length === 0)
		throw new Error(`${baseMessage} must contain at least one value`);

	return array;
});

const envConfig = {
	NODE_ENV: str({ choices: ['development', 'production'] }),
	MAILCHIMP_API_KEY: nonEmptyStr(),
	ALLOWED_ORIGINS: commaSeparatedArray(),
};

export const environment = cleanEnv(process.env, envConfig);

export const validateEnvironment = () => {
	cleanEnv(process.env, envConfig);
};
