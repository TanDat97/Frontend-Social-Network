export const TimeToMilliSeconds = (date) =>  { 
    var temp = new Date(date)
    temp = temp.getTime()
    return temp
}