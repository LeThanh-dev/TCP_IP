// Module giúp tạo ra  máy chủ TCP
var net = require('net');

const port = 8080;
const host = 'localhost';
// Tạo Server
var server = new net.Server()

// Hàm đến ngược đóng Server
const countDown = (time = 0) => {
	let loop = ""
	let countCurrent = time
	loop = setInterval(() => {
		console.log(countCurrent)
		if (countCurrent == 0) {
			console.log("Kết nối sẽ đóng lại!");
			clearInterval(loop)
			// Đóng server
			console.log("Server đã đóng!");
			server.close()
			process.exit()
		}
		countCurrent -= 1
	}, 1000)
}
// Hàm lấy dữ liệu số kết nối hiện tại
const getClientOnline = async () => {
	let online = 0
	await server.getConnections((err, count) => {
		online = count
	})
	return online
}
server.listen({ port: port, host: host }, () => {
	console.log('Server đang chạy');
});

//  Gọi hàm đóng Server
countDown(30)
// Gọi hàm lấy dữ liệu kết nối hiện tại
getClientOnline().then((data) => {
	console.log("--------------------------");
	console.log("Số kết nối đang hoạt động:", data);
	console.log("--------------------------");
})
server.on('connection', (client) => {

	// Gửi lời chào đến Client khi có kết nối
	client.write(`Xin chào!\n`)
	console.log("--------------------------");
	
	// Hiện thị thông tin kết nối
	console.log(`Client có địa chỉ ${client.remoteAddress} - Cổng: ${client.remotePort}`);

	// Gọi hàm lấy dữ liệu kết nối hiện tại
	getClientOnline().then((data) => {
		console.log("Số kết nối đang hoạt động:", data);
		console.log("--------------------------");
	})
	console.log("--------------------------");

	// In ra khi có lỗi
	client.on("error", err => {
		console.log(err);
		getClientOnline().then((data) => {
			console.log("Số kết nối đang hoạt động:", data);
		})

	})
})
// Thực hiện in số kết nối mỗi 1 giây
setInterval(() => {
	// Gọi hàm lấy dữ liệu kết nối hiện tại
	getClientOnline().then((data) => {
		console.log("Số kết nối đang xử lý:", data);
	})
}, 1000)