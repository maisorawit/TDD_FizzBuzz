var ans = [];

function fizzbuzz(num) {
    for (i = 0; i < num.length; i++) {
        if ((num[i] % 3 == 0) && (num[i] % 5 == 0)) {
            ans[i] = 'FizzBuzz'
        } else if (num[i] % 3 == 0) {
            ans[i] = 'Fizz';
        } else if (num[i] % 5 == 0) {
            ans[i] = 'Buzz';
        } else {
            ans[i] = num[i];
        }
    } return `${ans.slice(0, num.length).join(",")}`;
}

module.exports = fizzbuzz;