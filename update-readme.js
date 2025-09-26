const fs = require("fs")

// === CHANGE THIS DATE ===
const start = new Date(2017, 5) // June 2017 (month is 0-based)

const now = new Date()
let years = now.getFullYear() - start.getFullYear()
let months = now.getMonth() - start.getMonth()

if (months < 0) {
  years--
  months += 12
}

// Add "+" if more than 1 month has passed
let displayYears = years
if (months > 0) {
  displayYears = `${years}+`
}

const templatePath = "./templates/README.md"
const readmePath = "README.md"
let readme = fs.readFileSync(templatePath, "utf-8")

readme = readme.replace(/{{EXPERIENCE_YEARS}}/g, displayYears)

fs.writeFileSync(readmePath, readme)

console.log(`Compiled README from template`)

