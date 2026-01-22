function checkAge(age) {
  if (age < 18) {
    throw new Error("Not eligible");
  }
  return "Eligible";
}

try {
  checkAge(16);
} catch (e) {
  console.log(e.message);
}
