'use strict'

const totalAmount = document.querySelector(`.total-amount`);

// Variables for Personal Info

const inputName = document.getElementById('input-name');
const inputEmail = document.getElementById('input-email');
const inputNumber = document.getElementById('input-number');

const lettersOnly = /^[a-zA-Z ]*$/;
const fullnameFormat = /[A-Za-z]{2,3}\s[A-Za-z]{2,3}/;
const emailFormat = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;

const errorName = document.getElementById('error-name');
const errorEmail = document.getElementById('error-email');
const errorNumber = document.getElementById('error-number');

const inputNameCheck = document.getElementById('input-name-checked');
const inputEmailCheck = document.getElementById('input-email-checked');
const inputNumberCheck = document.getElementById('input-number-checked');

// Variables for Next Step Nav

const slideStep = document.querySelectorAll('.slide__container');
let currentStep = 0;

// Variables of Tab Navigation

const planTabContainer = document.querySelector('.plan-tab-container');
const tab = document.querySelectorAll('.tab');
const errorPlan = document.querySelector('.error-plan');

// Variables for Selecting Plan Navigation

const checkbox = document.querySelector('.checkbox');
const monthly = document.querySelector('.monthly');
const yearly = document.querySelector('.yearly');
const perMonth = document.querySelectorAll('.per-month');
const perYear = document.querySelectorAll('.per-year');
const freeMonths = document.querySelectorAll('.free-month');

// Variables for Add-ons Container

const addOnsTabContainer = document.querySelector('.add-ons-tab-container');
const addOnsTab = document.querySelectorAll('.add-ons-tab');

// Variables for Chosen Plan Text Content 

const chosePlan = document.querySelector('.chose-plan');
const chosePlanPrice = document.querySelector('.chose-plan-price');

// Variables for Chosen Services Text Content

const choseServices = document.querySelectorAll('.chose-service').length;

// Variables to highlight next step span

const stepHighlight = document.querySelectorAll('.step-highlight');

// Variables for Exact Amount year and month

const exactMonthAmount1 = parseInt(document.querySelector(`.per-month-ao--1`).dataset.aoExactMonthamount);
const exactMonthAmount2 = parseInt(document.querySelector(`.per-month-ao--2`).dataset.aoExactMonthamount);
const exactMonthAmount3 = parseInt(document.querySelector(`.per-month-ao--3`).dataset.aoExactMonthamount);

const exactYearAmount1 = parseInt(document.querySelector(`.per-year-ao--1`).dataset.aoExactYearamount);
const exactYearAmount2 = parseInt(document.querySelector(`.per-year-ao--2`).dataset.aoExactYearamount);
const exactYearAmount3 = parseInt(document.querySelector(`.per-year-ao--3`).dataset.aoExactYearamount);

// Variables for Buttons

const continueButton = document.querySelector('.next-button');
const backButton = document.querySelector('.back-button');
const skipButton = document.querySelector('.skip-button');
const changeButton = document.querySelector('.change-button');
const confirmButton = document.querySelector(`.confirm-button`);

// Highlight Steps //

const highlight = function(hl) {
  document.querySelectorAll(`.step-highlight`).forEach(sh => sh.classList.remove(`step_highlight--active`));
  document.querySelector(`.sh--${(hl + 1)}`).classList.add(`step_highlight--active`);
}

highlight(0);

// backButton.style.display = 'none';

// Personal Info //

// P.Inf0 HTML onkeyup

const errorNameClasslist = function(errorMessage) {
  errorName.textContent = errorMessage;
  errorName.classList.add('error--error');
  inputName.classList.add('input-textbox--error');

  inputNameCheck.classList.remove('checked-icon--correct');
  inputName.classList.remove('input-textbox--correct');
}

const errorEmailClasslist = function(errorMessage) {
  errorEmail.textContent = errorMessage;
  errorEmail.classList.add('error--error');
  inputEmail.classList.add('input-textbox--error');

  inputEmailCheck.classList.remove('checked-icon--correct');
  inputEmail.classList.remove('input-textbox--correct');
}

