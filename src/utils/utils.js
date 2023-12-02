function generateId() {
  const data = new Date().getTime();
  const random = Math.random();

  return `id_${String(data)}_${random}`;
}

function generateRandomNumber(min = 0, max = 10) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

export {generateId, generateRandomNumber};
