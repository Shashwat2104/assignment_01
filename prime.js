let n = 13;

count = 0;

for (let i = 1; i <= n; i++) {
  if (n % i == 0) {
    count++;
  }

}
count == 2 ? console.log("isprime") : console.log("Not a prime no");
