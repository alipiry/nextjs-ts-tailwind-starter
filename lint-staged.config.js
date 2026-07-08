module.exports = {
  // Type check TypeScript files
  "**/*.(ts|tsx)": () => "pnpm tsc --noEmit",

  // Lint + Format
  "**/*.(ts|tsx|js)": (filenames) => [
    `pnpm eslint --fix ${filenames.join(" ")}`,
    `pnpm prettier --write ${filenames.join(" ")}`,
  ],

  // Format other files
  "**/*.(md|json|css)": (filenames) =>
    `pnpm prettier --write ${filenames.join(" ")}`,
};
