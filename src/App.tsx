import React, { useEffect, useState } from 'react';
import './App.css';
import ReminderList from './components/ReminderList';
import Reminder from './models/reminder';
import reminderService from './services/reminder';
import NewReminder from './components/NewReminder/NewReminder';

function App() {

  const [reminders, setReminders] = useState<Reminder[]>([
    { id: 1, title: 'Reminder 1' }
  ]);

  const [highestId, setHighestId] = useState(0);

  useEffect(() => {
    loadReminders();
  }, []);

  const removeReminder = (id: number) => {
    setReminders(reminders.filter(reminder => reminder.id !== id));
  }

  const loadReminders = async () => {
    const reminders = (await reminderService.getReminders()).slice(0, 10);
    setHighestId(reminders.map(remind => remind.id).sort((a, b) => b - a)[0] + 1);
    setReminders(reminders);
  }

  const canAddReminder = (title: string): boolean => {
    return !reminders.some(element => element.title === title);
  }

  const addReminder = async (title: string) => {
    if (canAddReminder(title)) {
      const newReminder = await reminderService.addReminder(title);
      newReminder.id = highestId;
      setHighestId(highestId + 1);
      setReminders([...reminders, newReminder]);
    }
  }

  return (
    <div className="App">
      <NewReminder canAddReminder={canAddReminder} onAddReminder={addReminder} />
      <ReminderList onRemoveReminder={removeReminder} items={reminders} />
    </div>
  );
}

export default App;
