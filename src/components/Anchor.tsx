import React from "react";

interface Props {
  link?: boolean;
  icon?: JSX.Element;
  label: string;
  href?: string;
}

const Anchor = ({ link, icon, label, href }: Props) => {
  return (
    <div className="flex items-center gap-1 text-sm">
      {icon ? icon : undefined}
      {link ? (
        <a
          href={href}
          className="hover:underline  transition-all font-semibold hover:opacity-70"
        >
          {label}
        </a>
      ) : (
        <p>{label}</p>
      )}
    </div>
  );
};

export default Anchor;
