import React from 'react'
import styles from "./Status.module.css"
import CardStatus from '../../UI/Cards/CardStatus'

export default function Status() {
  return (
    <section>
        <div className="container">
            <div className="row m-5">
                <CardStatus counter="100" project="SaS"/>
                <CardStatus counter="50"  project="Math"/>
                <CardStatus counter="200" project="Building"/>
                <CardStatus counter="150" project="Dev"/>
            </div>
        </div>
    </section>
  )
}
