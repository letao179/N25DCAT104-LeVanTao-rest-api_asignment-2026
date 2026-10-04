# RESTful API - Hệ Thống Quản Lý Điểm Sinh Viên

Đây là bài tập kiểm tra kỹ năng xây dựng API RESTful (cụ thể là `PATCH` và `DELETE`) sử dụng Node.js, Express và MongoDB.

## Ngữ cảnh & Nghiệp vụ (Business Specs)
Bạn đang phát triển hệ thống lõi cho một trường đại học. API của bạn sẽ phục vụ cho ứng dụng của Giảng viên.

**Quy tắc nghiệp vụ cốt lõi:**
1. Giảng viên sử dụng API để quản lý điểm thi của sinh viên; hồ sơ sinh viên còn bao gồm các thông tin do bộ phận khác quản lý.
2. Điểm thi nằm trong thang **`[0.0 - 10.0]`**. API cần xử lý đúng các giá trị hợp lệ và từ chối dữ liệu không phù hợp với nghiệp vụ.
3. API cần phản hồi phù hợp với kết quả xử lý: dùng **200** khi thao tác thành công, **400** khi ID hoặc dữ liệu gửi lên không hợp lệ, và **404** khi không tìm thấy sinh viên.

---

## Cài đặt và Khởi chạy
Yêu cầu Node.js 22+, MongoDB (Atlas hoặc local).

1. Trên GitHub, fork repo bài tập về tài khoản của bạn. Clone fork của bạn về máy (thay URL bằng URL fork):
   ```bash
   git clone <URL-fork-cua-ban>
   cd rest-api_assignment-2026
   npm ci
   cp .env.example .env
   ```
   Trên Windows PowerShell, dùng `Copy-Item .env.example .env` thay cho lệnh `cp`.
2. Tạo MongoDB local hoặc MongoDB Atlas riêng. Cấu hình URI trong `.env`:
   ```env
   PORT=5000
   MONGO_URI=mongodb://127.0.0.1:27017/student_exercise
   ```
   URI trên dùng MongoDB local. Nếu dùng Atlas, thay bằng connection string do Atlas cung cấp và thêm tên database vào URI. Không chia sẻ URI có mật khẩu và không commit file `.env`.
3. Nạp dữ liệu mẫu và khởi động server trong hai terminal riêng:
   ```bash
   npm run seed
   ```
   ```bash
   npm run dev
   ```
   `seed` thêm các sinh viên mẫu nếu chưa có; lệnh này không xóa database. Mỗi nhóm nên dùng database riêng để dữ liệu test không ảnh hưởng nhóm khác.

---

## Nhiệm Vụ Của Bạn
Hoàn thành 2 API Endpoint bị thiếu tại `routes/studentRoutes.js`. Tuyệt đối không thay đổi Model hay các hàm có sẵn khác.

### 1. API Cập nhật điểm thi: `PATCH /api/students/:id`
*   `:id` là `_id` của MongoDB, được biểu diễn bằng chuỗi hexadecimal 24 ký tự. Đây không phải `studentCode`.
*   Gửi điểm cần cập nhật trong JSON request body, ví dụ: `{"score": 8.5}`. Điểm hợp lệ nằm trong khoảng **0 đến 10**.
*   Trả **200** khi cập nhật thành công; **400** nếu ID hoặc dữ liệu không hợp lệ; **404** nếu ID đúng định dạng nhưng không có sinh viên tương ứng.

### 2. API Xóa sinh viên: `DELETE /api/students/:id`
*   `:id` là `_id` MongoDB dạng chuỗi hexadecimal 24 ký tự, không phải `studentCode`.
*   Trả **200** khi xóa thành công; **400** nếu ID sai định dạng; **404** nếu không tìm thấy sinh viên.

---

## Kiểm tra API bằng Postman
1. Mở Postman và import `postman/StudentExercise.postman_collection.json`.
2. Đảm bảo server đang chạy, sau đó gửi request `GET /api/students` để xem dữ liệu mẫu và lấy `_id` của một sinh viên.
3. Sao chép `_id` từ kết quả GET và điền vào biến `studentId` của collection. Dùng biến này khi gửi request `PATCH` hoặc `DELETE`. Với PATCH, gửi body dạng JSON.
4. Xem HTTP status và response body trong Postman để kiểm tra kết quả. `DELETE` làm thay đổi dữ liệu; chạy lại `npm run seed` nếu cần thêm lại sinh viên mẫu.

## Nộp bài qua Fork và Pull Request
1. Trên GitHub, bấm **Fork** repo bài tập về tài khoản của bạn (giữ tùy chọn copy nhánh `main`).
2. Clone fork về máy, tạo nhánh làm bài riêng (không code trực tiếp trên `main`):
   ```bash
   git clone <URL-fork-cua-ban>
   cd rest-api_assignment-2026
   git checkout -b lam-bai
   ```
3. Sau khi code và test xong, commit và push nhánh làm bài lên fork của bạn:
   ```bash
   git add routes/studentRoutes.js
   git commit -m "Hoan thanh bai tap PATCH va DELETE"
   git push origin lam-bai
   ```
4. Trên trang fork của bạn, bấm **Compare & pull request**:
   - Base repository: `Ce1lo/rest-api_assignment-2026`, base branch: `main`
   - Head repository: fork của bạn, compare branch: `lam-bai`
   - Bấm **Create pull request**.
5. Dán link Pull Request để nộp bài. **Giữ PR mở cho tới khi có điểm, tuyệt đối không đóng và không tự bấm Merge PR.**