const errorNumberClasslist = function(errorMessage) {
  errorNumber.textContent = errorMessage;
  errorNumber.classList.add('error--error');
  inputNumber.classList.add('input-textbox--error');

  inputNumberCheck.classList.remove('checked-icon--correct');
  inputNumber.classList.remove('input-textbox--correct');
}

// P.Inf0 Name Validation

function nameValidation() {

  let nameValidate = inputName.value;

  if (nameValidate === '') {
    errorNameClasslist('name is required.');
    return false;
  }

  if (!nameValidate.match(lettersOnly)) {
    errorNameClasslist('name consist of letters only.');
    return false;
  }

  if (!nameValidate.match(fullnameFormat)) {
    errorNameClasslist('enter your full name.');
    return false;
  }

  inputNameCheck.classList.add('checked-icon--correct');
  inputName.classList.add('input-textbox--correct');
  backButton.style.display = 'block';
  errorName.classList.remove('error--error');
  return true;
}

// P.Inf0 Email Validation

function emailValidation() {
  let emailValidate = inputEmail.value;

  if (emailValidate === '') {
    errorEmailClasslist('email is required.');
    return false;
  }

  if(!emailValidate.match((emailFormat))) {
    errorEmailClasslist('incorrect email format.');
    return false;
  }

  inputEmailCheck.classList.add('checked-icon--correct');
  inputEmail.classList.add('input-textbox--correct');

  errorEmail.classList.remove('error--error');
  return true;
}

// P.Inf0 Number Validation

function numberValidation() {
  let numberValidate = inputNumber.value;

  if (numberValidate === '') {
    errorNumberClasslist('phone number is required.');
    return false;
  }

  if (numberValidate.length <= 10) {
    errorNumberClasslist('phone number consist of 11 digits.')
    return false;
  }

  inputNumberCheck.classList.add('checked-icon--correct');
  inputNumber.classList.add('input-textbox--correct');
  
  errorNumber.classList.remove('error--error');
  return true;
}

const personalInfoValidation = function() {

  //Personal Info Validation
  
  if(!nameValidation()) {
    return false;
  } 

  if (!numberValidation()) {
    return false;
  }

  if(!emailValidation()) {
    return false;
  }
    goNext(currentStep = 1);
    highlight(currentStep);
}

// Next Step Navigation //

// N.Step Going to Next step

const goNext = function(update) {
  slideStep.forEach((next, index) => {
    next.style.transform = `translateX(${170 * (index - update)}%)`
  })
}

goNext(0);

confirmButton.style.display = 'none';

// N.Step Continue if Personal info Validate

continueButton.addEventListener('click', function (e) {

  //Personal Info Validation

  personalInfoValidation();

  })

  checkbox.checked = false;

// Plan Selection //

// P.Sele Choose Tab

  planTabContainer.addEventListener('click', function (e) {
  
    const clickedPlanTab = e.target.closest('.tab');
    const dataTab = clickedPlanTab.dataset.tab;

// P.Sele Highlight Plan Selected
   
    tab.forEach(t => {
      t.classList.remove('tab--active');
      clickedPlanTab.classList.add('tab--active');

      if (t.classList.contains('tab--active')) {
        errorPlan.classList.remove('error-plan--active');
      } else {

      }
  
    })
    
// P.Sele Chose plan, place to summary step.

    if (document.querySelector(`.tab--${dataTab}`).classList.contains('tab--active')) {
      chosePlan.textContent = document.querySelector(`.plan--${dataTab}`).textContent;  

      if (checkbox.checked) {
        chosePlanPrice.textContent = document.querySelector(`.per-year--${dataTab}`).dataset.yearamount;
      } else {
        chosePlanPrice.textContent = document.querySelector(`.per-month--${dataTab}`).dataset.monthamount;
      }

    } 

  })

// P.Sele Toggle Year or Month

