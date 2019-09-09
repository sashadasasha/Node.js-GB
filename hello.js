const ansi = require("ansi");
const cursor = ansi(process.stdout);

cursor.red();
cursor.write('Hello World!');
cursor.beep();

