'use client';

import { get_tasks } from '../server_functions/get_tasks';
import { useEffect, useState } from 'react';
import Task from '../components/Task';
import { delete_task } from '../server_functions/delete_task';

const page = () => {
  const [tasks, setTasks] = useState([]);
  const [task, setTask] = useState(null);
  const [phone, setPhone] = useState('')

  const [confirm, setConfirm] = useState(false);
  const [done, setDone] = useState(false);

  useEffect(() => {
    const fetch_tasks = async () => {
      const res = await get_tasks();
      setTasks(res);
    };
    console.log(phone)
    fetch_tasks();
  }, []);

  const handleAcceptTask = async () => {
    console.log(task)
    await delete_task(task.id)
  }

  return (
    <div>
      <div className='volunteer-text'>Pasirinkite užduotį:</div>
      {tasks.map((task, key) => {
        return (
          <div
            key={key}
            className='volunteer-container'
            onClick={() => {
              setConfirm(true);
              setTask(task);
              setPhone(task.number)
            }}
          >
            <Task data={task} />
          </div>
        );
      })}

      {confirm && (
        <div className='volunteer-confirm-overlay'>
          <div className='volunteer-confirm-header'>
            Ar sutinkate priimti pagalbos kvietimą?
          </div>
          <div className='volunteer-container'>
            <Task data={task} />
          </div>
          <div className='volunteer-confirm-box'>
            <div
              className='volunteer-confirm-button'
              onClick={() => {
                handleAcceptTask();
                setDone(true);
              }}
            >
              <div className='senior-text'>Taip</div>
            </div>
            <div
              className='volunteer-decline-button'
              onClick={() => {
                setConfirm(false);
              }}
            >
              <div className='senior-text'>Ne</div>
            </div>
          </div>
        </div>
      )}

      {done && (
        <div className='volunteer-done-overlay'>
          <div className='volunteer-confirm-button'>
            <a href={`tel:${phone}`} className='senior-text'>Užduotis priimta. Susisiekite su senjoru: {phone}</a>
            <div
              className='senior-body'
              style={{ marginTop: 50, maxHeight: 150 }}
              onClick={() => {
                window.location.href = '/';
              }}
            >
              <div className='senior-text'>Uždaryti</div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default page;
