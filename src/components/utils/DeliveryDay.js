const DeliveryDay = () => {
    var days = ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'];
    const date = new Date();
    const currentHour = date.toLocaleString('en-US', {'hour': 'numeric','hour12': false});
    const tomorrow = new Date(date.getTime() + 24 * 60 * 60 * 1000);
    const afterTomorrow = new Date(date.getTime() + 2 * 24 * 60 * 60 * 1000);
    const returnDay = (currentHour >= 24 || currentHour <= 11) ? days[tomorrow.getDay()] : days[afterTomorrow.getDay()];
    return returnDay
}
export default DeliveryDay;