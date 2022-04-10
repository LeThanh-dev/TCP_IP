                      ********              CÁCH CHẠY CODE            ********  

B1: Chạy Server bằng lệnh "node server.js" 
B2: Chạy Client bằng lệnh "node client.js"

                             ********         MÔ TẢ CODE        ********  

Trong từng File code đã mô tả về ý nghĩa code bằng các comment line
**************************
TỔNG QUAN LẠI TỪNG Ý ĐỀ BÀI LÀM:
Khi chạy code:

1. Phía Server
+ In ra đoạn text: "server đang chạy" để thông báo server đang chạy.
+ In ra số Client đang truy cập bằng đoạn text: "Online: [Số Client đang truy cập]".
+ Mỗi 1 giây thì server in ra màn hình số lượng kết nối đang xử lý.
+ Chạy hàm đóng server sau 30s và in từng giây đếm ngược, trước khi đóng sẽ in ra đoạn text "Kết nối sẽ đóng lại!" để thông báo.
+ Khi có Client kết nối thì sẽ in ra thông tin về kết nối mới ( địa chỉ IP, số hiệu cổng ) bằng đoạn text:
"Client có địa chỉ [địa chỉ] - Cổng: [cổng]".

2. Phía Client
+ In ra đoạn text: Đã kết nối tới Server để thông báo truy cập thành công.
+ Nhận được thông báo "Xin chào" từ phía Server gửi sang khi bắt đầu truy cập.