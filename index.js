const fs=require("fs");

const dt=fs.readFileSync("notes.txt","utf-8");

var arr=dt.split(/\r?\n/);

for(var i=0;i<arr.length;i++)
{
    fs.appendFileSync("temp.txt",arr[i]);
    fs.appendFileSync('temp.txt',"\n");
    fs.appendFileSync("temp.txt","\n");
}

const dt2=fs.readFileSync("temp.txt","utf-8");
fs.writeFileSync("notes.txt",dt2);
fs.unlink("temp.txt",(err)=>{});