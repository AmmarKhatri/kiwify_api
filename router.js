const express = require('express');
const users = require('./controllers/users.controller');

const quiz = require('./controllers/quiz.controller');

const questions = require('./controllers/questions.controller');

const attempts = require('./controllers/attempts.controller');

const answers = require('./controllers/answers.controller');



module.exports = function (app) {

  // Initializing route groups
  const apiRoutes = express.Router()

  // users routes
  apiRoutes.post('/users', users.createUsers);
  apiRoutes.get('/users', users.getUsers);
  apiRoutes.put('/users/:id', users.updateUsers);
  apiRoutes.delete('/users/:id', users.deleteUsers);
  apiRoutes.get('/users/:id', users.getUsersById);

 // quiz routes
  apiRoutes.post('/quiz', quiz.createQuiz);
  apiRoutes.get('/quiz', quiz.getQuiz);
  apiRoutes.put('/quiz/:id', quiz.updateQuiz);
  apiRoutes.delete('/quiz/:id', quiz.deleteQuiz);
  apiRoutes.get('/quiz/:id', quiz.getQuizById);
  
 // questions routes
  apiRoutes.post('/questions', questions.createQuestions);
  apiRoutes.get('/questions', questions.getQuestions);
  apiRoutes.put('/questions/:id', questions.updateQuestions);
  apiRoutes.delete('/questions/:id', questions.deleteQuestions);
  apiRoutes.get('/questions/:id', questions.getQuestionsById);
  
 // attempts routes
  apiRoutes.post('/attempts', attempts.createAttempts);
  apiRoutes.get('/attempts', attempts.getAttempts);
  apiRoutes.put('/attempts/:id', attempts.updateAttempts);
  apiRoutes.delete('/attempts/:id', attempts.deleteAttempts);
  apiRoutes.get('/attempts/:id', attempts.getAttempts);
  
 // answers routes
  apiRoutes.post('/answers', answers.createAnswers);
  apiRoutes.get('/answers', answers.getAnswers);
  apiRoutes.put('/answers/:id', answers.updateAnswers);
  apiRoutes.delete('/answers/:id', answers.deleteAnswers);
  apiRoutes.get('/answers/:id', answers.getAnswers);
  


  

  // Set url for API group routes
  app.use('/api', apiRoutes);
};
