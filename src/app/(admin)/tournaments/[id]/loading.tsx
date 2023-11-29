import ContentLoader from "@/ui-shared/components/content-loader/ContentLoader";
import styles from "./styles.module.css";

function SingleTournamentLoader() {
  return (
    <div>
      <h1>Editar Torneo</h1>
      <hr />
      <div className={styles.containerLoading}>
        <ContentLoader />
      </div>
    </div>
  );
}

export default SingleTournamentLoader;
