const fibonacci = (n) => {
    const phi = (Math.sqrt(5)+1)/2;
    return Math.round((Math.pow(phi,n+1) - (Math.pow(-1,n+1) / Math.pow(phi,n+1))) / Math.sqrt(5));
}

module.exports = { fibonacci };