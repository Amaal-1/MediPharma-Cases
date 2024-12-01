let correctAnswer = "Start Amlodipine";  // For the current case
let score = 0;

function chooseTherapy(selected) {
  const feedbackElement = document.getElementById("feedback");

  if (selected === correctAnswer) {
    feedbackElement.innerHTML = `<p>Correct! Amlodipine is appropriate for hypertension with CKD stage 3, and it is not contraindicated in this patient's condition.</p>`;
    score += 10;
  } else if (selected === "Start Spironolactone") {
    feedbackElement.innerHTML = `<p>Incorrect. Spironolactone should be avoided in patients with renal impairment due to the risk of hyperkalemia.</p>`;
  } else if (selected === "Increase ACE inhibitor dose") {
    feedbackElement.innerHTML = `<p>Incorrect. The ACE inhibitor dose should not be increased without monitoring renal function due to the risk of worsening kidney function.</p>`;
  } else if (selected === "Switch to ARB") {
    feedbackElement.innerHTML = `<p>Incorrect. ARBs may also be contraindicated in renal impairment, especially in patients with a creatinine clearance < 30 mL/min.</p>`;
  }

  document.getElementById("next").style.display = "block";
}

function nextCase() {
  // Change to a new clinical case with updated profile and options
  document.getElementById("case-description").textContent = "A 54-year-old female with asthma and type 2 diabetes. What medication adjustments are necessary for her asthma management?";
  document.getElementById("patient-info").textContent = "Current meds: Inhaled corticosteroids, metformin. Last FEV1: 65% of predicted.";

  // Update choices for the next case
  const options = document.querySelectorAll(".option");
  options[0].textContent = "Increase ICS dose";
  options[1].textContent = "Start LABA";
  options[2].textContent = "Start oral steroids";
  options[3].textContent = "Switch to Leukotriene Modifiers";

  // Reset feedback and "Next Case" button
  document.getElementById("feedback").innerHTML = "";
  document.getElementById("next").style.display = "none";

  // Update correct answer for the new case
  correctAnswer = "Start LABA"; // Correct choice for this case
}
