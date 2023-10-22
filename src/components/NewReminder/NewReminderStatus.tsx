import React from 'react'
import Spinner from '../Spinner';
import GreenCheck from '../GreenCheck';

interface NRStatusProps {
    addingReminder: boolean;
    reminderAdded: boolean;
    errorMessage?: string;
}

function NewReminderStatus({ addingReminder, reminderAdded, errorMessage }: NRStatusProps) {
    return (
        <div>
            {addingReminder ? <Spinner /> : reminderAdded ? <GreenCheck /> : null}
        </div>
    )
}

export default NewReminderStatus