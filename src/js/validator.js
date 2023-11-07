export default class Validator {
  static validateUsername(username) {
    const onlyLatin = /^[a-zA-Z0-9-_]+$/;
    const beginWithNumber = /^[0-9-_]/;
    const endWithNumber = /[0-9-_]$/;
    const containThreeNumbers = /[0-9]{3}/;

    if (beginWithNumber.test(username)) {
      return 'Username must begin with a letter';
    }
    if (containThreeNumbers.test(username)) {
      return 'Username must not contain three numbers in a row';
    }
    if (endWithNumber.test(username)) {
      return 'Username must end with a letter';
    }
    if (onlyLatin.test(username)) {
      return username;
    }
    return 'invalid name';
  }
}
