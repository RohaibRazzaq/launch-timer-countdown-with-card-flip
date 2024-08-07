function updateTimer() {
    const endDate = new Date('2024-09-20T00:00:00Z');
    const now = new Date();
    const timeDiff = endDate - now;

    if (timeDiff <= 0) {
      document.getElementById('days').textContent = '00';
      document.getElementById('hours').textContent = '00';
      document.getElementById('mins').textContent = '00';
      document.getElementById('seconds').textContent = '00';
      return;
    }

    const days = Math.floor(timeDiff / (1000 * 60 * 60 * 24));
    const hours = Math.floor(
      (timeDiff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
    );
    const minutes = Math.floor((timeDiff % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((timeDiff % (1000 * 60)) / 1000);

    const daysElement = document.getElementById('days');
    const hoursElement = document.getElementById('hours');
    const minsElement = document.getElementById('mins');
    const secondsElement = document.getElementById('seconds');

    if (daysElement.textContent !== days.toString().padStart(2, '0')) {
      daysElement.classList.add('flip');
    }
    if (hoursElement.textContent !== hours.toString().padStart(2, '0')) {
      hoursElement.classList.add('flip');
    }
    if (minsElement.textContent !== minutes.toString().padStart(2, '0')) {
      minsElement.classList.add('flip');
    }
    if (
      secondsElement.textContent !== seconds.toString().padStart(2, '0')
    ) {
      secondsElement.classList.add('flip');
    }

    setTimeout(() => {
      daysElement.classList.remove('flip');
      hoursElement.classList.remove('flip');
      minsElement.classList.remove('flip');
      secondsElement.classList.remove('flip');
    }, 600);

    daysElement.textContent = days.toString().padStart(2, '0');
    hoursElement.textContent = hours.toString().padStart(2, '0');
    minsElement.textContent = minutes.toString().padStart(2, '0');
    secondsElement.textContent = seconds.toString().padStart(2, '0');
  }

  setInterval(updateTimer, 1000);
  updateTimer();