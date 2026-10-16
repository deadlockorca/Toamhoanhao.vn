import { buildingExperienceArticles } from "./building-experience-articles";
import { interiorDesignExperienceArticles } from "./interior-design-experience-articles";
import { buildingLegalArticles } from "./building-legal-articles";
import { beautifulHomeArticles } from "./beautiful-home-articles";
export const knowledgeGroups = {
  "kinh-nghiem-xay-nha": {
    label: "Kinh nghiệm xây nhà",
    contentTitle: "Kinh nghiệm thực tế cho hành trình xây nhà",
    backLabel: "Quay lại kinh nghiệm xây nhà",
    articles: buildingExperienceArticles,
  },
  "kinh-nghiem-thiet-ke-noi-that": {
    label: "Kinh nghiệm thiết kế nội thất",
    contentTitle: "Kinh nghiệm thực tế cho không gian nội thất",
    backLabel: "Quay lại kinh nghiệm thiết kế nội thất",
    articles: interiorDesignExperienceArticles,
  },
  "phap-ly-xay-dung": {
    label: "Pháp lý xây dựng",
    contentTitle: "Thông tin pháp lý cho hành trình xây dựng",
    backLabel: "Quay lại pháp lý xây dựng",
    articles: buildingLegalArticles,
  },
  "kien-thuc-nha-dep": {
    label: "Kiến thức nhà đẹp",
    contentTitle: "Góc nhìn thực tế cho không gian sống đẹp",
    backLabel: "Quay lại kiến thức nhà đẹp",
    articles: beautifulHomeArticles,
  },
};
export type KnowledgeGroup = keyof typeof knowledgeGroups;
