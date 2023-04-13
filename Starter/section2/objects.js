/* object literal

    const roshan = {
        firstName: 'roshan',
        lastName: 'jha',
        age: 2023 - 2000,
        job: 'developer',
        friends: ['ankit', 'ankush', 'aniket']
    }

    console.log(roshan.lastName);
    console.log(roshan['lastName']);

    const nameKey = 'Name';

    roshan.location = 'howrah';
    console.log(roshan);

    console.log(`
        \n\ ${roshan.firstName} has 
        ${roshan.friends.length} friends and his best friend is
        ${roshan.friends[0]}   `
    );

*/

/* object methods 

    const roshan = {
        firstName: 'roshan',
        lastName: 'jha',
        birthYear: 2000,
        job: 'developer',
        friends: ['ankit', 'ankush', 'aniket'],
        hasDriversLicense: true,

        // calcAge: function () {
        //     return 2037 - this.birthYear;
        // }

        calcAge: function () {
            this.age = 2037 - this.birthYear
            return this.age;
        },
        setPerson: function () {
            return `
                ${this.firstName} 
                is a ${this.calcAge()} 
                years old ${this.job}, 
                and he has  ${this.hasDriversLicense ? 'a' : 'no'} 
                driver's license
            `
        }
    };

    console.log(roshan.setPerson());


*/


