🎭 Playwright TypeScript Test Framework

🛠 Prerequisites
Before you start working, make sure you have the following installed:

Required tools:

- Node.js (version 18 or higher)

  # Check Node.js version
  node --version


- npm or yarn
  # Check npm version
  npm --version

Recommended tools:

 - Webstorm or Visual Studio Code with extensions:
 - Playwright Test for VSCode
 - TypeScript and JavaScript Language Features
 - ESLint
===================================================

Step 1: Clone the project
# Clone the repository
git clone <repository-url>
cd pw-start-example-ts

Step 2: Install dependencies
# Install all npm packages
npm install

# Or with yarn
yarn install

Step 3: Install Playwright browsers
# Install browsers for testing
npx playwright install

# Install only Chromium (optional)
npx playwright install chromium

Step 4: Set up environment variables
# Create a .env file in the project root
touch .env


Add the following to your .env file:

# Base URL for testing
BASE_URL=https://example.com

# Authentication data (if needed)
TEST_USER_EMAIL=test@example.com
TEST_USER_PASSWORD=password123

# Environment setup
NODE_ENV=test

Step 5: First test run
# Run all tests
npx playwright test

# Run tests in headed mode (browser visible)
npx playwright test --headed

# Run a specific test
npx playwright test tests/homePage/loginUser.spec.ts
