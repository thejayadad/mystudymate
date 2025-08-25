import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

async function main() {
  console.log("🌱 Seeding database...");

  // 1. Course
  const course = await prisma.course.upsert({
    where: { slug: "javascript-basics" },
    update: {},
    create: {
      slug: "javascript-basics",
      title: "JavaScript Basics",
      subject: "JavaScript",
    },
  });

  // 2. Units
  const unit1 = await prisma.unit.create({
    data: {
      courseId: course.id,
      order: 1,
      title: "Variables & Types",
    },
  });

  const unit2 = await prisma.unit.create({
    data: {
      courseId: course.id,
      order: 2,
      title: "Functions & Scope",
    },
  });

  // 3. Lessons + challenges for Unit 1
  const lesson1 = await prisma.lesson.create({
    data: {
      unitId: unit1.id,
      order: 1,
      title: "let vs const",
      xpReward: 30,
    },
  });

  await prisma.challenge.createMany({
    data: [
      {
        lessonId: lesson1.id,
        type: "MCQ",
        prompt: "Can a variable declared with const be reassigned?",
        answer: "no",
      },
      {
        lessonId: lesson1.id,
        type: "FILL",
        prompt: "Declare a constant PI with the value 3.14",
        answer: "const pi = 3.14",
      },
      {
        lessonId: lesson1.id,
        type: "MCQ",
        prompt: "Which keyword allows reassignment?",
        answer: "let",
      },
    ],
  });

  const lesson2 = await prisma.lesson.create({
    data: {
      unitId: unit1.id,
      order: 2,
      title: "Primitive Types",
      xpReward: 30,
    },
  });

  await prisma.challenge.createMany({
    data: [
      {
        lessonId: lesson2.id,
        type: "MCQ",
        prompt: "Which of these is NOT a JavaScript primitive?",
        answer: "array",
      },
      {
        lessonId: lesson2.id,
        type: "FILL",
        prompt: "Write a boolean literal for true",
        answer: "true",
      },
      {
        lessonId: lesson2.id,
        type: "MCQ",
        prompt: "What type is '42'?",
        answer: "string",
      },
    ],
  });

  // 4. Lessons + challenges for Unit 2
  const lesson3 = await prisma.lesson.create({
    data: {
      unitId: unit2.id,
      order: 1,
      title: "Defining Functions",
      xpReward: 30,
    },
  });

  await prisma.challenge.createMany({
    data: [
      {
        lessonId: lesson3.id,
        type: "FILL",
        prompt: "Write a function named greet that logs 'Hello'",
        answer: "function greet() { console.log('Hello') }",
      },
      {
        lessonId: lesson3.id,
        type: "MCQ",
        prompt: "Which keyword defines a function?",
        answer: "function",
      },
    ],
  });

  const lesson4 = await prisma.lesson.create({
    data: {
      unitId: unit2.id,
      order: 2,
      title: "Function Scope",
      xpReward: 30,
    },
  });

  await prisma.challenge.createMany({
    data: [
      {
        lessonId: lesson4.id,
        type: "MCQ",
        prompt: "Variables declared with let are scoped to what?",
        answer: "block",
      },
      {
        lessonId: lesson4.id,
        type: "FILL",
        prompt: "Write a function expression assigned to a const variable add",
        answer: "const add = function() {}",
      },
    ],
  });

  console.log("✅ Database has been seeded.");
}

main()
  .catch((e) => {
    console.error("❌ Seed error:", e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
