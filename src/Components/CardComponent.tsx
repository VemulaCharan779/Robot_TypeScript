// CardComponent.tsx
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addData, addOneCard } from "../Redux/Slice";
import Card from "./Card";
import './Card.css';

interface Name {
    first: string;
}

interface CardData {
    id: string;
    name: Name;
    email: string;
}

interface RootState {
    cards: {
        data: CardData[];
        endIndex: number;
    };
}

const CardComponent: React.FC = () => {
    const dispatch = useDispatch();
    const { data, endIndex } = useSelector((state: RootState) => state.cards);
    const perPage: number = 50;
    const page: number = 1;

    const fetchData = async () => {
        try {
            const response = await fetch(`https://randomuser.me/api/?results=${perPage}&inc=id,name,email&page=${page}`);
            if (!response.ok) {
                throw new Error('Failed to fetch data');
            }
            const res = await response.json();
            const userData: CardData[] = res.results.map((item: CardData) => ({
                id: item.id,
                name: item.name,
                email: item.email
            }));
            dispatch(addData(userData));
            console.log(userData);
        } catch (error) {
            console.error('Fetch error:');
        }
    };
    
    useEffect(() => {
        fetchData();   
    }, []);

    const handleAddCard = () => {   
       dispatch(addOneCard());
    }; 
    
    return (
        <div>
            <div>
                <button className="add-robot" onClick={handleAddCard}>ADD</button>
                <div className="robo-cards">
                    {data.slice(0, endIndex).map((val: CardData) => ( 
                        <Card key={val.id} cardId={val.id} cardName={val.name.first} cardEmail={val.email} />
                    ))}
                </div>
            </div>
        </div>
    );
}

export default CardComponent;
