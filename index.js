const fs = require('fs');

// Read the TXT file
fs.readFile('input.txt', 'utf8', (err, data) => {
  if (err) {
    console.error('Error reading the TXT file:', err);
    return;
  }

  // Parse TXT Content
  const lines = data.split('\n');
  const csvData = lines.map(line => {
    const values = line.split('\t'); // Modify delimiter based on your TXT file
    return values;
      
  }).join('\n'); // Join lines to create CSV content

  // Write to CSV File
  fs.writeFile('output.csv', csvData, 'utf8', err => {
    if (err) {
      console.error('Error writing to CSV file:', err);
      return;
    }
    console.log('CSV file created successfully!');
  });
});

