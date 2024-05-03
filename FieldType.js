function getType(){
    var table = new GlideRecord('x_akt_guardicore_config');
    var sys = table.addQuery('sys_id', 'ecae7f0a832d0210264dc8a6feaad35d');
    gs.info('!!!getCurrentfield' +sys);
    table.setLimit(1);
    table.query();
    //table.next();
    
    //  var ciFields = table.getElements();
    //  gs.info('!!!getElement' +table);
    
    while(table.next()){
    
    var glideElement = table.getElement('label_key_fields');
    gs.info('!!field value' +glideElement);
    var descriptor = glideElement.getED();
    var internalType = descriptor.getInternalType();
    gs.info('type of value' +internalType);
    }
    }
    
    getType();


    //thing about 
    var glideElement = recObj.getElement(fName);


    var descriptor = glideElement.getED();


    var result = descriptor.getInternalType();


    return result;

    //new thing

    var internalFieldType = selectedCiTable.getElement(element.getName()).getED().getInternalType().toString();

//My vertion
function getType() {
    var table = new GlideRecord('x_akt_guardicore_config');
    var sys = table.addQuery('sys_id', 'ecae7f0a832d0210264dc8a6feaad35d');
    gs.info('!!!getCurrentfield' + sys);
    table.setLimit(1);
    table.query();


    while (table.next()) {

        var glideElement = table.getElement('label_key_fields');
        gs.info('record name ' + glideElement);



        gs.info('!!field value ' + glideElement);
        var descriptor = glideElement.getED();
        var internalType = descriptor.getInternalType();
        gs.info('type of value ' + internalType);



        var table = new GlideRecord('cmdb_ci_service');
        var sys = table.addQuery('sys_id', '26da329f0a0a0bb400f69d8159bc753d');
        gs.info('!!!getCurrentfield' + sys);
        table.setLimit(1);
        table.query();


        while (table.next()) {

            var Element = table.getElement(glideElement);
            gs.info('!!field value ' +Element);
            var descripto = Element.getED();
            var internalTyp = descripto.getInternalType();
            gs.info('type of value ' + internalTyp);


        }
    }
}

getType();