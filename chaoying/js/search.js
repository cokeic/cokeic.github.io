function setShow() {
    getdata(function(res) {
        console.log(res);
        res.data.rows.forEach(function(item,index) {
            $(`
                <li>
                <img src="${item.cover}" alt="">
                </li>
            `).appendTo($("#show"))
        });
        
    },"./json/search.json")
}