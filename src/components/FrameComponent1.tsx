import { FunctionComponent } from "react";
import styles from "./FrameComponent1.module.css";

const FrameComponent1: FunctionComponent = () => {
  return (
    <header className={styles.frameParent}>
      <div className={styles.frameGroup}>
        <div className={styles.itemNavAboutmeWrapper}>
          <div className={styles.itemNavAboutme}>Descubreme</div>
        </div>
        <div className={styles.itemNavLinkedinWrapper}>
          <div className={styles.itemNavLinkedin}>Linkedin</div>
        </div>
        <div className={styles.itemNavCvWrapper}>
          <div className={styles.itemNavCv}>Mi CV</div>
        </div>
        <div className={styles.iconLogoContras}>
          <img className={styles.vectorIcon} alt="" src="/vector.svg" />
          <img className={styles.vectorIcon1} alt="" src="/vector-1.svg" />
        </div>
      </div>
      <div className={styles.itemBtnTalkmeWrapper}>
        <div className={styles.itemBtnTalkme}>
          <div className={styles.itemTextMedium}>Hablemos</div>
        </div>
      </div>
    </header>
  );
};

export default FrameComponent1;
