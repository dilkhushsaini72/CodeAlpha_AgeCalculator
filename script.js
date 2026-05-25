function calculateAge() {
  let dob = document.getElementById("dob").value;
  let result = document.getElementById("result");

  let birthDate = new Date(dob);
  let today = new Date();

  if (birthDate > today) {
    result.innerHTML = "Invalid Date of Birth!";
    result.style.color = "red";
    return;
  }

  let years = today.getFullYear() - birthDate.getFullYear();
  let months = today.getMonth() - birthDate.getMonth();
  let days = today.getDate() - birthDate.getDate();

  if (days < 0) {
    months--;
    let prevMonth = new Date(today.getFullYear(), today.getMonth(), 0);
    days += prevMonth.getDate();
  }

  if (months < 0) {
    years--;
    months += 12;
  }

  result.style.color = "green";
  result.innerHTML = `You are ${years} years, ${months} months, and ${days} days old.`;
}
