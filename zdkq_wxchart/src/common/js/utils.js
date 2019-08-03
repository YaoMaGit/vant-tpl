let dateFilters = dataStr => {
    let time = new Date(dataStr * 1000);
    function timeAdd0(str) {
        if (str < 10) {
            str = '0' + str;
        }
        return str
    }
    let y = time.getFullYear();
    let m = time.getMonth() + 1;
    let d = time.getDate();
    let h = time.getHours();
    let mm = time.getMinutes();
    let s = time.getSeconds();
    return y + '-' + timeAdd0(m) + '-' + timeAdd0(d) //+ ' ' + timeAdd0(h) + ':' + timeAdd0(mm) + ':' + timeAdd0(s);
}
export { dateFilters }
