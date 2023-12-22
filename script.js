const console_e = document.getElementById(" console_e");
const runner = document.getElementById("runner");
const submit_button = document.getElementById("submit-button");
const names = ["Rahul", "Samsung M32", "Samsung A33", "Samsung M34", "Samsung M35", "Samsung", "Harry", "Pinkky jain", "Mukeshh", "Gopi123_", "Hiddhi", "Shubham_45", "Shubham kumar"];
let num;
const email_f = ["Rahul@143", "Gopal@123", "Harry@123", "Pinkky@123", "Mukeshh@123", "Gopi@123", "Pinky@123", "Hiddhi@123", "Shubham@123", "Shubham@123", "Rahul@143", "Gopal@123", "Harry@123", "Pinkky@123", "Mukeshh@123", "Gopi@123", "Pinky@123", "Hiddhi@123", "Shubham@123", "Shubham@123"];
const email_b = ["@gmail.com", "@yahoo.com", "@hotmail.com"];
const r_num1 = (Math.round(Math.random() * names.length));
const r_num2 = Math.round(Math.random() * names.length);
const r_num3 = Math.round(Math.random() * email_b.length);
const email = email_b[r_num3];
const m1 = "SCANING WIFI NETWORKS";
const m2 = "ENTER INDEX NUMBER";
const m3 = "CLIENT SELECTED";
const m4 = "SELECTED CLIENT";
const m5 = "CLIENT DETAILS";
let s_a = ">>";
let s_b = "#";
let s_c = "--RUNNING";
let s_d = "ERROR : ";
let s_e = "@";
let input_box;
async function scroll_e() {
  window.setInterval(function() {
    console_e.scrollTop = console_e.scrollHeight;
  }, 1);
}
scroll_e()
function message_5_fun() {
  let message_7 = document.createElement("p");
  let message_8 = document.createElement("p");
  let message_9 = document.createElement("p");
  message_7.innerHTML = `${s_a} ${m5} ${s_c}`;
  console_e.appendChild(message_7);
  setTimeout(function() {
    message_8.innerHTML = `${s_a}${m5}<br>${s_b} E-mail :${email_f[num]}${email}<br>${s_b} Facebook Id Fetched<br>${s_b}Instagram Id Fetched<br>${s_b}Snapchat Id Fetched`;
    message_9.innerHTML = `${s_a}DATA FETCHED COMPLETE`
    console_e.appendChild(message_8);
    console_e.appendChild(message_9);
  }, 2000)
  submit_button.removeEventListener("click", message_4_fun);
  submit_button.addEventListener("click", message_5_fun);
}
function message_4_fun() {
  let input_box_2 = document.getElementById("input-box").value;
  input_box_2 = input_box_2.toLowerCase();
  let message_5 = document.createElement("p");
  let message_6 = document.createElement("p");
  if (input_box_2 == "y") {
    message_6.innerHTML = `${s_a}DATA FETCHING ${s_c}`;
    setTimeout(() => {
      message_5.innerHTML = `${s_a} ${m4} | ${names[num]} DATA FETCHED SUCCESSFULLY`;
      console_e.appendChild(message_5)
      message_5_fun();
    }, 10000);
    console_e.appendChild(message_6)

  } else if (input_box_2 == "n") {
    message_5.innerHTML = `${s_a} YOU REJECTED THE REQUEST`;
    console_e.appendChild(message_5)
  }
  else if (input_box == undefined || input_box < 0) {
    console.error("ERROR : INPUT MIGHT BE WRONG");
    message_5.innerHTML = `${s_a} ${s_e} ${s_d} INPUT MIGHT BE WRONG * ENTER CAREFULLY`;
    console_e.appendChild(message_5)
  }
  else {
    message_5.innerHTML = `${s_a}${s_d} INVALID INPUT`;
    console_e.appendChild(message_5)
  }
  submit_button.removeEventListener("click", message_3_fun);
  submit_button.addEventListener("click", message_4_fun);

}
function message_3_fun() {
  let message_4 = document.createElement("p");
  message_4.innerHTML = `${s_a} ${m3} ${names[num]} <br> TO FETCH DATA TYPE (y/n)`;
  console_e.appendChild(message_4)
  submit_button.removeEventListener("click", message_2_fun);
  submit_button.addEventListener("click", message_3_fun);
  message_4_fun()

};
function message_2_fun() {
  setTimeout(() => {
    let message_2 = document.createElement("p");
    let message_3 = document.createElement("p");
    message_2.className = "message";
    message_2.innerHTML = `${s_a}  ${m2} <br> ${s_b}(1) | ${r_num1} | ${names[r_num1]}<br>${s_b}(2) | ${r_num2} | ${names[r_num2]}`;
    console_e.appendChild(message_2);
    let input_box = document.getElementById("input-box").value;
    input_box_n = Number.parseInt(input_box);
    num = input_box
    console.log(input_box)
    if (input_box_n == r_num1 || input_box_n == r_num2) {
      message_3_fun()
    } else if (input_box == "" || input_box < 0) {
    } else {
      message_3.innerHTML = ` ${s_d}INVALID INDEX NUMBER `;
      console_e.appendChild(message_3)

    }
  }, 2000)
  submit_button.removeEventListener("click", message_1_fun);
  submit_button.addEventListener("click", message_2_fun);
};
function message_1_fun() {
  let message_1 = document.createElement("p");
  message_1.className = "message";
  message_1.innerHTML = `${s_a} ${m1} ${s_c}`;
  console_e.appendChild(message_1);
  message_2_fun()
};
submit_button.addEventListener("click", message_1_fun);