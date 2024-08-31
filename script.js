const fs = require('fs');

// Creating a new directory 'newDir'
fs.mkdir("newDir", function(err) {
    if (err) console.log(err);
    else console.log("Directory created");
});

// Writing a new file 'newFile.txt' in the new directory 'newDir'
fs.writeFile("newDir/newFile.txt", "This is a new file in the new directory.", function(err) {
    if (err) console.log(err);
    else console.log("File created in newDir");
});

// Reading content from 'newFile.txt'
fs.readFile("newDir/newFile.txt", "utf8", function(err, data) {
    if (err) console.log(err);
    else console.log("Content of newFile.txt:", data);
});

// Appending content to 'newFile.txt'
fs.appendFile("newDir/newFile.txt", "\nAppended content.", function(err) {
    if (err) console.log(err);
    else console.log("Appended content to newFile.txt");
});

// Renaming 'newFile.txt' to 'renamedFile.txt' in the same directory
fs.rename("newDir/newFile.txt", "newDir/renamedFile.txt", function(err) {
    if (err) console.log(err);
    else console.log("File renamed to renamedFile.txt");
});

// Deleting the renamed file 'renamedFile.txt'
fs.unlink("newDir/renamedFile.txt", function(err) {
    if (err) console.log(err);
    else console.log("File deleted");
});

// Deleting the 'newDir' directory
fs.rmdir("newDir", function(err) {
    if (err) console.log(err);
    else console.log("Directory deleted");
});
