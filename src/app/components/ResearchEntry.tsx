import type { ReactNode } from 'react';

/**
 * Inline wrapper for named concepts inside a Rose's-use paragraph.
 * Italic, semibold, rose color. Same hex as body so the weight/style
 * does the distinguishing.
 */
export function Concept({ children }: { children: ReactNode }) {
  return (
    <span className="italic font-semibold text-[#8B5A6B]">{children}</span>
  );
}

interface ResearchEntryProps {
  name: string;
  meta: string;
  workTitle: string;
  workYear?: string;
  workUrl: string;
  children: ReactNode;
  /**
   * Suppress the bottom border when this is the final entry in a category.
   * Keeps the visual breathing between last entry and next category header.
   */
  isLast?: boolean;
}

export default function ResearchEntry({
  name,
  meta,
  workTitle,
  workYear,
  workUrl,
  children,
  isLast = false,
}: ResearchEntryProps) {
  return (
    <div className={`py-9 ${isLast ? '' : 'border-b border-[#E6D3CB]'}`}>
      {/* Name line */}
      <div
        className="text-[24px] md:text-[28px] font-bold leading-[1.2] tracking-[-0.01em] text-[#3D2640] mb-[6px]"
        style={{ fontFamily: 'Georgia, "Times New Roman", serif' }}
      >
        {name}
      </div>

      {/* Meta line */}
      <div
        className="text-[15px] italic mb-[22px]"
        style={{ color: 'rgba(139, 90, 107, 0.75)' }}
      >
        {meta}
      </div>

      {/* Work line: linked title + optional year */}
      <div className="text-[17px] md:text-[18px] leading-[1.45] mb-5">
        <a
          href={workUrl}
          target="_blank"
          rel="noopener"
          className="text-[#3D2640] no-underline border-b border-[#8B5A6B] pb-[2px] transition-colors hover:bg-[rgba(139,90,107,0.12)]"
        >
          {workTitle}
        </a>
        {workYear && (
          <span
            className="italic ml-[6px]"
            style={{ color: 'rgba(139, 90, 107, 0.75)' }}
          >
            {workYear}
          </span>
        )}
      </div>

      {/* Rose's use paragraph */}
      <p className="text-base leading-[1.65] max-w-[640px] text-[#8B5A6B]">
        {children}
      </p>
    </div>
  );
}
