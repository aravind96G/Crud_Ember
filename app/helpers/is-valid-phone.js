// app/helpers/is-valid-phone.js

import { helper } from '@ember/component/helper';

export default helper(function isValidPhone(params) {
  const [phoneNumber] = params;

  // Regular expression for validating 10-digit phone number
  const phoneRegex = /^\d{10}$/;

  return phoneRegex.test(phoneNumber);
});
