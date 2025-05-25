import { Link } from "react-router-dom";

const Book = ({ book }) => {
  const {bookId, bookName, author, image, tags, category } = book;

  return (
    <Link to={`/books/${bookId}`}>
      <div class="card bg-base-100  shadow-xl p-6">
        <figure className="bg-[#F3F3F3] py-8 rounded-2xl">
          <img src={image} className="h-[166px]" alt={bookName} />
        </figure>
        <div class="card-body">
          <div className="flex justify-center gap-4">
            {
            tags.map((tag, index) => (
              <button 
              key={index}
              className="btn btn-xs bg-[#F3F3F3] text-[#23BE0A]">
              {tag}</button>))
            }
          </div>
          <h2 class="card-title font-playfair">
            {bookName}
            <div class="badge badge-secondary">NEW</div>
          </h2>
          <p>By: {author}</p>
          <div class="border border-dashed"></div>
          <div class="card-actions justify-between">
            <div class="badge badge-outline">{category}</div>
            {/* rating */}
            <div className="rating">
              <input
                type="radio"
                name="rating-4"
                className="mask mask-star-2 bg-green-500"
              />
              <input
                type="radio"
                name="rating-4"
                className="mask mask-star-2 bg-green-500"
                defaultChecked
              />
              <input
                type="radio"
                name="rating-4"
                className="mask mask-star-2 bg-green-500"
              />
              <input
                type="radio"
                name="rating-4"
                className="mask mask-star-2 bg-green-500"
              />
              <input
                type="radio"
                name="rating-4"
                className="mask mask-star-2 bg-green-500"
              />
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default Book;
