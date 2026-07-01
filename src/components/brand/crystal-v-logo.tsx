type CrystalVLogoProps = {
  className?: string;
  title?: string;
};

export function CrystalVLogo({ className = "", title }: CrystalVLogoProps) {
  const titleId = title ? "crystal-v-logo-title" : undefined;

  return (
    <svg
      aria-hidden={title ? undefined : true}
      aria-labelledby={titleId}
      viewBox="0 0 96 72"
      className={className}
      fill="none"
    >
      {title ? <title id={titleId}>{title}</title> : null}
      <path d="M5 8 28 8 48 60 35 60Z" fill="#6D28D9" />
      <path d="M91 8 68 8 48 60 61 60Z" fill="#7C3AED" />
      <path d="M28 8 48 60 39 30Z" fill="#A855F7" />
      <path d="M68 8 48 60 57 30Z" fill="#C084FC" />
      <path d="M35 60 48 60 39 30Z" fill="#4C1D95" />
      <path d="M61 60 48 60 57 30Z" fill="#581C87" />
      <path d="M28 8 39 30 48 60 57 30 68 8" stroke="#F5D0FE" strokeWidth="2" />
      <path d="M5 8 35 60 48 60 61 60 91 8" stroke="#A78BFA" strokeWidth="1.5" />
    </svg>
  );
}
