isAnagram = (word1, word2) => {
  return (
    word1
      .replace(/\s/g, '')
      .split('')
      .sort()
      .join('') ===
    word2
      .replace(/\s/g, '')
      .split('')
      .sort()
      .join('')
  );
};

console.log(isAnagram('dog', 'god    '));
