var tableName = 'x_akt_guardicore_config';
var fieldName = 'mode';

var dictionaryGR = new GlideRecord('sys_dictionary');
dictionaryGR.addQuery('name', 'x_akt_guardicore_config');
dictionaryGR.addQuery('element', fieldName);
dictionaryGR.query();

if (dictionaryGR.next()) {
    var fieldType = dictionaryGR.getValue('internal_type');
    gs.info('Field type of ' + fieldName + ' in table ' + tableName + ': ' + fieldType);
} else {
    gs.info('Field ' + fieldName + ' not found in table ' + tableName);
}