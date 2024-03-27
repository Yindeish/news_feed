function getFormattedDate(): string {
    const currentDate = new Date();

    const monthNames = [
        'JAN', 'FEB', 'MAR', 'APR', 'MAY', 'JUN',
        'JUL', 'AUG', 'SEP', 'OCT', 'NOV', 'DEC'
    ];

    const dayOfWeek = currentDate.toLocaleDateString('en-US', { weekday: 'long' });
    const month = monthNames[currentDate.getMonth()];
    const dayOfMonth = currentDate.getDate();
    const year = currentDate.getFullYear();

    const formattedDate = `${dayOfWeek.toUpperCase()} ${month} ${dayOfMonth} ${year}`;

    return formattedDate;
}

function getFormattedTime(): string {
    const currentDate = new Date();

    let hours = currentDate.getHours();
    const minutes = currentDate.getMinutes();

    let ampm = 'AM';
    if (hours >= 12) {
        ampm = 'PM';
        hours %= 12;
    }
    if (hours === 0) {
        hours = 12;
    }

    const timezoneOffsetHours = currentDate.getTimezoneOffset() / 60;
    const timezoneOffsetString = timezoneOffsetHours >= 0 ? `GMT+${timezoneOffsetHours}` : `GMT${timezoneOffsetHours}`;

    const formattedTime = `${hours}:${minutes.toString().padStart(2, '0')} ${ampm} ${timezoneOffsetString}`;

    return formattedTime;
}

function get_date_format(offset: number): string {
    const currentDate = new Date();

    currentDate.setDate(currentDate.getDate() - offset);

    const year = currentDate.getFullYear();
    const month = (currentDate.getMonth() + 1).toString().padStart(2, '0');
    const day = currentDate.getDate().toString().padStart(2, '0');

    return `${year}-${month}-${day}`;
}

const today_date = getFormattedDate();

const today_gmt_time = getFormattedTime();

const last_3_days = get_date_format(3);

export { today_date, last_3_days, today_gmt_time }

