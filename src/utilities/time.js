const Time = () => {
  let today = new Date();
  let hours = today.getHours();
  let minutes = today.getMinutes();
  const ampm = hours >= 12 ? "PM" : "AM";
  hours = hours % 12;
  hours = hours ? hours : 12;
  minutes = minutes < 10 ? "0" + minutes : minutes;
  let currTime = hours + ":" + minutes + " " + ampm;
  console.log(currTime, "from current time");
  return hours + ":" + minutes + " " + ampm;
};

export { Time };
