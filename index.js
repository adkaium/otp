let Otp;

const expireOtpElm = document.getElementById('expire-otp')

function expireOTP(){
     
  const totatime = 30000;
  const interval = 1000;
  let perSecond = totatime/interval;
  const intervalId = setInterval(() => {
    expireOtpElm.innerText=`OTP will be expire in ${perSecond} seconds`;
    perSecond = perSecond - 1;

  }, interval);

  setTimeout(() => {
    expireOtpElm.innerText='OTP Expired';
    clearInterval(intervalId);
    genaretOTP();
  }, totatime);
}


function getValue() {
  const inputEle = document.getElementById("input-box-id");
  inputEle.addEventListener("input", (e) => {
    const target = e.target;
    const value = target.value;
    if (isNaN(value)) {
      e.target.value = "";
      return;
    }
    const nextElement = target.nextElementSibling;

    if (nextElement) {
      nextElement.focus();
    }
     

     validateOTP();
   
  });
  
}

function genaretOTP() {
   Otp = Math.floor(1000 + Math.random() * 9000);
  console.log(Otp);
  const otpEle = document.getElementById("otp_display");
  otpEle.innerText = `Your OTP: ${Otp}`;
  expireOTP();
}

function validateOTP() {
  let inputNUmber = "";
  const boxInputElem = document.getElementById("input-box-id");
  const child = [...boxInputElem.children]
  console.log(child);
    child.forEach(elem=>{
        inputNUmber = inputNUmber + elem.value;
    })

  console.log(Otp,inputNUmber);

   const result = Otp === parseInt(inputNUmber, 10);
   console.log(result);
   const otpValid = document.getElementById("otp-valid");
   if(result){
     otpValid.innerText='OTP is Valid ';
     otpValid.className="valid-otp";
     expireOtpElm.remove()
     
     
   }else{
      otpValid.innerText= 'OTP is Invalid';
      otpValid.className='invalid-otp'
   }
}

function init() {
  genaretOTP();
  getValue();
 
}

init();
