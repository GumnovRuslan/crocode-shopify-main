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
    h1: ({ children }) => <Fade direction="down"><h1>{children}</h1></Fade>,
    h2: ({ children }) => <Fade direction="down"><h2>{children}</h2></Fade>,
    h3: ({ children }) => <Fade direction="down"><h3>{children}</h3></Fade>,
    h4: ({ children }) => <Fade direction="down"><h4>{children}</h4></Fade>,
    h5: ({ children }) => <Fade direction="down"><h5>{children}</h5></Fade>,
    h6: ({ children }) => <Fade direction="down"><h6>{children}</h6></Fade>,
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
