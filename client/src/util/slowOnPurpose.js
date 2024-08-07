//use this for example of lazy loading
function wait(time) {
  return new Promise((resolve) => {
      setTimeout(resolve, time);
  });
}

export default wait;