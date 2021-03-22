const cities = ['CDMX', 'Bogotá', 'Lima', 'Buenos Aires', 'Guadalajara'];

const randomStrings = () => {
  const string = cities[Math.floor(Math.random() * cities.length)];

  return string;
}

module.exports = randomStrings;