let dom = document.getElementById('selector-menu')
dom.innerHTML = `<p id="desc">Chọn trình độ, dạng toán, số câu hỏi và luyện tập kỹ năng toán của bạn.</p>
<button onclick="chonLop()" id="start-btn"><a href="#">BẮT ĐẦU</a></button>`


function chonLop(){
    dom.innerHTML =`
    <div id="skill1">
        <a onclick = "hinhhocsohoc()" class="skill-btn" id="lop-1" role="button">Lớp 1</a>
        <a onclick = "hinhhocsohoc()" class="skill-btn" id="lop-2" role="button">Lớp 2</a>
        <a onclick = "hinhhocsohoc()" class="skill-btn" id="lop-3" role="button">Lớp 3</a> 
    </div>
    <div id="skill2">
        <a onclick = "hinhhocsohoc()" class="skill-btn" id="lop-4" role="button">Lớp 4</a>
        <aonclick = "hinhhocsohoc()" class="skill-btn" id="lop-5" role="button">Lớp 5</a>
        <a class="skill-btn" id="giai-toan-btn" role="button">Giải toán</a>
    </div>`
}
function hinhhocsohoc() {
    dom.innerHTML = `<a onclick="cacDangToan()" class="skill-btn" id="so-hoc-btn" role="button">Số học</a>
    <a onclick="cacDangToan()" class="skill-btn" id="hinh-hoc-btn" role="button">Hình học</a>`
}

dom.addEventListener('click', function(data){
    console.log(data)
})

let idclick = '0'
