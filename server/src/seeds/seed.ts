import db from '../config/connection.js';
import { Question } from '../models/index.js';
import cleanDB from './cleanDb.js';
import questions from './pythonQuestions.json' assert { type: 'json' };

try {
  await db();
  await cleanDB();

  await Question.insertMany(questions);

  console.log('Seeding completed successfully!');
  process.exit(0);
} catch (error) {
  console.error('🚨 Error seeding database:', error);
  process.exit(1);
}
