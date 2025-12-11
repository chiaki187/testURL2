//モーダル達
const modal_1=document.querySelector("#modal_btn_1") as HTMLElement;
const modal_2=document.querySelector("#modal_btn_2") as HTMLElement;
const modal_3=document.querySelector("#modal_btn_3") as HTMLElement;
const modal_4=document.querySelector("#modal_btn_4") as HTMLElement;
const modal_5=document.querySelector("#modal_btn_5") as HTMLElement;
const modal_6=document.querySelector("#modal_btn_6") as HTMLElement;
const modal_7=document.querySelector("#modal_btn_7") as HTMLElement;
const modal_8=document.querySelector("#modal_btn_8") as HTMLElement;
const modal_9=document.querySelector("#modal_btn_9") as HTMLElement;
//ずれを入れたとき
const modal2_1=document.querySelector("#modal2_btn_1") as HTMLElement;
const modal2_2=document.querySelector("#modal2_btn_2") as HTMLElement;
const modal2_3=document.querySelector("#modal2_btn_3") as HTMLElement;
const modal2_4=document.querySelector("#modal2_btn_4") as HTMLElement;
const modal2_5=document.querySelector("#modal2_btn_5") as HTMLElement;
const modal2_6=document.querySelector("#modal2_btn_6") as HTMLElement;
const modal2_7=document.querySelector("#modal2_btn_7") as HTMLElement;
const modal2_8=document.querySelector("#modal2_btn_8") as HTMLElement;
const modal2_9=document.querySelector("#modal2_btn_9") as HTMLElement;


//持続時間
const duration=700;
const dduration=200;

//どのアニメーションでモーダルを閉じるのか
var closeType=1;

const close=document.querySelector("#close") as HTMLElement;
const modal=document.querySelector("#modal") as HTMLElement;
const mask=document.querySelector("#mask") as HTMLElement;
const height = window.innerHeight;


//強調

const showKeyframs={
  opacity:[1,1],
  translate:[`0 ${height}px`,"0 0"],
  visibility: "visible",
}

const hideKeyframs={
  opacity:[1,1],
  translate:["0 0",`0 ${height}px`],
  visibility: "hidden",
}

const showKeyframsMask={
  opacity:[0,1],
  visibility: "visible",
}

const hideKeyframsMask={
  opacity:[1,0],
  visibility: "hidden",
}

const options1={
  duration: duration,
  easing: "ease",
  fill:"forwards" as FillMode
}
const options11={
  duration: duration,
  delay: dduration ,
  easing: "ease",
  fill:"forwards" as FillMode
}

const options2={
  duration: duration,
  easing: "cubic-bezier(0.05, 0.7, 0.1, 1.0)",
  fill:"forwards" as FillMode
}

const options22={
  duration: duration,
  delay: dduration,
  easing: "cubic-bezier(0.05, 0.7, 0.1, 1.0)",
  fill:"forwards" as FillMode
}

const options3={
  duration: duration,
  easing: "ease",
  fill:"forwards" as FillMode
}

const options33={
  duration: duration,
  deray: dduration,
  easing: "ease",
  fill:"forwards" as FillMode
}


//どのアニメーションでモーダルを閉じるのか設定
close.addEventListener("click",()=>{
  if(closeType==1){
    modal.animate(hideKeyframs,options1);
    mask.animate(hideKeyframsMask,options1);
  }else if(closeType==2){
    modal.animate(hideKeyframs,options1);
    mask.animate(hideKeyframsMask,options2);
  }else if(closeType==3){
    modal.animate(hideKeyframs,options1);
    mask.animate(hideKeyframsMask,options3);
  }else if(closeType==4){
    modal.animate(hideKeyframs,options2);
    mask.animate(hideKeyframsMask,options1);
  }else if(closeType==5){
    modal.animate(hideKeyframs,options2);
    mask.animate(hideKeyframsMask,options2);
  }else if(closeType==6){
    modal.animate(hideKeyframs,options2);
    mask.animate(hideKeyframsMask,options3);
  }else if(closeType==7){
    modal.animate(hideKeyframs,options3);
    mask.animate(hideKeyframsMask,options1);
  }else if(closeType==8){
    modal.animate(hideKeyframs,options3);
    mask.animate(hideKeyframsMask,options2);
  }else if(closeType==9){
    modal.animate(hideKeyframs,options3);
    mask.animate(hideKeyframsMask,options3);
  }

  else if(closeType==21){
    modal.animate(hideKeyframs,options1);
    mask.animate(hideKeyframsMask,options11);
  }else if(closeType==22){
    modal.animate(hideKeyframs,options1);
    mask.animate(hideKeyframsMask,options22);
  }else if(closeType==23){
    modal.animate(hideKeyframs,options1);
    mask.animate(hideKeyframsMask,options33);
  }else if(closeType==24){
    modal.animate(hideKeyframs,options2);
    mask.animate(hideKeyframsMask,options11);
  }else if(closeType==25){
    modal.animate(hideKeyframs,options2);
    mask.animate(hideKeyframsMask,options22);
  }else if(closeType==26){
    modal.animate(hideKeyframs,options2);
    mask.animate(hideKeyframsMask,options33);
  }else if(closeType==27){
    modal.animate(hideKeyframs,options3);
    mask.animate(hideKeyframsMask,options11);
  }else if(closeType==28){
    modal.animate(hideKeyframs,options3);
    mask.animate(hideKeyframsMask,options22);
  }else if(closeType==29){
    modal.animate(hideKeyframs,options3);
    mask.animate(hideKeyframsMask,options33);
  }
});

