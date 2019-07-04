/**
 * @param preferences - an array of integers. Indices of people, whom they love
 * @returns number of love triangles
 */
module.exports = function getLoveTrianglesCount(preferences = []) {
  let count = 0;
  for (i = 0; i < preferences.length; i++) {
    const Sp1 = preferences[i];
    const Sp2 = preferences[Sp1 - 1];
    const Sp3 = preferences[Sp2 - 1];
    if (Sp3 === i + 1 && Sp1 !== i + 1) {
      count++;
    }
  }
  return count / 3;
};
