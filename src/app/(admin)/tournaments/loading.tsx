import ContentLoader from "@/ui-shared/components/content-loader/ContentLoader";
import styles from "./styles.module.css";

function TournamentsPageLoader() {
  return (
    <div className={styles.containerLoader}>
      <ContentLoader />
    </div>
  );
}

export default TournamentsPageLoader;
