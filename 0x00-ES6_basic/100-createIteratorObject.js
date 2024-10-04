export default function createIteratorObject(report) {
  let allEmployees = [];

  for (const employeeName of Object.values(report.allEmployees)) {
    allEmployees = allEmployees.concat(employeeName);
  }
  return allEmployees[Symbol.iterator]();
}
