const isWeekend = day => {
    // 6 when it's Saturday, 0 when it's Sunday
    return day % 7 === 6 || day % 7 === 0;
}

const getDayName = day => {
    const date = new Date(Date.UTC(2022, 8, day));
  
    return new Intl.DateTimeFormat("en-US", { weekday: "short" })
    .format(date);
}

export { isWeekend };
