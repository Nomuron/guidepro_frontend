import React, { useState } from "react";
import { Card } from 'konsta/react';
import {StarRating} from "./StarRating"

export const TripTile = ({ trips }) => {
    const [liked, setLiked] = useState(Array(trips.length).fill(false));

    const handleLikeClick = (index) => {
        const newLiked = [...liked];
        newLiked[index] = !newLiked[index];
        setLiked(newLiked);
    };

    const shortenDescription = (description) => {
        if (description.length > 120) {
            return `${description.substring(0, 120)}...`;
        }
        return description;
    };

    return (
        <>
            {trips.map((trip, index) => (
                <Card

                    key={index}
                    outline
                    className="relative"
                    style={{
                        backgroundColor: "whitesmoke",
                    }}
                >
                    <div
                        className="h-48 relative"
                        style={{
                            backgroundImage: `url(${trip.imageLink})`,
                            backgroundSize: 'cover',
                            backgroundPosition: 'center',
                        }}
                    >
                        <div className="absolute bottom-0 right-0 m-1">
                            <div className="">
                                <img
                                    src="https://betibu.pl/wp-content/uploads/2016/10/twarz-e1484244607218-300x297.jpg"
                                    alt={trip.title}
                                    className="w-16 h-16 rounded-full object-cover"
                                />
                            </div>
                        </div>
                        <div className="absolute top-0 right-0 m-1">
                            <button type="button" className="" onClick={()=>handleLikeClick(index)}>
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 24 24"
                                    className="w-10 h-10 fill-current"
                                >
                                    <path
                                        fill={liked[index] ? 'red' : 'grey'}
                                        stroke= {liked[index] ? 'red' : 'white'}
                                        strokeWidth="1.5"
                                        d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 6.5 3.5 5 5.5 5c1.74 0 3.41.81 4.5 2.09C11.09 5.81 12.76 5 14.5 5c2 0 3.5 1.5 3.5 3.5 0 3.78-3.4 6.86-8.55 11.54L12 21.35z"
                                    />
                                </svg>
                            </button>
                        </div>
                    </div>
                    <div className="pt-4 pr-4 pb-0 pl-4"  >
                        <div className="font-bold mb-2">{trip.title}</div>
                        <p className="pt-2">{shortenDescription(trip.description)}</p>
                        <div className="flex justify-between text-gray-800 mt-3 pt-4 text-base">
                            <div>{trip.price} zł/osoba</div>
                            <StarRating trip={trip}/>
                        </div>
                    </div>
                </Card>
            ))}
        </>
    );
}
