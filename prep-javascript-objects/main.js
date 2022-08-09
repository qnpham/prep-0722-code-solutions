const person = {
  firstName: 'Bob',
  lastName: 'Smith',
  hobby: 'swimming'
};
console.log(person);
const fullName = person.firstName + ' ' + person.lastName;
console.log("The person's name is: " + fullName + '.');
person.job = 'truck driving';
console.log("The person's current job is: " + person.job + '.');
person.previousJob = 'store manager';
console.log("The person's previous job is: " + person.previousJob + '.');
console.log('The complete person object:', person);
