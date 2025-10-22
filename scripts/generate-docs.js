const fs = require('fs');
const path = require('path');

console.log('📝 Generating documentation...');

// Создаем папку для сгенерированной документации
const docsDir = path.join(__dirname, '../generated-docs');
const publicDir = path.join(__dirname, '../public');

if (!fs.existsSync(docsDir)) {
  fs.mkdirSync(docsDir, { recursive: true });
}

if (!fs.existsSync(publicDir)) {
  fs.mkdirSync(publicDir, { recursive: true });
}

// Основная страница документации
const mainDoc = `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>CI/CD Demo Project Documentation</title>
    <style>
        body { 
            font-family: Arial, sans-serif; 
            max-width: 1200px; 
            margin: 0 auto; 
            padding: 20px; 
            line-height: 1.6;
        }
        .header { 
            background: #f4f4f4; 
            padding: 20px; 
            border-radius: 8px; 
            margin-bottom: 30px;
        }
        .section { 
            margin-bottom: 30px; 
            padding: 20px; 
            border-left: 4px solid #007acc;
            background: #f9f9f9;
        }
        .test-info { 
            background: #e7f3ff; 
            padding: 15px; 
            border-radius: 5px; 
            margin: 10px 0;
        }
        .timestamp { 
            color: #666; 
            font-size: 0.9em; 
            margin-top: 20px;
        }
    </style>
</head>
<body>
    <div class="header">
        <h1>🚀 CI/CD Demo Project</h1>
        <p>Automated testing and deployment documentation</p>
    </div>

    <div class="section">
        <h2>📖 Project Overview</h2>
        <p>This project demonstrates a complete CI/CD pipeline with automated testing and documentation generation.</p>
        
        <h3>Project Structure:</h3>
        <ul>
            <li><strong>tests/unit/</strong> - Unit tests for math and string operations</li>
            <li><strong>tests/integration/</strong> - Integration tests for API and database</li>
            <li><strong>.github/workflows/</strong> - GitHub Actions workflows</li>
            <li><strong>scripts/</strong> - Utility scripts including documentation generation</li>
        </ul>
    </div>

    <div class="section">
        <h2>🧪 Testing</h2>
        
        <div class="test-info">
            <h3>Unit Tests</h3>
            <p><strong>Location:</strong> <code>tests/unit/</code></p>
            <p><strong>Command:</strong> <code>npm test</code></p>
            <p>Tests for mathematical operations and string utilities:</p>
            <ul>
                <li>Math operations (add, subtract, multiply, divide)</li>
                <li>String manipulation (reverse, capitalize, word count)</li>
            </ul>
        </div>

        <div class="test-info">
            <h3>Integration Tests</h3>
            <p><strong>Location:</strong> <code>tests/integration/</code></p>
            <p><strong>Command:</strong> <code>npm run integration-test</code></p>
            <p>Tests for API interactions and database operations:</p>
            <ul>
                <li>API user management (get, create users)</li>
                <li>Database CRUD operations</li>
            </ul>
        </div>
    </div>

    <div class="section">
        <h2>⚙️ CI/CD Pipeline</h2>
        <p>The GitHub Actions workflow automatically runs on:</p>
        <ul>
            <li>Push to main, development, or release branches</li>
            <li>Pull requests to main branch</li>
            <li>New tags creation</li>
        </ul>
        
        <h3>Workflow Steps:</h3>
        <ol>
            <li>Checkout code</li>
            <li>Setup Node.js environment</li>
            <li>Install dependencies</li>
            <li>Run unit tests</li>
            <li>Run integration tests</li>
            <li>Build project</li>
            <li>Generate documentation (this page)</li>
            <li>Upload artifacts</li>
        </ol>
    </div>

    <div class="section">
        <h2>🚀 Available Scripts</h2>
        <table border="1" style="border-collapse: collapse; width: 100%;">
            <tr>
                <th style="padding: 10px; text-align: left;">Command</th>
                <th style="padding: 10px; text-align: left;">Description</th>
            </tr>
            <tr>
                <td style="padding: 10px;"><code>npm test</code></td>
                <td style="padding: 10px;">Run unit tests with Jest</td>
            </tr>
            <tr>
                <td style="padding: 10px;"><code>npm run integration-test</code></td>
                <td style="padding: 10px;">Run integration tests</td>
            </tr>
            <tr>
                <td style="padding: 10px;"><code>npm run test:all</code></td>
                <td style="padding: 10px;">Run all tests</td>
            </tr>
            <tr>
                <td style="padding: 10px;"><code>npm run build</code></td>
                <td style="padding: 10px;">Build the project</td>
            </tr>
            <tr>
                <td style="padding: 10px;"><code>npm run coverage</code></td>
                <td style="padding: 10px;">Generate test coverage report</td>
            </tr>
            <tr>
                <td style="padding: 10px;"><code>npm run docs</code></td>
                <td style="padding: 10px;">Generate this documentation</td>
            </tr>
        </table>
    </div>

    <div class="timestamp">
        <p>Documentation generated on: ${new Date().toLocaleString()}</p>
        <p>Build version: ${process.env.npm_package_version || '1.0.0'}</p>
    </div>
</body>
</html>
`;

// Записываем основную документацию
fs.writeFileSync(path.join(docsDir, 'index.html'), mainDoc);

// Создаем JSON файл с информацией о проекте
const projectInfo = {
  name: "CI/CD Demo Project",
  version: process.env.npm_package_version || "1.0.0",
  lastUpdated: new Date().toISOString(),
  testSuites: {
    unit: ["math.test.js"],
    integration: ["api.test.js"]
  },
  workflows: [".github/workflows/main.yml"]
};

fs.writeFileSync(path.join(docsDir, 'project-info.json'), JSON.stringify(projectInfo, null, 2));

// Создаем README для документации
const readmeDoc = `
# Project Documentation

This documentation is automatically generated by the CI/CD pipeline.

## Structure
- \`index.html\` - Main documentation page
- \`project-info.json\` - Project metadata
- \`api/\` - API documentation (if applicable)

## Generation
Documentation is automatically generated when:
- Code is pushed to main branch
- New release is created
- Documentation scripts are updated

## Manual Generation
Run \`npm run docs\` to generate documentation manually.
`;

fs.writeFileSync(path.join(docsDir, 'README.md'), readmeDoc);

console.log('✅ Documentation generated successfully!');
console.log(`📁 Location: ${docsDir}`);