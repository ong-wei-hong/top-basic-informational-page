var http = require('http');
var fs = require('fs');

const file = {
	'/': './index.html',
	'/about': './about.html',
	'/contact-me': './contact.html'
};

http.createServer( (req, res) => {
	res.statusCode = 200;
	res.setHeader('Content-Type', 'text/html')

	let page = file[req.url]
	if (page === undefined) {
		page = './404.html'
	}

	fs.readFile(page, 'utf8', (err, data) => {
		if (err) {
			console.log(err);
			return res.end('<h1>Error, check console</h1>')
		}
		return res.end(data);
	})
}).listen(8080);
