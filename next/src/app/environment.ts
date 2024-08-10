import { cleanEnv, makeValidator, str } from 'envalid';

const nonEmptyStr = makeValidator((value) => {
	if (value.trim() === '') throw new Error('Value cannot be an empty string');
	return value;
});

export const environment = cleanEnv(process.env, {
	NODE_ENV: str({ choices: ['development', 'production'] }),
	MAILCHIMP_API_KEY: nonEmptyStr(),
	ALLOWED_ORIGINS: nonEmptyStr(),
});

export const validateEnvironment = () => environment;
