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
 * @returns True if the password meets all criteria, otherwise false.
 */
export const isPasswordValid = (password: string): boolean => {
    
    // TODO: Consider the max length of the password?
    // TODO: Consider trimming the input string?
    if (!password || password.length <= 8) {
        return false;
    }

    // REGEX implementation
    // possibly need to consider Expression Denial of Service (ReDoS) attacks but maybe this is ok?
    const hasCapitalLetter = /[A-Z]/.test(password);
    const hasLowercase = /[a-z]/.test(password);
    const hasNumber = /[0-9]/.test(password);
    const hasUnderscore = /_/.test(password);
  
    return (
      hasCapitalLetter &&
      hasLowercase &&
      hasNumber &&
      hasUnderscore
    );
  }