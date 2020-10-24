"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.default = successor;

/**
 * Finds the smallest value in the binary search tree
 * which is greater than parameter value.
 */

function successor(compare, node, value, succ) {

	var d;

	d = compare(value, node.value);

	if (d === 0) {
		return [true, node.value];
	} else if (d < 0) {

		if (node.left === null) {
			return [false, node.value];
		}

		return successor(compare, node.left, value, node.value);
	} else {

		if (node.right === null) {
			return [false, succ];
		}

		return successor(compare, node.right, value, succ);
	}
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9mdW5kYW1lbnRhbHMvc3VjY2Vzc29yLmpzIl0sIm5hbWVzIjpbInN1Y2Nlc3NvciIsImNvbXBhcmUiLCJub2RlIiwidmFsdWUiLCJzdWNjIiwiZCIsImxlZnQiLCJyaWdodCJdLCJtYXBwaW5ncyI6Ijs7Ozs7a0JBTXdCQSxTOztBQUx4Qjs7Ozs7QUFLZSxTQUFTQSxTQUFULENBQXFCQyxPQUFyQixFQUE4QkMsSUFBOUIsRUFBb0NDLEtBQXBDLEVBQTJDQyxJQUEzQyxFQUFrRDs7QUFFaEUsS0FBSUMsQ0FBSjs7QUFFQUEsS0FBSUosUUFBU0UsS0FBVCxFQUFnQkQsS0FBS0MsS0FBckIsQ0FBSjs7QUFFQSxLQUFLRSxNQUFNLENBQVgsRUFBZTtBQUNkLFNBQU8sQ0FBQyxJQUFELEVBQU9ILEtBQUtDLEtBQVosQ0FBUDtBQUNBLEVBRkQsTUFJSyxJQUFLRSxJQUFJLENBQVQsRUFBYTs7QUFFakIsTUFBS0gsS0FBS0ksSUFBTCxLQUFjLElBQW5CLEVBQTBCO0FBQ3pCLFVBQU8sQ0FBQyxLQUFELEVBQVFKLEtBQUtDLEtBQWIsQ0FBUDtBQUNBOztBQUVELFNBQU9ILFVBQVdDLE9BQVgsRUFBb0JDLEtBQUtJLElBQXpCLEVBQStCSCxLQUEvQixFQUFzQ0QsS0FBS0MsS0FBM0MsQ0FBUDtBQUVBLEVBUkksTUFVQTs7QUFFSixNQUFLRCxLQUFLSyxLQUFMLEtBQWUsSUFBcEIsRUFBMkI7QUFDMUIsVUFBTyxDQUFDLEtBQUQsRUFBUUgsSUFBUixDQUFQO0FBQ0E7O0FBRUQsU0FBT0osVUFBV0MsT0FBWCxFQUFvQkMsS0FBS0ssS0FBekIsRUFBZ0NKLEtBQWhDLEVBQXVDQyxJQUF2QyxDQUFQO0FBQ0E7QUFFRCIsImZpbGUiOiJzdWNjZXNzb3IuanMiLCJzb3VyY2VzQ29udGVudCI6WyJcbi8qKlxuICogRmluZHMgdGhlIHNtYWxsZXN0IHZhbHVlIGluIHRoZSBiaW5hcnkgc2VhcmNoIHRyZWVcbiAqIHdoaWNoIGlzIGdyZWF0ZXIgdGhhbiBwYXJhbWV0ZXIgdmFsdWUuXG4gKi9cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gc3VjY2Vzc29yICggY29tcGFyZSwgbm9kZSwgdmFsdWUsIHN1Y2MgKSB7XG5cblx0dmFyIGQ7XG5cblx0ZCA9IGNvbXBhcmUoIHZhbHVlLCBub2RlLnZhbHVlICk7XG5cblx0aWYgKCBkID09PSAwICkge1xuXHRcdHJldHVybiBbdHJ1ZSwgbm9kZS52YWx1ZV07XG5cdH1cblxuXHRlbHNlIGlmICggZCA8IDAgKSB7XG5cblx0XHRpZiAoIG5vZGUubGVmdCA9PT0gbnVsbCApIHtcblx0XHRcdHJldHVybiBbZmFsc2UsIG5vZGUudmFsdWVdO1xuXHRcdH1cblxuXHRcdHJldHVybiBzdWNjZXNzb3IoIGNvbXBhcmUsIG5vZGUubGVmdCwgdmFsdWUsIG5vZGUudmFsdWUgKTtcblxuXHR9XG5cblx0ZWxzZSB7XG5cblx0XHRpZiAoIG5vZGUucmlnaHQgPT09IG51bGwgKSB7XG5cdFx0XHRyZXR1cm4gW2ZhbHNlLCBzdWNjXTtcblx0XHR9XG5cblx0XHRyZXR1cm4gc3VjY2Vzc29yKCBjb21wYXJlLCBub2RlLnJpZ2h0LCB2YWx1ZSwgc3VjYyApO1xuXHR9XG5cbn1cblxuIl19