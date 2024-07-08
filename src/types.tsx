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
