import styles from "../../styles/DragStyles/drag.module.css"

export default function StaticComponent({ height, width, x, y }) {
    return <div style={{ height, width, top: y, left: x }} className={styles.staticComponent}>
        THIS IS STATIC
    </div>
}