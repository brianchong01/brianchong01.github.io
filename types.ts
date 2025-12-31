
export interface Project {
  id: string;
  title: string;
  period: string;
  grade?: string;
  description: string[];
  thumbnail: string;
  video?: string;
  link?: string;
  category: string;
  role?: string;
  activities?: string[];
  process?: string[];
}

export interface Experience {
  role: string;
  company: string;
  location: string;
  period: string;
  grade?: string;
  points: string[];
}

export interface Education {
  school: string;
  degree: string;
  period: string;
  points: string[];
}

export interface Certificate {
  name: string;
  issuer: string;
  date: string;
  image: string;
  link: string;
}