checkbox.addEventListener('click', function(e) {

  freeMonths.forEach(fm => { 

    if (e.currentTarget.checked) {
      yearly.classList.add('yearly--active');
      monthly.classList.remove('monthly--active');
      fm.classList.add('free-month--active');    

    } else {
      yearly.classList.remove('yearly--active');
      monthly.classList.add('monthly--active');
      fm.classList.remove('free-month--active');
    }

    addOnsTab.forEach(at => {
      at.classList.remove('add-ons-tab--active');
    })

    tab.forEach(t => {
      t.classList.remove('tab--active');  
    })    

  })

  perYear.forEach(py => {
    py.classList.toggle('per-year--active');
  })
  
  perMonth.forEach(pm => {
    pm.classList.toggle('per-month--active');
  })
})

// P.Sele Continue if select plan validate

continueButton.addEventListener('click', function () {

  // Plan Validation

    tab.forEach(t => {

      if (t.classList.contains('tab--active')) {
        goNext(currentStep = 2);
        highlight(currentStep);
        errorPlan.classList.remove('error-plan--active'); 
      }
      errorPlan.classList.add('error-plan--active');  
      
    })

  if (currentStep === 2) {
    skipButton.style.display = 'block';
    continueButton.style.display = 'none';
  }

  

})

// Pick Add Ons Tab //

addOnsTabContainer.addEventListener('click', function (e) {
  
  const clickedAddOnsTab = e.target.closest('.add-ons-tab');
  const dataAdd = clickedAddOnsTab.dataset.add;  

// (Inside) P.Add Highlight Tab 

  document.querySelector(`.add-tab--${dataAdd}`).classList.toggle('add-ons-tab--active');
  clickedAddOnsTab.classList.toggle('add-ons-tab--active::before');

// (Inside) P.Add Reveal Continue Button if Tab is Highlghted

  if (!document.querySelector(`.add-tab--${dataAdd}`).classList.contains('add-ons-tab--active')) {
    skipButton.style.display = 'block';
    continueButton.style.display = 'none';
  }

// (Inside) P.Add Reveal Skip Button if No Tab is Highlighted

  addOnsTab.forEach((t, index) => {
    
    if (t.classList.contains('add-ons-tab--active')) {
      skipButton.style.display = 'none';
      continueButton.style.display = 'block';
    }

  })

})

//P.Add Continue Button

