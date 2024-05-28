import Link from 'next/link';

export const CustomLink = (props: any) => {
  const href = props.href;
  const isInternalLink = href && (href.startsWith('/') || href.startsWith('#'));

  const handleClick = (event: React.MouseEvent<HTMLAnchorElement>) => {
    if (isInternalLink && href.startsWith('#')) {
      event.preventDefault();
      const targetId = href.replace('#', '');
      const targetElement = document.getElementById(targetId);
      if (targetElement) {
        targetElement.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  if (isInternalLink) {
    return <Link href={href} onClick={handleClick} {...props} />;
  }

  return <a target='__blank' rel='noopener noreferrer' {...props} />;
};
