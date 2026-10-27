import { Fade } from "@/components/ui/Fade";
import { BlurIn } from "@/components/ui/BlurIn";
import Image from "next/image";
import Link from "next/link";
import { PortableText, type PortableTextComponents } from "@portabletext/react";
import type { BlogArticle, BlogBodyImage, BlogLinkMark, BlogTextColorMark } from "@/types/blog";
import { getBlogLink } from "@/utils/blog";
import styles from "./styles.module.scss";

const components: PortableTextComponents = {
  block: {
    normal: ({ children }) => <Fade direction="down"><p>{children}</p></Fade>,
    // Stable block keys keep incoming anchors valid when headings are edited or reordered.
    // Avoid translated animation wrappers so native fragment scrolling targets the final position.
    h1: ({ children, value }) => <h1 id={`section-${value._key}`}>{children}</h1>,
    h2: ({ children, value }) => <h2 id={`section-${value._key}`}>{children}</h2>,
    h3: ({ children, value }) => <h3 id={`section-${value._key}`}>{children}</h3>,
    h4: ({ children, value }) => <h4 id={`section-${value._key}`}>{children}</h4>,
    h5: ({ children, value }) => <h5 id={`section-${value._key}`}>{children}</h5>,
    h6: ({ children, value }) => <h6 id={`section-${value._key}`}>{children}</h6>,
  },
  marks: {
    strong: ({ children }) => <strong>{children}</strong>,
    em: ({ children }) => <em>{children}</em>,
    underline: ({ children }) => <span className={styles.underline}>{children}</span>,
    link: ({ children, value }: { children: React.ReactNode; value?: BlogLinkMark }) => {
      const link = getBlogLink(value?.href);
      if (!link) return <>{children}</>;
      if (link.external) {
        return <a href={link.href} target="_blank" rel="noopener noreferrer">{children}</a>;
      }
      if (link.href.startsWith("/")) return <Link href={link.href}>{children}</Link>;
      return <a href={link.href}>{children}</a>;
    },
    textColor: ({ children, value }: { children: React.ReactNode; value?: BlogTextColorMark }) => (
      <span style={value?.hex && /^#[0-9a-f]{6}$/i.test(value.hex) ? { color: value.hex } : undefined}>
        {children}
      </span>
    ),
  },
  list: {
    bullet: ({ children }) => <Fade direction="down"><ul>{children}</ul></Fade>,
    number: ({ children }) => <Fade direction="down"><ol>{children}</ol></Fade>,
  },
  listItem: {
    bullet: ({ children }) => <li>{children}</li>,
    number: ({ children }) => <li>{children}</li>,
  },
  types: {
    image: ({ value }: { value: BlogBodyImage }) => (
      <BlurIn>
        <figure>
          <Image
            src={value.asset.url}
            alt={value.alt}
            width={value.asset.metadata.dimensions.width}
            height={value.asset.metadata.dimensions.height}
            sizes="(min-width: 900px) 800px, calc(100vw - 40px)"
          />
        </figure>
      </BlurIn>
    ),
  },
};

export default function BlogBody({ body }: Pick<BlogArticle, "body">) {
  return (
    <div className={styles.section}>
      <div className={styles.body}>
        <PortableText value={body} components={components} />
      </div>
    </div>
  );
}
