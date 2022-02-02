
export const getStrength = (password) => {

    if(isAllPresent(password) && password.length >= 10) return 100

    if(isAllPresent(password)) return 70

    if(valid(password)) return 40

    if(!valid(password)) return 0

}

export const getStrengthColor = (strengthValue) => {

  if(strengthValue < 70) return 'error'
  if(strengthValue >= 70 && strengthValue < 100) return 'secondary'
  if(strengthValue === 100) return 'success'
} 

export const getStrengthText = (strengthValue) => {
  if(strengthValue < 40) return "Nije validna"
  if(strengthValue >= 40 && strengthValue < 70) return 'Slaba'
  if(strengthValue >= 70 && strengthValue < 100) return 'Dobra'
  if(strengthValue === 100) return 'Jaka'
} 

export function isAllPresent(str) {
    // Regex to check if a string
    // contains uppercase, lowercase
    // special character & numeric value
    var pattern = new RegExp(
      "^(?=.*[a-z])(?=.*[A-Z])(?=.*\\d)(?=.*[-+_!@#$%^&*.,?]).+$"
    )

    return pattern.test(str)
}


export function valid (value){
    const regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/;
    return regex.test(value);
  };
