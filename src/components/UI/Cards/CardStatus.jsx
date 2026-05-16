import React from 'react'
import styles from "../../Dashborad/Status/Status.module.css"

export default function CardStatus( { counter, project } ) {
    return (
        <div className="col-12 col-md-3">
            <div className={`${styles.cardStatus} d-flex align-items-center`}>
                <div className={`${styles.icon} w-100 align-items-center justify-content-center d-flex`}>
                    <i class="fa-solid fa-building" style={{ fontSize: "2rem" }}></i>
                </div>
                <div className={`${styles.info} w-100 d-flex flex-column align-items-center gap-2`}>
                    <span className="counter" style={{ fontSize: "2rem", fontWeight: "bold" }}>{counter}</span>
                    <span className="title">{project}</span>
                </div>
            </div>
        </div>
    )
}
