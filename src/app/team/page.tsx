import { SectionHeading } from "@/components/section-heading";
import { TeamCard } from "@/components/team-card";
import { teamMembers } from "@/data/team";

export default function TeamPage() {
  return (
    <div className="page-shell py-16 sm:py-20">
      <SectionHeading
        eyebrow="团队介绍"
        title="团队展示"
        description="团队成员来自项目操盘、流量变现、编导、IP 孵化和直播运营等不同角色，更适合服务需要落地执行的新媒体项目。"
      />
      <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
        {teamMembers.map((member) => (
          <TeamCard key={member.name} member={member} />
        ))}
      </div>
    </div>
  );
}
