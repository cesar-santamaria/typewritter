const sentence = "hello there from lighthouse labs";
let delay = 0;

for (const char of sentence) {
  process.stdout.write(char); //avoids adding an extra "newline character" each time.
  setTimeout(() => {
    // print the char here
  },delay += 1000) // <= 1s delay to make it noticeable. Can dial it down later.
}

