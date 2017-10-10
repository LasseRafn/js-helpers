/* 
 * Build URL query from object / array.
 * PHP: http://php.net/manual/en/function.http-build-query.php
 * 
 * Usage: http_build_query({ foo: "bar", star: "wars })
 * Output: foo=bar&star=wars
 * 
 * Usage: http_build_query(["foo", "bar"], "form_")
 * Output: form_0=foo&form_1=bar
 * 
 * Usage: http_build_query({ foo: "bar", star: "wars }, "", "$")
 * Output: foo=bar$star=wars
 */
function http_build_query(query_data, numeric_prefix, arg_separator) {
  arg_separator = arg_separator || "&";
  numeric_prefix = numeric_prefix || "";

  if(Array.isArray(query_data)) {
    query_data = query_data.reduce(function(acc, cur, i) {
      acc[numeric_prefix + i] = cur;

      return acc;
    }, {});
  }
  
  var esc = encodeURIComponent;
  
  return Object.keys(params)
  		.map(function (k) {
		  return esc(k) + '=' + esc(params[k])
                }).join(arg_separator);
}
