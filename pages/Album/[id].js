import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import styles from ".././../styles/Home.module.css";
function Details() {
  const [Ready, setReady] = useState(false);
  const [Data, setData] = useState({});
  const [Title, setTitle] = useState("");
  const [Loading, setLoading] = useState(true);
  const router = useRouter();

  useEffect(async () => {
    if (router && router.query) {
      const userId = router.query.userId;
      const id = router.query.id;
      // ==========> FETCH USER ID
      const res = await fetch(
        "https://jsonplaceholder.typicode.com/users/" + userId
      );
      const data = await res.json();
      setData(data);
      // ==========> FETCH ID
      const resTitle = await fetch(
        "https://jsonplaceholder.typicode.com/albums/" + id
      );
      const dataTitle = await resTitle.json();
      setTitle(dataTitle.title);

      // ==========> STOP LOADING
      setLoading(false);
    }
  }, [router]);

  if (Loading) return <div>LOADING ...</div>;
  return (
    <div>
      <h1 className={styles.titleOfAlbum}>{Title}</h1>
      <p>
        <b>Name: </b> {Data.name}
      </p>
      <hr />
      <p>
        <b>E-Mail: </b> {Data.email}
      </p>
      <hr />
      <p>
        <b>Phone: </b> {Data.phone}
      </p>
      <hr />
      <p>
        <b>User Name: </b> {Data.username}
      </p>
      <hr />
      <p>
        <b>Website: </b>
        <a href={"https://" + Data.website}>{Data.website}</a>
      </p>
      <div className={styles.flex}>
        <div className={styles.address}>
          <h3 className={styles.title}>ADDRESS</h3>
          <p>
            <b>City: </b>
            {Data.address.city}
          </p>
          <p>
            <b>Street: </b>
            {Data.address.street}
          </p>
        </div>
        <div className={styles.company}>
          <h3 className={styles.title}>COMPANY</h3>
          <p>
            <b>Name: </b>
            {Data.company.name}
          </p>
          <p>
            <b>Catch phrase: </b>
            {Data.company.catchPhrase}
          </p>
        </div>
      </div>
    </div>
  );
}

export default Details;
