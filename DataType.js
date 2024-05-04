function getType() {
    var table = new GlideRecord('x_akt_guardicore_config');
    table.addQuery('sys_id', 'ecae7f0a832d0210264dc8a6feaad35d');
    table.setLimit(1);
    table.query();


    while (table.next()) {

        var glideElement = table.getElement('label_key_fields');
        var descriptor = glideElement.getED();
        var internalType = descriptor.getInternalType();
        var dataArray = glideElement.getDisplayValue().split(',');
    }
    return dataArray;
}

var glideElement = getType();




function getList(getElement) {

    var getType = new GlideRecord('cmdb_ci_service');
    getType.addQuery('sys_id', '26da329f0a0a0bb400f69d8159bc753d');
    getType.setLimit(1);
    getType.query();

    while (getType.next()) {

        for (var i = 0; i < getElement.length; i++) {
            var Element = getType.getElement(getElement[i]);
            var descripto = Element.getED();
            var internalTyp = descripto.getInternalType();
            gs.info('Type of value ' + internalTyp);
        }

    }
}

getList(glideElement);