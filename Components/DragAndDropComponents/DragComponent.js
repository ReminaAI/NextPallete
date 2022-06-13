import styles from "../../styles/DragStyles/drag.module.css"
import { useState } from "react";

export default function DragComponent({ clicked, setClicked }) {
    const [componentSize, setComponentSize] = useState({
        width: 300,
        height: 300
    })
    const [pos, setPos] = useState({
        x: 0,
        y: 0
    })

    function calculatePosition(e) {
        if (clicked) {
            setPos({
                x: e.pageX + componentSize.width / 2 >= e.view.innerWidth ?
                    e.view.innerWidth - componentSize.width :
                    e.pageX - componentSize.width / 2 <= 0 ?
                        0 :
                        e.pageX - componentSize.width / 2,

                y: e.pageY + componentSize.height / 2 >= e.view.innerHeight ?
                    e.view.innerHeight - componentSize.height :
                    e.pageY - componentSize.height / 2 <= 0 ?
                        0 :
                        e.pageY - componentSize.height / 2
            })
        }
    }


    return (<div
        style={{ top: pos.y, left: pos.x, height: componentSize.height, width: componentSize.width }}
        className={styles.component}
        onMouseMove={(e) => calculatePosition(e)}
        onMouseDown={(e) => {
            e.stopPropagation()
            if (e.pageX >= pos.x && e.pageX <= (pos.x + componentSize.width)
                && e.pageY >= pos.y && e.pageY <= (pos.y + componentSize.height)) {
                setClicked(true)
            }
        }}

    >
    </div>)
}