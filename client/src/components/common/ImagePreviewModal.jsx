import Modal from './Modal.jsx';

export default function ImagePreviewModal({ image, title, open, onClose }) {
  return <Modal open={open} onClose={onClose} title={title}><img src={image} alt={title} className="max-h-[70vh] w-full rounded-2xl object-cover" /></Modal>;
}
