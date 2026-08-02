interface EmailLinkProps {
  email: string;
  className?: string;
}

export default function EmailLink({ email, className = "" }: EmailLinkProps) {
  const [localPart, domain] = email.split("@");

  return (
    <span className={className}>
      {localPart}<span>@</span>{domain}
    </span>
  );
}
