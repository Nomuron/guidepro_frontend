import React from 'react';

export const StarRating = ({ trip }) => {
    const maxRating = 5;
    const rating = trip.rating;
    const fullStars = Math.round(rating); // Zaokrąglamy do najbliższej pełnej liczby gwiazdek

    const stars = [];

    for (let i = 0; i < maxRating; i++) {
        let starClass = 'star'; // Domyślna klasa dla gwiazdki

        // Jeśli numer gwiazdki jest mniejszy niż liczba pełnych gwiazdek, koloruj gwiazdkę
        if (i < fullStars) {
            starClass += ' filled'; // Dodaj klasę, która koloruje gwiazdkę
        }

        stars.push(<span key={i} className={starClass}>&#9733;</span>);
    }

    return (

        <div className="star-rating">
            {stars}{trip.rating}
        </div>

    );
};



