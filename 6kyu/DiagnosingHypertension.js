/*
The 2020 International Society of Hypertension Practice Guidelines describe raised blood pressure (hypertension) and its complications as the leading cause of death in the world at the time of publication. Blood pressure is the measure of the heart's pumping pressure against the blood vessel walls. It is recorded as a systolic pressure over a diastolic pressure (for example '120/80 mmHg') which represent the maximum and minimum pressure in the vessels between heartbeats.

For the purpose of this kata, hypertension can be diagnosed when a patient's blood pressure meets any of the three criteria below:

Average of all measured systolic pressures >= 140 mmHg. Must have minumum of 2 measurements.
Average of all measured diastolic presures >= 90 mmHg. Must have minimum of 2 measurements.
Any one measurement with systolic pressure >= 180 mmHg AND diastolic pressure >= 110 mmHg
You are given a list, patients, in which each element represents a patient. Each patient/element consists of a list of strings (representing all measurements of a patient's blood pressure) in the format "s/d", where s is the systolic pressure and d the diastolic, both in mmHg. Systolic and diastolic numbers will always be whole numbers.

Return the number of patents that meet any of the above hypertension definitions.

Example:

Input:
[
["130/90","140/94"],
["160/110"],
["200/120"],
["150/94","140/90","120/90"],
["140/94","140/90","120/80","130/84"]
]

Output:
3

# patients at index 0, 2, and 3 are hypertensive
Constraints: 0 < length of patients list <= 10000

0 < length of element within patients <= 30
*/

let hypertensive = function(patients) {
    return patients.reduce(function(acc,data){
      let sys = 0, dia = 0
      for(let i=0; i<data.length; i++){
        let temp = data[i].split("/")
        if(Number(temp[0]) >=180 && Number(temp[1])>=110){
          return acc +=1
        }
        sys += Number(temp[0])
        dia += Number(temp[1])
      } 
      if ((data.length > 1) && (sys/data.length >= 140 || dia/data.length >= 90)){
        return acc += 1
      }
      return acc += 0
    },0)
}