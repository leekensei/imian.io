import fs from "fs";
import path from "path";

interface ReadTimeOptions {
  wordsPerMinute?: number;
  koreanCharPerMinute?: number;
  imageTime?: number; // 이미지당 추가 시간(초)
  codeBlockTime?: number; // 코드블록당 추가 시간(초)
}

function calculateReadTimeAdvanced(
  content: string,
  options: ReadTimeOptions = {}
): string {
  const {
    wordsPerMinute = 225,
    koreanCharPerMinute = 350,
    imageTime = 12, // 이미지당 12초
    codeBlockTime = 20, // 코드블록당 20초
  } = options;

  // 기본 텍스트 읽기 시간 계산
  const cleanContent = content.replace(/[^\w\s]/g, "");
  const koreanChars = cleanContent.match(/[\u3131-\uD79D]/g)?.length || 0;
  const englishWords = cleanContent.match(/[a-zA-Z]+/g)?.length || 0;

  // 이미지 및 코드블록 수 계산 (마크다운 기준)
  const imageCount = (content.match(/!\[.*?\]\(.*?\)/g) || []).length;
  const codeBlockCount = (content.match(/```[\s\S]*?```/g) || []).length;

  // 총 읽기 시간 계산 (분 단위)
  const textTime =
    koreanChars / koreanCharPerMinute + englishWords / wordsPerMinute;
  const mediaTime =
    (imageCount * imageTime + codeBlockCount * codeBlockTime) / 60;

  const totalMinutes = Math.ceil(textTime + mediaTime);

  return `${Math.max(1, totalMinutes)}분`;
}

function removeMetadataCode(content: string): string {
  return content
    .replace(/export\s+const\s+metadata\s*=\s*{[\s\S]*?};(\r?\n)*/, "")
    .trim();
}

/**
 * MDX 파일들을 읽어서 블로그 포스트 카드 정보를 반환합니다.
 * @returns {Promise<PostCard[]>} 블로그 포스트 카드 배열을 반환합니다. 날짜 기준 내림차순으로 정렬됩니다.
 */
export async function getMDXFiles(): Promise<PostCard[]> {
  const contentDir = path.join(process.cwd(), "src/app/(blog)/blog/_contents");
  const files = fs.readdirSync(contentDir);

  const posts = await Promise.all(
    files
      .filter((file) => file.endsWith(".mdx"))
      .map(async (file) => {
        const slug = file.replace(".mdx", "");
        const filePath = path.join(contentDir, file);
        const fileContent = fs.readFileSync(filePath, "utf-8");
        const { metadata } = await import(
          `@/app/(blog)/blog/_contents/${slug}.mdx`
        );

        return {
          ...metadata,
          readTime: calculateReadTimeAdvanced(removeMetadataCode(fileContent)), // 전체 파일 내용으로 읽기 시간 계산
          slug,
          id: slug,
          tags: metadata.tags || [],
        };
      })
  );

  return posts.sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
  );
}

interface MDXFile {
  content: string;
  metadata: PostCard;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  MDX: any;
}

export async function getMDXFile(slug: string): Promise<MDXFile> {
  const filePath = path.join(
    process.cwd(),
    "src/app/(blog)/blog/_contents",
    `${slug}.mdx`
  );
  const fileContent = fs.readFileSync(filePath, "utf-8");
  const { metadata, default: MDX } = await import(
    `@/app/(blog)/blog/_contents/${slug}.mdx`
  );

  const content = removeMetadataCode(fileContent);

  return {
    content,
    metadata,
    MDX,
  };
}
