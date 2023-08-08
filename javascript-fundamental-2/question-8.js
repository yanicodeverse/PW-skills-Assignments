function calculateRemainingDays(eventDate) {
    const currentDate = new Date()
    const upcomingEventDate = new Date(eventDate)

    const timeDiff = upcomingEventDate.getTime() - currentDate.getTime()
    const daysDiff = Math.ceil(timeDiff / (1000 * 60 * 60 * 24))

    return daysDiff
}

const eventDate = '2023-11-9'

console.log(calculateRemainingDays(eventDate))