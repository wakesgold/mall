import Image from "next/image";
import type { TeamMember } from "@/types";

type TeamCardProps = {
  member: TeamMember;
};

export function TeamCard({ member }: TeamCardProps) {
  const avatarSrc = member.avatar?.startsWith("/team/") ? member.avatar : null;

  return (
    <article className="rounded-[28px] border border-white/10 bg-white/5 p-6">
      <div className="mb-6 flex items-center gap-4">
        <div className="relative h-16 w-16 overflow-hidden rounded-full border border-white/10 bg-[#0c1320]">
          {avatarSrc ? (
            <Image
              src={avatarSrc}
              alt={member.name}
              fill
              className="object-cover"
              sizes="64px"
            />
          ) : (
            <div className="flex h-full w-full items-center justify-center bg-gradient-to-br from-amber-200 to-amber-500 text-lg font-semibold text-slate-950">
              {member.name.slice(0, 1)}
            </div>
          )}
        </div>
        <div className="min-w-0">
          <h3 className="truncate text-2xl font-semibold text-white">{member.name}</h3>
          <p className="mt-1 text-sm text-amber-100">{member.role}</p>
        </div>
      </div>
      <div className="space-y-3">
        <p className="text-sm leading-7 text-slate-300">{member.bio}</p>
        <p className="text-sm text-slate-400">擅长方向：{member.specialty}</p>
      </div>
    </article>
  );
}
