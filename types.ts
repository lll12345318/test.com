export interface User {
  id: string;
  email: string;
  name: string;
  phone: string;
  role: string;
  freeAttemptsUsed: number;
  subscription: {
    active: boolean;
    expiresAt: string | null;
  };
  createdAt: string;
}

export interface Subject {
  id: string;
  title: string;
  level: string;
  description: string;
  createdAt: string;
}

export interface Exam {
  id: string;
  subjectId: string;
  term: string;
  year: number;
  title: string;
  durationMinutes: number;
  createdAt: string;
}

export interface Option {
  key: string;
  text: string;
}

export interface Question {
  id: string;
  examId: string;
  text: string;
  options: Option[];
  correctOptionKey: string;
  marks: number;
}