import { Modal } from 'components/modal/modal';
import { useState } from 'react';
import './index.scss';

function App() {
  const [open, setOpen] = useState(false)


  return (
    <div className="App">
      <button onClick={() => setOpen(true)} className="open-modal-btn">⚛ Открыть окно ⚛</button>

      {/* условный рендер. окно без анимации
      {
        open && (
        <div className="overlay">
          <div className="modal">
            <svg onClick={()=> setOpen(false)} height="200" viewBox="0 0 200 200" width="200">
              <title />
              <path d="M114,100l49-49a9.9,9.9,0,0,0-14-14L100,86,51,37A9.9,9.9,0,0,0,37,51l49,49L37,149a9.9,9.9,0,0,0,14,14l49-49,49,49a9.9,9.9,0,0,0,14-14Z" />
            </svg>
            <img src="img/wow.gif" />
          </div>
        </div>
        )
      } */}
      
      {/* модальное окно через добавление класса
      <div className={`overlay animated ${open ? 'show' : ''}`}>
          <div className="modal">
            <svg onClick={()=> setOpen(false)} height="200" viewBox="0 0 200 200" width="200">
              <title />
              <path d="M114,100l49-49a9.9,9.9,0,0,0-14-14L100,86,51,37A9.9,9.9,0,0,0,37,51l49,49L37,149a9.9,9.9,0,0,0,14,14l49-49,49,49a9.9,9.9,0,0,0,14-14Z" />
            </svg>
            <img src="img/wow.gif" />
          </div>
        </div> */}

        {/* через компонент */}
        <Modal 
          open={open}
          setOpen={setOpen}>
            <img src="img/wow.gif" alt="" />
            <p>Модальное окно</p>
          </Modal>
    </div>
  );
}

export default App;
