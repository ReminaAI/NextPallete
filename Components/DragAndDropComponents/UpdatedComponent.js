import styles from "../../styles/DragStyles/drag.module.css"
import { useState } from "react";

export default function UpdatedComponent({ clicked, setClicked, setComponents, component, components, STATIC }) {
    function calculateX(event, component, estatic) {
        if (event.pageX + component.width / 2 >= event.view.innerWidth) {
            return event.view.innerWidth - component.width
        } else if (event.pageX - component.width / 2 <= 0) {
            return 0
        } else {
            for (const element of estatic) {
                // //left side of static elements
                if ((event.pageX + component.width / 2 >= element.x) && (component.x + component.width / 2 <= element.x + element.width / 3) && (event.pageY + component.height / 2 >= element.y) && (event.pageY - component.height / 2 <= element.y + element.height)) {
                    console.log("LEFT")
                    return element.x - component.width
                }
                else
                    //right side of static elements
                    if ((event.pageX - component.width / 2 <= element.x + element.width) && (component.x >= element.x + element.width / 3) && (event.pageY + component.height / 2 >= element.y) && (event.pageY - component.height / 2 <= element.y + element.height)) {
                        console.log("RIGHT")
                        return element.x + element.width
                    }
            }

        }
        return event.pageX - component.width / 2
    }
    function calculateY(event, component, estatic) {
        if (event.pageY + component.height / 2 >= event.view.innerHeight) {
            return event.view.innerHeight - component.height
        } else if (event.pageY - component.height / 2 <= 0) {
            return 0
        } else {
            for (const element of estatic) {
                // //left side of static elements
                if ((event.pageY + component.height / 2 >= element.y) && (component.y + component.height / 2 <= element.y + element.height / 3) && (event.pageX + component.width / 2 >= element.x) && (event.pageX - component.width / 2 <= element.x + element.width)) {
                    console.log("TOP")
                    return element.y - component.height
                }
                else
                    //right side of static elements
                    if ((event.pageY - component.height / 2 <= element.y + element.height) && (component.y >= element.y + element.height / 3) && (event.pageX + component.width / 2 >= element.x) && (event.pageX - component.width / 2 <= element.x + element.width)) {
                        console.log("BOTTOM")
                        return element.y + element.height
                    }
            }
        }
        return event.pageY - component.height / 2
    }


    function calculatePosition(event) {
        if (clicked) {
            setComponents(components.reduce((acc, e) => {
                e.id !== component.id ?
                    acc.push(e) :
                    acc.push({
                        ...e,
                        x: calculateX(event, component, STATIC),
                        y: calculateY(event, component, STATIC)
                    })
                return acc
            }, []))
        }
    }



    return (<div
        style={{ top: component.y, left: component.x, height: component.height, width: component.width }}
        className={styles.component}
        onMouseMove={(event) => calculatePosition(event)}
        onMouseDown={(e) => {
            e.stopPropagation()
            if (e.pageX >= component.x && e.pageX <= (component.x + component.width)
                && e.pageY >= component.y && e.pageY <= (component.y + component.height)) {
                setClicked(true)
            }
        }}

    >
    </div>)
}

/*

// X CHECKS

    // if (((event.pageX + component.width / 2 >= element.x) && (event.pageX + component.width / 2 <= element.x + element.width)) && ((event.pageY + component.height / 2 >= element.y + 10) && (event.pageY - component.height / 2 <= element.y + element.height - element.height / 2))) {
    //     return element.x - component.width
    // }
    // else
    //     if ((event.pageX - component.width / 2 <= element.x + element.width) && (event.pageX + component.width / 2 >= element.x + 10) && ((event.pageY + component.height / 2 >= element.y + 10) && (event.pageY - component.height / 2 <= element.y + element.height - element.height / 2))) {
    //         return element.x + element.width
    //     }


// Y CHECKS                
    // if (((event.pageY + component.height / 2 >= element.y) && (event.pageY + component.height / 2 <= element.y + element.height)) && ((event.pageX + component.width / 2 >= element.x + element.width / 2) && (event.pageX - component.width / 2 <= element.x + element.width - element.width / 2))) {
    //     return element.y - component.height
    // }
    // else 
    // if ((event.pageY - component.height / 2 <= element.y + element.height) && (event.pageY + component.height / 2 >= element.y) && ((event.pageX + component.width / 2 >= element.x + element.width / 2) && (event.pageX - component.width / 2 <= element.x + element.width - element.width / 2))) {
    //     return element.y + element.height
    // }
*/