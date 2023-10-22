import React, { useState } from 'react';
import NewReminderStatus from './NewReminderStatus';
import Spinner from '../Spinner';
import GreenCheck from '../GreenCheck';

interface NewReminderProps {
    canAddReminder: (title: string) => boolean;
    onAddReminder: (title: string) => void;
}

function NewReminder({ canAddReminder, onAddReminder }: NewReminderProps): JSX.Element {
    const [title, setTitle] = useState('');
    const [addingReminder, setAddingReminder] = useState(false);
    const [reminderAdded, setReminderAdded] = useState(false);
    const [errorMessage, setErrorMessage] = useState('');

    const submitForm = (e: React.FormEvent) => {
        e.preventDefault();
        if (!title) return;
        if (!canAddReminder(title)) {
            setErrorMessage("Reminder already exists");
            setAddingReminder(false);
            setReminderAdded(false);
            return;
        }
        setErrorMessage('');
        setAddingReminder(true);
        setReminderAdded(false);
        onAddReminder(title);
        setAddingReminder(false);
        setReminderAdded(true);
        setTitle('');
    }

    return (
        <div>
            <form onSubmit={submitForm}>
                <label htmlFor="title"></label>
                <input value={title} onChange={e => setTitle(e.target.value)} id="title" type="text" className="form-control" />
                <button type='submit' className="btn btn-primary rounded-pill my-3">Add Reminder</button>
                {addingReminder ? <Spinner /> : reminderAdded ? <GreenCheck /> : null}
                {errorMessage ? <p>{errorMessage}</p> : null}
            </form>
        </div>
    );
}

export default NewReminder;