var mqtt = require('mqtt')
var client  = mqtt.connect('mqtt://test.mosquitto.org')
var sqlite = require('sqlite-sync')

console.log('\nScript que testa mosquitto, sqlite-sync:\n');

client.on('offline', function () {
  console.log('\nNot able to connect on MQTT\n')
  client.end()
})

sqlite.connect('myDatabase.db')

var id = sqlite.insert('COMPANYS', {ID:1, NAME: 'TRT3'});
var id = sqlite.insert('COMPANYS', {ID:2, NAME: 'TRT2'});

console.log('Obtendo registros: ')

//Assíncrono
sqlite.runAsync("SELECT * FROM COMPANYS", function(rows) {
    for( var key in rows ) {
        console.log('Id  : %d', rows[key].ID)
        console.log('Nome: %s', rows[key].NAME)
    }
});

client.on('connect', function () {
  client.subscribe('presence')
  client.publish('presence', 'Hello mqtt')
})
 
client.on('message', function (topic, message) {
  // message is Buffer
  console.log(message.toString())
  client.end()
})