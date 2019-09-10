const sum = async result => {
  let sum = 0;
  const chosenAnswers = await result.getChoosenAnswers();
  for (let i = 0; i < chosenAnswers.length; i++) {
    sum += chosenAnswers[i].points;
  }
  return sum;
};

const maxSum = result => new Promise((resolve, reject) => {
  result.getTest().then(test => {
    test.getTestQuestions().then(testQuestions => {
      const promises = [];
      for (let i = 0; i < testQuestions.length; i++) {
        const testQuestion = testQuestions[i];
        promises.push(testQuestion.getQuestion());
      }
      Promise.all(promises).then(questions => {
        const max = questions.map(question => question.dataValues.value).reduce((a, b) => a + b);
        resolve(max);
      }).catch(reject);
    });
  });
});

const resultWithSum = result => new Promise((resolve, reject) => {
  const promises = [];
  promises.push(sum(result));
  promises.push(maxSum(result));
  Promise.all(promises).then(values => {
    const sum = values[0];
    const maxSum = values[1];
    result.dataValues.percent = Math.round((sum / maxSum) * 100);
    resolve(result);
  }).catch(reject);
});

const resultsWithSum = results => {
  const promises = [];
  for (let i = 0; i < results.length; i++) {
    const result = results[i];
    promises.push(resultWithSum(result));
  }
  return Promise.all(promises);
};

module.exports = { sum, resultWithSum, resultsWithSum };
