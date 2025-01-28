import styles from "./filter2.module.css";

export function Filter2() {
  return (
    <>
      <div
        style={{
          width: 2642 / 2,
          height: 311,
          position: "absolute",
          top: 0,
          right: -500,
          transform: "rotate(-40deg) scale(-1)",
          overflow: "hidden",
          //   background: "red",
        }}
      >
        <div
          className={styles.filterImage2}
          style={{
            width: 2642,
            height: 311,

            position: "absolute",
          }}
        >
          <img
            src={
              "https://thearchcapital.com//wp-content/uploads/2024/06/filter2.svg"
            }
            style={{ width: "100%" }}
            alt="effect"
          />
        </div>
      </div>
    </>
  );
}
