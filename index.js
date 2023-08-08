const fs = require('fs');

// Check if the correct number of command-line arguments is provided
if (process.argv.length !== 3) {
  console.log('Usage: node converter.js input.txt');
  process.exit(1);
}

const inputFilePath = process.argv[2]; // Get the input file path from command-line arguments

// Read the TXT file
fs.readFile(inputFilePath, 'utf8', (err, data) => {
  if (err) {
    console.error('Error reading the TXT file:', err);
    return;
  }

  // Parse TXT Content
  const lines = data.split('\n');
  const csvData = lines.map(line => {
    const values = line.split('\t'); // Modify delimiter based on your TXT file
    return values.join(','); // Convert values to CSV format
  }).join('\n'); // Join lines to create CSV content

  // Write to CSV File
  const outputFilePath = 'output.csv'; // You can customize the output file path if needed
  fs.writeFile(outputFilePath, csvData, 'utf8', err => {
    if (err) {
      console.error('Error writing to CSV file:', err);
      return;
    }
    console.log('CSV file created successfully!');
  });
});
