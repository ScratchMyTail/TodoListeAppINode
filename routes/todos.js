var fs = require('fs');
var readline = require('readline');


exports.list = function(req, res){
	var arr = new Array();
	var rd = readline.createInterface({
    	input: fs.createReadStream('handleliste.txt'),
    	output: process.stdout,
    	terminal: false
	});

	rd.on('line', function(line) {
		arr.push(line);
	}).on('close', function(){
		res.send(arr);
	});
};

exports.add = function(req, res){
    fs.appendFile('handleliste.txt', req.body.saveValue+"\r\n", function (err) {});
    res.send("ok");
};