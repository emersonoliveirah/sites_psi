import type { ComponentProps } from "react";

export const mdxComponents = {
  h2: (props: ComponentProps<"h2">) => (
    <h2 className="mb-3 mt-10 font-display text-2xl font-medium text-text" {...props} />
  ),
  h3: (props: ComponentProps<"h3">) => (
    <h3 className="mb-2 mt-8 font-display text-xl font-medium text-text" {...props} />
  ),
  p: (props: ComponentProps<"p">) => (
    <p className="mb-4 text-[17px] leading-relaxed text-text-soft" {...props} />
  ),
  ul: (props: ComponentProps<"ul">) => (
    <ul className="mb-4 ml-5 list-disc space-y-1.5 text-[17px] text-text-soft" {...props} />
  ),
  ol: (props: ComponentProps<"ol">) => (
    <ol className="mb-4 ml-5 list-decimal space-y-1.5 text-[17px] text-text-soft" {...props} />
  ),
  strong: (props: ComponentProps<"strong">) => (
    <strong className="font-semibold text-text" {...props} />
  ),
  a: (props: ComponentProps<"a">) => (
    <a className="font-semibold text-sage-deep underline" {...props} />
  ),
};
