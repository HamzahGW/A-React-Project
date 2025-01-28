import styles from "./filter1.module.css";

export function Filter1() {
  return (
    <>
      <div
        style={{
          width: 2642 / 2,
          height: 311,
          position: "absolute",
          top: 0,
          right: -500,
          transform: "rotate(-40deg)",
          overflow: "hidden",
          zIndex: -1,
        }}
      >
        <div
          className={styles.filterImage}
          style={{
            width: 2642,
            height: 311,

            position: "absolute",
          }}
        >
          <img
            src={
              "https://thearchcapital.com//wp-content/uploads/2024/06/filter.svg"
            }
            style={{ width: "100%" }}
            alt="effect"
          />
        </div>
      </div>
    </>
  );
}
