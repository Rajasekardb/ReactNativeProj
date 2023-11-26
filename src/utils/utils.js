function generateId() {
  const data = new Date().getTime();
  const random = Math.random();
  return `id_${String(data)}_${random}`;
}

export {generateId};
