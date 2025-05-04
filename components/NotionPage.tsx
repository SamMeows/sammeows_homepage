import { type ExtendedRecordMap } from "notion-types";
import { NotionRenderer } from "react-notion-x";
import Image from "next/image";
import Link from "next/link";

export function NotionPage({
  recordMap,
  rootPageId,
}: {
  recordMap: ExtendedRecordMap;
  rootPageId?: string;
}) {
  if (!recordMap) {
    return null;
  }

  // const title = getPageTitle(recordMap);

  return (
    <>
      <NotionRenderer
        disableHeader={true}
        recordMap={recordMap}
        fullPage={false}
        darkMode={false}
        rootPageId={rootPageId}
        components={{
          nextImage: Image, // or nextLegacyImage: LegacyImage,
          nextLink: Link,
        }}
      />
    </>
  );
}
