export const moduleExists = (moduleName: string): boolean => {
  try {
    require.resolve(moduleName);
    return true;
  } catch (error) {
    return false;
  }
};
