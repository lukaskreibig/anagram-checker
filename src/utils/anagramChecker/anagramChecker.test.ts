import { areAnagrams } from "./anagramChecker";

describe('areAnagrams', () => {
  test('returns true for anagrams', () => {
    expect(areAnagrams('listen', 'silent')).toBe(true);
    expect(areAnagrams('Listen', 'Silent')).toBe(true);
    expect(areAnagrams('Li sten', 'Sil ent')).toBe(true);
  });

  test('returns false for non-anagrams', () => {
    expect(areAnagrams('hello', 'world')).toBe(false);
    expect(areAnagrams('Test', 'Tast')).toBe(false);
    expect(areAnagrams('Test', 'Taste')).toBe(false);
  });
});
