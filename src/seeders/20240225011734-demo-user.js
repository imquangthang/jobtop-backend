"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
     */
    await queryInterface.bulkInsert(
      "jobinfo",
      [
        {
          id: "1",
          title: "Nhân Viên Chăm Sóc Khách Hàng Nội Thất",
          address: "TP.HCM",
          description:
            "Công việc chính là tư vấn và chăm sóc khách hàng online qua fanpage facebook, zalo… bám sát khách hàng. - Tư vấn nội thất cho khách hàng tại showroom. - Nội thất gia đình gồm: ghế sofa, bàn ăn, giường tủ, kệ tivi hiện đại.... - Web tham khảo: noithattana.vn - Làm việc và phỏng vấn tại Showroom: 1060 Quang Trung, Phường 8, Quận Gò Vấp, TP Hồ Chí Minh",
          salary: "12 - 15 triệu",
          sourcePicture:
            "https://cdn1.vieclam24h.vn/images/employer_avatar/2023/04/24/5232002a3a58e506bc49_168230184673.jpg",
        },
        {
          id: "2",
          title: "Nhân Viên Kiểm Soát Chất Lượng Cuối Line",
          address: "Bình Dương",
          description:
            " Kiểm tra ngoại quan sản phẩm dựa trên tiêu chuẩn chất lượng. - Sử dụng máy siêu âm và công cụ kiểm tra Độ cứng. - Nhập thông tin sản phẩm lên SAP. - Thông tin cho QC và Trưởng nhóm sản xuất khi có sản phẩm bị lỗi. - Hỗ trợ Trưởng nhóm QC, Kỹ sư chất lượng và Bộ phận sản xuất để giải quyết vấn đề. - Theo dõi điều kiện quá trình. - Kiểm tra và ghi nhận quá trình kiểm tra lốp đầu tiên khi thay đổi Khuôn / Lõi. Ca làm việc: + Ca 1: 06:00 - 14:00 + Ca 2: 14:00 - 22:00 + Ca 3: 22:00 - 06:00",
          salary: "12 - 20 triệu",
          sourcePicture:
            "https://cdn1.vieclam24h.vn/images/old_employer_avatar/images/3fe4f415eae4a3044bbb512a969399b7_1498787670_camso_logo.jpeg",
        },
        {
          id: "3",
          title:
            "Nhân Viên Kinh Doanh Thị Trường Ngành Hàng Gia Dụng (Làm Tại Quận 6)",
          address: "TP.HCM",
          description:
            "Giới thiệu tư vấn sản phẩm tới khách hàng Chăm sóc và giữ mối quan hệ tốt với khách hàng cũ (data khách hàng có sẵn). Tìm kiếm, mở rộng thêm nguồn khách hàng mới Tìm hiểu thông tin thị trường, thị phần thuộc khu vực phụ trách. Báo cáo công việc hằng ngày Địa chỉ làm việc tại: 110/43/2/5 Bà Hom, P.13, Quận 6, TP. HCM",
          salary: "12 - 20 triệu",
          sourcePicture:
            "https://cdn1.vieclam24h.vn/tvn/images/employer_avatar/2021/10/12/images/163401903792.jpeg",
        },
        {
          id: "4",
          title:
            "Nhân Viên Kinh Doanh - Thu Nhập Lên Đến 20 Triệu (Phỏng Vấn Đi Làm Ngay) - [ Quận 3]",
          address: "TP.HCM",
          description:
            "Duy trì khách hàng hiện có, tìm kiếm mở rộng và phát triển nguồn khách hàng. - Nắm bắt chi tiết thông tin sản phẩm công ty hiện đang kinh doanh để có thể giải đáp các thắc mắc của khách hàng về sản phẩm. -        Tiếp xúc trực tiếp với khách hàng, ghi nhận thông tin và báo cáo nội dung cho Trưởng phòng. -        Được Quản lý hỗ trợ, hướng dẫn trong quá trình đàm phán, thương lượng để tiến hành chốt đơn và ký kết hợp đồng. -        Quản lý, theo dõi quá trình thực hiện ký kết hợp đồng, thu hồi công nợ, và các công việc chăm sóc khách hàng trước, trong và sau khi kết thúc hợp đồng. -        Lập kế hoạch công việc tuần, tháng theo kế hoạch chung của phòng. -        Công việc cụ thể trao đổi thêm khi phỏng vấn. -        Thời gian làm việc: sáng 8h - 12h & chiều 13h - 17h từ thứ 2 đến thứ 6, thứ 7 từ 8h – 12h. -Địa điểm làm việc: Tầng 06, số 34 Huỳnh Tịnh Của, Phường 8, Quận 3, TP. HCM.",
          salary: "15 - 20 triệu",
          sourcePicture:
            "https://cdn1.vieclam24h.vn/images/default/2022/07/05/images/165701049494.jpeg",
        },
        {
          id: "5",
          title:
            "[Cần Thơ] Giám Sát Bán Hàng Kênh GT,Công Ty CP Chuỗi Thực Phẩm Th",
          address: "Cần Thơ",
          description:
            "Đảm bảo mục tiêu kinh doanh của khu vực: - Đảm bảo Nhà Phân Phối thực hiện đúng các điều khoản của hợp đồng đã ký kết cũng như các thông báo, chính sách tại từng thời điểm. - Đề ra/ phân chia những mục tiêu (sản lượng, doanh số, mặt hàng trọng tâm…) rõ ràng, phù hợp với những mục tiêu của Quản Lý Bán Hàng Miền cho từng thành viên đội ngũ bán hàng trong điạ bàn. - Theo dõi và đánh giá tiến trình thực hiện mục tiêu của đội ngũ hàng ngày/ hàng tuần và có giải pháp khắc phục kịp thời. - Phân bổ ngân sách được giao về các chương trình khuyến mãi, trưng bày, vật phẩm quảng cáo POSM)…cho từng nhân viên bán hàng và theo dõi thực hiện. - Đảm bảo thông tin được truyền đạt rõ ràng. - Thu thập thông tin về thị trường, đối thủ cạnh tranh và báo cáo cho Quản lý Tác Nghiệp Kinh doanh Miền, Quản lý Bán hàng Miền. * Xây dựng năng lực đội ngũ: - Lên kế hoạch huấn luyện (coaching calendar ) hàng tháng. - Thường xuyên đi thị trường với Nhân Viên Bán Hàng của Nhà Phân Phối (Work With ) nhằm huấn luyện kỹ năng/ phát hiện và xác định những cơ hội bán hàng. - Họp nhóm hàng tuần (weekly meeting) hoặc làm việc trực tiếp (One with One) với từng Nhân Viên Bán Hàng để theo dõi thực hiện kết hợp huấn luyện nâng cao năng lực đội ngũ. - Giám sát hoạt động của các tuyến bán hàng (Route). Đảm bảo hoạt động đầy đủ hàng ngày nhằm hoàn thành được các chỉ tiêu phát triển thị trường, chỉ tiêu doanh số. - Lưu trữ các báo cáo và ghi chép về các buổi đi thị trường ( Work With ), làm việc trực tiếp (One with One ), Họp nhóm hàng tuần (Weekly meeting ) theo yêu cầu. - Đảm bảo áp dụng và duy trì các công cụ, phương thức bán hàng trong hoạt động của NVBH/ Nhà Phân Phối theo chuẩn yêu cầu của công ty. - Hỗ trợ/ hướng dẫn Nhân Viên Bán Hàng giải quyết những vấn đề khó khăn hàng ngày. * Phát triển/ hỗ trợ khách hàng: - Hỗ trợ Nhà Phân Phối giải quyết những vấn đề phát sinh trong việc kinh doanh - Thường xuyên có mặt trên thị trường, đặc biệt viếng thăm thường xuyên những khách hàng chính yếu ( TH Club ) để có thể thấu hiểu và thỏa mãn những nhu cầu của khách hàng cũng như tìm cơ hội phát triển khách hàng mới - Lắp đặt và quản lý các thiết bị hổ trợ bán hàng ( tủ mát, tủ đông, kệ, bạt quay, bảng hiệu …) một cách hiệu quả theo sự phân công phụ trách . * Thực hiện các nhiệm vụ khác nhằm phát triển kinh doanh trong địa bàn theo yêu cầu của các cấp quản lý * Làm việc ngoài thị trường, theo hệ thống nhà phân phối trên địa bàn phụ trách",
          salary: "20 - 25 triệu",
          sourcePicture:
            "https://cdn1.vieclam24h.vn/images/old_employer_avatar/images/6416102251cc68d889d7db5778fb0be1_5501512_vieclam24h_1581987370.png",
        },
        {
          id: "6",
          title: "Phó Tổng Giám Đốc Kiêm Trưởng Ban Tài Chính",
          address: "Hà Nội",
          description:
            "Tham gia quản lý hoạt động, điều hành Ban Tài chính – Kế toán của Tập đoàn - Hoạch định kế hoạch, chiến lược tài chính, hệ thống quản lý tài chính cho hệ thống các công ty của Tập đoàn đảm bảo nguồn tài chính đầy đủ, kịp thời đáp ứng nhu cầu hoạt động của các công ty. - Lập chiến lược và triển khai các chỉ tiêu tài chính ngắn hạn và dài hạn; dự báo về tình hình vốn và thị trường vốn; - Tham mưu các biện pháp tối ưu hoá hiệu quả sử dụng vốn, cân đối nguồn vốn phù hợp với yêu cầu kinh doanh. Nghiên cứu, đề xuất các biện pháp, hình thức huy động vốn cho hoạt động kinh doanh và đầu tư theo kế hoạch đã được duyệt - Nghiên cứu, phân tích, đánh giá các cơ hội đầu tư, hiệu quả đầu tư; - Phân tích và tham gia thẩm định tính khả thi của các dự án đầu tư; - Quan hệ với Ngân hàng và các tổ chức tín dụng… trong hoạt động vay vốn trung hạn, dài hạn, ngắn hạn và lưu chuyển tiền tệ; - Kiểm soát cổ đồng tham gia góp vốn tại Công ty - Giám sát giá cả - mua bán - Kiểm soát công tác tham nhũng, lãng phí, tiêu cực",
          salary: "32 - 37 triệu",
          sourcePicture:
            "https://cdn1.vieclam24h.vn/company-logo-medium/032019/Ov5X25usNJemqcv1R7v53v72RWQhp6CWkT2EVV2B.png",
        },
        {
          id: "7",
          title: "Nhân Viên Kinh Doanh Dự Án",
          address: "TP.HCM",
          description:
            "Báo giá, tư vấn dự án và vật tư sơn công nghiệp/ hóa chất tăng cứng bê tông - Tiếp thị, quản lý, chăm sóc KH cũ và tìm kiếm KH mới để tư vấn KH biết đến sản phẩm, dịch vụ công ty - Phát triển khách hàng và mở rộng thị trường theo năng lực và định hướng của công ty. - Thực hiện các chỉ tiêu của bộ phận kinh doanh đưa ra.",
          salary: "10 - 30 triệu",
          sourcePicture:
            "https://cdn1.vieclam24h.vn/tvn/images/employer_avatar/2021/10/11/images/163394133096.png",
        },
        {
          id: "8",
          title: "Chuyên Viên Sức Khỏe Và Môi Trường (HSE Specialist)",
          address: "Hải Phòng",
          description:
            "Thực hiện và hướng dẫn cho nhân viên quy định về ATSKMT Lập kế hoạch ATSKMT hằng năm cho công ty theo yêu cầu từ Trưởng phòng/Giám sát Kiểm tra ATSKMT tại hiện trường Kết hợp với các phòng ban liên quan tổ chức các buổi chia sẻ chuyên đề về ATSKMT Tập huấn về ATSKMT đinh kỳ Ghi nhận và thực hiện các chương trình về STSKMT cho Trưởng phòng/Giám sát báo cáo cơ quan ban ngành liên quan tới hoạt động ATSKMT Quản lý hồ sơ, tài liệu của hệ thống quản lý ATSKMT và chịu trách nhiệm theo dõi các hoạt động y tế cơ bản không cần chuyên môn tại nhà máy (đối với nhà máy không có Nhân viên Y Tế)",
          salary: "12 - 15 triệu",
          sourcePicture:
            "https://cdn1.vieclam24h.vn/tvn/asset/home/img/employer/5c7e1c1a3b6eb_1551768602.png",
        },
        {
          id: "9",
          title: "Quận 9 - Giám Sát Cảnh Quan Cây Xanh Tại Vinhomes Grand Park",
          address: "TP.HCM",
          description:
            "Phụ trách bảo dưỡng cây xanh Khu đô thị: • Lập kế hoạch chăm sóc bảo dưỡng các loại cây khu vực phụ trách • Hướng dẫn, giám sát việc thực hiện công việc của các tổ bảo dưỡng theo kế hoạch đã thống nhất • Báo cáo kết quả chăm sóc và bảo dưỡng theo kế hoạch - Phụ trách thi công cây xanh Khu vực: • Lập kế hoạch và phương án thi công • Giám sát việc thi công theo phương án và kế hoạch đã thống nhất • Báo cáo kết quả thi công cho quản lý trực tiếp > Làm việc tại: Đại đô thị Vinhomes Grand Park - Đối diện số 591 Nguyễn Xiển, P. Long Thạnh Mỹ, Quận 9",
          salary: "Thu nhập hấp dẫn từ 10 TRIỆU/ THÁNG TRỞ LÊN",
          sourcePicture:
            "https://cdn1.vieclam24h.vn/images/old_employer_avatar/images/e156f68da2d12b1485d4579e86d10f10_4876858_vieclam24h_1581913790.png",
        },
        {
          id: "10",
          title: "Nhân Viên Nữ Kế Toán",
          address: "TP.HCM",
          description:
            "Thực hiện hạch toán nhập, xuất hàng, xuất hóa đơn GTGT, theo dõi sổ sách kế toán; - Thực hiện hạch toán và xử lý số liệu đối với các nghiệp vụ kế toán trong Công ty; - Hỗ trợ, phối hợp với các bộ phận liên quan trong Công ty nhằm đạt hiệu quả cao trong công việc; - Thống kê và tổng hợp số liệu kế toán khi có yêu cầu; - Thực hiện các công việc tài chính, kế toán khác theo yêu cầu của Trưởng phòng Kế toán/ Ban Giám đốc. - Bảo mật các số liệu kế toán. - Công việc sẽ được trao đổi chi tiết nhất tại buổi phỏng vấn. - Địa chỉ làm việc: 18 Nguyễn Thế Lộc, Phường 12, Quận Tân Bình, TP. Hồ Chí Minh",
          salary: "10 - 15 triệu",
          sourcePicture:
            "https://cdn1.vieclam24h.vn/images/default/2023/10/16/z4788737731789_71bf0c0e0c4ab4be77c7815776c38aa8_169744763328.jpg",
        },
        {
          id: "11",
          title: "Nhân Viên Thiết Kế Đồ Họa",
          address: "TP.HCM",
          description:
            "Phụ trách thiết kế mẫu quảng cáo của công ty trên các phương tiện truyền thông, brochure, leaflet… Phụ trách in ấn, sản xuất các mẫu thiết kế, quảng cáo Thiết kế in ấn (quảng cáo báo/ tạp chí, brochure, leaflet, voucher, card …) Thiết kế dàn dựng cho sự kiện (layout tiệc, demo sân khấu, backdrop, banner,…) Lên ý tưởng moodboard, mock up, vận dụng tốt kiến thức Typography vào công việc Thiết kế presentation và proposa",
          salary: "10 - 15 triệu",
          sourcePicture:
            "https://cdn1.vieclam24h.vn/tvn/images/employer_avatar/2021/11/11/images/163660597137.png",
        },
        {
          id: "12",
          title: "Nhân Viên Thương Mại Kĩ Thuật Di Truyền Giống",
          address: "TP.HCM",
          description:
            "Chế độ bảo hiểm Du Lịch Phụ cấp Đồng phục Chế độ thưởng Chăm sóc sức khỏe Đào tạo Tăng lương Công tác phí Nghỉ phép năm,Tiếp cận khách hàng để giới thiệu sản phẩm và bán Hỗ trợ tìm kiếm khách hàng tiềm năng Thiết lập và duy trì mối quan hệ bền vững với khách hàng Tư vấn và hỗ trợ kỹ thuật về Di truyền giống Giới thiệu và hướng dẫn khách hàng sử dụng phần mềm quản lý trang trại Hỗ trợ và hướng dẫn khách hàng ghi chép và thu thập dữ liệu tại trang trại Hỗ trợ để khách hàng có trải nghiệm tốt nhất về sản phẩm gen của công ty Các nhiệm vụ khác được cấp trên giao phó",
          salary: "12 - 15 triệu",
          sourcePicture:
            "https://cdn1.vieclam24h.vn/tvn/asset/home/img/employer/5c7e1c1a3b6eb_1551768602.png",
        },
        {
          id: "13",
          title: "Nhân Viên Kinh Doanh Xe Ô Tô Mazda Láng Hạ",
          address: "Hà Nội",
          description:
            "Tìm kiếm khách hàng tiềm năng để giới thiệu và tư vấn bán xe ô tô Mazda - Chủ động liên hệ và tạo lập mối quan hệ tốt với khách hàng - Lập kế hoạch bán hàng và triển khai theo tuần/ quý/ tháng, hoàn thành các chỉ tiêu được giao - Tư vấn cho khách hàng về các sản phẩm, giá cả, phương thức thanh toán - Đàm phán ký kết hợp đồng với khách hàng - Khai thác thị trường nhằm đạt doanh số cao nhất. - Tuân thủ các quy trình chuẩn về bán hàng và chăm sóc khách hàng theo quy định của Mazda Việtnam - Tham gia các lớp huấn luyện để trau dồi kiến thức nghề nghiệp và sản phẩm.",
          salary: "15 - 20 triệu",
          sourcePicture:
            "https://cdn1.vieclam24h.vn/images/default/2024/03/09/z5231750867319_6db26a25aa2ec9eff1af099c22596d2e_170995028075.jpg",
        },
        {
          id: "14",
          title: "Trưởng Nhóm Kinh Doanh ",
          address: "Hà Nội",
          description:
            "Tuyển dụng, đào tạo, thúc đẩy đội ngũ kinh doanh tối thiểu từ 20 nhân viên telesales đạt doanh số và các chỉ tiêu khác được phân giao. Phân tích và tối ưu hiệu quả khai thác nguồn leads 100% từ công ty phân bổ (không cần tìm kiếm khách hàng) Triển khai và đề xuất các giải pháp cải thiện chất lượng khai thác nguồn khách hàng. Báo cáo tình hình hoạt động kinh doanh định kỳ (tháng/quý/năm). Cập nhật và triển khai những quy định và chính sách mới cho đội ngũ kinh doanh thuộc phạm vi quản lý.",
          salary: "25 - 40 triệu",
          sourcePicture:
            "https://cdn1.vieclam24h.vn/images/employer_avatar/2023/07/24/M_169016758844.jpg",
        },
        {
          id: "15",
          title: "Nhân Viên Kinh Doanh Ô Tô",
          address: "Bình Dương , TP.HCM",
          description:
            "Tìm kiếm khách hàng có nhu cầu mua xe ô tô ở thị trường TP HCM , Đà Nẵng và các vùng lân cận - Thực hiện các công đoạn của hoạt động bán hàng theo quy trình bán hàng đã được duyệt. -Tìm kiếm, mở rộng mạng lưới khách hàng của công ty. - Nắm bắt và hiểu rõ giá, thông số kỹ thuật, trang thiết bị theo xe, lợi thế cạnh tranh của sản phẩm, sản phẩm đối thủ cạnh tranh từng phân khúc. - Chăm sóc khách hàng cũ, mở rộng khách hàng mới - Lập báo cáo hàng ngày / tuần về các công việc đã sẽ thực hiện. - Báo cáo nghiệp vụ hàng tuần / tháng / quý với Trưởng bộ phận. - Trao đổi cụ thể hơn khi phỏng vấn.",
          salary: "20 - 30 triệu",
          sourcePicture:
            "https://cdn1.vieclam24h.vn/images/old_employer_avatar/images/1c17edf2d9ba4991ee7b0605d00b3ee3_1506661387_15977338_128654747640197_4595303663837597181_n.jpeg",
        },
        {
          id: "16",
          title: "Nhân Viên Kinh Doanh",
          address: "Đà Nẵng , Bình Dương , Hải Phòng",
          description:
            "Tư vấn cho khách hàng về Dịch vụ mà công ty cung cấp: Quản lý đội xe cho các doanh nghiệp vận tải, thiết bị giám sát hành trình, Định vị GPS,…. -        Tiếp nhận nguồn khách hàng từ công ty và tìm kiếm thêm nguồn khách hàng ngoài, phát triển, mở rộng thị trường -        Hỗ trợ Khách hàng về dịch vụ công ty cung cấp -        Thời gian làm việc: 8h00 – 17h30 từ thứ 2 đến thứ 6",
          salary: "13 - 25 triệu",
          sourcePicture:
            "https://cdn1.vieclam24h.vn/upload/files_cua_nguoi_dung/logo/2019/05/31/logo eupf.jpg",
        },
        {
          id: "17",
          title: "Chuyên Viên Tư Vấn Tài Chính",
          address: "TP.HCM",
          description:
            "Hiện nay, chúng tôi đang tuyển dụng vị trí Chuyên Viên Hoạch Định Tài Chính (Exchange Planner) nhằm mang đến các kế hoạch Tài chính - Bảo hiểm tốt nhất, và cùng đồng hành với khách hàng trong các hoạt động tại Exchange by AIA. MÔ TẢ CÔNG VIỆC: 1. Lên kế hoạch và chiến lược tìm kiếm khách hàng tiềm năng. 2. Thiết kế và tư vấn các sản phẩm bảo hiểm tối ưu cho khách hàng. 3. Hoàn thành các chỉ tiêu kinh doanh theo yêu cầu của vị trí ứng tuyển. 4. Chăm sóc khách hàng nhằm mang đến cho khách hàng trải nghiệm tốt nhất về chất lượng dịch vụ bán hàng của Exchange by AIA.",
          salary: "16 - 30 triệu",
          sourcePicture:
            "https://cdn1.vieclam24h.vn/images/employer_avatar/2023/12/28/z5017386736992_6abd8703ddd5168df12ea67209ad0db9_170374490896.jpg",
        },
        {
          id: "18",
          title: "Nhân Viên Chăm Sóc Khách Hàng",
          address: "Hà Nội , TP.HCM",
          description:
            "Công ty Cổ Phần Phát triển Kinh doanh Thịnh Phát tuyển dụng Nhân viên Chăm sóc Khách hàng làm việc tại một trong những địa điểm sau: Số 219 Trung Kính, Yên Hòa, Cầu Giấy, Hà Nội Tòa nhà Dali số 24C Phan Đăng Lưu, Phường 6, Quận Bình Thạnh, Thành Phố Hồ Chí Minh Công việc bạn cần thực hiện: Hỗ trợ Khách hàng kích hoạt, sử dụng thẻ tín dụng và tư vấn dịch vụ rút tiền mặt qua thẻ tín dụng của Ngân hàng VPBank. Chăm sóc Khách hàng qua điện thoại, tiếp nhận phản hồi về độ hài lòng của khách hàng về các sản phẩm dịch vụ mảng thẻ tín dụng. Thông tin cho Khách hàng các chương trình khuyến mãi, các dịch vụ tiện ích, quyền lợi của Khách hàng. Xử lý các trường hợp khách hàng thắc mắc, khiếu nại (nếu có)",
          salary: "9 - 15 triệu",
          sourcePicture:
            "https://cdn1.vieclam24h.vn/tvn/images/old_employer_avatar/images/fe9cc7d2b4069cf40cf7cca2b302d81b_5cde63307bb3b_1558078256.png",
        },
        {
          id: "19",
          title: "Nhân Viên Vận Hành Hệ Thống Lò Hơi – Nước Thải – Khí Nén",
          address: "Hải Dương",
          description:
            "Gò hàn đáp ứng yêu cầu công việc. Tháo lắp thiết bị, máy móc đáp ứng yêu cầu công việc. Sửa chữa, lắp đặt được các thiết bị điện đơn giản. Theo dõi các thông số và tình trạng hoạt động của hệ thống lò hơi, đảm bảo lò hơi hoạt động an toàn, hiệu quả theo quy trình đã được ban hành. Ghi chép các số liệu hoạt động hàng ngày của lò hơi, đảm bảo mục tiêu chất lượng đã được đề ra Vận hành hệ thống máy nén khí một cách an toàn và tiết kiệm Xử lý các sự cố bình thường xảy ra trong ca trực; phối hợp với các bộ phận liên quan để thực hiện hoạt động bảo trì, sữa chữa hệ thống nồi hơi định kì Tổng hợp số liệu lập báo cáo hằng ngày lò hơi Báo cáo số liệu xử lý nước sông, nước cấp lò hơi, các thông số hoạt động của lò hơi như độ ồn, độ rung, nhiệt độ, kiểm tra thiết bị, bôi trơn..., hệ thống khí nén trung thực, chính xác. Đảm bảo nước thải, khí thải được kiểm soát đạt yêu cầu. Công việc khác do sự hướng dẫn của cấp trên.",
          salary: "10 - 15 triệu",
          sourcePicture:
            "https://cdn1.vieclam24h.vn/images/default/2022/05/19/images/165294658937.png",
        },
        {
          id: "20",
          title: "Team Leader (Tín Dụng Tiêu Dùng)",
          address: "TP.HCM",
          description:
            "Lãnh Đạo và Quản Lý Nhóm: + Chịu trách nhiệm về việc lãnh đạo, hướng dẫn và quản lý một nhóm 15 nhân viên kinh doanh hoàn thành Target cá nhân và KPI kinh doanh + Xây dựng một môi trường làm việc tích cực và động viên để khuyến khích sự sáng tạo và hiệu suất cao trong công việc. Phát Triển Chiến Lược Kinh Doanh: + Xây dựng và triển khai chiến lược kinh doanh để đạt được mục tiêu doanh số và doanh thu đề ra + Phối hợp với các bộ phận khác để đảm bảo rằng chiến lược kinh doanh đồng bộ với mục tiêu tổng thể của công ty. Đào Tạo và Phát Triển Nhân Viên: + Phát triển và thực hiện chương trình đào tạo để nâng cao kỹ năng và kiến thức của nhân viên về sản phẩm và quy trình kinh doanh mà bên Shinhan Fianace đưa ra + Hỗ trợ sự phát triển cá nhân và chuyên sâu của từng thành viên trong nhóm dựa trên định hướng công ty giao(mỗi cấp đều được training theo cấp bật đảm bảo năng lực này). + Đưa mục tiêu ngày dựa trên chỉ tiêu đã có cho từng nhân viên, kèm cặp, đôn thúc và giám sát hoạt động đảm bảo hiệu suất ngày, chốt hiệu suất ngày trước khi ra về, đưa ra giải phát khắc phục kinh doanh cùng với cấp quản lý trực tiếp để có kế hoạch cho ngày kinh doanh kế tiếp. Xây Dựng và Quản Lý Mối Quan Hệ Khách Hàng: + Hỗ trợ nhóm trong việc xây dựng và duy trì mối quan hệ với khách hàng + Giám sát chất lượng dịch vụ và đảm bảo sự hài lòng của khách hàng. Thực Hiện Đánh Giá và Phản Hồi: + Đánh giá hiệu suất của nhóm và từng thành viên, cung cấp phản hồi xây dựng để giúp họ phát triển. + Đề xuất các biện pháp cải thiện và điều chỉnh chiến lược nếu cần thiết Theo Dõi Thị Trường và Xu Hướng: + Nắm bắt thông tin về thị trường và xu hướng ngành để đảm bảo sự linh hoạt trong chiến lược kinh doanh + Đề xuất các điều chỉnh chiến lược dựa trên phân tích thị trường. Báo Cáo và Giao Tiếp: + Báo cáo định kỳ về hiệu suất của nhóm và tiến triển đối với mục tiêu kinh doanh. + Giao tiếp hiệu quả với cấp quản lý và các bộ phận liên quan để đảm bảo sự thông nhất trong mục tiêu và kế hoạch. Tuân Thủ và Đảm Bảo Tuân Thủ Pháp Luật: + Đảm bảo rằng tất cả các hoạt động kinh doanh tuân thủ theo các quy định và pháp luật liên quan. + Thực hiện các biện pháp cần thiết để đảm bảo an toàn và an ninh thông tin khách hàng. Hỗ Trợ Chăm Sóc Khách Hàng Sau Bán Hàng: Hỗ trợ và đôn thúc các thành viên giữ mối quan hệ và chăm sóc KH hậu giải ngân, giải quyết mọi vấn đề sau bán hàng và đảm bảo sự hài lòng của khách hàng. Thúc Đẩy Tinh Thần Đồng Đội: Tạo môi trường để các thành viên trong team giao lưu, làm quen và gắng kết thành 1 tập thể gắng kết, tinh thần đồng đội cao và sự hỗ trợ lẫn nhau trong nhóm, tạo hiệu suất kinh doanh cao nhất",
          salary: "15 - 35 triệu",
          sourcePicture:
            "https://cdn1.vieclam24h.vn/images/default/2024/02/29/2222_170920016635.jpg",
        },
      ],
      {}
    );
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  },
};
