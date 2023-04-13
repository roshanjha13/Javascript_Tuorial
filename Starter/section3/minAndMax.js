const calcTemp = function (t1, t2) {
    const temps = t1.concat(t2)
    console.log(temps);
    let max = temps[0];
    let min = temps[0];
    for (let i = 0; i < temps.length; i++) {
        const curTemp = temps[i];
        if (curTemp > max) max = curTemp;
        if (curTemp < min) min = curTemp;
    }
    console.log(max, min,);
    return max - min;
}

const amplitude = calcTemp([3, 7, 4], [9, 0, 5])
console.log(amplitude);

//merge two array:

