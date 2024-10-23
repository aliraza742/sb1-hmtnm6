export type ZodiacSign = 
  | 'aries' | 'taurus' | 'gemini' | 'cancer' 
  | 'leo' | 'virgo' | 'libra' | 'scorpio' 
  | 'sagittarius' | 'capricorn' | 'aquarius' | 'pisces';

export interface ZodiacInfo {
  sign: ZodiacSign;
  element: 'fire' | 'earth' | 'air' | 'water';
  startDate: string;
  endDate: string;
  symbol: string;
  traits: string[];
}