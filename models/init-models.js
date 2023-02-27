var DataTypes = require("sequelize").DataTypes;
var _answers = require("./answers");
var _attempts = require("./attempts");
var _questions = require("./questions");
var _quiz = require("./quiz");
var _users = require("./users");

function initModels(sequelize) {
  var answers = _answers(sequelize, DataTypes);
  var attempts = _attempts(sequelize, DataTypes);
  var questions = _questions(sequelize, DataTypes);
  var quiz = _quiz(sequelize, DataTypes);
  var users = _users(sequelize, DataTypes);

  answers.belongsTo(attempts, { as: "attempt", foreignKey: "attemptId"});
  attempts.hasMany(answers, { as: "answers", foreignKey: "attemptId"});
  answers.belongsTo(questions, { as: "question", foreignKey: "questionId"});
  questions.hasMany(answers, { as: "answers", foreignKey: "questionId"});
  attempts.belongsTo(quiz, { as: "quiz", foreignKey: "quizId"});
  quiz.hasMany(attempts, { as: "attempts", foreignKey: "quizId"});
  questions.belongsTo(quiz, { as: "quiz", foreignKey: "quizId"});
  quiz.hasMany(questions, { as: "questions", foreignKey: "quizId"});
  quiz.belongsTo(users, { as: "createdBy_user", foreignKey: "createdBy"});
  users.hasMany(quiz, { as: "quizzes", foreignKey: "createdBy"});

  return {
    answers,
    attempts,
    questions,
    quiz,
    users,
  };
}
module.exports = initModels;
module.exports.initModels = initModels;
module.exports.default = initModels;
