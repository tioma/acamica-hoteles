import React from 'react'
import Price from '../Price'

const Hotel = ({name, description, photo, price, rooms, city, country}) => {
    return(
      <div className="column is-one-third">
        <div className="card">
            <div className="card-image">
                <figure className="image is-4by3">
                    <img src={photo} alt="Sainte Jeanne Boutique & Spa" />
                </figure>
            </div>
            <div className="card-content">
                <p className="title is-4">{name}</p>
                <p>{description}</p>
                <div className="field is-grouped is-grouped-multiline" style={{marginTop: '1em'}}>
                    <div className="control">
                        <div className="tags has-addons">
                            <span className="tag is-medium is-info"><i className="fas fa-map-marker"></i></span>
                            <span className="tag is-medium tag-text">{city}, {country}</span>
                        </div>
                    </div>
                    <div className="control">
                        <div className="tags has-addons">
                            <span className="tag is-medium is-info"><i className="fas fa-bed"></i></span>
                            <span className="tag is-medium tag-text">{rooms} Habitaciones</span>
                        </div>
                    </div>
                    <div className="control">
                        <div className="tags">
                            <span className="tag is-medium is-info">
                                <Price price={price}/>
                            </span>
                        </div>
                    </div>
                </div>
            </div>
            <div className="card-footer">
              <p className="card-footer-item has-background-primary has-text-white has-text-weight-bold">Reservar</p>
            </div>
        </div>
        </div>
    )
}

export default Hotel;
