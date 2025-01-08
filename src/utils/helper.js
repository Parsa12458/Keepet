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

export function truncateText(text, numCharacters) {
  if (text.length <= numCharacters) {
    return text;
  }

  const truncated = text.slice(0, numCharacters);
  const lastSpaceIndex = truncated.lastIndexOf(" ");

  if (lastSpaceIndex === -1) {
    return truncated + "...";
  }

  return truncated.slice(0, lastSpaceIndex) + "...";
}

export const toPersianDate = (date) => {
  const options = { year: "numeric", month: "long", day: "numeric" };
  return new Intl.DateTimeFormat("fa-IR", options).format(date);
};
