import { useDispatch, useSelector } from "react-redux";
import { deleteBook } from "../redux/features/book.slice";
import { RootState } from "../redux/index";
import AddBook from "./Addbook";

const Book: React.FC = () => {
  const books = useSelector((state: RootState) => state.book.books);
  const dispatch = useDispatch();

  return (
    <div>
      <div className="flex items-center justify-center mt-7">
        <AddBook />
      </div>
      <div className="container mx-auto max-w-[1000px] flex flex-col gap-4 mt-16">
        {books?.map((book) => (
          <div
            key={book.id}
            className="w-full border p-4 rounded-md shadow-md bg-white flex justify-between items-center"
          >
            <div className="flex flex-col">
              <h2 className="text-lg font-semibold text-gray-800">
                {book.title}
              </h2>
              <p className="text-sm text-gray-600 mt-1 italic">{book.desc}</p>
              <p className="text-sm text-gray-600 mt-1">
                Narx: {book.price} so‘m
              </p>
              <p className="text-sm text-gray-600 mt-1">
                Chegirma: {book.discount}%
              </p>
              <p className="text-sm text-gray-600 mt-1">
                Muallif: {book.author}
              </p>
            </div>
            <div className="flex gap-2">
              <button className="px-4 py-2 bg-amber-500 rounded text-white active:scale-95 duration-200">
                Edit
              </button>
              <button
                onClick={() => dispatch(deleteBook(book.id))}
                className="px-4 py-2 bg-red-500 rounded text-white active:scale-95 duration-200"
              >
                O‘chirish
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Book;
