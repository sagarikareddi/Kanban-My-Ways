import './App.css';

function App() {
  return (
    <>
      <div>
        <div className=' shadow-md h-[7vh] text-center font-bold text-2xl pt-3 font-serif'>Kanban</div>
        <div className=' p-2 grid gap-2 grid-cols-3 h-[70vh] text-center pt-4 font-bold'>
          <div className='border-2  '>
              <h2 className=' p-4 border-b-2'>Task to do</h2> 
              <textarea name="inp" id="inp" cols="40" rows="5" className=' mt-10 border-2 p-2' placeholder='Enter Your Task'></textarea>
              <button className=' border-2 p-1 pl-2 pr-2 rounded-md absolute mt-[30%] ml-[-8%] bg-yellow-300'>Create Task</button>
          </div>
          <div className='border-2 '>
              <h2 className=' p-4 border-b-2'>Current Task</h2>
              <div className=' flex justify-between'>
                <div className=' p-2 border-2 m-4  '>
                  Create Assignment before 5pm
                </div>
                <button className=' border-2 border-green-600 rounded-md m-5 bg-green-600 p-1 text-xs'>Mark Task Done</button>
              </div>
              <div className=' flex justify-between'>
                <div className=' p-2 border-2 m-4 '>
                  Movie Night 9pm
                </div>
                <button className=' border-2 border-green-600 rounded-md m-5 bg-green-600 p-1 text-xs'>Mark Task Done</button>
              </div>
              <div className=' flex justify-between'>
                <div className=' p-2 border-2 m-4 '>
                  Sagarika Birthday on 21 June
                </div>
                <button className=' border-2 border-green-600 rounded-md m-5 bg-green-600 p-1 text-xs'>Mark Task Done</button>
              </div>
              <div className=' flex justify-between'>
                <div className=' p-2 border-2 m-4 '>
                  Exam on 28 Nov
                </div>
                <button className=' border-2 border-green-600 rounded-md m-5 bg-green-600 p-1 text-xs'>Mark Task Done</button>
              </div>
              <div className=' flex justify-between'>
                <div className=' p-2 border-2 m-4 '>
                  Order on 25 Oct
                </div>
                <button className=' border-2 border-green-600 rounded-md m-5 bg-green-600 p-1 text-xs'>Mark Task Done</button>
              </div>
          </div>


          <div className='border-2 '>
              <h2 className=' p-4 border-b-2'>Current Task</h2>
              <div className=' flex justify-between'>
                <div className=' p-2 border-2 m-4  '>
                  Create app of movie 
                </div>
                <button className=' border-2 border-red-600 rounded-md m-5 bg-red-600 p-1 text-xs'>Remove Task</button>
              </div>
              <div className=' flex justify-between'>
                <div className=' p-2 border-2 m-4 '>
                  Movie Night on 15th Oct 9pm
                </div>
                <button className=' border-2 border-red-600 rounded-md m-5 bg-red-600 p-1 text-xs'>Remove Task</button>
              </div>
              <div className=' flex justify-between'>
                <div className=' p-2 border-2 m-4 '>
                  Yash  Birthday on 18 Oct
                </div>
                <button className=' border-2 border-red-600 rounded-md m-5 bg-red-600 p-1 text-xs'>Remove Task</button>
              </div>
              <div className=' flex justify-between'>
                <div className=' p-2 border-2 m-4 '>
                  Exam on 10 Oct
                </div>
                <button className=' border-2 border-red-600 rounded-md m-5 bg-red-600 p-1 text-xs'>Remove Task</button>
              </div>
          </div>
        </div>
      </div>
      <marquee behavior="scroll" direction="right" className='h-[7vh] mt-10 text-center font-bold text-2xl pt-3 font-serif'>Your Personal Task Manager</marquee>
    </>
  );
}

export default App;
