const fs = require("fs");

const input = fs.readFileSync("input.txt", "utf-8").trim().split(/\r?\n/);

const orderCodes = (codes) => {
  return codes.sort((a, b) => {
    //arrange in alphabetical order according to the first letter
    aFirstLetter = a.charAt(0);
    bFirstLetter = b.charAt(0);
    if (aFirstLetter < bFirstLetter) {
      return -1;
    } else if (aFirstLetter > bFirstLetter) {
      return 1;
    } else {
      aLastLetter = a.charAt(a.length - 1);
      bLastLetter = b.charAt(b.length - 1);
      if (aLastLetter < bLastLetter) {
        return -1;
      } else if (aLastLetter > bLastLetter) {
        return 1;
      }
      //arrange in alphabetical order according to the last letter
      aLastLetter = a.charAt(a.length - 1);
      bLastLetter = b.charAt(b.length - 1);
      if (aLastLetter < bLastLetter) {
        return -1;
      } else if (aLastLetter > bLastLetter) {
        return 1;
      } else {
        //arrange in numerical order
        aNumericCode = parseInt(a.substring(1, a.length - 1));
        bNumericCode = parseInt(b.substring(1, b.length - 1));
        if (aNumericCode < bNumericCode) {
          return -1;
        } else if (aNumericCode > bNumericCode) {
          return 1;
        } else {
          return 0;
        }
      }
    }
  });
};

let result = orderCodes(input).join("\n");

fs.writeFileSync("output.txt", result);
