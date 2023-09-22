type Props = {
    rating: number;
}

export const EmojiRating = ({rating}: Props) => {
    if (rating > 5) rating = 5;
    if (rating < 0) rating = 0;

    const emojis = ['😟', '🤨', '😉', '😁', '🤣']
    const ratingInt = Math.floor(rating);

    const stars = `${emojis[ratingInt - 1]}`.repeat(ratingInt) + '🚫'.repeat(5 - ratingInt);

    return (
        <div className="flex items-center text-6xl">
            <div className="bg-gray-700 p-2 rounded">{rating.toFixed(1)}</div>
            <div className="ml-3">{stars}</div>
        </div>
    );
}
