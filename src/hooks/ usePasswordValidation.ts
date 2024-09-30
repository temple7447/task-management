import { useState, useEffect } from 'react';

interface ValidationResult {
  isValid: boolean;
  errors: string[];
}

export function usePasswordValidation(password: string): ValidationResult {
  const [isValid, setIsValid] = useState<boolean>(false);
  const [errors, setErrors] = useState<string[]>([]);

  // Regular expressions to match the required patterns
  const regexRules = {
    length: /.{6,}/,
    uppercase: /[A-Z]/,
    lowercase: /[a-z]/,
    number: /\d/,
    specialChar: /[!@#$%^&*(),.?":{}|<>]/,
  };

  // Error messages corresponding to each validation rule
  const errorMessages = {
    length: 'Password must be at least 6 characters long.',
    uppercase: 'Password must contain at least one uppercase letter.',
    lowercase: 'Password must contain at least one lowercase letter.',
    number: 'Password must contain at least one number.',
    specialChar: 'Password must contain at least one special character.',
  };

  const validatePassword = () => {
    const newErrors: string[] = [];

    // Check each validation rule and push error message if not valid
    if (!regexRules.length.test(password)) newErrors.push(errorMessages.length);
    if (!regexRules.uppercase.test(password)) newErrors.push(errorMessages.uppercase);
    if (!regexRules.lowercase.test(password)) newErrors.push(errorMessages.lowercase);
    if (!regexRules.number.test(password)) newErrors.push(errorMessages.number);
    if (!regexRules.specialChar.test(password)) newErrors.push(errorMessages.specialChar);

    setErrors(newErrors);
    setIsValid(newErrors.length === 0);
  };

  // Trigger validation when password changes
  useEffect(() => {
    validatePassword();
  }, [password]); // useEffect listens to changes in `password`

  return { isValid, errors };
}
