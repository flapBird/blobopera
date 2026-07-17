"use client";

interface EmailLinkProps {
  email: string;
  className?: string;
  children?: React.ReactNode;
}

export default function EmailLink({ email, className = "", children }: EmailLinkProps) {
  return (
    <a
      href="#"
      onClick={(e) => {
        e.preventDefault();
        window.location.href = "mailto:" + email;
      }}
      className={className}
    >
      {children ?? email}
    </a>
  );
}
