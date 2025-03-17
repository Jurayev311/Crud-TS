import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addBook } from '../redux/features/book.slice';
import { Button, Modal } from 'antd';

const AddBook: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [title, setTitle] = useState('');
  const [desc, setDesc] = useState('');
  const [price, setPrice] = useState<number | ''>('');
  const [discount, setDiscount] = useState<number | ''>('');
  const [author, setAuthor] = useState('');

  const dispatch = useDispatch();

  const add = () => {
    if (!title.trim() || !desc.trim() || price === '' || discount === '' || !author.trim()) return

    const newBook = {
      id: crypto.randomUUID(),
      title,
      desc,
      price: Number(price),
      discount: Number(discount),
      author,
    };

    dispatch(addBook(newBook));
    setTitle('');
    setDesc('');
    setPrice('');
    setDiscount('');
    setAuthor('');
    setIsModalOpen(false);
  };

  return (
    <div>
      <Button type="primary" onClick={() => setIsModalOpen(true)}>
        Kitob qo‘shish
      </Button>
      <Modal title="Yangi Kitob Qo‘shish" open={isModalOpen} onCancel={() => setIsModalOpen(false)} footer={null}>
        <form className="flex flex-col gap-2">
          <input value={title} onChange={(e) => setTitle(e.target.value)} placeholder="Nomi" className="border p-2 rounded-md w-full" required />
          <input value={desc} onChange={(e) => setDesc(e.target.value)} placeholder="Tavsif" className="border p-2 rounded-md w-full" required />
          <input value={price} onChange={(e) => setPrice(Number(e.target.value) || '')} type="number" placeholder="Narx" className="border p-2 rounded-md w-full" required />
          <input value={discount} onChange={(e) => setDiscount(Number(e.target.value) || '')} type="number" placeholder="Chegirma" className="border p-2 rounded-md w-full" required />
          <input value={author} onChange={(e) => setAuthor(e.target.value)} placeholder="Muallif" className="border p-2 rounded-md w-full" required />
          <div className="flex justify-end gap-2 mt-2">
            <Button onClick={() => setIsModalOpen(false)}>Bekor qilish</Button>
            <Button onClick={add} type="primary">Qo‘shish</Button>
          </div>
        </form>
      </Modal>
    </div>
  );
};

export default AddBook;
