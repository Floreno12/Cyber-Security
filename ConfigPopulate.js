
CreateConfig: function(selectedTable,childTable,amount,child_amount,prifix, child_amount){//use object current for get value in filter
var mode = current.getValue(); 
if(mode = 'Parent'){
var ConfigP = new GlideRecord('x_akt_guardicore_config');
ConfigP.getValue('encoded')
ConfigP.initialize();
ConfigP.username = 'snow-api';
ConfigP.endpoint = 'lab11-a.td.guardicore.com';
ConfigP.password = 'Ncx9boPZGchOQ8T2$';
ConfigP.encoded_query = 'nameSTARTSWITHKeyFieldsBigTestChainP'; // Create custom encoded query for table 
var parentRecordId = ConfigP.insert();
    }

// Check if the parent record was inserted successfully before creating the child record
if (mode = 'Child') {
    //create Parent
    var Config = new GlideRecord('x_akt_guardicore_config');
Config.initialize();
Config.username = 'snow-api';
Config.endpoint = 'lab11-a.td.guardicore.com';
Config.password = 'Ncx9boPZGchOQ8T2$';
Config.encoded_query = 'nameSTARTSWITHKeyFieldsBigTestChainP'; // Create custom encoded query for table 
var parentRecordId = ConfigP.insert();
// Create the child record
var ConfigCH = new GlideRecord('x_akt_guardicore_config');
ConfigCH.initialize();
ConfigCH.username = 'snow-api';
ConfigCH.endpoint = 'lab11-a.td.guardicore.com';
ConfigCH.password = 'Ncx9boPZGchOQ8T2$';
ConfigCH.encoded_query = 'nameSTARTSWITHKeyFieldsBigTestChainP'; // Create custom encoded query for table 
ConfigCH.parent = parentRecordId; // Set the reference field to the sys_id of the parent record
var childRecordId = ConfigCH.insert();
}
}
//g_form.setMandatory('accounting_close_notes', true); for create field off mandatory















//V2
var mode = new GlideRecord('x_akt_guardicore_guardicorewindow');
mode.query();

//while (mode.next()) {
var modes = mode.getValue('config');


if (modes == 'value1') {
    var ConfigP = new GlideRecord('x_akt_guardicore_config');
    ConfigP.initialize();
    ConfigP.username = 'snow-api';
    ConfigP.endpoint = 'lab11-a.td.guardicore.com';
    ConfigP.password = 'Ncx9boPZGchOQ8T2$';
    ConfigP.encoded_query = 'nameSTARTSWITHKeyFieldsBigTestChainP'; // Create custom encoded query for table 
    var parentRecordId = ConfigP.insert();
}

// Check if the parent record was inserted successfully before creating the child record
if (modes == 'value2') {
    // Create the child record
    var ConfigCH = new GlideRecord('x_akt_guardicore_config');
    ConfigCH.initialize();
    ConfigCH.username = 'snow-api';
    ConfigCH.endpoint = 'lab11-a.td.guardicore.com';
    ConfigCH.password = 'Ncx9boPZGchOQ8T2$';
    ConfigCH.encoded_query = 'nameSTARTSWITHKeyFieldsBigTestChainP'; // Create custom encoded query for table 
    ConfigCH.parent = parentRecordId; // Set the reference field to the sys_id of the parent record
    var childRecordId = ConfigCH.insert();
}
//}









//V3 Whith UI Action
var mode = new GlideRecord('x_akt_guardicore_guardicorewindow');
mode.initialize();
var reale = mode.configcreate = 'new Record';
//var configValue = mode.getValue('configcreate_field');
gs.log('get config' + reale);
mode.query(); // Query all records in the table

//while (mode.next()) {

if (reale == 'new Reco') {
    var ConfigP = new GlideRecord('x_akt_guardicore_config');
    ConfigP.initialize();
    ConfigP.username = 'snow-api';
    //gs.log('get config' + user);
    ConfigP.endpoint = 'lab11-a.td.guardicore.com';
    ConfigP.password = 'Ncx9boPZGchOQ8T2$';
    ConfigP.encoded_query = 'nameSTARTSWITHKeyFieldsBigTestChainP'; // Create custom encoded query for table 
    var parentRecordId = ConfigP.insert();
}
if (reale == 'new Record') {
    //create parent
    var Config = new GlideRecord('x_akt_guardicore_config');
    Config.initialize();
    Config.username = 'snow-api';
    Config.endpoint = 'lab11-a.td.guardicore.com';
    Config.password = 'Ncx9boPZGchOQ8T2$';
    Config.encoded_query = 'nameSTARTSWITHKeyFieldsBigTestChainP'; // Create custom encoded query for table 
    var parentRecord = Config.insert();
    // Create the child record
    var ConfigCH = new GlideRecord('x_akt_guardicore_config');
    ConfigCH.initialize();
    ConfigCH.username = 'snow-api';
    ConfigCH.endpoint = 'lab11-a.td.guardicore.com';
    ConfigCH.password = 'Ncx9boPZGchOQ8T2$';
    ConfigCH.encoded_query = 'nameSTARTSWITHKeyFieldsBigTestChainP'; // Create custom encoded query for table 
    ConfigCH.parent = parentRecord; // Set the reference field to the sys_id of the parent record
    var childRecordId = ConfigCH.insert();
}