import React, { useState, useEffect } from 'react';
//Import external functions
import HabitsView from '../components/HabitsView';
import RoutinesView from '../components/RoutineView';
import ModalBox from '../components/ModalBox';
import './Pages.css'
import AddHabitView from '../components/AddHabitView';
import EditRoutinesView from '../components/EditRoutineView';
import CalendarView from '../components/CalendarView';
import TodoView from '../components/TodoView';
import HabitStats from '../components/HabitStats';
import AddTodoView from '../components/AddTodoView';
import Container from '../components/Container';
import Column from '../components/Column';
import ToggleButton from '../components/ToggleButton';

function Home() {

  const [habits, setHabits] = useState([]);
  const [routines, setRoutines] = useState([]);
  const [habitStats, setHabitStats] = useState({});
  const [habitStat, setHabitStat] = useState();
  const [allTodos, setAllTodos] = useState(JSON.parse(localStorage.getItem('todos')));
  const [isLoading, setLoading] = useState(true);
  const [habitModal, setHabitModal] = useState("ModalClosed");
  const [habitStatModal, setHabitStatModal] = useState("ModalClosed");
  const [todoModal, setTodoModal] = useState("ModalClosed");
  const [routineModal, setRoutineModal] = useState("ModalClosed");
  const [selectDate, setSelectDate] = useState(new Date().getDate());
  const [toggleTodos, setToggleTodos] = useState("ToggleOpen");
  const [toggleRoutines, setToggleRoutines] = useState("ToggleClosed");
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    setHabits(JSON.parse(localStorage.getItem('habits')));
    setRoutines(JSON.parse(localStorage.getItem('routines')));
    setHabitStats(JSON.parse(localStorage.getItem('habitstats')));
    setTodos(renderTodos(selectDate));
    setLoading(false);
  }, []);



  function saveToStorage() {
    localStorage.setItem('habits', JSON.stringify(habits));
    localStorage.setItem('routines', JSON.stringify(routines));
    localStorage.setItem('habitstats', JSON.stringify(habitStats));
    localStorage.setItem('todos', JSON.stringify(allTodos));
  }

  function renderTodos(currDate) {
    if (allTodos !== null) {
      let dateTodo = allTodos[currDate + '-' + (new Date().getMonth() + 1) + '-' + (new Date().getFullYear())]
      return dateTodo;
    } else {
      return null;
    }
  }

  function addHabit(name, description) {
    let newHabit = {
      "name": name,
      "description": description
    };
    if (habits === null) {
      let tempHabits = [];
      tempHabits.push(newHabit);
      setHabits(tempHabits);
      setHabitModal("ModalClosed");
    } else {
      let tempHabits = [...habits];
      tempHabits.push(newHabit);
      setHabits(tempHabits);
      setHabitModal("ModalClosed");
    }
  }

  function removeHabit(index) {
    let temp = [...habits];
    temp.splice(index, 1);
    setHabits(temp);
  }

  function updateHabitStat(habit, date, option, isChecked) {
    if (option >= 1 && option <= 5) {
      if (habitStats === null) {
        let temp = {};
        temp[date + '-' + (new Date().getMonth() + 1) + '-' + (new Date().getFullYear())] = {
          'done': `${isChecked}`,
          'xp': `${option}`
        };
        let tempObj = {};
        tempObj[habit] = temp;
        setHabitStats(temp);
      } else if (habitStats[habit] === undefined) {
        let temp = {};
        temp[date + '-' + (new Date().getMonth() + 1) + '-' + (new Date().getFullYear())] = {
          'done': `${isChecked}`,
          'xp': `${option}`
        };
        let tempObj = { ...habitStats };
        tempObj[habit] = temp;
        setHabitStats(tempObj);
      } else {
        let tempObj = { ...habitStats };
        tempObj[habit][date + '-' + (new Date().getMonth() + 1) + '-' + (new Date().getFullYear())] = {
          'done': `${isChecked}`,
          'xp': `${option}`
        };
        setHabitStats(tempObj);
      }
    }
  }

  function showHabitStat(habitName){
    setHabitStat(habitName)
    setHabitStatModal("ModalOpen")
  }

  function editRoutines(r) {
    setRoutines(r);
    setRoutineModal("ModalClosed");
  }

  function markTodoDone(index) {
    let temp = [...todos];
    temp[index]["done"] = "true";
    setTodos(temp);
    if (allTodos === undefined) {
      let tempObj = {};
      tempObj[selectDate + '-' + (new Date().getMonth() + 1) + '-' + (new Date().getFullYear())] = temp;
      setAllTodos(tempObj);
    } else {
      let tempObj = { ...allTodos };
      tempObj[selectDate + '-' + (new Date().getMonth() + 1) + '-' + (new Date().getFullYear())] = temp;
      setAllTodos(tempObj);
    }
  }

  function markTodoNotDone(index) {
    let temp = [...todos];
    temp[index]["done"] = "false";
    setTodos(temp);
    if (allTodos === undefined) {
      let tempObj = {};
      tempObj[selectDate + '-' + (new Date().getMonth() + 1) + '-' + (new Date().getFullYear())] = temp;
      setAllTodos(tempObj);
    } else {
      let tempObj = { ...allTodos };
      tempObj[selectDate + '-' + (new Date().getMonth() + 1) + '-' + (new Date().getFullYear())] = temp;
      setAllTodos(tempObj);
    }
  }

  function removeTodo(index) {
    let temp = [...todos];
    temp.splice(index, 1);
    setTodos(temp);
    if (allTodos === undefined) {
      let tempObj = {};
      tempObj[selectDate + '-' + (new Date().getMonth() + 1) + '-' + (new Date().getFullYear())] = temp;
      setAllTodos(tempObj);
    } else {
      let tempObj = { ...allTodos };
      tempObj[selectDate + '-' + (new Date().getMonth() + 1) + '-' + (new Date().getFullYear())] = temp;
      setAllTodos(tempObj);
    }
  }

  function addTodo(name, description) {
    let newTodo = {
      "name": name,
      "description": description
    };
    let temp = [];
    if (todos === undefined) {
      let tempTodos = [];
      tempTodos.push(newTodo);
      setTodos(tempTodos);
      temp = tempTodos;
      setTodoModal("ModalClosed");
    } else {
      let tempTodos = [...todos];
      tempTodos.push(newTodo);
      setTodos(tempTodos);
      temp = tempTodos;
      setTodoModal("ModalClosed");
    }
    if (allTodos === undefined) {
      let tempObj = {};
      tempObj[selectDate + '-' + (new Date().getMonth() + 1) + '-' + (new Date().getFullYear())] = temp;
      setAllTodos(tempObj);
    } else {
      let tempObj = { ...allTodos };
      tempObj[selectDate + '-' + (new Date().getMonth() + 1) + '-' + (new Date().getFullYear())] = temp;
      setAllTodos(tempObj);
    }

  }

  if (isLoading === true) {
    return (
      <div>
        <h1>Loading App..</h1>
      </div>
    );
  }
  else {
    return (
      <div className="Home">
        <div className="HomeContainer">
          <h1>Hi, Harish</h1>
          <div className={habitModal}>
            <ModalBox closeModal={() => { setHabitModal("ModalClosed") }} size="MediumModalBox">
              <AddHabitView addNew={addHabit} />
            </ModalBox>
          </div>
          <div className={routineModal}>
            <ModalBox closeModal={() => { setRoutineModal("ModalClosed") }} size="LargeModalBox">
              <EditRoutinesView change={editRoutines} routines={routines} />
            </ModalBox>
          </div>
          <div className={todoModal}>
            <ModalBox closeModal={() => { setTodoModal("ModalClosed") }} size="MediumModalBox">
              <AddTodoView addNew={addTodo} />
            </ModalBox>
          </div>
          <div className={habitStatModal}>
            <ModalBox closeModal={() => { setHabitStatModal("ModalClosed") }} size="LargeModalBox">
              <HabitStats habitStats={habitStats} habitName={habitStat}/>
            </ModalBox>
          </div>
          <div className="HomeViews" onMouseLeave={saveToStorage}>
            <Container>
              <div id="HomeView"><Column size="MediumColumn"><HabitsView showStats={showHabitStat} habits={habits} add={() => { setHabitModal("ModalOpen"); }} remove={removeHabit} /></Column></div>
              <div id="HomeView"><Column size="LargeColumn"><CalendarView habits={habits} habitStats={habitStats} updateHabitStat={updateHabitStat} currDate={selectDate} selectedDate={(date) => { setSelectDate(date); setTodos(renderTodos(date)) }} /></Column></div>
              <div id="HomeView">
                <Column size="MediumColumn">
                  <div className="btn-group">
                    <div><ToggleButton btnstatus={toggleTodos} onClick={() => { setToggleRoutines("ToggleClosed"); setToggleTodos("ToggleOpen") }} text="Todos" /></div>
                    <div><ToggleButton btnstatus={toggleRoutines} onClick={() => { setToggleRoutines("ToggleOpen"); setToggleTodos("ToggleClosed") }} text="Routines" /></div>
                  </div>
                  <div className={toggleRoutines}><RoutinesView routines={routines} change={() => { setRoutineModal("ModalOpen") }} /></div>
                  <div className={toggleTodos}><TodoView add={() => { setTodoModal("ModalOpen"); }} todos={todos} remove={removeTodo} markdone={markTodoDone} marknotdone={markTodoNotDone} /></div>
                </Column>
              </div>
            </Container>
          </div>
        </div>
      </div>
    );
  }
}

export default Home;
