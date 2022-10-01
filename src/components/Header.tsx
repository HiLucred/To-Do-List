import styles from "./Header.module.css";
import rocketLogo from "../assets/rocket.svg";

export function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.logo}>
        <img src={rocketLogo} alt="Logo com a imagem de um foguete." />

        <h1>
          to<span>do</span>
        </h1>
      </div>
    </header>
  );
}
