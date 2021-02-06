import React, { Component } from 'react';
import './index.scss';
import moment from 'moment';
import data from '../../list.json'
import star from '../../star.png'

class Card extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            data: []
        }
    }

    StarVote = (vote) => {
        let starArray = []
        for (let i = 1; i <= vote; i++) {
            starArray.push(i)
        }
        return (
            starArray.map(() =>
                <img className="card_star" src={star} alt="" />
            )
        )
    }

    ListCard = () => {
        return (
            data.map((val, index) =>
                <li className="cards_item" key={index}>
                    <div className="card">
                        <div className="card_image"><img src={val.image_url} /></div>
                        <div className="card_content">
                            <h2 className="card_title">{val.title}</h2>
                            <p className="card_text">{moment(val.created_at, "YYYYMMDD").fromNow()}</p>
                            {this.StarVote(val.vote)}
                            <h2 className="card_title">฿{val.price}.00</h2>
                        </div>
                    </div>
                </li>

            )
        )

    }

    render() {
        return (
            <div>
                <ul className="cards">
                    {this.ListCard()}
                </ul>
            </div>
        )
    }
}

export default Card


