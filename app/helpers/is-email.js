// app/helpers/is-email.js

import { helper } from '@ember/component/helper';

export default helper(function isEmail(params) {
  const [email] = params;

  // Regular expression for email validation
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  return emailRegex.test(email);
});
