import Link from 'next/link';

interface SmoothLinkProps {
  href: string;
  children: React.ReactNode;
}

const SmoothLink: React.FC<SmoothLinkProps> = ({ href, children, ...props }) => {
  const handleClick = (event: React.MouseEvent<HTMLAnchorElement>) => {
    event.preventDefault();
    const targetId = href.replace('#', '');
    const targetElement = document.getElementById(targetId);
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <Link href={href} onClick={handleClick} {...props}>
      {children}
    </Link>
  );
};

export default SmoothLink;
