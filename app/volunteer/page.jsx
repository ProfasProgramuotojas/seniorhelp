'use client';

import { get_tasks } from '../server_functions/get_tasks';
import { useEffect, useState } from 'react';
import Task from '../components/Task';

const page = () => {
  const [tasks, setTasks] = useState([]);
  const [task, setTask] = useState(null);

  const [confirm, setConfirm] = useState(false);
  const [done, setDone] = useState(false);

  useEffect(() => {
    const fetch_tasks = async () => {
      const res = await get_tasks();
      setTasks(res);
    };
    fetch_tasks();
  }, []);

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
            <div className='senior-text'>Kvietimas priimtas</div>
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
