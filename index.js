function isKezo (input) {
  const kezo = input.toLowerCase()
  return kezo === 'kezo' || kezo === 'k3z0'
}

module.exports = isKezo;
