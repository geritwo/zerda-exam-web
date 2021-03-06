// John the Validator. I'm sort of a DM fan.
// (John the Revelator... got it? ;)

'use strict';

var iNeedToHear = [
  "amazing", "awesome", "blithesome", "excellent", "fabulous", "fantastic", "favorable", "fortuitous", "great", "incredible", "ineffable", "mirthful", "outstanding", "perfect", "propitious", "remarkable", "smart", "spectacular", "splendid", "stellar", "stupendous", "super", "ultimate", "unbelievable", "wondrous"
];

function john (feedback, score, email) {
  var emailOk = isEmailOk(email);
  var scoreOk = isScoreOk(score);
  var feedBackOk = isFeedbackOk(feedback);

  var judgement = emailOk, scoreOk, feedBackOk;

  return judgement;
}

function isFeedbackOk(feedback) {
  var wordsDontComeEasy = feedback.split(" ");
  var wordsThatMatter = wordsDontComeEasy.filter(function (e) {
    return iNeedToHear.indexOf(e) != -1;
  });

  if (wordsThatMatter.length >= 3) {
    return true;
  } else { return false; }
};

function isEmailOk(email) {
  if (email.indexOf("@") != -1) {
    return true;
  } else { return false;}
};

function isScoreOk(score) {
  if (score >= 10) {
    return true;
  } else { return false;}
};

module.exports = john;
