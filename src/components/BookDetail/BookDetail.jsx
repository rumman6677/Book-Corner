import React from 'react';
import { useLoaderData, useParams } from 'react-router-dom';

const BookDetail = () => {

    const {bookId} = useParams();

    const data = useLoaderData();

    const book = data.find(book => book.bookId === bookId)

    console.log(data);

    return (
        <div>
            <h1>Book Id: {bookId}</h1>
        </div>
    );
};

export default BookDetail;