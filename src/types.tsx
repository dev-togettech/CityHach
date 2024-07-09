// src/types.ts
export interface Experience {
  title: string;
  type: string;
  company: string;
  location: string;
  startDate: string;
  endDate?: string;
  description?: string;
}

export interface ProviderProfile {
  id: number;
  name: string;
  firstname: string;
  age: number;
  birthdate: string;
  birthPlace: string;
  photo: string;
  experiences: Experience[];
  educations: Education[];
  skills: Skill[];
  interests: Interest[];
}

export interface Education {
  institution: string;
  degree: string;
}

export interface Skill {
  name: string;
}

export interface Interest {
  name: string;
}







// src/types.ts

export interface Objective {
  name: string;
  description: string;
}

export interface Location {
  city: string;
  district: string;
  street: string;
  telephone: string;
  email: string;
}

export interface Size {
  employeeCount: number;
  creationDate: string; // Date au format 'YYYY-MM-DD'
  majorEvent: string;
}

export interface Testimonial {
  author: string;
  quote: string;
}

export interface CompanyProfile {
  id : number;
  name: string;
  officialName: string;
  logoUrl :string;
  creationText: string;
  website: string;
  objectives: Objective[];
  locations: Location[];
  size: Size;
  testimonials: Testimonial[];
}
