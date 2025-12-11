// モーダルボタン
const modal_1 = document.querySelector("#modal_btn_1");
const modal_2 = document.querySelector("#modal_btn_2");
const modal_3 = document.querySelector("#modal_btn_3");
const modal_4 = document.querySelector("#modal_btn_4");
const modal_5 = document.querySelector("#modal_btn_5");
const modal_6 = document.querySelector("#modal_btn_6");
const modal_7 = document.querySelector("#modal_btn_7");
const modal_8 = document.querySelector("#modal_btn_8");
const modal_9 = document.querySelector("#modal_btn_9");

// 少しずれたモーダル
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

// どのアニメーションでモーダルを閉じるか
let closeType = 1;

const close = document.querySelector("#close");
const modal = document.querySelector("#modal");
const mask = document.querySelector("#mask");
const height = window.innerHeight;

// モーダル表示・非表示の keyframes
const showKeyframes = {
  opacity: [1, 1],
  translate: [`0 ${height}px`, "0 0"],
  visibility: "visible"
};

const hideKeyframes = {
  opacity: [1, 1],
  translate: ["0 0", `0 ${height}px`],
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
const options1 = { duration: duration, easing: "ease", fill: "forwards" };
const options11 = { duration: duration, delay: dduration, easing: "ease", fill: "forwards" };
const options2 = { duration: duration, easing: "cubic-bezier(0.05, 0.7, 0.1, 1.0)", fill: "forwards" };
const options22 = { duration: duration, delay: dduration, easing: "cubic-bezier(0.05, 0.7, 0.1, 1.0)", fill: "forwards" };
const options3 = { duration: duration, easing: "ease", fill: "forwards" };
const options33 = { duration: duration, delay: dduration, easing: "ease", fill: "forwards" };

// モーダルを閉じる
close.addEventListener("click", () => {
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
    let modalOption = options1;
    let maskOption;
    if ([21,22,23].includes(closeType)) modalOption = options1;
    else if ([24,25,26].includes(closeType)) modalOption = options2;
    else modalOption = options3;

    if ([21,24,27].includes(closeType)) maskOption = options11;
    else if ([22,25,28].includes(closeType)) maskOption = options22;
    else maskOption = options33;

    modal.animate(hideKeyframes, modalOption);
    mask.animate(hideKeyframesMask, maskOption);
  }
});

// マスククリックでも閉じる
mask.addEventListener("click", () => close.click());

// モーダル開く関数
function openModal(modalIndex, modalOption, maskOption) {
  closeType = modalIndex;
  modal.animate(showKeyframes, modalOption);
  mask.animate(showKeyframesMask, maskOption);
}

// 通常モーダル
modal_1.addEventListener("click", () => openModal(1, options1, options1));
modal_2.addEventListener("click", () => openModal(2, options1, options2));
modal_3.addEventListener("click", () => openModal(3, options1, options3));
modal_4.addEventListener("click", () => openModal(4, options2, options1));
modal_5.addEventListener("click", () => openModal(5, options2, options2));
modal_6.addEventListener("click", () => openModal(6, options2, options3));
modal_7.addEventListener("click", () => openModal(7, options3, options1));
modal_8.addEventListener("click", () => openModal(8, options3, options2));
modal_9.addEventListener("click", () => openModal(9, options3, options3));

// ずれモーダル
modal2_1.addEventListener("click", () => openModal(21, options1, options11));
modal2_2.addEventListener("click", () => openModal(22, options1, options22));
modal2_3.addEventListener("click", () => openModal(23, options1, options33));
modal2_4.addEventListener("click", () => openModal(24, options2, options11));
modal2_5.addEventListener("click", () => openModal(25, options2, options22));
modal2_6.addEventListener("click", () => openModal(26, options2, options33));
modal2_7.addEventListener("click", () => openModal(27, options3, options11));
modal2_8.addEventListener("click", () => openModal(28, options3, options22));
modal2_9.addEventListener("click", () => openModal(29, options3, options33));
