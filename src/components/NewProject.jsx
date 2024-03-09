import { useRef } from 'react'
import Input from './Input'
import Modal from './Modal';

export default function NewProject({ onAdd, onCancel }) {
  const titleRef = useRef();
  const descriptionRef = useRef();
  const dueDateRef = useRef();
  const modalRef = useRef();

  function handelSave() {
    const enteredTitle = titleRef.current.value;
    const enteredDescription = descriptionRef.current.value;
    const enteredDueDate = dueDateRef.current.value;

    if (
      enteredTitle.trim() === '' ||
      enteredDescription.trim() === '' ||
      enteredDueDate === ''
    ) {
      modalRef.current.open();
      return;
    }

    onAdd({
      title: enteredTitle,
      description: enteredDescription,
      dueDate: enteredDueDate
    });
  }

  return <>
    <Modal ref={modalRef} buttonCaption="Okay"> 
      <h2 className="text-xl font-bold text-stone-800 mt-4 my-4">Invalid Input</h2>
      <p className="text-stone-700 mb-4">Oops ... looks like you forgot to enter a value.</p>
      <p className="text-stone-700 mb-4">Please make sure you provide a valid value for every input field.</p>
    </Modal>
    <div className="w-[35rem] mt-16">
      <menu className="flex items-center justify-end gap-4 my-4">
        <li>
          <button onClick={onCancel} className="text-stone-800 hover:text-stone-950">Cancel</button>
        </li>
        <li>
          <button onClick={handelSave} className="px-6 py-2 rounded-md bg-stone-800 text-stone-50 hover:bg-stone-950">Save</button>
        </li>
      </menu>
      <div>
        <Input type="text" ref={titleRef} lable="Title" />
        <Input ref={descriptionRef} label="Description" textarea />
        <Input type="date" ref={dueDateRef} label="Due Date" />
      </div>
    </div>
  </>
}