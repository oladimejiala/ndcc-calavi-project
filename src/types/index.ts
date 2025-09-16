export interface Service {
  id: string;
  title: string;
  titleEn: string;
  description: string;
  descriptionEn: string;
  icon: string;
}

export interface Testimonial {
  id: string;
  name: string;
  company: string;
  text: string;
  textEn: string;
  rating: number;
}

export interface Language {
  code: 'fr' | 'en';
  name: string;
  flag: string;
}