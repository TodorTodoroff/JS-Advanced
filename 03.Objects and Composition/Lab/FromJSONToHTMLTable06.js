function solve(json) {
    let parsed = JSON.parse(json);

    let columnNames = Object.keys(parsed[0]);
    let values = parsed.map(obj => Object.values(obj));

    let result = '<table>\n';

    appendHeaders(columnNames);
    appendValues(values);

    result += `</table>`;

    function appendHeaders(columnNames) {

        result += `   <tr>`;

        for (let columnName of columnNames) {
            result += `<th>${columnName}</th>`;
        }

        result += `</tr>\n`;
    }

    function appendValues(columnNames) {

        

        for (let i = 0; i < values.length; i++) {
            result += `   <tr>`;
            let val = values[Number(i)];

            for (let y = 0; y < val.length; y++) {
                result += `<td>${escape(val[Number(y)])}</td>`;
            }
            result += `</tr>\n`;
        }
       
    }

    function escape(value) {
        return value.toString().replace('<', '&lt;').replace('>', '&gt;');
    }
    console.log(result);
}

// solve(`[{"Name":"Stamat",
// "Score":5.5},
// {"Name":"Rumen",
// "Score":6}]`
// );

solve(`[{"Name":"Pesho","Score":4,"Grade":"8"},{"Name":"Gosho","Score":5,"Grade":"8"},{"Name":"Angel","Score":5.5,"Grade":"10"}]`);