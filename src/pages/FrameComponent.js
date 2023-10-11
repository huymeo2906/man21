import { useCallback } from "react";
import styles from "./FrameComponent.module.css";

const FrameComponent = () => {
  const onFrameContainer14Click = useCallback(() => {
    // Please sync "Dashboard / Nhân viên" to the project
  }, []);

  return (
    <div className={styles.frameParent} onClick={onFrameContainer14Click}>
      <div className={styles.chart1Wrapper}>
        <div className={styles.chart1}>
          <div className={styles.chart1Child} />
          <div className={styles.chart1Item} />
          <div className={styles.chart1Inner} />
          <div className={styles.ellipseDiv} />
          <div className={styles.chart1Child1} />
          <div className={styles.chart1Child2} />
          <div className={styles.chart1Child3} />
          <div className={styles.frameGroup}>
            <div className={styles.wrapper}>
              <b className={styles.b}>150</b>
            </div>
            <div className={styles.thng22022}>Tháng 2/2022</div>
          </div>
        </div>
      </div>
      <div className={styles.noteHorizontalParent}>
        <div className={styles.noteHorizontal}>
          <div className={styles.noteHorizontalChild} />
          <div className={styles.frameContainer}>
            <div className={styles.container}>
              <div className={styles.div}>21.39%</div>
            </div>
            <div className={styles.chaThcHin}>Chưa thực hiện</div>
          </div>
        </div>
        <div className={styles.noteHorizontal}>
          <div className={styles.noteHorizontalItem} />
          <div className={styles.frameContainer}>
            <div className={styles.container}>
              <div className={styles.div}>21.83%</div>
            </div>
            <div className={styles.chaThcHin}>Đang thực hiện</div>
          </div>
        </div>
        <div className={styles.noteHorizontal}>
          <div className={styles.noteHorizontalInner} />
          <div className={styles.frameContainer}>
            <div className={styles.container}>
              <div className={styles.div}>08.31%</div>
            </div>
            <div className={styles.chaThcHin}>Review</div>
          </div>
        </div>
        <div className={styles.noteHorizontal}>
          <div className={styles.noteHorizontalChild1} />
          <div className={styles.frameContainer}>
            <div className={styles.container}>
              <div className={styles.div}>29.59%</div>
            </div>
            <div className={styles.chaThcHin}>Hoàn thành</div>
          </div>
        </div>
        <div className={styles.noteHorizontal}>
          <div className={styles.noteHorizontalChild2} />
          <div className={styles.frameContainer}>
            <div className={styles.container}>
              <div className={styles.div}>17.26%</div>
            </div>
            <div className={styles.chaThcHin}>Quá hạn</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FrameComponent;
