/**
	Author: Venkata Sai Katepalli
**/

// default rest behaviour
class Rest {
	list () {
		return 'list';
	}
}

// create a instance for rest
var Service = new Rest();

// export for using the rest
module.exports = Service;