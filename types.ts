
export interface UserInput {
  fullName: string;
  email: string;
  phone: string;
  linkedin: string;
  targetRole: string;
  summary: string;
  experience: WorkExperienceInput[];
  education: EducationInput[];
  skills: string;
}

export interface WorkExperienceInput {
  id: string;
  title: string;
  company: string;
  dates: string;
  description: string;
}

export interface EducationInput {
  id: string;
  degree: string;
  institution: string;
  dates: string;
}

export interface CVData {
  fullName: string;
  contact: {
    email: string;
    phone: string;
    linkedin: string;
  };
  summary: string;
  experience: WorkExperience[];
  education: Education[];
  skills: string[];
}

export interface WorkExperience {
  title: string;
  company: string;
  dates: string;
  description: string[];
}

export interface Education {
  degree: string;
  institution: string;
  dates: string;
}
