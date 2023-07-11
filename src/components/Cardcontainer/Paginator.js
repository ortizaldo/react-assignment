import { useRouter } from "next/router";
import Link from "next/link";
import styles from "../../styles/Home.module.css";

const Pagination = ({ currentPage, totalPages, onPageChange }) => {
  if (totalPages === 1) return null;
  const pages = Array.from({ length: totalPages }, (_, i) => i + 1);

  return (
    <div>
      <ul className={styles.pagination}>
        {pages.map((page) => (
          <li
            key={page}
            className={
              page === currentPage ? styles.pageItemActive : styles.pageItem
            }
          >
            <a className={styles.pageLink} onClick={() => onPageChange(page)}>
              {page}
            </a>
          </li>
        ))}
      </ul>
      {/* {currentPage > 1 && (
        <Link href={`/?page=${currentPage - 1}`}>
          <a>Previous</a>
        </Link>
      )}

      {Array.from({ length: totalPages }, (_, index) => (
        <Link
          style={{
            fontWeight: index + 1 === currentPage ? "bold" : "normal",
          }}
          key={index}
          href={`/?page=${index + 1}`}
        >
          {index + 1}
        </Link>
      ))}

      {currentPage < totalPages && (
        <Link href={`/?page=${currentPage + 1}`}>Next</Link>
      )} */}
      Pagination
    </div>
  );
};

export default Pagination;
