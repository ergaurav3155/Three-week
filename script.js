const fs = require('fs');

fs.writeFile("gaurav.txt", "hello hellow gaurav", function(err) {
    if (err) {
        console.log(err);
    } else {
        console.log("File created");
    }
});

fs.readFile("gaurav.txt","utf8",function(err,data){
    if(err)console.log(err);
    else console.log(data);
})
