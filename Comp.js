var MyListController = Class.create();
MyListController.prototype = {
    initialize: function() {
        // Конструктор контролера
        this.tableName = 'incident'; // Замініть 'incident' на назву вашої таблиці
        this.list = new GlideRecord(this.tableName);
        this.list.addEncodedQuery('active=true'); // Приклад фільтрації за активністю
        this.list.orderBy('priority'); // Приклад сортування
        this.list.query();
    },

    getRecords: function() {
        // Отримання записів зі списку
        var records = [];
        while (this.list.next()) {
            var record = {
                id: this.list.getUniqueValue(),
                number: this.list.getValue('number'),
                short_description: this.list.getValue('short_description'),
				push: this.list.insert()
                // Додайте інші поля за потребою
            };
            records.push(record);
        }
        return records;
    },

    // Додайте інші методи контролера за потребою
};

// Приклад використання контролера
var myListController = new MyListController();
var records = myListController.getRecords();
// Тепер ви можете використовувати записи для відображення на сторінці або виконання інших операцій