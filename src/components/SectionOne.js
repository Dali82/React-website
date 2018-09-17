import React, { Component } from 'react'

export default (props) => {

    const photo = props.photo || 'pic01.jpg'
    const photoUrl = "images/" + photo
    const dataPosition = props.dataPosition || 'center center'

    return (

        <section>
          <a href="#" className="image"><img src={photoUrl} alt="" data-position={dataPosition} /></a>
          <div className="content">
            <div className="inner">
              <h2>{props.heading}</h2>
              <p>{props.paragraph}</p>
              <ul className="actions">
                <li><a href="generic.html" className="button">Cena na upit</a></li>
              </ul>
            </div>
          </div>
        </section>

    )
}