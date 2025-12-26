import Link from 'next/link';
import styles from './Breadcrumbs.module.scss';

export type BreadcrumbItem = {
  label: string;
  href?: string;
  current?: boolean;
};

type BreadcrumbsProps = {
  items: BreadcrumbItem[];
};

export default function Breadcrumbs({ items }: BreadcrumbsProps) {
  return (
    <nav className={styles.breadcrumbs} aria-label="Breadcrumb">
      <ol className={styles.list}>
        {items.map((item, index) => (
          <li key={`${item.label}-${index}`} className={styles.item}>
            {item.href && !item.current ? (
              <Link href={item.href} className={styles.link}>
                {item.label}
              </Link>
            ) : (
              <span className={`${styles.link} ${item.current ? styles.current : ''}`}>
                {item.label}
              </span>
            )}
            {index < items.length - 1 && <span className={styles.separator}>/</span>}
          </li>
        ))}
      </ol>
    </nav>
  );
}