mask.addEventListener("click",()=>{
  close.click();
});

//モーダル１
modal_1.addEventListener("click",()=>{
  closeType=1;
  modal.animate(showKeyframs,options1);
  mask.animate(showKeyframsMask,options1);
});


//モーダル２
modal_2.addEventListener("click",()=>{
  closeType=2;
  modal.animate(showKeyframs,options1);
  mask.animate(showKeyframsMask,options2);
});



//モーダル３
modal_3.addEventListener("click",()=>{
  closeType=3;
  modal.animate(showKeyframs,options1);
  mask.animate(showKeyframsMask,options3);
});



//モーダル４
modal_4.addEventListener("click",()=>{
  closeType=4;
  modal.animate(showKeyframs,options2);
  mask.animate(showKeyframsMask,options1);
});


//モーダル５
modal_5.addEventListener("click",()=>{
  closeType=5;
  modal.animate(showKeyframs,options2);
  mask.animate(showKeyframsMask,options2);
});


//モーダル６
modal_6.addEventListener("click",()=>{
  closeType=6;
  modal.animate(showKeyframs,options2);
  mask.animate(showKeyframsMask,options3);
});



//モーダル７
modal_7.addEventListener("click",()=>{
  closeType=7;
  modal.animate(showKeyframs,options3);
  mask.animate(showKeyframsMask,options1);
});



//モーダル８
modal_8.addEventListener("click",()=>{
  closeType=8;
  modal.animate(showKeyframs,options3);
  mask.animate(showKeyframsMask,options2);
});




//モーダル９
modal_9.addEventListener("click",()=>{
  closeType=9;
  modal.animate(showKeyframs,options3);
  mask.animate(showKeyframsMask,options3);
});





//少しずれを入れたとき

//モーダル１
modal2_1.addEventListener("click",()=>{
  closeType=21;
  modal.animate(showKeyframs,options1);
  mask.animate(showKeyframsMask,options11);
});


//モーダル２
modal2_2.addEventListener("click",()=>{
  closeType=22;
  modal.animate(showKeyframs,options1);
  mask.animate(showKeyframsMask,options22);
});



//モーダル３
modal2_3.addEventListener("click",()=>{
  closeType=23;
  modal.animate(showKeyframs,options1);
  mask.animate(showKeyframsMask,options33);
});



//モーダル４
modal2_4.addEventListener("click",()=>{
  closeType=24;
  modal.animate(showKeyframs,options2);
  mask.animate(showKeyframsMask,options11);
});


//モーダル５
modal2_5.addEventListener("click",()=>{
  closeType=25;
  modal.animate(showKeyframs,options2);
  mask.animate(showKeyframsMask,options22);
});


//モーダル６
modal2_6.addEventListener("click",()=>{
  closeType=26;
  modal.animate(showKeyframs,options2);
  mask.animate(showKeyframsMask,options33);
});



//モーダル７
modal2_7.addEventListener("click",()=>{
  closeType=27;
  modal.animate(showKeyframs,options3);
  mask.animate(showKeyframsMask,options11);
});



//モーダル８
modal2_8.addEventListener("click",()=>{
  closeType=28;
  modal.animate(showKeyframs,options3);
  mask.animate(showKeyframsMask,options22);
});




//モーダル９
modal2_9.addEventListener("click",()=>{
  closeType=29;
  modal.animate(showKeyframs,options3);
  mask.animate(showKeyframsMask,options33);
});

