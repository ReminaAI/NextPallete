import { useState } from "react";
import DragComponent from "../../Components/DragAndDropComponents/DragComponent";
import styles from "../../styles/DragStyles/drag.module.css"

export default function DragAndDrop() {
    const [clicked, setClicked] = useState(false)
    return (<div
        onMouseLeave={() => setClicked(false)}
        onMouseUp={() => setClicked(false)}
        className={styles.container} >
        <DragComponent clicked={clicked} setClicked={setClicked} />
        <DragComponent clicked={clicked} setClicked={setClicked} />
        <DragComponent clicked={clicked} setClicked={setClicked} />
        <DragComponent clicked={clicked} setClicked={setClicked} />
        <DragComponent clicked={clicked} setClicked={setClicked} />
    </div >)
}