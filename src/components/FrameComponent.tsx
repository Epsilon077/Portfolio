import { FunctionComponent } from "react";
import styles from "./FrameComponent.module.css";

const FrameComponent: FunctionComponent = () => {
  return (
    <div className={styles.frameInner}>
      <section className={styles.frameParent}>
        <section className={styles.userInfoButtonParent}>
          <div className={styles.userInfoButton}>
            <h1 className={styles.ux}>UX</h1>
          </div>
          <div className={styles.titleParent}>
            <img className={styles.titleIcon} alt="" src="/title.svg" />
            <div className={styles.itemBtnProyectoParent}>
              <div className={styles.itemBtnProyecto}>
                <img
                  className={styles.image30Icon}
                  alt=""
                  src="/image-30@2x.png"
                />
              </div>
              <div className={styles.itemBtnProyecto1}>
                <img
                  className={styles.frameIcon}
                  alt=""
                  src="/frame-11@2x.png"
                />
              </div>
              <div className={styles.itemBtnProyecto2}>
                <img
                  className={styles.frameIcon1}
                  alt=""
                  src="/frame-2@2x.png"
                />
              </div>
            </div>
          </div>
        </section>
        <div className={styles.paragraphMedium}>
          <div className={styles.talkMeItemButton}>
            <h1 className={styles.tieneAlgunaPregunta}>
              ¿Tiene alguna pregunta, comentario o idea extravagante?
            </h1>
            <div className={styles.itemBtnTalkmeWrapper}>
              <div className={styles.itemBtnTalkme}>
                <div className={styles.itemTextMedium}>Hablemos</div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default FrameComponent;
