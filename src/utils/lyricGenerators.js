import { songTemplates, wordCollections } from '../data/songData';

export const getRandomWord = (theme, syllableCount) => {
  if (theme === 'anything') {
    // Collect all words with matching syllable count from all categories
    const allWords = ['animals', 'starwars', 'food']
      .map(category => wordCollections[category][syllableCount] || [])
      .flat();

    // Return a random word from the combined array
    return allWords.length > 0 
      ? allWords[Math.floor(Math.random() * allWords.length)]
      : `[${syllableCount}-syllable word]`;
  }

  // Original behavior for specific themes
  const themeWords = wordCollections[theme];
  if (!themeWords || !themeWords[syllableCount]) {
    return `[${syllableCount}-syllable ${theme} word]`;
  }
  const words = themeWords[syllableCount];
  return words[Math.floor(Math.random() * words.length)];
};

export const generateLyrics = (songId, theme) => {
  const song = Object.values(songTemplates).find(s => s.id === songId);
  if (!song) return [];

  const lyrics = [];
  const wordMap = new Map();
  let wordCounter = 1;

  // Handle nested array pattern
  song.pattern.forEach(line => {
    const currentLine = [];
    
    // Check if pattern is an array (new structure) or object (old structure)
    const patterns = Array.isArray(line) ? line : [line];
    
    patterns.forEach(part => {
      let word;
      
      if (part.wordKey) {
        if (wordMap.has(part.wordKey)) {
          word = wordMap.get(part.wordKey);
        } else {
          word = getRandomWord(theme, part.syllables);
          wordMap.set(part.wordKey, word);
        }
      } else {
        const key = `word_${wordCounter++}`;
        word = getRandomWord(theme, part.syllables);
        wordMap.set(key, word);
      }

      const repetitions = part.repeat || part.count || 1;
      for (let i = 0; i < repetitions; i++) {
        currentLine.push(word);
      }
    });

    lyrics.push(currentLine.join(' '));
  });

  return lyrics;
};