const fs = require("fs");
const path = require("path");

// Read version from package.json
const packageJson = require("../package.json");
const version = packageJson.version;

// Get git info
const { execSync } = require("child_process");

let commitHash = "local";
let buildNumber = "local";

try {
  commitHash = execSync("git rev-parse --short HEAD").toString().trim();
  buildNumber = execSync("git rev-list --count HEAD").toString().trim();
} catch (e) {
  console.log("Git not available, using local values");
}

const buildDate = new Date().toISOString().split("T")[0];

// Update environment.ts (development)
const envDevPath = path.join(__dirname, "../src/environments/environment.ts");
const envDevContent = `export const environment = {
  production: false,
  version: '${version}',
  buildDate: '${buildDate}',
  buildNumber: '${buildNumber}',
  commitHash: '${commitHash}',
};
`;

fs.writeFileSync(envDevPath, envDevContent);
console.log(`✅ Updated environment.ts: v${version} (${commitHash})`);
