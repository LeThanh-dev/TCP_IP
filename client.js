const Net = require('net');
const port = 8080;
const host = 'localhost';

const client = new Net.Socket();

client.connect({ port: port, host: host }, function() {
    console.log('Đã kết nối tới Server.');
});

client.on('data', function(dataFromServer) {
	// Nhận dữ liệu từ server gửi về
    console.log(dataFromServer.toString())
});

// In ra khi có lỗi
client.on('error',(err)=>{
	console.log(err.stack);
})