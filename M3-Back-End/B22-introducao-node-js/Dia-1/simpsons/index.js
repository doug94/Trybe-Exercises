const readSimpsonsFile = require('./fsutil');

async function handleSimpsonsOutput() {
  const data = await readSimpsonsFile();
  const parsedData = JSON.parse(data);
  parsedData.forEach(({ id, name }) => console.log(`${id} - ${name}`));
}

function main() {
  handleSimpsonsOutput();
}

main();