requestAnimationFrame(() => {})

/**
 * 返回符合的dom，
 * @param {} id 
 * @param {*} className 
 * @param {*} tag 
 * @returns{htmlelement}
 */
function query(id, className, tag) {
	let els = [];
	if (className) {
		els = document.getElementsByClassName(className);
	}
	if (tag) {
		if (els && els.length) {
			els.filter(el=>el.tagName===tag);
		} else {

		}
	}
	document.getElementsByClassName().find(el => el)
}