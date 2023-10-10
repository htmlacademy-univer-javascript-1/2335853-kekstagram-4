const checkLineLength = (line, maxSize) => line.length <= maxSize;

const isPalindrom = (line) => {
  line = line.replaceAll(' ', '').toLowerCase();
  return line === [...line].reverse().join('');
};

const extractNumber = (line) => parseInt(line.toString().replace(/\D+/g, ''), 10);


checkLineLength('привет', 6);
isPalindrom('Лёша на полке клопа нашёл ');
extractNumber('1 кефир, 0.5 батона');
