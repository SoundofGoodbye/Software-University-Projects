function calcCylinderVol(cylinderRadious, cylinderHeight) {
    return (Math.PI * cylinderRadious * cylinderRadious * cylinderHeight).toFixed(3);
}

console.log(calcCylinderVol(2,4));
console.log(calcCylinderVol(5,8));
console.log(calcCylinderVol(12,3));