var tables = [
    "catalog_client_script",
    "sys_script_email",
    "sys_script_include"
];
var output = [];
var seen = {};
tables.map(function (table) {
    try {
        var gsem = new GlideScriptEditorManager();
        var gr = new GlideRecord(table);
        gr.newRecord();

        var apis = gsem.getApis(table, "script", gr).toString();
        // fix invalid JSON
        apis = apis.replace("\\'", "'");
        var parsed = JSON.parse(apis);
        // loop over each property and... put them in output
        for (var prop in parsed) {
            if (!seen[prop]) {
                var obj = {
                    name: prop
                };
                obj[prop] = parsed[prop];
                if (parsed[prop]["!doc"]) {
                    obj['!doc'] = parsed[prop]["!doc"]
                }
                if (parsed[prop]["!type"]) {
                    obj['!type'] = parsed[prop]["!type"]
                }
                if (parsed[prop]["prototype"]) {
                    obj['prototype'] = parsed[prop]["prototype"]
                }
                output.push(obj);
                seen[prop] = true;
            }
        }

        //for(var prop in parsed){
        //	output[prop] = parsed[prop];
        //}
        var formatted = JSON.stringify(output, null, 2);

        gs.info('output');
        //gs.info(formatted);
    } catch (e) {
        //gs.error("ERROR: " + e);
    }

});
var formatted = JSON.stringify(output, null, 2);
gs.info(formatted);
