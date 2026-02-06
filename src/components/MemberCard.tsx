import Image from "next/image";
import { Member } from "@/data/members";

interface MemberCardProps {
  member: Member;
  basePath?: string;
}

export default function MemberCard({ member, basePath = "" }: MemberCardProps) {
  return (
    <div className="overflow-hidden rounded-2xl border border-gray-200 bg-white/80 shadow-md backdrop-blur-sm transition-transform hover:scale-[1.02] dark:border-gray-700 dark:bg-gray-900/80">
      <div className="aspect-square overflow-hidden bg-gray-100 dark:bg-gray-800">
        <img
          src={`${basePath}${member.image}`}
          alt={member.name}
          className="h-full w-full object-cover"
        />
      </div>
      <div className="p-5">
        <h3 className="text-xl font-bold text-gray-900 dark:text-white">
          {member.name}
        </h3>
        <p className="mb-3 text-sm text-gray-500 dark:text-gray-400">
          {member.nameEn}
        </p>
        <div className="space-y-1.5 text-sm">
          <div className="flex">
            <span className="w-20 shrink-0 font-medium text-gray-500 dark:text-gray-400">
              Grade
            </span>
            <span className="text-gray-700 dark:text-gray-300">
              {member.grade}
            </span>
          </div>
          <div className="flex">
            <span className="w-20 shrink-0 font-medium text-gray-500 dark:text-gray-400">
              Faculty
            </span>
            <span className="text-gray-700 dark:text-gray-300">
              {member.faculty}
            </span>
          </div>
          <div className="flex">
            <span className="w-20 shrink-0 font-medium text-gray-500 dark:text-gray-400">
              Role
            </span>
            <span className="text-gray-700 dark:text-gray-300">
              {member.role}
            </span>
          </div>
          <div className="flex">
            <span className="w-20 shrink-0 font-medium text-gray-500 dark:text-gray-400">
              Hobby
            </span>
            <span className="text-gray-700 dark:text-gray-300">
              {member.hobby}
            </span>
          </div>
        </div>
        <div className="mt-4 rounded-lg bg-gray-50 p-3 dark:bg-gray-800">
          <p className="text-sm italic text-gray-600 dark:text-gray-300">
            "{member.comment}"
          </p>
        </div>
      </div>
    </div>
  );
}
