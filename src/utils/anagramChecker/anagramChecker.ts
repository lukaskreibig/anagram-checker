/**
 * Checks if two strings are anagrams of each other.
 * @param {string} str1 - The first string to compare.
 * @param {string} str2 - The second string to compare.
 * @returns {boolean} True if the strings are anagrams, false otherwise.
 */
 export function areAnagrams(str1: string, str2: string): boolean {
    const normalizedStr1 = str1.replace(/\s+/g, '').toLowerCase();
    const normalizedStr2 = str2.replace(/\s+/g, '').toLowerCase();

    console.log("normalizedStr1", normalizedStr1)
    console.log("normalizedStr2", normalizedStr2)

  
    if (normalizedStr1.length !== normalizedStr2.length) {
      return false;
    }
  
    const charCountMap = new Map<string, number>();
  
    for (const char of normalizedStr1) {
      charCountMap.set(char, (charCountMap.get(char) || 0) + 1);
    }
  
    for (const char of normalizedStr2) {
      const count = charCountMap.get(char);
      if (!count) {
        return false;
      }
      charCountMap.set(char, count - 1);
    }
  
    return Array.from(charCountMap.values()).every(count => count === 0);
  }
  