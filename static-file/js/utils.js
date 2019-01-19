
/**
 * 返回符合的dom，如果有多个，只返回符合条件的第一个dom
 * @param {string} id 
 * @param {string} className 
 * @param {string} tag 
 * @returns {HTMLElement}
 */
function query(id, className, tag) {
	let els = [];
	if (className) {
		els = document.getElementsByClassName(className);
	}
	if (tag) {
		if (els && els.length) {
			els.filter(el => tag.equalsIgnoreCase(el.tagName));
		} else {
			els = document.getElementsByTagName(tag);
		}
	}
	if (id) {
		if (els && els.length) {
			els.filter(el => id.equalsIgnoreCase(el.id));
		} else {
			els = [document.getElementById(id)];
		}
	}
	return els[0];
}

String.prototype.equalsIgnoreCase = function (s) {
	if (s == null)
		return false;
	let t = this.toString();
	let len = t.length;
	if (len !== s.length) {
		return false;
	}
	if (t === s) {
		return true;
	}
	let c1, c2;
	for (let i = 0; i < len; i++) {
		c1 = t.charCodeAt(i);
		c2 = s.charCodeAt(i);
		if (c1 !== c2) {
			if (c1 >= 65 // A
				&&
				c1 <= 90 // Z
			) {
				if (c1 !== c2 - 32) {
					return false;
				}
			} else if (c1 >= 97 // a
				&&
				c2 <= 122 // z
			) {
				if (c1 !== c2 + 32) {
					return false;
				}
			} else {
				return false;
			}
		}
	}
	return true;
}