continueButton.addEventListener('click', function (e) {

  addOnsTab.forEach(t => {
    
    if (t.classList.contains('add-ons-tab--active')) {
      goNext(currentStep = 3);
      highlight(currentStep);

      skipButton.style.display = 'none';
      continueButton.style.display = 'none';
      // continueButton.textContent = 'Done';
      confirmButton.style.display = 'block';
    }

    for (let choseNumber = 1; choseNumber <= choseServices; choseNumber++) {

      choseNumber.toString();
      

      if (document.querySelector(`.add-tab--${choseNumber}`).classList.contains('add-ons-tab--active')) {
          if (choseNumber === choseNumber) {
          document.querySelector(`.chose-service--${choseNumber}`).textContent = document.querySelector(`.service--${choseNumber}`).textContent;
          document.querySelector(`.chose-addons-flex--${choseNumber}`).style.display = 'flex';
        }
        
      } else {

        document.querySelector(`.chose-addons-flex--${choseNumber}`).style.display = 'none';

      }

      // Checker if Month or Year // 

      if (checkbox.checked) {

        document.querySelector(`.chose-service-price--${choseNumber}`).textContent = '$' + document.querySelector(`.per-year-ao--${choseNumber}`).dataset.aoExactYearamount + '.00';

        const planYearAmount = parseInt(document.querySelector(`.per-year--${choseNumber}`).dataset.exactyearAmount)

        // Total amount for Year Price // 

        if (document.querySelector(`.tab--${choseNumber}`).classList.contains(`tab--active`)) {
          totalAmount.textContent = chosePlanPrice.textContent;
          
        // tab 1 only
            if (document.querySelector(`.add-tab--1`).classList.contains(`add-ons-tab--active`)) {
              totalAmount.textContent = '$' + (planYearAmount + exactYearAmount1) + '.00';
            } 

        // tab 2 only
            if (document.querySelector(`.add-tab--2`).classList.contains(`add-ons-tab--active`)) {
              totalAmount.textContent = '$' + (planYearAmount + exactYearAmount2) + '.00';
            } 

        // tab 3 only
            if (document.querySelector(`.add-tab--3`).classList.contains(`add-ons-tab--active`)) {
              totalAmount.textContent = '$' + (planYearAmount + exactYearAmount3) + '.00';
            } 
    
        // tab 1 & 2 only  
            if (document.querySelector(`.add-tab--1`).classList.contains(`add-ons-tab--active`) && document.querySelector(`.add-tab--2`).classList.contains(`add-ons-tab--active`)) {
              totalAmount.textContent = '$' + (planYearAmount + exactYearAmount1 + exactYearAmount2) + '.00';
            }

        // tab 1 & 3 only
            if (document.querySelector(`.add-tab--1`).classList.contains(`add-ons-tab--active`) && document.querySelector(`.add-tab--3`).classList.contains(`add-ons-tab--active`)) {
              totalAmount.textContent = '$' + (planYearAmount + exactYearAmount1 + exactYearAmount3) + '.00';
            }

        // tab 2 & 3 only
            if (document.querySelector(`.add-tab--2`).classList.contains(`add-ons-tab--active`) && document.querySelector(`.add-tab--3`).classList.contains(`add-ons-tab--active`)) {
              totalAmount.textContent = '$' + (planYearAmount + exactYearAmount2 + exactYearAmount3) + '.00';
            }

        // tab 1, 2 & 3 only
            if (document.querySelector(`.add-tab--1`).classList.contains(`add-ons-tab--active`) && document.querySelector(`.add-tab--2`).classList.contains(`add-ons-tab--active`) && document.querySelector(`.add-tab--3`).classList.contains(`add-ons-tab--active`)) {
              totalAmount.textContent = '$' + (planYearAmount + exactYearAmount1 + exactYearAmount2 + exactYearAmount3) + '.00';   
            }

          } 

      } else {

        document.querySelector(`.chose-service-price--${choseNumber}`).textContent = '$' + document.querySelector(`.per-month-ao--${choseNumber}`).dataset.aoExactMonthamount + '.00';      

        const planMonthAmount = parseInt(document.querySelector(`.per-month--${choseNumber}`).dataset.exactmonthAmount)

        // Total amount for Month Price // 

            if (document.querySelector(`.tab--${choseNumber}`).classList.contains(`tab--active`)) {
              totalAmount.textContent = chosePlanPrice.textContent;
              
            // tab 1 only

                if (document.querySelector(`.add-tab--1`).classList.contains(`add-ons-tab--active`)) {
                  totalAmount.textContent = '$' + (planMonthAmount + exactMonthAmount1) + '.00';
                } 

            // tab 2 only
                if (document.querySelector(`.add-tab--2`).classList.contains(`add-ons-tab--active`)) {
                  totalAmount.textContent = '$' + (planMonthAmount + exactMonthAmount2) + '.00';
                } 

            // tab 3 only
                if (document.querySelector(`.add-tab--3`).classList.contains(`add-ons-tab--active`)) {
                  totalAmount.textContent = '$' + (planMonthAmount + exactMonthAmount3) + '.00';
                } 

            // tab 1 & 2 only 
                if (document.querySelector(`.add-tab--1`).classList.contains(`add-ons-tab--active`) && document.querySelector(`.add-tab--2`).classList.contains(`add-ons-tab--active`)) {
                  totalAmount.textContent = '$' + (planMonthAmount + exactMonthAmount1 + exactMonthAmount2) + '.00';
                }

            // tab 1 & 3 only
                if (document.querySelector(`.add-tab--1`).classList.contains(`add-ons-tab--active`) && document.querySelector(`.add-tab--3`).classList.contains(`add-ons-tab--active`)) {
                  totalAmount.textContent = '$' + (planMonthAmount + exactMonthAmount1 + exactMonthAmount3) + '.00';
                }

            // tab 2 & 3 only
                if (document.querySelector(`.add-tab--2`).classList.contains(`add-ons-tab--active`) && document.querySelector(`.add-tab--3`).classList.contains(`add-ons-tab--active`)) {
                  totalAmount.textContent = '$' + (planMonthAmount + exactMonthAmount2 + exactMonthAmount3) + '.00';
                }

            // tab 1, 2 & 3 only
                if (document.querySelector(`.add-tab--1`).classList.contains(`add-ons-tab--active`) && document.querySelector(`.add-tab--2`).classList.contains(`add-ons-tab--active`) && document.querySelector(`.add-tab--3`).classList.contains(`add-ons-tab--active`)) {
                  totalAmount.textContent = '$' + (planMonthAmount + exactMonthAmount1 + exactMonthAmount2 + exactMonthAmount3) + '.00';  
                }

            } 

       }
      
    }

  })

})

