"use client";

interface EmailLinkProps {
  email: string;
  className?: string;
  children?: React.ReactNode;
}

export default function EmailLink({ email, className = "", children }: EmailLinkProps) {
  return (
    <span className={className}>
      {children ?? email}
    </span>
  );
}
