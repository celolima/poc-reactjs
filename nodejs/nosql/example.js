var mqtt = require('mqtt')
var client  = mqtt.connect('mqtt://test.mosquitto.org')
var sqlite = require('sqlite-sync')

console.log('Script que testa mosquitto, sqlite-sync');

client.on('offline', function () {
  console.log('Not able to connect\n')
  client.end()
})

sqlite.connect('myDatabase.db')

var id= sqlite.insert('COMPANYS', {ID:1, NAME: 'TRT3'});

console.log('Obtendo registros: \n')
//Assíncrono

sqlite.runAsync("SELECT * FROM COMPANYS", function(rows) {
  console.log(rows);
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