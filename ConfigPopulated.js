var mode = 'Child';//or Parent

function Parent(){
if(mode == 'Parent'){
var ConfigP = new GlideRecord('x_akt_guardicore_config');
ConfigP.getValue('encoded')
ConfigP.initialize();
ConfigP.username = 'snow-api';
ConfigP.endpoint = 'lab11-a.td.guardicore.com';
ConfigP.password = 'Ncx9boPZGchOQ8T2$';
ConfigP.encoded_query = 'nameSTARTSWITHKeyFieldsBigTestChainP'; 
var parentRecordId = ConfigP.insert();
}

}
Parent();

function Child(){
if(mode == 'Child'){
//create Parent
var Config = new GlideRecord('x_akt_guardicore_config');
Config.initialize();
Config.username = 'snow-api';
Config.endpoint = 'lab11-a.td.guardicore.com';
Config.password = 'Ncx9boPZGchOQ8T2$';
Config.encoded_query = 'nameSTARTSWITHKeyFieldsBigTestChainP';  
var parentRecordId = Config.insert();
if(Config){
// Create child record
var ConfigCH = new GlideRecord('x_akt_guardicore_config');
ConfigCH.initialize();
ConfigCH.username = 'snow-api';
ConfigCH.endpoint = 'lab11-a.td.guardicore.com';
ConfigCH.password = 'Ncx9boPZGchOQ8T2$';
ConfigCH.encoded_query = 'nameSTARTSWITHKeyFieldsBigTestChainP'; // Create custom encoded query for table 
ConfigCH.parent = parentRecordId; // Set the reference field to sys_id of the parent record
var childRecordId = ConfigCH.insert();
}
}
}
Child();