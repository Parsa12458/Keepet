export function convertGramsToKilograms(grams) {
  const kilograms = grams / 1000;
  return `${kilograms} کیلوگرم`;
}

export function calculateAge(shamsiYear) {
  const currentDate = new Date();
  const currentYear = currentDate.getFullYear();
  const persianYear = currentYear - 621; // Convert Gregorian year to Persian year

  const age = persianYear - shamsiYear;

  return age;
}

export function toCamelCase(str) {
  return str
    .toLowerCase()
    .replace(/[^a-zA-Z0-9]+(.)/g, (_, chr) => chr.toUpperCase());
}
