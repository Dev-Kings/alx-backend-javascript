export default function iterateThroughObject(reportWithIterator) {
  const allEmployees = [];

  for (const employeeName of reportWithIterator) {
    allEmployees.push(employeeName);
  }
  return allEmployees.join(' | ');
}
