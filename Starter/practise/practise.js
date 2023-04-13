let markWeight = 78;
let markHeight = 1.69;

let johnWeight = 92;
let johnHeight = 1.95;

let markBmi = markWeight / markHeight ** 2;

let johnBmi = johnWeight / johnHeight ** 2;

if (markBmi > johnBmi) {
    console.log(`Mark's BMI ${markBmi} is higher than John's BMI ${johnBmi}..`);
} else {
    console.log(`John's BMI ${johnBmi} is higher than Mark's BMI ${markBmi}..`);
}