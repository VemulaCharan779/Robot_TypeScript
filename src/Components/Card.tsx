// Card.tsx
import React from "react";
import './Card.css';
import { useDispatch } from "react-redux";
import { deleteCard } from "../Redux/Slice";

interface CardProps {
    cardId: string;
    cardName: string;
    cardEmail: string;
}

const Card: React.FC<CardProps> = ({  cardName, cardEmail }) => {
    const dispatch = useDispatch();

    const handleDelete = () => {
        console.log("Deleting card with id:", cardName); // Check the id being passed
        dispatch(deleteCard({ name: cardName }));
    };
    

    return (
        <div className="card-container">
            <div className="card">
                <img src={`https://robohash.org/${cardName}`} alt={`Robot ${cardName}`} />
                <h3 className="name">{cardName}</h3>
                <h6>{cardEmail}</h6>
                <button onClick={handleDelete}>Delete</button>
            </div>
        </div>
    );
};

export default Card;
