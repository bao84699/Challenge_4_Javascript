const input1 = document.getElementById("input1");
const input2 = document.getElementById("input2");
const cong = document.getElementById("cong");
const tru = document.getElementById("tru");
const nhan = document.getElementById("nhan");
const chia = document.getElementById("chia");
const bang = document.getElementById("bang");
let pheptoan;

input1.addEventListener("input", () => {
    const giatri1 = input1.value;
    document.getElementById("displayinput1").textContent = giatri1;
})
input2.addEventListener("input", () => {
    const giatri2 = input2.value;
    document.getElementById("displayinput2").textContent = giatri2;
})
cong.addEventListener("click", () => {
    pheptoan = "+";
    document.getElementById("displaypheptinh").textContent = " + ";
    document.getElementById("ketqua").textContent = "";
})
tru.addEventListener("click", () => {
    pheptoan = "-";
    document.getElementById("displaypheptinh").textContent = " - ";
    document.getElementById("ketqua").textContent = "";
})
nhan.addEventListener("click", () => {
    pheptoan = "x";
    document.getElementById("displaypheptinh").textContent = " x ";
    document.getElementById("ketqua").textContent = "";
})
chia.addEventListener("click", () => {
    pheptoan = "/";
    document.getElementById("displaypheptinh").textContent = " / ";
    document.getElementById("ketqua").textContent = "";
})

bang.addEventListener("click", () => {
    const so1 = parseFloat(input1.value);
    const so2 = parseFloat(input2.value);
    if (isNaN(so1) || isNaN(parseFloat(so2))){
        document.getElementById("displaypheptinh").textContent = "";
        document.getElementById("displayinput2").textContent = "";
        document.getElementById("displayinput1").textContent = "";
        document.getElementById("ketqua").textContent = "Thieu gia tri !"
        return;
    }
    let ketqua;
    switch(pheptoan){
        case "+":
            ketqua = so1 + so2;
            if (!Number.isInteger(ketqua)) {
                ketqua = ketqua.toFixed(2);
            }
            document.getElementById("ketqua").textContent = " =" + ketqua;
            break;
        case "-":
            ketqua = so1 - so2;
            if (!Number.isInteger(ketqua)) {
                ketqua = ketqua.toFixed(2);
            }
            document.getElementById("ketqua").textContent = " =" + ketqua;
            break;
        case "x":
            ketqua = so1 * so2;
            if (!Number.isInteger(ketqua)) {
                ketqua = ketqua.toFixed(2);
            }
            document.getElementById("ketqua").textContent = " =" + ketqua;
            break;
        case "/":
            if (so2 == 0){
                document.getElementById("displaypheptinh").textContent = "";
                document.getElementById("displayinput2").textContent = "";
                document.getElementById("displayinput1").textContent = "";
                document.getElementById("ketqua").textContent = "Khong chia cho 0 !"
            }
            else {
                ketqua = so1 / so2;
                if (!Number.isInteger(ketqua)) {
                    ketqua = ketqua.toFixed(2);
                }
                document.getElementById("ketqua").textContent = " =" + ketqua;
            }
            break;
        default:
            document.getElementById("ketqua").textContent = "Vui long chon phep tinh !";
            document.getElementById("displaypheptinh").textContent = "";
            document.getElementById("displayinput2").textContent = "";
            document.getElementById("displayinput1").textContent = "";
    }
    pheptoan = "";
})

function xoagiatricu() {
    document.getElementById("displaypheptinh").textContent = "";
    document.getElementById("ketqua").textContent = "";
}

input1.addEventListener("input", xoagiatricu);
input2.addEventListener("input", xoagiatricu);