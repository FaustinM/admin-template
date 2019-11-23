//imports
const util = require("util");
const fs = require("fs");
const ejs = require("ejs");
const ejsLint = require('ejs-lint');

//promisify
const mkdir = util.promisify(fs.mkdir);
const readFile = util.promisify(fs.readFile);
const writeFile = util.promisify(fs.writeFile);

const pageModel = {
    content: "This is some sample content. Located on the sample page."
};
const walkSync = (dir = "src", filelist = []) => {
    fs.readdirSync(dir).forEach(file => {

        filelist = fs.statSync(dir + "/" + file).isDirectory()
            ? walkSync(dir + "/" + file, filelist)
            : filelist.concat(dir + "/" + file);

    });
    return filelist;
};
async function render(file) {
    try{
        let dir = file.split("/");
        dir.pop();
        dir.shift();
        if(dir.join("/") && !fs.existsSync(dir.join("/"))) await mkdir(dir.join("/"));
        //render ejs template to html string
        //pass pageModel in to render content
        const html = await ejs
            .renderFile(file, {PATH : file.slice(4)})
            .then(output => output);

        //create file and write html
        await writeFile(file.slice(4).substring(0, (file.slice(4).length-3)) + "html", html, "utf8");

    }catch(error){
        console.log(error);
    }
}

walkSync().forEach(file => {
    if(!file.includes("partials")) render(file)
});
