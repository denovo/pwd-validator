type ValidationMethod = 'regex' | 'vanilla';

/**
 * Checks if a given password is valid based on specific criteria.
 * 
 * A valid password must:
 * - Be longer than 8 characters.
 * - Contain at least one uppercase letter.
 * - Contain at least one lowercase letter.
 * - Contain at least one numeric digit.
 * - Contain at least one underscore.
 * 
 * @param password - The password string to validate.
 * @param method - Specifies 'regex' for regex-based checks, or 'vanilla' for non-regex checks.
 * @returns True if the password meets all criteria based on the specified method, otherwise false.
 */
export const isPasswordValid = (password: string, method: ValidationMethod = 'vanilla'): boolean => {

  const checks = {
    regex: [
      hasValidLength,
      containsCapitalLetterRegex,
      containsLowercaseLetterRegex,
      containsNumberRegex,
      containsUnderscoreRegex,
    ],
    vanilla: [
      hasValidLength,
      hasCapitalLetter,
      hasLowercase,
      hasNumber,
      hasUnderscore,
    ],
  };

  const validationFunctions = checks[method];
  
  return (validationFunctions.every((check) => check(password)));
};

// Helper functions for validation checks

// Length check
export const hasValidLength = (password: string): boolean => {
  return password.length > 8;
};

// Regex-based helper functions
export const containsCapitalLetterRegex = (password: string): boolean => /[A-Z]/.test(password);
export const containsLowercaseLetterRegex = (password: string): boolean => /[a-z]/.test(password);
export const containsNumberRegex = (password: string): boolean => /[0-9]/.test(password);
export const containsUnderscoreRegex = (password: string): boolean => /_/.test(password);

// Vanilla helper functions
export const hasCapitalLetter = (password: string): boolean => {
  for (const char of password) {
    if (char >= 'A' && char <= 'Z') return true;
  }
  return false;
};

export const hasLowercase = (password: string): boolean => {
  for (const char of password) {
    if (char >= 'a' && char <= 'z') return true;
  }
  return false;
};

export const hasNumber = (password: string): boolean => {
  for (const char of password) {
    if (char >= '0' && char <= '9') return true;
  }
  return false;
};

export const hasUnderscore = (password: string): boolean => {
  return password.includes('_');
};
