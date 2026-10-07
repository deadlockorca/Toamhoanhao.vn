"use client";

import { useState } from "react";
import styles from "./recruitment.module.css";

const positions = [
  {
    title: "Kiến trúc sư nội thất", department: "Phòng thiết kế", count: "02 vị trí", salary: "10 – 20 triệu/tháng",
    description: "Phát triển phương án thiết kế 2D/3D, phối cảnh và hồ sơ kỹ thuật cho các công trình nội thất.",
    requirements: ["Tốt nghiệp chuyên ngành kiến trúc, nội thất hoặc tương đương", "Thành thạo AutoCAD, SketchUp, 3ds Max hoặc tương đương", "Kinh nghiệm 1 – 3 năm trong lĩnh vực thiết kế nội thất", "Tư duy thẩm mỹ tốt, chủ động và trách nhiệm với công việc"],
  },
  {
    title: "Kỹ sư / Giám sát thi công", department: "Phòng thi công", count: "02 vị trí", salary: "12 – 20 triệu/tháng",
    description: "Giám sát tiến độ, chất lượng và an toàn tại công trình; phối hợp giữa xưởng sản xuất và hiện trường.",
    requirements: ["Tốt nghiệp chuyên ngành xây dựng, kiến trúc hoặc tương đương", "Kinh nghiệm tối thiểu 2 năm giám sát thi công nội thất", "Hiểu biết về vật liệu và quy trình thi công nội thất", "Kỹ năng quản lý công việc, giao tiếp và xử lý tình huống"],
  },
  {
    title: "Nhân viên kinh doanh", department: "Phòng kinh doanh", count: "03 vị trí", salary: "10 – 25 triệu/tháng (lương + hoa hồng)",
    description: "Tư vấn khách hàng, chăm sóc quan hệ, tiếp nhận yêu cầu và phối hợp các bộ phận để chốt hợp đồng.",
    requirements: ["Kỹ năng giao tiếp, đàm phán và xây dựng quan hệ tốt", "Ưu tiên ứng viên có kinh nghiệm trong ngành nội thất, xây dựng", "Năng động, nhiệt tình, chịu được áp lực công việc"],
  },
  {
    title: "Thợ thi công / Thợ lắp đặt", department: "Phòng thi công", count: "05 vị trí", salary: "Thỏa thuận theo tay nghề",
    description: "Thi công, lắp đặt nội thất tại công trình; đảm bảo chất lượng, đúng bản vẽ và tiến độ.",
    requirements: ["Tay nghề vững, có kinh nghiệm thi công nội thất 1 năm trở lên", "Cẩn thận, tỉ mỉ và chấp hành tốt quy trình an toàn lao động", "Sẵn sàng đi công trình ngoại tỉnh khi được phân công"],
  },
];

const filters = ["Tất cả", "Phòng thiết kế", "Phòng thi công", "Phòng kinh doanh"];

export function JobBoard() {
  const [filter, setFilter] = useState("Tất cả");
  const [selected, setSelected] = useState(0);
  const visible = positions.map((job, index) => ({ job, index })).filter(({ job }) => filter === "Tất cả" || job.department === filter);
  const active = visible.find(({ index }) => index === selected) ?? visible[0];

  return (
    <>
      <div className={styles.filters} aria-label="Lọc vị trí theo phòng ban">
        {filters.map((item) => <button key={item} type="button" className={filter === item ? styles.filterActive : ""} aria-pressed={filter === item} onClick={() => { setFilter(item); const first = positions.findIndex((job) => item === "Tất cả" || job.department === item); setSelected(first); }}>{item}</button>)}
      </div>
      <div className={styles.jobsGrid}>
        <div className={styles.jobsList} role="tablist" aria-label="Vị trí tuyển dụng">
          {visible.map(({ job, index }) => <button key={job.title} id={`job-tab-${index}`} type="button" role="tab" aria-selected={active.index === index} aria-controls="job-details" className={active.index === index ? styles.jobSelected : ""} onClick={() => setSelected(index)}>
            <span><strong>{job.title}</strong><small>{job.department}</small></span>
            <span className={styles.jobMeta}><em>{job.count}</em><small>{job.salary}</small></span>
          </button>)}
        </div>
        <article id="job-details" role="tabpanel" aria-labelledby={`job-tab-${active.index}`} className={styles.jobDetails}>
          <div className={styles.jobBadges}><span>{active.job.department}</span><span>{active.job.count}</span></div>
          <h3>{active.job.title}</h3>
          <p>{active.job.description}</p>
          <div className={styles.salary}><small>Mức lương</small><strong>{active.job.salary}</strong></div>
          <h4>Yêu cầu</h4>
          <ul>{active.job.requirements.map((requirement) => <li key={requirement}><span aria-hidden="true">✓</span>{requirement}</li>)}</ul>
          <a className={styles.applyButton} href={`mailto:hotro.toamhoanhao@gmail.com?subject=${encodeURIComponent(`[Tuyển dụng] – ${active.job.title} – Họ tên`)}`}>Ứng tuyển vị trí này</a>
        </article>
      </div>
    </>
  );
}
