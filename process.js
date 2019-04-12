// define o encoding para leitura do buffer
process.stdin.setEncoding('utf8');
// monitora o evento readable
process.stdin.on('readable', function() {
 // lê o input de entrada
 var input = process.stdin.read();
 if (input !== null) {
 // echo the text
 process.stdout.write(input);
 var command = input.trim();
 if (command == 'exit')
 // sai do processo
 process.exit(0);
 }
});
