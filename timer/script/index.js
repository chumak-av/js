class CountdownTimer {
    constructor(selector, targetDate) {
        this.selector = selector;
        this.targetDate = new Date(targetDate)
        this.timer = this.timer.bind(this)
    };
    timer() {
        const day = document.querySelector('span[data-value="days"]')
        const hour = document.querySelector('span[data-value="hours"]')
        const mins = document.querySelector('span[data-value="minutes"]')
        const secs = document.querySelector('span[data-value="seconds"]')
        const currentDate = Date.now();
        this.time = this.targetDate - currentDate;
        const days = Math.floor(this.time / (1000 * 60 * 60 * 24))
        const hours = Math.floor(this.time % (1000 * 60 * 60 * 24) / (1000 * 60 * 60))
        const minutes = Math.floor(this.time % (1000 * 60 * 60) / (1000 * 60))
        const seconds = Math.floor(this.time % (1000 * 60) / 1000)

        if (days < 10) {
            day.textContent = `0${days}`
        } else {
            day.textContent = days
        }
        if (hours < 10) {
            hour.textContent = `0${hours}`
        } else {
            hour.textContent = hours
        }
        if (minutes < 10) {
            mins.textContent = `0${minutes}`
        } else {
            mins.textContent = minutes
        }
        if (seconds < 10) {
            secs.textContent = `0${seconds}`
        } else {
            secs.textContent = seconds
        }
    }
    start() {
        setInterval(this.timer, 1000)
    }
}
const countdownTimer = new CountdownTimer('#timer-1', '2021 june 1 06 00:00')
countdownTimer.start()