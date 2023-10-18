const insuranceProviders = [
  "State Farm",
  "Allstate",
  "Farmers Insurance",
  "Liberty Mutual",
  "USAA",
  "Nationwide",
  "American Family Insurance",
  "Travelers",
  "Progressive",
  "Chubb",
  "The Hartford",
  "MetLife",
  "Erie Insurance",
  "Amica Mutual Insurance",
  "Auto-Owners Insurance",
  "The Hanover",
  "Mercury Insurance",
  "AAA (American Automobile Association)",
  "Safeco",
  "Shelter Insurance",
];

const generateRandomProvider = () => {
  const randomIndex = Math.floor(Math.random() * insuranceProviders.length);
  return insuranceProviders[randomIndex];
};

function getRandomPrice(min, max) {
  const range = max - min + 1;
  return Math.floor(Math.random() * range) + min;
}

module.exports = () => {
  const data = { quotes: { cheap: [], average: [], expensive: [] } };
  for (let i = 0; i < 10; i++) {
    data.quotes.cheap.push({
      provider: generateRandomProvider(),
      price: getRandomPrice(50, 150),
    });
  }
  for (let i = 0; i < 10; i++) {
    data.quotes.average.push({
      provider: generateRandomProvider(),
      price: getRandomPrice(151, 351),
    });
  }
  for (let i = 0; i < 10; i++) {
    data.quotes.expensive.push({
      provider: generateRandomProvider(),
      price: getRandomPrice(352, 1000),
    });
  }
  return data;
};