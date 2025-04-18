function generatePassword(length, lower, upper, nums, syms) {
    let lowerchars = "abcdefghijklmnopqrstuvwsyz";
    let upperchars = lowerchars.toUpperCase();
    let symchars = "&#%$£*!?@";
    let numslist = [0,1,2,3,4,5,6,7,8,9];
    let list = [];
    let password = [];
    if (lower) list.push(lowerchars);
    if (upper) list.push(upperchars);
    if (nums) list.push(numslist);
    if (syms) list.push(symchars);
    let typeIndex;
    let charIndex;
    for (let i = 0; i < length; i++) {
        typeIndex = Math.floor(Math.random() * (list.length));
        charIndex = Math.floor(Math.random() * (list[typeIndex].length));
        password.push(list[typeIndex][charIndex])
    }
    password = password.join('');
    return password;
}

const password = generatePassword(8, true, true, true, true);
console.log(password);