import React from "react";

const Apidata = ({
  tickets,
  incrementInProgress,
  completeTask,
  taskStatusCards,
  resolvedTaskCards,
}) => {
  console.log(tickets);

  const onTicketClick = (ticket) => {
    if (
      !ticket.disabled &&
      !resolvedTaskCards.map((card) => card.id).includes(ticket.id)
    ) {
      incrementInProgress(ticket.id, ticket.title);
    }
  };

  return (
    <div className="max-w-[1440px] mx-auto px-4">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <div className="col-span-1 md:col-span-3 p-4 rounded">
          <h2 className="text-3xl md:text-3xl sm:text-2xl mb-2">
            Customer Tickets
          </h2>
          {tickets && tickets.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {tickets.map((data) => (
                <div
                  key={data.id}
                  className={`bg-gray-200 rounded-2xl p-3 sm:p-4 ${
                    data.disabled ||
                    resolvedTaskCards.map((card) => card.id).includes(data.id)
                      ? "opacity-50 cursor-not-allowed"
                      : "cursor-pointer"
                  }`}
                  onClick={() => onTicketClick(data)}
                  disabled={
                    data.disabled ||
                    resolvedTaskCards.map((card) => card.id).includes(data.id)
                  }
                >
                  <div className="flex justify-between items-center">
                    <p className="font-semibold text-[18px] sm:text-[16px]">
                      {data.title}
                    </p>
                    <button className="btn bg-[#B9F8CF] rounded-3xl flex items-center gap-2 text-sm sm:text-xs">
                      <span className="w-[18px] h-[18px] bg-green-800 rounded-[50%]"></span>
                      open
                    </button>
                  </div>
                  <p className="my-2 sm:my-3.5 text-sm sm:text-base">
                    {data.description}
                  </p>
                  <div className="flex justify-between flex-col sm:flex-row gap-2 sm:gap-4">
                    <div className="flex gap-2 sm:gap-4">
                      <p className="text-sm sm:text-base">#{data.id}</p>
                      <p
                        className={`font-semibold text-sm sm:text-base ${
                          data.priority === "high"
                            ? "text-red-500"
                            : data.priority === "medium"
                            ? "text-orange-300"
                            : "text-green-600"
                        }`}
                      >
                        {data.priority} priority
                      </p>
                    </div>
                    <div className="flex gap-2 sm:gap-4">
                      <p className="text-sm sm:text-base">{data.name}</p>
                      <p className="text-sm sm:text-base">
                        <i class="fa-regular fa-calendar-days"></i>
                        {data.createdAt}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <p className="text-gray-500 text-sm sm:text-base">
              No tickets available
            </p>
          )}
        </div>

        <div className="col-span-1 p-4 rounded">
          <div>
            <h2 className="font-semibold text-[19px] sm:text-[16px] mb-2">
              Task Status
            </h2>
            {taskStatusCards.length > 0 ? (
              taskStatusCards.map((card) => (
                <div
                  key={card.id}
                  className="bg-gray-200 rounded-2xl p-3 sm:p-4 my-2"
                >
                  <p className="font-semibold text-[16px] sm:text-[14px]">
                    {card.title}
                  </p>
                  <button
                    className="mt-2 bg-blue-500 text-white rounded-3xl px-3 sm:px-4 py-1 text-sm sm:text-xs hover:bg-blue-600"
                    onClick={() => completeTask(card.id, card.title)}
                  >
                    Complete
                  </button>
                </div>
              ))
            ) : (
              <p className="text-gray-500 text-sm sm:text-base">
                Select a ticket to add to Task Status
              </p>
            )}
          </div>
          <div className="mt-4">
            <h2 className="font-semibold text-[19px] sm:text-[16px] mb-2">
              Resolved Tasks
            </h2>
            {resolvedTaskCards.length > 0 ? (
              resolvedTaskCards.map((card) => (
                <div
                  key={card.id}
                  className="bg-gray-100 rounded-2xl p-3 sm:p-4 my-2"
                >
                  <p className="font-semibold text-[16px] sm:text-[14px]">
                    {card.title}
                  </p>
                  <p className="text-green-600 text-sm sm:text-xs">Completed</p>
                </div>
              ))
            ) : (
              <p className="text-gray-500 text-sm sm:text-base">
                No resolved tasks yet.
              </p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Apidata;
