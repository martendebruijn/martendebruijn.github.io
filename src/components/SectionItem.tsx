import { ExternalLinkIcon } from "lucide-react";

interface Props {
  title: string;
  description: string;
  image: string;
  imageAlt?: string;
  githubUrl?: string;
}

export function SectionItem({
  title,
  description,
  image,
  imageAlt = "",
  githubUrl,
}: Props) {
  return (
    <article>
      <div className="w-full h-80 inline-block bg-blue-300 rounded-md overflow-clip">
        <img
          src={image}
          alt={imageAlt}
          className="object-cover w-full h-full"
        />
      </div>
      <h3 className="font-semibold text-lg">{title}</h3>
      <p>{description}</p>
      {githubUrl && (
        <a
          href={githubUrl}
          className="underline text-blue-500 inline-flex items-center mt-2 gap-2"
        >
          <span>GitHub</span>
          <span>
            <ExternalLinkIcon />
          </span>
        </a>
      )}
    </article>
  );
}
