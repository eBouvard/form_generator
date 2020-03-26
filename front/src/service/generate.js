const recursive_generator = function (generated_obj, template) {
	for (let key of Object.keys(generated_obj)) {
		if ((generated_obj[key].type === "chapter") || (generated_obj[key].type === "category")) {
			template[key] = {};
			recursive_generator(generated_obj[key].content, template[key]);
		}
		else {
			template[key] = "";
		}
	}
}

export default function (template) {
	let ret = {
		"date": "",
		"title": "",
		"author": "",
		"content": {
			"main": {},
			"annex": {}
		}
	};
	recursive_generator(template, ret.content.main);
	return ret;
} 
