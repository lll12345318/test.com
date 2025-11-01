import { User, Subject, Exam, Question } from './types';

const rawData = {
  users: [
    {
      id: "admin-1",
      email: "hagumubuzima.noel@example.com",
      name: "Hagumubuzima Noel",
      phone: "0795620387",
      role: "admin",
      freeAttemptsUsed: 0,
      subscription: { active: false, expiresAt: null },
      createdAt: "{now}"
    }
  ],
  subjects: [
    {
      id: "biology-s1",
      title: "Biology (Senior One)",
      level: "Secondary",
      description: "Seed subject containing initial Senior One Biology exam questions.",
      createdAt: "{now}"
    }
  ],
  exams: [
    {
      id: "bio-s1-endterm",
      subjectId: "biology-s1",
      term: "End of Term",
      year: 2022,
      title: "Biology Senior One - End of Term Exam",
      durationMinutes: 60,
      createdAt: "{now}"
    },
    {
      id: "bio-s1-altpractical",
      subjectId: "biology-s1",
      term: "Alternative Practical",
      year: 2022,
      title: "Biology Senior One - Alternative to Practical",
      durationMinutes: 45,
      createdAt: "{now}"
    }
  ],
  questions: [
    {
      id: "q1",
      examId: "bio-s1-endterm",
      text: "Which branch of biology studies the structure of the human body?",
      options: [
        { key: "A", text: "Botany" },
        { key: "B", text: "Anatomy" },
        { key: "C", text: "Ecology" },
        { key: "D", text: "Nutrition" }
      ],
      correctOptionKey: "B",
      marks: 1
    },
    {
      id: "q2",
      examId: "bio-s1-endterm",
      text: "Which branch would a food scientist mainly study?",
      options: [
        { key: "A", text: "Zoology" },
        { key: "B", text: "Anatomy" },
        { key: "C", text: "Nutrition" },
        { key: "D", text: "Ecology" }
      ],
      correctOptionKey: "C",
      marks: 1
    },
    {
      id: "q3",
      examId: "bio-s1-endterm",
      text: "Plants make their own food using chlorophyll and sunlight. Animals cannot — this means plants are:",
      options: [
        { key: "A", text: "Heterotrophs" },
        { key: "B", text: "Autotrophs" },
        { key: "C", text: "Parasites" },
        { key: "D", text: "Decomposers" }
      ],
      correctOptionKey: "B",
      marks: 2
    },
    {
      id: "q4",
      examId: "bio-s1-endterm",
      text: "Which statement describes a dead organism versus a non-living thing?",
      options: [
        { key: "A", text: "Both once never lived" },
        { key: "B", text: "Dead was once living; non-living never lived" },
        { key: "C", text: "Dead shows no cellular structure; non-living shows cells" },
        { key: "D", text: "They are the same in every detail" }
      ],
      correctOptionKey: "B",
      marks: 2
    },
    {
      id: "q5",
      examId: "bio-s1-endterm",
      text: "A student wrote the scientific name of humans as 'homo Sapiens'. Which three mistakes are present? (pick the best single option)",
      options: [
        { key: "A", text: "Generic name should be capitalized, species lowercase, scientific name in italics" },
        { key: "B", text: "Generic name should be lowercase, species capitalized, not italicized" },
        { key: "C", text: "Both words should be capitalized and not italicized" },
        { key: "D", text: "No mistakes" }
      ],
      correctOptionKey: "A",
      marks: 3
    },
    {
      id: "q6",
      examId: "bio-s1-endterm",
      text: "Correct form of the human scientific name:",
      options: [
        { key: "A", text: "Homo sapiens" },
        { key: "B", text: "homo Sapiens" },
        { key: "C", text: "Homo Sapiens" },
        { key: "D", text: "homo sapiens" }
      ],
      correctOptionKey: "A",
      marks: 1
    },
    {
      id: "q7",
      examId: "bio-s1-altpractical",
      text: "Leaves modified into tendrils are used for:",
       options: [
        { key: "A", text: "Protection" },
        { key: "B", text: "Storage of water" },
        { key: "C", text: "Support" },
        { key: "D", text: "Reproduction" }
      ],
      correctOptionKey: "C",
      marks: 2
    }
  ]
};

const now = new Date().toISOString();

export const users: User[] = rawData.users.map(user => ({
  ...user,
  createdAt: now,
}));

export const subjects: Subject[] = rawData.subjects.map(subject => ({
  ...subject,
  createdAt: now,
}));

export const exams: Exam[] = rawData.exams.map(exam => ({
  ...exam,
  createdAt: now,
}));

export const questions: Question[] = rawData.questions;