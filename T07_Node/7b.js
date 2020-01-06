const fs = require('fs');
const DIR = 'C:\\Users\\kumro\\Desktop\\School\\TIN\\T07_Node';

watchDir(DIR);


function watchDir(dir) {
    fs.watch(dir, (eventType, filename) => {
        if (filename) {
            let stat = fs.lstatSync(filename);

            if (stat.isFile()) {
                read(filename);
            }
            console.log(`filename modified: ${filename}`);
            console.log(`Is file: ${stat.isFile()}`);
        }
    });

    function read(filename) {
        String(filename);
        fs.readFile(filename, "utf8", function (error, data) {
            console.log("error: " + error + "\n");
            console.log(data);
            
        });
    }


}
