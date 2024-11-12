export const typeOfInput = (type: string) => {
  switch (type) {
    case 'text':
      return 'text';
    case 'email':
      return 'email';
    case 'password':
      return 'password';
    default:
      return 'text';
  }
};
