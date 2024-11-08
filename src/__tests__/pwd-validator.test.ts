import { 
  isPasswordValid, 
  hasValidLength, 
  containsCapitalLetterRegex, 
  containsLowercaseLetterRegex, 
  containsNumberRegex, 
  containsUnderscoreRegex, 
  hasCapitalLetter, 
  hasLowercase, 
  hasNumber, 
  hasUnderscore 
} from '../pwd-validator';

describe('Password Validation', () => {
  const validPassword = 'Password_1'; // Meets all criteria

  describe('isPasswordValid with "regex" method', () => {
    it('should return true for a valid password meeting all criteria', () => {
      expect(isPasswordValid(validPassword, 'regex')).toBe(true);
    });

    it('should return false if password is less than or equal to 8 characters', () => {
      expect(isPasswordValid('Pass_1', 'regex')).toBe(false);
    });

    it('should return false if password does not contain an uppercase letter', () => {
      expect(isPasswordValid('password_1', 'regex')).toBe(false);
    });

    it('should return false if password does not contain a lowercase letter', () => {
      expect(isPasswordValid('PASSWORD_1', 'regex')).toBe(false);
    });

    it('should return false if password does not contain a numeric digit', () => {
      expect(isPasswordValid('Password_', 'regex')).toBe(false);
    });

    it('should return false if password does not contain an underscore', () => {
      expect(isPasswordValid('Password1', 'regex')).toBe(false);
    });
  });

  describe('isPasswordValid with "vanilla" method', () => {
    it('should return true for a valid password meeting all criteria', () => {
      expect(isPasswordValid(validPassword, 'vanilla')).toBe(true);
    });

    it('should return false if password is less than or equal to 8 characters', () => {
      expect(isPasswordValid('Pass_1', 'vanilla')).toBe(false);
    });

    it('should return false if password does not contain an uppercase letter', () => {
      expect(isPasswordValid('password_1', 'vanilla')).toBe(false);
    });

    it('should return false if password does not contain a lowercase letter', () => {
      expect(isPasswordValid('PASSWORD_1', 'vanilla')).toBe(false);
    });

    it('should return false if password does not contain a numeric digit', () => {
      expect(isPasswordValid('Password_', 'vanilla')).toBe(false);
    });

    it('should return false if password does not contain an underscore', () => {
      expect(isPasswordValid('Password1', 'vanilla')).toBe(false);
    });
  });
});

describe('Helper Functions', () => {
  describe('Length Check (hasValidLength)', () => {
    it('should return true for passwords longer than 8 characters', () => {
      expect(hasValidLength('123456789')).toBe(true);
    });

    it('should return false for passwords 8 characters or less', () => {
      expect(hasValidLength('12345678')).toBe(false);
    });
  });

  describe('Regex-based Helper Functions', () => {
    it('containsCapitalLetterRegex should return true if password contains at least one uppercase letter', () => {
      expect(containsCapitalLetterRegex('Password')).toBe(true);
    });

    it('containsLowercaseLetterRegex should return true if password contains at least one lowercase letter', () => {
      expect(containsLowercaseLetterRegex('Password')).toBe(true);
    });

    it('containsNumberRegex should return true if password contains at least one numeric digit', () => {
      expect(containsNumberRegex('Password1')).toBe(true);
    });

    it('containsUnderscoreRegex should return true if password contains an underscore', () => {
      expect(containsUnderscoreRegex('Password_')).toBe(true);
    });
  });

  describe('Vanilla Helper Functions', () => {
    it('hasCapitalLetter should return true if password contains at least one uppercase letter', () => {
      expect(hasCapitalLetter('Password')).toBe(true);
    });

    it('hasLowercase should return true if password contains at least one lowercase letter', () => {
      expect(hasLowercase('Password')).toBe(true);
    });

    it('hasNumber should return true if password contains at least one numeric digit', () => {
      expect(hasNumber('Password1')).toBe(true);
    });

    it('hasUnderscore should return true if password contains an underscore', () => {
      expect(hasUnderscore('Password_')).toBe(true);
    });
  });
});
