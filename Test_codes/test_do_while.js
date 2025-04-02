let result;

do {
  result = Math.floor(Math.random()*6) + 1;
  console.log(result)
} while (result < 6);

// palauttaa nollasta lähes ykköseen, floor pyöristää alaspäin, siksi lisätään + 1
// ohjelma pyötii niin kauan kunnes saa 6