import { CaseCard } from "@/components/case-card";
import { SectionHeading } from "@/components/section-heading";
import { caseStudies } from "@/data/cases";

export default function CasesPage() {
  return (
    <div className="page-shell py-16 sm:py-20">
      <SectionHeading
        eyebrow="项目案例"
        title="案例列表"
        description="这里汇总了我们服务过的部分项目，方便你按行业和合作类型快速了解实际结果。"
      />
      <div className="mt-10 grid gap-6 lg:grid-cols-2">
        {caseStudies.map((item) => (
          <CaseCard key={item.slug} item={item} />
        ))}
      </div>
    </div>
  );
}
