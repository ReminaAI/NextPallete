import { Component, useState } from "react";
import DragComponent from "../../Components/DragAndDropComponents/DragComponent";
import StaticComponent from "../../Components/DragAndDropComponents/StaticComponent";
import UpdatedComponent from "../../Components/DragAndDropComponents/UpdatedComponent";
import styles from "../../styles/DragStyles/drag.module.css"

const DEFAULT_BOX = {
    width: 200,
    height: 200,
    x: 0,
    y: 0,
}

export default function DragAndDrop() {
    const [clicked, setClicked] = useState(false)
    const [components, setComponents] = useState([{
        width: 50,
        height: 50,
        x: 0,
        y: 0,
        id: 0
    }])
    const STATIC_COMPONENT = [{
        height: 200,
        width: 300,
        x: 300,
        y: 300
    }]
    return (<div
        onMouseLeave={() => setClicked(false)}
        onMouseUp={() => setClicked(false)}
        className={styles.container} >
        <div className={styles.dashboard}>
            <button onClick={() => setComponents([...components, { ...DEFAULT_BOX, id: components.length }])}>Increase</button>
        </div>
        {STATIC_COMPONENT.map((e, i) =>
            <StaticComponent key={i} height={e.height} width={e.width} x={e.x} y={e.y} />
        )

        }
        {components.map((e, i) => {
            return <UpdatedComponent STATIC={STATIC_COMPONENT} key={e.id} clicked={clicked} setClicked={setClicked} setComponents={setComponents} component={e} components={components} />
        })}

    </div >)
}