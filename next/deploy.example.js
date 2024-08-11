const { execSync } = require('child_process');

const command = `fly deploy \
  --build-secret SECRET1="your_secret_value_1" \
  --build-secret SECRET2="your_secret_value_2" \
  --build-secret SECRET3="your_secret_value_3"`;

try {
	execSync(command, { stdio: 'inherit' });
} catch (error) {
	console.error('Deployment failed:', error);
	process.exit(1);
}
