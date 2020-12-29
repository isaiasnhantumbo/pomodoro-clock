const progressBar = new ProgressBar.Circle('#pomodoro-timer', {
    strokeWidth: 2,
    text: {
      value: '25:00',
    },
    trailColor: '#f4f4f4',
  })

//   pomodoroTimer.innerText = result.toString()
//   to:
  
//   progressBar.text.innerText = result.toString()

const calculateSessionProgress = () => {
    // calculate the completion rate of this session
    const sessionDuration =
      type === 'Work' ? workSessionDuration : breakSessionDuration
    return (timeSpentInCurrentSession / sessionDuration) * 10
  }