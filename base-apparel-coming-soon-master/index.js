//selecting paragraph
const para = document.getElementById('paragraph');
const the_paragraph = "Hello fellow shoppers! We're currently building our new fashion store. Add your email below to stay up-to-date with announcements and our launch deals. Email Address";
para.innerHTML = the_paragraph;
//getting the heading
const headings = {
    h_were:"WE'RE",
    h_csoon:"COMING <br>SOON"
}
document.getElementById('were').innerHTML = headings.h_were;
document.getElementById('csoon').innerHTML = headings.h_csoon;
//input validation
const input_holder = document.getElementById('my_form').innerHTML

const par_under_btn = document.getElementById('hid_paragraph').innerHTML;
const my_displ = "please provide a valid email";

//validation part
const emailInput = document.getElementById("input");
const valiidemail = emailInput.validity.valid;
if(valiidemail !== true){
            const hid_= document.getElementById("name_surnam_span");
            hid_.classList.remove('hid_paragraph')
}

