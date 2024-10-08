export default function cleanSet(set, startString) {
  if (typeof startString !== 'string' || startString.length === 0) {
    return '';
  }

  let result = '';

  // Iterate over the set directly without converting to array
  set.forEach((value) => {
    if (typeof value === 'string' && value.startsWith(startString)) {
      if (result.length > 0) {
        result += '-';
      }
      result += value.slice(startString.length);
    }
  });

  return result;
}