// Change Button

changeButton.addEventListener('click', function (e) {
  goNext(currentStep = 1);
  highlight(currentStep);
  continueButton.textContent = 'Next Step';
  skipButton.style.display = 'none';
  continueButton.style.display = 'block';
  

  tab.forEach(t => {
    t.classList.remove(`tab--active`);
  })

  addOnsTab.forEach(at => {
    at.classList.remove(`add-ons-tab--active`);
  })

  confirmButton.style.display = 'none';

})

  // Skip Button //

  skipButton.addEventListener('click', function (e) {

    goNext(currentStep = 3);
    highlight(currentStep);
  
    continueButton.style.display = 'block';
    skipButton.style.display = 'none';
  
    addOnsTab.forEach(at => {
      if (!at.classList.contains('add-ons-tab--active')) {

        document.querySelector(`.chose-addons-flex--1`).style.display = 'none';
        document.querySelector(`.chose-addons-flex--2`).style.display = 'none';
        document.querySelector(`.chose-addons-flex--3`).style.display = 'none';
  
        totalAmount.textContent = chosePlanPrice.textContent;
      } 
  
    })

    continueButton.style.display = 'none';
    confirmButton.style.display = 'block';
  
  })

  goNext(0);

// Go Back Button 

backButton.addEventListener('click', function (e) {

  if (currentStep === 0) {

  } else {

    goNext(currentStep-=1);
    highlight(currentStep);

  if (currentStep != 0) {
    
  } else {
    console.log('1');
    tab.forEach(t => {
      t.classList.remove('tab--active');
    })
  }

    addOnsTab.forEach(at => {
      at.classList.remove(`add-ons-tab--active`);
    })

  }

  if (currentStep === 1) {
    
    skipButton.style.display = 'none';
    continueButton.style.display = 'block';
    continueButton.textContent = 'Next Step';

    // tab.forEach(t => {
    //   t.classList.remove('tab--active');
    // })

  } else {
    skipButton.style.display = 'none';
    continueButton.style.display = 'block';

  }

  if (currentStep === 2) {

    if (document.querySelector(`.add-tab--1`).classList.contains(`add-ons-tab--active`) || document.querySelector(`.add-tab--2`).classList.contains(`add-ons-tab--active`) || document.querySelector(`.add-tab--3`).classList.contains(`add-ons-tab--active`)) {
      continueButton.style.display = 'block';
      continueButton.textContent = 'Next Step';
      skipButton.style.display = 'none';
      
    } else {
      skipButton.style.display = 'block';
      continueButton.style.display = 'none';
      
    }

  }

  confirmButton.style.display = 'none';

})

const thankyouContainer = document.querySelector(`.thankyou-container`);
const blur = document.getElementById('blur');
const closeButton = document.querySelector(`.close-button`);

confirmButton.addEventListener('click', function (e) {
  closeButton.classList.add('close-button--active');
  thankyouContainer.classList.add(`thankyou-container--active`);
  blur.classList.add('blurred');
  e.preventDefault();
})

closeButton.addEventListener(`click`, function (e) {

  thankyouContainer.classList.remove(`thankyou-container--active`);
  blur.classList.remove('blurred');
  goNext(currentStep = 0);
  highlight(currentStep);

  confirmButton.style.display = 'none';
  continueButton.style.display = 'block';

  inputName.value = '';
  inputEmail.value = '';
  inputNumber.value = '';

  tab.forEach(t => {
    t.classList.remove(`tab--active`);
  })

  addOnsTab.forEach(at => {
    at.classList.remove(`add-ons-tab--active`);
  })

})



