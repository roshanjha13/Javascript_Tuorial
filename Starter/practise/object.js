const Mark = {
    firstName: 'Mark',
    lastName: 'Milter',
    height: 1.69,
    weight: 78,

    calBmi: function () {
        this.bmi = this.weight / this.height ** 2;
        return this.bmi;
    }
};

const John = {
    firstName: 'John',
    lastName: 'Smith',
    height: 1.95,
    weight: 92,

    calBmi: function () {
        this.bmi = this.weight / this.height ** 2;
        return this.bmi;
    }
}

console.log(John.calBmi());
console.log(Mark.calBmi());

if (Mark.calBmi() > John.calBmi()) {
    console.log(`${Mark.firstName} ${Mark.lastName} BMI ${Mark.calBmi()} is higher than ${John.firstName} ${John.lastName} BMI ${John.calBmi()}`);
} else if (John.calBmi() > Mark.calBmi()) {
    console.log(`${John.firstName} ${John.lastName} BMI ${John.calBmi()} is higher than ${Mark.firstName} ${Mark.lastName} BMI ${Mark.calBmi()}`);
} else {
    console.log('both hame same Bmi value');
}
