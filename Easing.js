// モーダル達
const modal_1 = document.querySelector("#modal_btn_1");
const modal_2 = document.querySelector("#modal_btn_2");
const modal_3 = document.querySelector("#modal_btn_3");
const modal_4 = document.querySelector("#modal_btn_4");
const modal_5 = document.querySelector("#modal_btn_5");
const modal_6 = document.querySelector("#modal_btn_6");
const modal_7 = document.querySelector("#modal_btn_7");
const modal_8 = document.querySelector("#modal_btn_8");
const modal_9 = document.querySelector("#modal_btn_9");

// ずれを入れたとき
const modal2_1 = document.querySelector("#modal2_btn_1");
const modal2_2 = document.querySelector("#modal2_btn_2");
const modal2_3 = document.querySelector("#modal2_btn_3");
const modal2_4 = document.querySelector("#modal2_btn_4");
const modal2_5 = document.querySelector("#modal2_btn_5");
const modal2_6 = document.querySelector("#modal2_btn_6");
const modal2_7 = document.querySelector("#modal2_btn_7");
const modal2_8 = document.querySelector("#modal2_btn_8");
const modal2_9 = document.querySelector("#modal2_btn_9");

// 持続時間
const duration = 700;
const dduration = 200;

// どのアニメーションでモーダルを閉じるのか
let closeType = 1;

const close = document.querySelector("#close");
const modal = document.querySelector("#modal");
const mask = document.querySelector("#mask");
const height = window.innerHeight;

// 強調
const showKeyframes = {
  opacity: [1, 1],
  transform: [`translate(0, ${height}px)`, "translate(0, 0)"],
  visibility: "visible"
};

const hideKeyframes = {
  opacity: [1, 1],
  transform: ["translate(0, 0)", `translate(0, ${height}px)`],
  visibility: "hidden"
};

const showKeyframesMask = {
  opacity: [0, 1],
  visibility: "visible"
};

const hideKeyframesMask = {
  opacity: [1, 0],
  visibility: "hidden"
};

// アニメーションオプション
const options1 = {
  duration: duration,
  easing: "ease",
  fill: "forwards"
};
const options11 = {
  duration: duration,
  delay: dduration,
  easing: "ease",
  fill: "forwards"
};

const options2 = {
  duration: duration,
  easing: "cubic-bezier(0.05, 0.7, 0.1, 1.0)",
  fill: "forwards"
};
const options22 = {
  duration: duration,
  delay: dduration,
  easing: "cubic-bezier(0.05, 0.7, 0.1, 1.0)",
  fill: "forwards"
};

const options3 = {
  duration: duration,
  easing: "ease",
  fill: "forwards"
};
const options33 = {
  duration: duration,
  delay: dduration, // typo修正: deray → delay
  easing: "ease",
  fill: "forwards"
};

// モーダルを閉じる
close.addEventListener("click", () => {
  if (!modal || !mask) return;

  if (closeType === 1) {
    modal.animate(hideKeyframes, options1);
    mask.animate(hideKeyframesMask, options1);
  } else if (closeType === 2) {
    modal.animate(hideKeyframes, options1);
    mask.animate(hideKeyframesMask, options2);
  } else if (closeType === 3) {
    modal.animate(hideKeyframes, options1);
    mask.animate(hideKeyframesMask, options3);
  } else if (closeType === 4) {
    modal.animate(hideKeyframes, options2);
    mask.animate(hideKeyframesMask, options1);
  } else if (closeType === 5) {
    modal.animate(hideKeyframes, options2);
    mask.animate(hideKeyframesMask, options2);
  } else if (closeType === 6) {
    modal.animate(hideKeyframes, options2);
    mask.animate(hideKeyframesMask, options3);
  } else if (closeType === 7) {
    modal.animate(hideKeyframes, options3);
    mask.animate(hideKeyframesMask, options1);
  } else if (closeType === 8) {
    modal.animate(hideKeyframes, options3);
    mask.animate(hideKeyframesMask, options2);
  } else if (closeType === 9) {
    modal.animate(hideKeyframes, options3);
    mask.animate(hideKeyframesMask, options3);
  } else if (closeType >= 21 && closeType <= 29) {
    const modIndex = closeType % 10;
    const optionModal = [options1, options2, options3][Math.floor((closeType - 21) / 3)];
    const optionMask = [options11, options22, options33][modIndex - 1];
    modal.animate(hideKeyframes, optionModal);
    mask.animate(hideKeyframesMask, optionMask);
  }
});

mask.addEventListener("click", () => {
  close.click();
});

// モーダルを開く関数
function setupModal(button, type, optionModal, optionMask) {
  if (!button) return;
  button.addEventListener("click", () => {
    closeType = type;
    if (!modal || !mask) return;
    modal.animate(showKeyframes, optionModal);
    mask.animate(showKeyframesMask, optionMask);
  });
}

// 通常モーダル
setupModal(modal_1, 1, options1, options1);
setupModal(modal_2, 2, options1, options2);
setupModal(modal_3, 3, options1, options3);
setupModal(modal_4, 4, options2, options1);
setupModal(modal_5, 5, options2, options2);
setupModal(modal_6, 6, options2, options3);
setupModal(modal_7, 7, options3, options1);
setupModal(modal_8, 8, options3, options2);
setupModal(modal_9, 9, options3, options3);

// ずらしたモーダル
setupModal(modal2_1, 21, options1, options11);
setupModal(modal2_2, 22, options1, options22);
setupModal(modal2
