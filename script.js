const fs = require('fs');

// Writing content to a new file 'gaurav.txt'
fs.writeFile("gaurav.txt", "hello hellow gaurav", function(err) {
    if (err) {
        console.log(err);
    } else {
        console.log("File created");
    }
});

// Reading content from 'gaurav.txt'
fs.readFile("gaurav.txt", "utf8", function(err, data) {
    if (err) console.log(err);
    else console.log(data);
});

// Appending content to 'gaurav.txt'
fs.appendFile("gaurav.txt", "welcom", function(err) {
    if (err) console.log(err);
    else console.log("Appended data");
});

// Renaming 'gaurav.txt' to 'anurag.txt'
fs.rename("gaurav.txt", "anurag.txt", function(err) {
    if (err) console.log(err);
    else console.log("Name change successful");
});

// Deleting 'anurag.txt'
/* fs.unlink("anurag.txt", function(err) {
    if (err) console.log(err);
    else console.log("Deleted");
}); */

// Deleting a directory 'fillsystem2' recursively
fs.rm("fillsystem2", { recursive: true }, function(err) {
    if (err) console.log(err);
    else console.log("Delete successful");
});
