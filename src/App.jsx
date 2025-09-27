import React, { useState } from "react";
import Navbar from "./Navbar";
import Banner from "./Banner";
import Apidata from "./Apidata";
import Bottom from "./Bottom";
import { ToastContainer, toast } from "react-toastify";
import "./App.css";

const App = () => {
  const [inProgressCount, setInProgressCount] = useState(0);
  const [resolvedCount, setResolvedCount] = useState(0);
  const [taskStatusCards, setTaskStatusCards] = useState([]);
  const [resolvedTaskCards, setResolvedTaskCards] = useState([]);
  const [tickets, setTickets] = useState([]);
  const [isLoaded, setIsLoaded] = useState(false);

  if (!isLoaded) {
    fetch("/tickets.json")
      .then((res) => res.json())
      .then((data) => {
        setTickets(data);
        setIsLoaded(true);
      });
  }

  const incrementInProgress = (ticketId, ticketTitle) => {
    if (!taskStatusCards.map((card) => card.id).includes(ticketId)) {
      setInProgressCount(inProgressCount + 1);
      setTaskStatusCards([
        ...taskStatusCards,
        { id: ticketId, title: ticketTitle },
      ]);
      toast.info(`Ticket "${ticketTitle}" added to In-Progress`, {
        className: "font-semibold p-2 ",
        progressClassName: "bg-yellow-400 h-1",
      });
    }
  };

  const completeTask = (ticketId, ticketTitle) => {
    if (taskStatusCards.map((card) => card.id).includes(ticketId)) {
      setInProgressCount(Math.max(0, inProgressCount - 1));
      setResolvedCount(resolvedCount + 1);
      setTaskStatusCards(
        taskStatusCards.filter((card) => card.id !== ticketId)
      );
      setResolvedTaskCards([
        ...resolvedTaskCards,
        { id: ticketId, title: ticketTitle },
      ]);
      setTickets(
        tickets.map((ticket) =>
          ticket.id === ticketId
            ? { ...ticket, title: "Unable to Download Invoice", disabled: true }
            : ticket
        )
      );
      toast.info(`Ticket "${ticketTitle}" marked as completed`, {
        className: "font-semibold p-2 ",
        progressClassName: "bg-yellow-400 h-1",
      });
    }
  };

  if (!isLoaded) {
    return <div>Loading tickets...</div>;
  }

  return (
    <>
      <Navbar></Navbar>
      <Banner
        inProgressCount={inProgressCount}
        resolvedCount={resolvedCount}
      ></Banner>
      <Apidata
        tickets={tickets}
        incrementInProgress={incrementInProgress}
        completeTask={completeTask}
        taskStatusCards={taskStatusCards}
        resolvedTaskCards={resolvedTaskCards}
      ></Apidata>
      <Bottom></Bottom>
      <ToastContainer />
    </>
  );
};

export default App;
