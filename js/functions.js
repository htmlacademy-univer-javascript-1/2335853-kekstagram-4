const checkLineLength = (line, maxSize) => line.length <= maxSize;

const isPalindrom = (line) => {
  line = line.replaceAll(' ', '').toLowerCase();
  return line === [...line].reverse().join('');
};

// const extractNumber = (line) => {
//   let result = '';
//   line = line.toString();

//   for (let i = 0; i < line.length; i++) {
//     const parsedNumber = parseInt(line[i], 10);
//     if (!Number.isNaN(parsedNumber)) {
//       result += parsedNumber;
//     }
//   }

//   return parseInt(result, 10);
// };

const extractNumber = (line) => parseInt(line.toString().replace(/\D+/g, ''), 10);


checkLineLength('привет', 6);
isPalindrom('Лёша на полке клопа нашёл ');
extractNumber('1 кефир, 0.5 батона');
