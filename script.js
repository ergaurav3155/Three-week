const fs = require('fs');

fs.writeFile("gaurav.txt","hellow gaurav",function(err){
    if(err) console.log(err);
    else console.log("file created");

})