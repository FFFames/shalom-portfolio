import { createFileRoute } from "@tanstack/react-router";
import { Portfolio } from "../components/Portfolio";
import { th } from "../lib/content";

export const Route = createFileRoute("/th")({
  head: () => ({
    meta: [
      { title: "ชาโลม อินช้อย - ผลงาน" },
      {
        name: "description",
        content:
          "ผลงานของชาโลม อินช้อย ผู้เชี่ยวชาญด้านการพัฒนาโซลูชัน AI ครอบคลุมงาน OCR, Machine Learning และ Full Stack Development",
      },
    ],
  }),
  component: ThaiHome,
});

function ThaiHome() {
  return <Portfolio c={th} />;
}
