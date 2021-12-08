import Link from "next/link";
import styles from ".././../styles/Home.module.css";
import { useEffect, useState } from "react";

export default function Albums() {
  const [Data, setData] = useState([]);
  useEffect(async () => {
    const res = await fetch("https://jsonplaceholder.typicode.com/albums");
    const data = await res.json();
    setData(data);
  }, []);

  // const data = res.json();
  // console.log(res);
  return (
    <div className={styles.grid}>
      {Data.map((el) => {
        return (
          <div className={styles.userCard}>
            <h4>{el.title}</h4>
            <Link
              href={{
                pathname: "/Album/" + el.id,
                query: { userId: el.userId },
              }}
            >
              <a>More Details</a>
            </Link>
          </div>
        );
      })}
    </div>
  );
}
