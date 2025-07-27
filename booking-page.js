let hours = '';
let minutesStr = '';
let ampm = '';

const bookingTimeInput = document.querySelector('.booking-time-input');
bookingTimeInput.innerText = `${hours}:${minutesStr} ${ampm} `;


function getCurrentTimeRounded() {
  const now = new Date();
  hours = now.getHours();
  minutes = now.getMinutes();

  // Round minutes to the nearest multiple of 15
  minutes = Math.round(minutes / 15) * 15;

  // Handle case when minutes round up to 60
  if (minutes === 60) {
    minutes = 0;
    hours += 1;
  }

  // Convert to 12-hour format
  ampm = hours >= 12 ? 'PM' : 'AM';
  hours = hours % 12;
  hours = hours ? hours : 12; // the hour '0' should be '12'

  // Format minutes as '00', '15', '30', or '45'
  minutesStr = minutes === 0 ? '00' : minutes.toString();

  console.log('This' + hours)


  bookingTimeInput.innerText = `${hours}:${minutesStr} ${ampm} `;

};


getCurrentTimeRounded();






//curent language coming soon


function currentLanguage() {
    const langButton = document.querySelector('.language');
    const savedCharacter = langButton.innerText;
    console.log ('SAVED : ' + savedCharacter)

    localStorage.setItem('savedCharacter' ,savedCharacter);
};

function switchLanguage(){

    const langButton = document.querySelector('.language');

    console.log(langButton.innerHTML)

    if (langButton.innerHTML == 'ع') {


        document.body.style.cssText = "background-color: #0D0D0D;  display:flex; flex-direction: column; align-items: center; margin-left: 0px; margin-right: 0px; margin-top: 0px; font-family: 'Noto Sans Arabic'; color: white; overflow-x: hidden; ";

        console.log('English is current, now switching to Arabic');

        const language = 'Arabic';
        console.log('Switched Language to Arabic');


        localStorage.setItem('previousLanguage', language);

        const headerItemsContainer = document.querySelector('.header-items-container') || document.querySelector('.header-items-container-fixed')  ;
        headerItemsContainer.style.flexDirection = 'row-reverse';

        const headerLeftBox = document.querySelector(".header-left-box");
        headerLeftBox.style.flexDirection =  'row-reverse';

        const portfolioName = document.querySelector('.name');
        portfolioName.innerHTML = 'خالد';

        portfolioName.style.marginLeft = '0px';
        portfolioName.style.marginRight = 'clamp(0px,1.86vw,20px)';

        const headerRightBox = document.querySelector(".header-right-box");
        headerRightBox.style.flexDirection =  'row-reverse';

        const langButton = document.querySelector('.language');
        langButton.innerHTML = 'EN';
        currentLanguage()

        const bookingTitleA = document.querySelector('.booking-introduction-title');        
        bookingTitleA.classList.replace('booking-introduction-title' ,'booking-introduction-title-arabic')
        bookingTitleA.innerText = 'ستحصل على مكالمة اليوم!';
        


        const bookingDescriptionA = document.querySelector('.booking-introduction-description');
        bookingDescriptionA.classList.replace('booking-introduction-description' , 'booking-introduction-description-arabic')
        bookingDescriptionA.innerText = 'لشرح لك الخدمات و تأكيد الحجز. أجب عن هذه لأسئلة لتكون المكالمة مثمرة قدر ألإمكان.';

        const servicePickA = document.querySelector('.service-pick');
        servicePickA.querySelectorAll('div').forEach(div => {
          div.style.flexDirection = 'row-reverse';
        });
        


        const servicePickTitleA = document.querySelector('.service-pick-title-translate');
        servicePickTitleA.innerText = 'إختر خدمة';
        servicePickTitleA.style.direction = 'rtl';
        
        const option1ItemContainerA = document.querySelector('.wedding-coverage-container');
        option1ItemContainerA.classList.replace('wedding-coverage-container' , 'wedding-coverage-container-arabic');
        option1ItemContainerA.innerHTML = " <img src='ImagesFolder/wedding-coverage-icon.png' class='option1-icon'> تغطية الأفراح";

        const option2ItemContainerA = document.querySelector('.product-shoot-container');
        option2ItemContainerA.classList.replace('product-shoot-container' , 'product-shoot-container-arabic');
        option2ItemContainerA.innerHTML = " <img src='ImagesFolder/product-shoot-icon.png' class='option1-icon'> تصوير المنتجات";

        const option3ItemContainerA = document.querySelector('.studio-shoot-container');
        option3ItemContainerA.classList.replace('studio-shoot-container' , 'studio-shoot-container-arabic');
        option3ItemContainerA.innerHTML = " <img src='ImagesFolder/studio-shoot-icon.png' class='option1-icon'>تصوير إستديو "; 
        
        const option4ItemContainerA = document.querySelector('.event-coverage-container');
        option4ItemContainerA.classList.replace('event-coverage-container' , 'event-coverage-container-arabic');
        option4ItemContainerA.innerHTML = " <img src='ImagesFolder/event-coverage-icon.png' class='option1-icon'> تغطية مهرجانات ";  
        
        const servicePickDescriptionA = document.querySelector('.service-pick-description');
        servicePickDescriptionA.classList.replace('service-pick-description' , 'service-pick-description-arabic');
        servicePickDescriptionA.innerHTML = 'تعتمد الأسعار على الباقات و الأحتياجات المحددة التي قد تكون لديك والتي سيتم مناقشتها في مكالمتنا بإذن الله.'

        const fullNameInputPlaceHolderA = document.querySelector('.fullname-input');
        fullNameInputPlaceHolderA.style.direction = 'rtl';
        fullNameInputPlaceHolderA.setAttribute('placeholder' , 'الإسم الكامل (الشخصي)');

        const root = document.documentElement;
        root.style.setProperty('--pseudo-element-direction', 'left')
        
        const fullNameInputLabel = document.querySelector('.fullname-input-label');
        fullNameInputLabel.innerText = 'الإسم الكامل (الشخصي)';

        const fullNameInputLabelOn = document.querySelector('.fullname-input-label-on');

        root.style.setProperty('--label-element-direction', 'right')



        //Second Input 
        const phoneNumberInputPlaceHolderA = document.querySelector('.use-input-phone-number');
        phoneNumberInputPlaceHolderA.style.direction = 'rtl';
        phoneNumberInputPlaceHolderA.setAttribute('placeholder' , 'رقم الهاتف');
        
        const phoneNumberInputInputLabel = document.querySelector('.use-input-phone-number-label');
        phoneNumberInputInputLabel.innerText = 'رقم الهاتف';


        //Third Input

        const placeOfOccasionInputPlaceHolderA = document.querySelector('.place-of-occasion-input');
        placeOfOccasionInputPlaceHolderA.style.direction = 'rtl';
        placeOfOccasionInputPlaceHolderA.setAttribute('placeholder' , ' إسم المكان أو العنوان');
        const placeOfOccasionInputLabelA = document.querySelector('.place-of-occasion-input-label');
        placeOfOccasionInputLabelA.innerText = 'إسم المكان أو العنوان';




        const customDropDownTitleA = document.querySelector('.custom-dropdown-title-translate');
        customDropDownTitleA.innerText = 'عدد الحضور المتوقع'
        customDropDownTitleA.style.direction = 'rtl';

        const customDropDownOption1A = document.querySelector('.custom-dropdown-option1');
        customDropDownOption1A.style.direction = 'rtl';

        const dropDownOption1ContainerA = customDropDownOption1A.querySelector('.option1-items-container');
        dropDownOption1ContainerA.innerText = '٥٠ أو أقل';

        const customDropDownOption2A = document.querySelector('.custom-dropdown-option2');
        customDropDownOption2A.style.direction = 'rtl';

        const dropDownOption2ContainerA = customDropDownOption2A.querySelector('.option1-items-container');
        dropDownOption2ContainerA.innerText = '٥١ إلى ١٠٠ ' ;

        const customDropDownOption3A = document.querySelector('.custom-dropdown-option3');
        customDropDownOption3A.style.direction = 'rtl';

        const dropDownOption3ContainerA = customDropDownOption3A.querySelector('.option1-items-container');
        dropDownOption3ContainerA.innerText = '١٠١ إلى ٢٠٠ ' ;

        const customDropDownOption4A = document.querySelector('.custom-dropdown-option4');
        customDropDownOption4A.style.direction = 'rtl';

        const dropDownOption4ContainerA = customDropDownOption4A.querySelector('.option1-items-container');
        dropDownOption4ContainerA.innerText = ' ٢٠١ إلى  ٣٠٠ وأكثر' ;
        

        const dateAndTimeTitleA = document.querySelector('.date-time-translate');
        dateAndTimeTitleA.innerText = 'حدد التاريخ و الوقت';
        dateAndTimeTitleA.style.direction = 'rtl';
        dateAndTimeTitleA.style.UnicodeBidi = 'bidi-override';

        const bookingDateAndTimeContainerA = document.querySelector('.booking-date-and-time-container');
        bookingDateAndTimeContainerA.style.flexDirection = 'row-reverse';


        const calendarE = document.querySelector('.booking-date-and-time-container');
        calendarE.style.display = 'none'

        const calendarA = document.querySelector('.arabic-calendar-and-time-container');
        calendarA.classList.replace('arabic-calendar-off','arabic-calendar-on');


        
        const brandNameA = document.querySelector('.use-input-brand-name');
        brandNameA.style.direction = 'rtl';
        brandNameA.setAttribute('placeholder' , 'إسم البراند');
        
        const brandNameLabelA = document.querySelector('.use-input-brand-name-label');
        brandNameLabelA.innerText = 'إسم البراند';


        const numberOfProductsTitleA = document.querySelector('.nop-title');
        numberOfProductsTitleA.style.direction = 'rtl';
        numberOfProductsTitleA.innerText = 'عدد المنتجات';

        const nOPDropDownOption1A = document.querySelector('.number-of-products-option1');
        nOPDropDownOption1A.style.direction = 'rtl';

        const nOPContainer1A = nOPDropDownOption1A.querySelector('.option1-items-container');
        nOPContainer1A.innerText = '١-٢ منتجات';

        const nOPDropDownOption2A = document.querySelector('.number-of-products-option2');
        nOPDropDownOption2A.style.direction = 'rtl';

        const nOPContainer2A = nOPDropDownOption2A.querySelector('.option1-items-container');
        nOPContainer2A.innerText = '٣-٥ منتجات';

        const nOPDropDownOption3A = document.querySelector('.number-of-products-option3');
        nOPDropDownOption3A.style.direction = 'rtl';

        const nOPContainer3A = nOPDropDownOption3A.querySelector('.option1-items-container');
        nOPContainer3A.innerText = '٦-١٠ منتجات';

        const nOPDropDownOption4A = document.querySelector('.number-of-products-option4');
        nOPDropDownOption4A.style.direction = 'rtl';

        const nOPContainer4A = nOPDropDownOption4A.querySelector('.option1-items-container');
        nOPContainer4A.innerText = 'أكثر من ١٠ منتجات';



        const purposeOfShootTitleA = document.querySelector('.pos-title');
        purposeOfShootTitleA.style.direction = 'rtl';
        purposeOfShootTitleA.innerText = 'مناسبة التصوير';
        
        const pOSDropDownOption1A = document.querySelector('.purpose-of-shoot-option1');
        pOSDropDownOption1A.style.direction = 'rtl';

        const pOSContainer1A = pOSDropDownOption1A.querySelector('.option1-items-container');
        pOSContainer1A.innerText = 'بطاقة مدنية';

        const pOSDropDownOption2A = document.querySelector('.purpose-of-shoot-option2');
        pOSDropDownOption2A.style.direction = 'rtl';

        const pOSContainer2A = pOSDropDownOption2A.querySelector('.option1-items-container');
        pOSContainer2A.innerText = 'تخرج';

        const pOSDropDownOption3A = document.querySelector('.purpose-of-shoot-option3');
        pOSDropDownOption3A.style.direction = 'rtl';

        const pOSContainer3A = pOSDropDownOption3A.querySelector('.option1-items-container');
        pOSContainer3A.innerText = 'فرح';

        const pOSDropDownOption4A = document.querySelector('.purpose-of-shoot-option4');
        pOSDropDownOption4A.style.direction = 'rtl';

        const pOSContainer4A = pOSDropDownOption4A.querySelector('.option1-items-container');
        pOSContainer4A.innerText = 'مناسبة أخرى';


        const eventHostNameA = document.querySelector('.event-coverage-use-input');
        eventHostNameA.style.direction = 'rtl';
        eventHostNameA.setAttribute('placeholder' , 'إسم مؤسس المهرجان (الشركة)');
        
        const eventHostNameLabelA = document.querySelector('.event-coverage-use-input-label');
        eventHostNameLabelA.innerText = 'إسم مؤسس المهرجان (الشركة)';

        const eventLocationA = document.querySelector('.event-coverage-location');
        eventLocationA.style.direction = 'rtl';
        eventLocationA.setAttribute('placeholder' , 'مكان المهرجان');
        
        const eventLocationLabelA = document.querySelector('.event-coverage-location-label');
        eventLocationLabelA.innerText = 'مكان المهرجان';

        const eventDurationA = document.querySelector('.use-input-event-duration');
        eventDurationA.style.direction = 'rtl';
        eventDurationA.setAttribute('placeholder' , 'مدة المهرجان الزمنية');
        
        const eventDurationLabelA = document.querySelector('.use-input-event-duration-label');
        eventDurationLabelA.innerText = 'مدة المهرجان الزمنية';


        const eventExpectedAmountOfVisitorsTitleA = document.querySelector('.eov2-title');
        eventExpectedAmountOfVisitorsTitleA.style.direction = 'rtl';
        eventExpectedAmountOfVisitorsTitleA.innerText = 'عدد الحضور المتوقع';
        
        const eOVDropDownOption1A = document.querySelector('.expected-number-of-visitors2-option1');
        eOVDropDownOption1A.style.direction = 'rtl';

        const eOVContainer1A = eOVDropDownOption1A.querySelector('.option1-items-container');
        eOVContainer1A.innerText = '٥٠ أو أقل';

        const eOVDropDownOption2A = document.querySelector('.expected-number-of-visitors2-option2');
        eOVDropDownOption2A.style.direction = 'rtl';

        const eOVContainer2A = eOVDropDownOption2A.querySelector('.option1-items-container');
        eOVContainer2A.innerText = '٥١ إلى ١٠٠ ' ;

        const eOVDropDownOption3A = document.querySelector('.expected-number-of-visitors2-option3');
        eOVDropDownOption3A.style.direction = 'rtl';

        const eOVContainer3A = eOVDropDownOption3A.querySelector('.option1-items-container');
        eOVContainer3A.innerText = '١٠١ إلى ٢٠٠ ' ;

        const eOVDropDownOption4A = document.querySelector('.expected-number-of-visitors2-option4');
        eOVDropDownOption4A.style.direction = 'rtl';

        const eOVContainer4A = eOVDropDownOption4A.querySelector('.option1-items-container');
        eOVContainer4A.innerText = ' ٢٠١ إلى  ٣٠٠ وأكثر' ;


        console.log('English is current, now switching to Arabic');


        const requiredMessage = document.querySelector('p.custom-error-message.required');
        requiredMessage.style.direction = 'rtl';
        requiredMessage.style.justifySelf = 'end';
        requiredMessage.innerHTML = '<img src="warning.png" class="warning"> لطفاَ, أكمل هذا الركن المطلوب.';
        

        language = 'Arabic';
        console.log('Switched Language to Arabic');



        localStorage.setItem('previousLanguage', language);

    
    }else if (langButton.innerHTML == 'EN'){


        const language = 'English';
        console.log('Switched Language to English');



        localStorage.setItem('previousLanguage', language);

        document.body.style.cssText = "background-color: #0D0D0D; display: flex;flex-direction: column; align-items: center; margin-left: 0px; margin-right: 0px; margin-top: 0px; font-family: Inter; color: white; overflow-x: hidden;";

        const headerItemsContainer = document.querySelector('.header-items-container') || document.querySelector('.header-items-container-fixed') ;
        headerItemsContainer.style.flexDirection = 'row';

        const headerLeftBox = document.querySelector(".header-left-box");
        headerLeftBox.style.flexDirection =  'row';

        const portfolioName = document.querySelector('.name');
        portfolioName.innerHTML = 'Khalid';

        portfolioName.style.marginRight = '0px';
        portfolioName.style.marginLeft = 'clamp(0px,1.86vw,20px)';

        headerRightBox = document.querySelector(".header-right-box");
        headerRightBox.style.flexDirection =  'row';

              
        const langButton = document.querySelector('.language');
        langButton.innerHTML = 'ع';
        currentLanguage();


        const bookingTitle = document.querySelector('.booking-introduction-title-arabic');        
        bookingTitle.classList.replace('booking-introduction-title-arabic' ,'booking-introduction-title')
        bookingTitle.innerText = 'You Will Get A Call Today!';
        


        const bookingDescription = document.querySelector('.booking-introduction-description-arabic');
        bookingDescription.classList.replace('booking-introduction-description-arabic' , 'booking-introduction-description')
        bookingDescription.innerText = 'To inform you about the service and confirm the booking. Answer these questions to make it as productive as possible!';

        const servicePick = document.querySelector('.service-pick');
        servicePick.querySelectorAll('div').forEach(div => {
          div.style.flexDirection = 'row';
        });
        


        const servicePickTitle = document.querySelector('.service-pick-title-translate');
        servicePickTitle.innerText = 'Pick a service';
        servicePickTitle.style.direction = 'ltr';
        
        const option1ItemContainer = document.querySelector('.wedding-coverage-container-arabic');
        option1ItemContainer.classList.replace('wedding-coverage-container-arabic' , 'wedding-coverage-container');
        option1ItemContainer.innerHTML = " <img src='ImagesFolder/wedding-coverage-icon.png' class='option1-icon'>  Wedding Coverage";

        const option2ItemContainer = document.querySelector('.product-shoot-container-arabic');
        option2ItemContainer.classList.replace('product-shoot-container-arabic' , 'product-shoot-container');
        option2ItemContainer.innerHTML = " <img src='ImagesFolder/product-shoot-icon.png' class='option1-icon'>  Product Shoot";

        const option3ItemContainer = document.querySelector('.studio-shoot-container-arabic');
        option3ItemContainer.classList.replace('studio-shoot-container-arabic' , 'studio-shoot-container');
        option3ItemContainer.innerHTML = " <img src='ImagesFolder/studio-shoot-icon.png' class='option1-icon'> Studio Shoot "; 
        
        const option4ItemContainer = document.querySelector('.event-coverage-container-arabic');
        option4ItemContainer.classList.replace('event-coverage-container-arabic' , 'event-coverage-container');
        option4ItemContainer.innerHTML = " <img src='ImagesFolder/event-coverage-icon.png' class='option1-icon'>  Event Coverage ";  
        
        const servicePickDescription = document.querySelector('.service-pick-description-arabic');
        servicePickDescription.classList.replace('service-pick-description-arabic' , 'service-pick-description');
        servicePickDescription.innerHTML = 'Different pricing depends on packages and specific needs you may have. which will be discussed in our call.'

        const fullNameInputPlaceHolder = document.querySelector('.fullname-input');
        fullNameInputPlaceHolder.style.direction = 'ltr';
        fullNameInputPlaceHolder.setAttribute('placeholder' , 'Fullname (Personal)');

        const root = document.documentElement;
        root.style.setProperty('--pseudo-element-direction', 'right')
        
        const fullNameInputLabel = document.querySelector('.fullname-input-label');
        fullNameInputLabel.innerText = 'Fullname (Personal)';

        const fullNameInputLabelOn = document.querySelector('.fullname-input-label-on');

        root.style.setProperty('--label-element-direction', 'left');

        //Second Input 
        const phoneNumberInputPlaceHolder = document.querySelector('.use-input-phone-number');
        phoneNumberInputPlaceHolder.style.direction = 'ltr';
        phoneNumberInputPlaceHolder.setAttribute('placeholder' , 'Phone Number');
        
        const phoneNumberInputInputLabel = document.querySelector('.use-input-phone-number-label');
        phoneNumberInputInputLabel.innerText = 'Phone Number';

        //Third Input

        const placeOfOccasionInputPlaceHolder = document.querySelector('.place-of-occasion-input');
        placeOfOccasionInputPlaceHolder.style.direction = 'ltr';
        placeOfOccasionInputPlaceHolder.setAttribute('placeholder' , 'Place of Occasion');
        const placeOfOccasionInputLabel = document.querySelector('.place-of-occasion-input-label');
        placeOfOccasionInputLabel.innerText = 'Place of Occasion';

        const customDropDownTitle = document.querySelector('.custom-dropdown-title-translate');
        customDropDownTitle.innerText = 'Expected Number Of Visitors'
        customDropDownTitle.style.direction = 'ltr';

        const customDropDownOption1 = document.querySelector('.custom-dropdown-option1');
        customDropDownOption1.style.direction = 'ltr';

        const dropDownOption1Container = customDropDownOption1.querySelector('.option1-items-container');
        dropDownOption1Container.innerText = 'Under 50';

        const customDropDownOption2 = document.querySelector('.custom-dropdown-option2');
        customDropDownOption2.style.direction = 'ltr';

        const dropDownOption2Container = customDropDownOption2.querySelector('.option1-items-container');
        dropDownOption2Container.innerText = '51-100' ;

        const customDropDownOption3 = document.querySelector('.custom-dropdown-option3');
        customDropDownOption3.style.direction = 'ltr';

        const dropDownOption3Container = customDropDownOption3.querySelector('.option1-items-container');
        dropDownOption3Container.innerText = '101-200' ;

        const customDropDownOption4 = document.querySelector('.custom-dropdown-option4');
        customDropDownOption4.style.direction = 'ltr';

        const dropDownOption4Container = customDropDownOption4.querySelector('.option1-items-container');
        dropDownOption4Container.innerText = '200-300 or more' ;
        
        const dateAndTimeTitle = document.querySelector('.date-time-translate');
        dateAndTimeTitle.innerText = 'Specify a date & time';
        dateAndTimeTitle.style.direction = 'ltr';

        const bookingDateAndTimeContainer = document.querySelector('.booking-date-and-time-container');
        bookingDateAndTimeContainer.style.flexDirection = 'row';


        const calendarE = document.querySelector('.booking-date-and-time-container');
        calendarE.style.display = 'flex'

        const calendarA = document.querySelector('.arabic-calendar-and-time-container');
        calendarA.classList.replace('arabic-calendar-on','arabic-calendar-off');
        
        const brandName = document.querySelector('.use-input-brand-name');
        brandName.style.direction = 'ltr';
        brandName.setAttribute('placeholder' , 'Brand Name');
        
        const brandNameLabel = document.querySelector('.use-input-brand-name-label');
        brandNameLabel.innerText = 'Brand Name';

        const numberOfProductsTitle = document.querySelector('.nop-title');
        numberOfProductsTitle.style.direction = 'ltr';
        numberOfProductsTitle.innerText = 'Number Of Products';

        const nOPDropDownOption1 = document.querySelector('.number-of-products-option1');
        nOPDropDownOption1.style.direction = 'ltr';

        const nOPContainer1 = nOPDropDownOption1.querySelector('.option1-items-container');
        nOPContainer1.innerText = '1-2 Products';

        const nOPDropDownOption2 = document.querySelector('.number-of-products-option2');
        nOPDropDownOption2.style.direction = 'ltr';

        const nOPContainer2 = nOPDropDownOption2.querySelector('.option1-items-container');
        nOPContainer2.innerText = '3-5 Products';

        const nOPDropDownOption3 = document.querySelector('.number-of-products-option3');
        nOPDropDownOption3.style.direction = 'ltr';

        const nOPContainer3 = nOPDropDownOption3.querySelector('.option1-items-container');
        nOPContainer3.innerText = '6-10 Products';

        const nOPDropDownOption4 = document.querySelector('.number-of-products-option4');
        nOPDropDownOption4.style.direction = 'ltr';

        const nOPContainer4 = nOPDropDownOption4.querySelector('.option1-items-container');
        nOPContainer4.innerText = 'More Than 10';

        const purposeOfShootTitle = document.querySelector('.pos-title');
        purposeOfShootTitle.style.direction = 'ltr';
        purposeOfShootTitle.innerText = 'Purpose of Shoot';
        
        const pOSDropDownOption1 = document.querySelector('.purpose-of-shoot-option1');
        pOSDropDownOption1.style.direction = 'ltr';

        const pOSContainer1 = pOSDropDownOption1.querySelector('.option1-items-container');
        pOSContainer1.innerText = 'Civil ID Photo';

        const pOSDropDownOption2 = document.querySelector('.purpose-of-shoot-option2');
        pOSDropDownOption2.style.direction = 'ltr';

        const pOSContainer2 = pOSDropDownOption2.querySelector('.option1-items-container');
        pOSContainer2.innerText = 'Graduation';

        const pOSDropDownOption3 = document.querySelector('.purpose-of-shoot-option3');
        pOSDropDownOption3.style.direction = 'ltr';

        const pOSContainer3 = pOSDropDownOption3.querySelector('.option1-items-container');
        pOSContainer3.innerText = 'Wedding';

        const pOSDropDownOption4 = document.querySelector('.purpose-of-shoot-option4');
        pOSDropDownOption4.style.direction = 'ltr';

        const pOSContainer4 = pOSDropDownOption4.querySelector('.option1-items-container');
        pOSContainer4.innerText = 'Other';

        const eventHostName = document.querySelector('.event-coverage-use-input');
        eventHostName.style.direction = 'ltr';
        eventHostName.setAttribute('placeholder' , 'Event Host Name (Company)');
        
        const eventHostNameLabel = document.querySelector('.event-coverage-use-input-label');
        eventHostNameLabel.innerText = 'Event Location';

        const eventLocation = document.querySelector('.event-coverage-location');
        eventLocation.style.direction = 'ltr';
        eventLocation.setAttribute('placeholder' , 'Event Location');
        
        const eventLocationLabel = document.querySelector('.event-coverage-location-label');
        eventLocationLabel.innerText = 'Event Location';

        const eventDuration = document.querySelector('.use-input-event-duration');
        eventDuration.style.direction = 'ltr';
        eventDuration.setAttribute('placeholder' , 'Event Duration');
        
        const eventDurationLabel = document.querySelector('.use-input-event-duration-label');
        eventDurationLabel.innerText = 'Event Duration';


        const eventExpectedAmountOfVisitorsTitle = document.querySelector('.eov2-title');
        eventExpectedAmountOfVisitorsTitle.style.direction = 'ltr';
        eventExpectedAmountOfVisitorsTitle.innerText = 'Expected Number Of Visitors';
        
        const eOVDropDownOption1 = document.querySelector('.expected-number-of-visitors2-option1');
        eOVDropDownOption1.style.direction = 'ltr';

        const eOVContainer1 = eOVDropDownOption1.querySelector('.option1-items-container');
        eOVContainer1.innerText = 'Under 50';

        const eOVDropDownOption2 = document.querySelector('.expected-number-of-visitors2-option2');
        eOVDropDownOption2.style.direction = 'ltr';

        const eOVContainer2 = eOVDropDownOption2.querySelector('.option1-items-container');
        eOVContainer2.innerText = '51-100' ;

        const eOVDropDownOption3 = document.querySelector('.expected-number-of-visitors2-option3');
        eOVDropDownOption3.style.direction = 'ltr';

        const eOVContainer3 = eOVDropDownOption3.querySelector('.option1-items-container');
        eOVContainer3.innerText = '101-200' ;

        const eOVDropDownOption4 = document.querySelector('.expected-number-of-visitors2-option4');
        eOVDropDownOption4.style.direction = 'ltr';

        const eOVContainer4 = eOVDropDownOption4.querySelector('.option1-items-container');
        eOVContainer4.innerText = '200-300 or more' ;


        console.log('English is current, now switching to Arabic');


        const requiredMessage = document.querySelector('p.custom-error-message.required');
        requiredMessage.style.direction = 'ltr';
        requiredMessage.style.justifySelf = 'start';
        requiredMessage.innerHTML = '<p class="custom-error-message required"> <img src="warning.png" class="warning"> This is a required field, kindly complete it to continue.</p>';

        langButton.innerHTML = 'ع';

        language = 'English';
        console.log('Switched Language to English');



        localStorage.setItem('previousLanguage', language);

}};          
          
          
          
          
          
          
          
          
          
          
          
          
          
          
          
          
          
          
          
          
          
          
          
          
          
          
          
          
          
          
          
          
          
          
          
          
          
          
          
          
          
          
          
          
          
          
          
          
          
          
          
          
          
          
          
          
          window.addEventListener('resize', () => {
              console.log(window.innerWidth);
              const options = document.querySelectorAll('.dropdown-option');
              const untoggledHeight = options[0].offsetHeight;
              console.log('untoggled height is:'+ untoggledHeight)
              const toggledHeight = (options.length) * untoggledHeight;
              console.log('toggled height is:'+ toggledHeight)
              const dropDown = document.querySelector('.custom-dropdown');
              const dropDownToggled = document.querySelector('.custom-dropdown-toggled');

              if(dropDown){
                  dropDown.style.height = `${untoggledHeight}px`;
              }else if(dropDownToggled){
                  dropDownToggled.style.height = `${toggledHeight}px`;
              }
              
            });

        const savedService =document.querySelector(localStorage.getItem('mainPageService'));
        const savedServiceContainer = document.querySelector(localStorage.getItem('mainPageServiceContainer'));
        console.log('savedServiceContainer')
        if(savedService){
          savedService.classList.add('picked-service');
          savedServiceContainer.classList.replace('service-based-container-off' , 'service-based-container-on')
          const dropDown = savedService.querySelector('.dropdown-icon');
          dropDown.classList.replace('dropdown-icon' , 'dropdown-icon-on')
        };


        if (!document.querySelector('.picked-service')){
            const service1 = document.querySelector('.service-pick-option1')
            service1.classList.add('picked-service')
            const dropDown = service1.querySelector('.dropdown-icon');
            dropDown.classList.replace('dropdown-icon' , 'dropdown-icon-on')

            const service1Container = document.querySelector('.service1-based-container');
            service1Container.classList.replace('service-based-container-off' , 'service-based-container-on');
        };


        let serviceChoice = '';
        
    
        function serviceSelection(clickedService , itsContainer){

        const previousPicked = document.querySelector('.picked-service');
        if(previousPicked){
        const previousDropDown = previousPicked.querySelector('.dropdown-icon-on');
        previousDropDown.classList.replace('dropdown-icon-on' , 'dropdown-icon')
        previousPicked.classList.remove('picked-service');
        const previousContainer = document.querySelector('.service-based-container-on');
        previousContainer.classList.replace('service-based-container-on' , 'service-based-container-off')};
        clickedService.classList.add('picked-service');
        const dropDown = clickedService.querySelector('.dropdown-icon');
        dropDown.classList.replace('dropdown-icon' , 'dropdown-icon-on')
        

        itsContainer.classList.replace('service-based-container-off' , 'service-based-container-on')
            
    
        if(document.querySelector('.service-pick-toggled')){
            const servicePick = document.querySelector('.service-pick-toggled');
            servicePick.classList.replace('service-pick-toggled' , 'service-pick');
            dropDown.style.transform = 'rotate(0deg)';
            // Select the element with class 'service-pick-title'
            const servicePickTitle = document.querySelector('.service-pick-title');

            if (servicePickTitle) {
              // Add the 'service-pick-title-valid' class
              servicePickTitle.classList.add('service-pick-title-valid');

              // Optionally, remove the old class if needed
               servicePickTitle.classList.remove('service-pick-title');
            }
        }else if (!document.querySelector('.service-pick-toggled')){
            const servicePick = document.querySelector('.service-pick');
            servicePick.classList.replace('service-pick' , 'service-pick-toggled');
            dropDown.style.transform = 'rotate(180deg)';

            const servicePickTitle = document.querySelector('.service-pick-title-valid');


            // Add the 'service-pick-title-valid' class

            if(servicePickTitle){
            servicePickTitle.classList.add('service-pick-title');

            // Optionally, remove the old class if needed
            servicePickTitle.classList.remove('service-pick-title-valid');}
        }
    ;
          serviceChoice =  clickedService.innerText;
          };




function setupFloatingLabel(inputSelector, labelSelector, activeClass, hiddenClass) {
  const inputEl = document.querySelector(inputSelector);
  const labelEl = document.querySelector(labelSelector);
  let isFocused = false;

  if (inputEl && labelEl) {
    inputEl.addEventListener('focus', () => {
      isFocused = true;
      labelEl.classList.remove(hiddenClass);
      labelEl.classList.add(activeClass);
    });

    inputEl.addEventListener('blur', () => {
      isFocused = false;
      if (inputEl.value.length === 0) {
        labelEl.classList.remove(activeClass);
        labelEl.classList.add(hiddenClass);
      }
    });

    inputEl.addEventListener('input', () => {
      if (inputEl.value.length > 0 || isFocused) {
        labelEl.classList.remove(hiddenClass);
        labelEl.classList.add(activeClass);
      } else {
        labelEl.classList.remove(activeClass);
        labelEl.classList.add(hiddenClass);
      }
    });
  }
}

setupFloatingLabel('.fullname-input' , '.fullname-input-label' ,     'fullname-input-label-on' ,'label-off');
setupFloatingLabel('.place-of-occasion-input' , '.place-of-occasion-input-label' ,     'place-of-occasion-input-label-on' ,'label-off');   
setupFloatingLabel('.brand-name-input' , '.brand-name-input-label' , '.brand-name-input-on' , '.brand-name-input-off' );



 function optionCreation(...options){
            const optionsContainer = document.querySelector('.custom-dropdown')
            let count = 1;
           

            options.forEach((option)=>{
                const optionStructure = `<div class='custom-dropdown-option${count} dropdown-option' onclick=" let option = document.querySelector('.custom-dropdown-option${count}'); optionSelection(option);"> <div class='option1-items-container'> ${option} </div> <img src='ImagesFolder/dropdown-icon.svg' class='dropdown-icon'> </div>`
                optionsContainer.innerHTML += optionStructure
                count ++

                console.log(optionsContainer);

            })
        };


        optionCreation('Under 50', '51-100' , '101-200' , '200-300 or more');

    

        if (!document.querySelector('.picked-option')){
            const option1 = document.querySelector('.custom-dropdown-option1')
            option1.classList.add('picked-option')
            const dropDown = option1.querySelector('.dropdown-icon');
            dropDown.classList.replace('dropdown-icon' , 'dropdown-icon-on')
        };



    
    
        function optionSelection(clickedoption){

        

        const previousPicked = document.querySelector('.picked-option');
        const previousDropDown = previousPicked.querySelector('.dropdown-icon-on');
        previousDropDown.classList.replace('dropdown-icon-on' , 'dropdown-icon')
        previousPicked.classList.remove('picked-option');
   
        clickedoption.classList.add('picked-option');
        const dropDown = clickedoption.querySelector('.dropdown-icon');
        dropDown.classList.replace('dropdown-icon' , 'dropdown-icon-on')
        

            
    
        if(document.querySelector('.custom-dropdown-toggled')){
            const optionPick = document.querySelector('.custom-dropdown-toggled');
            optionPick.classList.replace('custom-dropdown-toggled' , 'custom-dropdown');
            dropDown.style.transform = 'rotate(0deg)';
            const dropDownTitle = document.querySelector('.custom-dropdown-title');
            dropDownTitle.classList.replace('custom-dropdown-title' , 'custom-dropdown-title-valid');
        }else if (!document.querySelector('.custom-dropdown-toggled')){
            const optionPick = document.querySelector('.custom-dropdown');
            optionPick.classList.replace('custom-dropdown' , 'custom-dropdown-toggled');
            dropDown.style.transform = 'rotate(180deg)';
                        const dropDownTitle = document.querySelector('.custom-dropdown-title-valid');
            dropDownTitle.classList.replace('custom-dropdown-title-valid' , 'custom-dropdown-title');
        }

        const options = document.querySelectorAll('.dropdown-option');
        const untoggledHeight = options[0].offsetHeight;
        console.log('untoggled height is:'+ untoggledHeight)
        const toggledHeight = (options.length) * untoggledHeight;
        console.log('toggled height is:'+ toggledHeight)
        const dropDownElement = document.querySelector('.custom-dropdown');
        const dropDownElementToggled = document.querySelector('.custom-dropdown-toggled');

        if(dropDownElement){
                  dropDownElement.style.height = `${untoggledHeight}px`;
        }else if(dropDownElementToggled){
                  dropDownElementToggled.style.height = `${toggledHeight}px`;
        }
              
    ;
    };



    










    //Calendar Js:
function toggleCalendar(){
        const calendar = document.querySelector('.booking-calendar-off');
        calendar.classList.replace('booking-calendar-off' , 'booking-calendar-on');

    };

function currentDate(){    const currentDate = new Date();

    const monthNames = [
    "January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"
    ];

    const monthName = monthNames[currentDate.getMonth()]; // getMonth() returns 0-11
    const day = currentDate.getDate();
    const year = currentDate.getFullYear();
    const calendarButton = document.querySelector('.booking-calendar-button');

    if (day == 1 || day == 31){
        const superscript = 'st';
        calendarButton.innerHTML = `<div class = 'date-text-container'> <strong> </strong> ${monthName} ${day}${superscript} 2025</div>`;

      }else if (day == 2){
        const superscript = 'nd';
        calendarButton.innerHTML = `<div class = 'date-text-container'> <strong> </strong> ${monthName} ${day}${superscript} 2025</div>`;
      }else if(day == 3){
        const superscript = 'rd'
        calendarButton.innerHTML = `<div class = 'date-text-container'> <strong> </strong> ${monthName} ${day}${superscript} 2025</div>`;
      }else {
        const superscript = 'th'
        calendarButton.innerHTML = `<div class = 'date-text-container'> <strong> </strong> ${monthName} ${day}${superscript} 2025</div>`;
      };

    }
    currentDate();

    

function currentDay(){    
    
const currentDate = new Date();

const daysOfWeek = [
  "Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"
];

const dayOfWeek = daysOfWeek[currentDate.getDay()];

    const calendarButton = document.querySelector('.booking-calendar-button');
    const calendarButtonWD = calendarButton.querySelector('strong');
    calendarButtonWD.innerHTML = `${dayOfWeek}`;

};


currentDay();




document.addEventListener('DOMContentLoaded', () => {
  // Select all elements with the class 'days'
  const daysElements = document.querySelectorAll('.days');

  daysElements.forEach(element => {
    element.addEventListener('click', () => {
      // Get the data attributes
      const dayOfWeek = element.getAttribute('data-day');
      const month = element.getAttribute('data-month');
      const innerText = element.innerText;

      // Log in the specified format
      const calendarButton = document.querySelector('.booking-calendar-button');
      if (innerText == 1 || innerText == 31){
        const superscript = 'st';
        calendarButton.innerHTML = `<div class = 'date-text-container'> <strong> </strong> ${month} ${innerText}${superscript} 2025</div>`;

      }else if (innerText == 2){
        const superscript = 'nd';
        calendarButton.innerHTML = `<div class = 'date-text-container'> <strong> </strong> ${month} ${innerText}${superscript} 2025</div>`;
      }else if(innerText == 3){
        const superscript = 'rd'
        calendarButton.innerHTML = `<div class = 'date-text-container'> <strong> </strong> ${month} ${innerText}${superscript} 2025</div>`;
      }else {
        const superscript = 'th'
        calendarButton.innerHTML = `<div class = 'date-text-container'> <strong> </strong> ${month} ${innerText}${superscript} 2025</div>`;
      };
      const calendarButtonWD = calendarButton.querySelector('strong');
      calendarButtonWD.innerHTML = `${dayOfWeek}`;

        const calendar = document.querySelector('.booking-calendar-on');
        calendar.classList.replace('booking-calendar-on' , 'booking-calendar-off');
    });
  });
});







function timePickerToggle(){  
    const timePicker = document.querySelector('.time-pick-container');
    timePicker.classList.replace('time-pick-container', 'time-pick-container-on');    
  };



      let hourValue = '';
      let minuteValue = '';
      let periodValue = '';



function timeValuePick(button, type) {
  // Remove active class from previous
  const previous = document.querySelector(`.${type}-button.active`);
  if (previous) {
    previous.classList.remove('active');
  }
  // Add active class to clicked button
  button.classList.add('active');

  // Get the value
  const value = button.getAttribute('data-value');

  // Store in variables
  if (type === 'hour') {
    hours = value;
  } else if (type === 'minute') {
    minutesStr = value;
  } else if (type === 'period') {
    ampm = value;
  }

  console.log(hours, minutesStr, ampm);
  bookingTimeInput.innerText = `${hours}:${minutesStr} ${ampm} `;

};

document.addEventListener('DOMContentLoaded', () => {
  const inputs = document.querySelectorAll('.fullname-input, .place-of-occasion-input');

  inputs.forEach(input => {
    // Create container for custom messages
    const messageContainer = document.createElement('div');
    messageContainer.className = 'error-messages';
    input.parentNode.insertBefore(messageContainer, input.nextSibling);

    // Prevent default validation bubbles
    input.addEventListener('invalid', (e) => {
      e.preventDefault();

      // Clear previous messages
      messageContainer.innerHTML = '';

      // Check for required
      if (input.required && !input.value.trim()) {
        const langButton = document.querySelector('.language')

        if (langButton.innerText == 'ع'){
        messageContainer.innerHTML = `
          <p class="custom-error-message required">
            <img src="warning.png" class="warning">
            This is a required field, kindly complete it to continue.
          </p>
        `}else if (langButton.innerText == 'EN'){
           messageContainer.innerHTML = `<p class = "custom-error-message required" style ="direction: rtl; justify-self:end;"><img src="warning.png" class="warning"> لطفاَ, أكمل هذا الركن المطلوب.</p>`
        };
      } else {
        // Check for invalid data based on class
        if (input.classList.contains('fullname-input')) {
          // Validate only letters
          const regex = /^[A-Za-z\s]+$/;
          if (input.value && !regex.test(input.value.trim())) {
            messageContainer.innerHTML = `
              <p class="custom-error-message invalid">
                <img src="warning.png" class="warning">
                Kindly, make sure you enter the right data (Letters only).
              </p>
            `;
          }
        }
        // You can add other class-based validations here
      }
    });

    // Add real-time validation feedback
    input.addEventListener('input', () => {
      // Clear previous messages
      messageContainer.innerHTML = '';

      if (input.classList.contains('fullname-input')) {
        const val = input.value;
        const hasNumber = /\d/.test(val);
        const hasLetter = /[A-Za-z]/.test(val);

        // Show message if a number is entered
        if (hasNumber) {
          messageContainer.innerHTML = `
            <p class="custom-error-message invalid">
              <img src="warning.png" class="warning">
              Invalid input: Numbers are not allowed.
            </p>
          `;
        }
        // Optionally, show "Letter detected" message or handle other logic here
      }

      if (input.classList.contains('place-of-occasion-input')) {
        const val = input.value;
        const hasLetter = /[A-Za-z]/.test(val);
        // For this input, no need to show error for numbers
        if (hasLetter) {
          // You can add visual feedback if needed
        }
      };

      if (input.classList.contains('brand-name-input')) {
        const val = input.value;
        const hasLetter = /[A-Za-z]/.test(val);
        // For this input, no need to show error for numbers
        if (hasLetter) {
          // You can add visual feedback if needed
        }
      };

    });
  });
});


function monitorTyping(inputClassName, typingMessage, emptyMessage, numberMessage , wrapperClass , validClass , invalidClass , numberIncluded) {
  let timer; // Variable to store the timeout ID

  const inputElement = document.querySelector(inputClassName);

  if (!inputElement) {
    console.error(`Element with class "${inputClassName}" not found.`);
    return; // Exit if element not found
  }

  inputElement.addEventListener('input', () => {
    clearTimeout(timer); // Clear any existing timeout

    // Check if the input is empty
    if (inputElement.value === "") {
        console.log(emptyMessage);
        const wrapper = document.querySelector(`${wrapperClass}`);
        wrapper.classList.replace(`${validClass}` , `${invalidClass}`);
        return; // Don't proceed if empty
    };


    // Check if the input contains only numbers (crucial for robustness)
    // Check if the input contains any number anywhere in the string
    


    timer = setTimeout(() => {
      console.log(typingMessage);
      const wrapper = document.querySelector(`${wrapperClass}`)
      wrapper.classList.replace(`${invalidClass}`, `${validClass}`);
    }, 500); // 500ms delay before logging "typing..."
  });

    // Important: Add an event listener for the 'focus' and 'blur' events
  inputElement.addEventListener('focus', () => {
    clearTimeout(timer); // Clear any existing timeout on focus
  });
  inputElement.addEventListener('blur', () => {
      clearTimeout(timer); // Clear any existing timeout on blur
  });
};


// Example Usage (replace with your actual class name and messages):

monitorTyping('.fullname-input', 'typing...', 'Input is empty', 'Number detected' , '.fullname-wrapper' , 'input-wrapper-valid' , 'input-wrapper' , false);




monitorTyping('.place-of-occasion-input' , 'typing...' , 'Input is empty' , 'Number detected' , '.place-of-occasion-wrapper' , 'input-wrapper-valid' , 'input-wrapper' , false);









        function optionSelectionNOP(clickedoption){

        

        const previousPicked = document.querySelector('.picked-option');
        const previousDropDown = previousPicked.querySelector('.dropdown-icon-on');
        previousDropDown.classList.replace('dropdown-icon-on' , 'dropdown-icon')
        previousPicked.classList.remove('picked-option');
   
        clickedoption.classList.add('picked-option');

        if(clickedoption.querySelector('.dropdown-icon'))
{        const dropDown = clickedoption.querySelector('.dropdown-icon');
        dropDown.classList.replace('dropdown-icon' , 'dropdown-icon-on')};
        

            
    
        if( !document.querySelector('.number-of-products-toggled')){
            const optionPick = document.querySelector('.number-of-products');
            optionPick.classList.replace('number-of-products' , 'number-of-products-toggled');
            const dropDown = clickedoption.querySelector('.dropdown-icon-on');
            dropDown.style.transform = 'rotate(180deg)';

            const NOPTitle = document.querySelector('.nop-title');
            NOPTitle.classList.replace('number-of-products-title-valid' , 'number-of-products-title');
            console.log(NOPTitle.classList);


        }else if (document.querySelector('.number-of-products-toggled')){

            const optionPick = document.querySelector('.number-of-products-toggled');
            optionPick.classList.replace('number-of-products-toggled' , 'number-of-products');
            const dropDown = clickedoption.querySelector('.dropdown-icon-on');
            dropDown.style.transform = 'rotate(0deg)';
            const NOPTitle = document.querySelector('.nop-title');
            NOPTitle.classList.replace('number-of-products-title' , 'number-of-products-title-valid');
            console.log(NOPTitle.classList);
        }


    ;
    };



//Replace function & Variable Names

function insertParameter(...params) {
    params.forEach((param, index) => {
        console.log(`Parameter ${index + 1}:`, param);
    });
};
        function optionCreationNOP(...options){
            const optionsContainer = document.querySelector('.number-of-products')
            let count = 1
           

            options.forEach((option)=>{
                const optionStructure = `<div class='number-of-products-option${count}' onclick=" let option = document.querySelector('.number-of-products-option${count}'); optionSelectionNOP(option);"> <div class='option1-items-container'> ${option} </div> <img src='ImagesFolder/dropdown-icon.svg' class='dropdown-icon'> </div>`
                optionsContainer.innerHTML += optionStructure
                count ++
                console.log(optionsContainer);

            })
            
        };

        function changeCSSVariableNOP(variableName, newValue) {
        document.documentElement.style.setProperty(variableName, newValue);
        }


        optionCreationNOP('1-2 Products', '3-5 Products' , '6-10 Products' , 'More Than 10');

    if (!document.querySelector('.number-of-products').querySelector('.picked-option')){






            const NOP = document.querySelector('.number-of-products');
            const option1 = NOP.querySelector('.number-of-products-option1');
            option1.classList.add('picked-option');
            const dropDown = option1.querySelector('.dropdown-icon');
            dropDown.classList.replace('dropdown-icon' , 'dropdown-icon-on');
};



if (!document.querySelector('.number-of-products').querySelector('picked-option')){
            const NOP = document.querySelector('.number-of-products')
            const option1 = NOP.querySelector('.number-of-products-option1')
            option1.classList.add('picked-option')
              if (option1.querySelector('.dropdown-icon')){
            const dropDown = option1.querySelector('.dropdown-icon');
            dropDown.classList.replace('dropdown-icon' , 'dropdown-icon-on')
          }

            const NOPTitle = document.querySelector('.nop-title');
            NOPTitle.classList.remove('number-of-products-title-valid');
            NOPTitle.classList.add( '.number-of-products-title')
};


    
    













    document.addEventListener('DOMContentLoaded', () => {
  const inputs = document.querySelectorAll('.use-input, .place-of-occasion-input');

  inputs.forEach(input => {
    // Create container for custom messages
    const messageContainer = document.createElement('div');
    messageContainer.className = 'error-messages';
    input.parentNode.insertBefore(messageContainer, input.nextSibling);

    // Prevent default validation bubbles
    input.addEventListener('invalid', (e) => {
      e.preventDefault();

      // Clear previous messages
      messageContainer.innerHTML = '';

      // Check for required
      if (input.required && !input.value.trim()) {
        if (langButton.innerText == 'ع'){
                messageContainer.innerHTML = `
                  <p class="custom-error-message required">
                    <img src="warning.png" class="warning">
                    This is a required field, kindly complete it to continue.
                  </p>
                `}else if (langButton.innerText == 'EN'){
                  messageContainer.innerHTML = `<p class = "custom-error-message required" style ="direction: rtl; justify-self:end;"><img src="warning.png" class="warning"> لطفاَ, أكمل هذا الركن المطلوب.</p>`
                };
      } else {
        // Check for invalid data based on class
        if (input.classList.contains('use-input')) {
          // Validate only letters
          const regex = /^[A-Za-z\s]+$/;
          if (input.value && !regex.test(input.value.trim())) {
            messageContainer.innerHTML = `
              <p class="custom-error-message invalid">
                <img src="warning.png" class="warning">
                Kindly, make sure you enter the right data (Letters only).
              </p>
            `;
          }
        }
        // You can add other class-based validations here
      }
    });

    // Add real-time validation feedback
    input.addEventListener('input', () => {
      // Clear previous messages
      messageContainer.innerHTML = '';

      if (input.classList.contains('use-input') && input.classList.contains('no-numbers')) {
        const val = input.value;
        const hasNumber = /\d/.test(val);
        const hasLetter = /[A-Za-z]/.test(val);

        // Show message if a number is entered
        if (hasNumber) {
          messageContainer.innerHTML = `
            <p class="custom-error-message invalid">
              <img src="warning.png" class="warning">
              Invalid input: Numbers are not allowed.
            </p>
          `;
        }
        // Optionally, show "Letter detected" message or handle other logic here
      }

      if (input.classList.contains('place-of-occasion-input')) {
        const val = input.value;
        const hasLetter = /[A-Za-z]/.test(val);
        // For this input, no need to show error for numbers
        if (hasLetter) {
          // You can add visual feedback if needed
        }
      }
    });
  });
});


  function monitorTyping(inputClassName, typingMessage, emptyMessage, numberMessage , wrapperClass , validClass , invalidClass) {
  let timer; // Variable to store the timeout ID

  const inputElement = document.querySelector(inputClassName);

  if (!inputElement) {
    console.error(`Element with class "${inputClassName}" not found.`);
    return; // Exit if element not found
  }

  inputElement.addEventListener('input', () => {
    clearTimeout(timer); // Clear any existing timeout

    // Check if the input is empty
    if (inputElement.value === "") {
        console.log(emptyMessage);
        const wrapper = document.querySelector(`${wrapperClass}`);
        wrapper.classList.replace(`${validClass}` , `${invalidClass}`);
        return; // Don't proceed if empty
    }

    // Check if the input contains only numbers (crucial for robustness)
    // Check if the input contains any number anywhere in the string
    if (/\d/.test(inputElement.value)) {
        const wrapper = document.querySelector(`${wrapperClass}`);
        wrapper.classList.replace(`${validClass}` , `${invalidClass}`);
      return; // Exit if any digit is found
    };

    timer = setTimeout(() => {
      console.log(typingMessage);
      const wrapper = document.querySelector(`${wrapperClass}`)
      wrapper.classList.replace(`${invalidClass}`, `${validClass}`);
    }, 500); // 500ms delay before logging "typing..."
  });

    // Important: Add an event listener for the 'focus' and 'blur' events
  inputElement.addEventListener('focus', () => {
    clearTimeout(timer); // Clear any existing timeout on focus
  });
  inputElement.addEventListener('blur', () => {
      clearTimeout(timer); // Clear any existing timeout on blur
  });
};

    monitorTyping('.no-numbers' , 'typing...', 'Input is empty', 'Number detected' , '.input-name-wrapper' , 'input-wrapper-valid' , 'input-wrapper' , false);



    monitorTyping('.use-input' , 'typing...', 'Input is empty', 'Number detected' , '.input-name-wrapper' , 'input-wrapper-valid' , 'input-wrapper' , true);

        monitorTyping('.use-input2' , 'typing...', 'Input is empty', 'Number detected' , '.input-name-wrapper' , 'input-wrapper-valid' , 'input-wrapper' , false);









  monitorTyping('.brand-name-input' , 'typing...' , 'Input is empty' , 'Number detected' , '.brand-name-wrapper' , 'input-wrapper-valid' , 'input-wrapper' , true);


















    document.addEventListener('DOMContentLoaded', () => {
  const inputs = document.querySelectorAll('.event-coverage-use-input, .place-of-occasion-input');

  inputs.forEach(input => {
    // Create container for custom messages
    const messageContainer = document.createElement('div');
    messageContainer.className = 'error-messages';
    input.parentNode.insertBefore(messageContainer, input.nextSibling);

    // Prevent default validation bubbles
    input.addEventListener('invalid', (e) => {
      e.preventDefault();

      // Clear previous messages
      messageContainer.innerHTML = '';

      // Check for required
      if (input.required && !input.value.trim()) {
        if (langButton.innerText == 'ع'){
                messageContainer.innerHTML = `
                  <p class="custom-error-message required">
                    <img src="warning.png" class="warning">
                    This is a required field, kindly complete it to continue.
                  </p>
                `}else if (langButton.innerText == 'EN'){
                  messageContainer.innerHTML = `<p class = "custom-error-message required" style ="direction: rtl; justify-self:end;"><img src="warning.png" class="warning"> لطفاَ, أكمل هذا الركن المطلوب.</p>`
                };
      } else {
        // Check for invalid data based on class
        if (input.classList.contains('event-coverage-use-input')) {
          // Validate only letters
          const regex = /^[A-Za-z\s]+$/;
          if (input.value && !regex.test(input.value.trim())) {
            messageContainer.innerHTML = `
              <p class="custom-error-message invalid">
                <img src="warning.png" class="warning">
                Kindly, make sure you enter the right data (Letters only).
              </p>
            `;
          }
        }
        // You can add other class-based validations here
      }
    });

    // Add real-time validation feedback
    input.addEventListener('input', () => {
      // Clear previous messages
      messageContainer.innerHTML = '';

      if (input.classList.contains('event-coverage-use-input')) {
        const val = input.value;
        const hasNumber = /\d/.test(val);
        const hasLetter = /[A-Za-z]/.test(val);

        // Show message if a number is entered
        if (hasNumber) {
          messageContainer.innerHTML = `

          `;
        }
        // Optionally, show "Letter detected" message or handle other logic here
      }

      if (input.classList.contains('place-of-occasion-input')) {
        const val = input.value;
        const hasLetter = /[A-Za-z]/.test(val);
        // For this input, no need to show error for numbers
        if (hasLetter) {
          // You can add visual feedback if needed
        }
      }
    });
  });
});


  function eventcTyping(inputClassName, typingMessage, emptyMessage, numberMessage , wrapperClass , validClass , invalidClass) {
  let timer; // Variable to store the timeout ID

  const inputElement = document.querySelector(inputClassName);

  if (!inputElement) {
    console.error(`Element with class "${inputClassName}" not found.`);
    return; // Exit if element not found
  }

  inputElement.addEventListener('input', () => {
    clearTimeout(timer); // Clear any existing timeout

    // Check if the input is empty
    if (inputElement.value === "") {
        console.log(emptyMessage);
        const wrapper = document.querySelector(`${wrapperClass}`);
        wrapper.classList.replace(`${validClass}` , `${invalidClass}`);
        return; // Don't proceed if empty
    }

    // Check if the input contains only numbers (crucial for robustness)
    // Check if the input contains any number anywhere in the string


    timer = setTimeout(() => {
      console.log(typingMessage);
      const wrapper = document.querySelector(`${wrapperClass}`)
      wrapper.classList.replace(`${invalidClass}`, `${validClass}`);
    }, 500); // 500ms delay before logging "typing..."
  });

    // Important: Add an event listener for the 'focus' and 'blur' events
  inputElement.addEventListener('focus', () => {
    clearTimeout(timer); // Clear any existing timeout on focus
  });
  inputElement.addEventListener('blur', () => {
      clearTimeout(timer); // Clear any existing timeout on blur
  });
};

    eventcTyping('.event-coverage-use-input', 'typing...', 'Input is empty', 'Number detected' , '.event-coverage-input1-name-wrapper' , 'event-coverage-input1-wrapper-valid' , 'event-coverage-input1-wrapper');












    document.addEventListener('DOMContentLoaded', () => {
  const inputs = document.querySelectorAll('.event-coverage-location, .place-of-occasion-input');

  inputs.forEach(input => {
    // Create container for custom messages
    const messageContainer = document.createElement('div');
    messageContainer.className = 'error-messages';
    input.parentNode.insertBefore(messageContainer, input.nextSibling);

    // Prevent default validation bubbles
    input.addEventListener('invalid', (e) => {
      e.preventDefault();

      // Clear previous messages
      messageContainer.innerHTML = '';

      // Check for required
      if (input.required && !input.value.trim()) {
          if (langButton.innerText == 'ع'){
                  messageContainer.innerHTML = `
                    <p class="custom-error-message required">
                      <img src="warning.png" class="warning">
                      This is a required field, kindly complete it to continue.
                    </p>
                  `}else if (langButton.innerText == 'EN'){
                    messageContainer.innerHTML = `<p class = "custom-error-message required" style ="direction: rtl; justify-self:end;"><img src="warning.png" class="warning"> لطفاَ, أكمل هذا الركن المطلوب.</p>`
                  };
      } else {
        // Check for invalid data based on class
        if (input.classList.contains('event-coverage-location')) {
          // Validate only letters
          const regex = /^[A-Za-z\s]+$/;
          if (input.value && !regex.test(input.value.trim())) {
            messageContainer.innerHTML = `
              <p class="custom-error-message invalid">
                <img src="warning.png" class="warning">
                Kindly, make sure you enter the right data (Letters only).
              </p>
            `;
          }
        }
        // You can add other class-based validations here
      }
    });

    // Add real-time validation feedback
    input.addEventListener('input', () => {
      // Clear previous messages
      messageContainer.innerHTML = '';

      if (input.classList.contains('event-coverage-location')) {
        const val = input.value;
        const hasNumber = /\d/.test(val);
        const hasLetter = /[A-Za-z]/.test(val);

        // Show message if a number is entered
        if (hasNumber) {
          messageContainer.innerHTML = `

          `;
        }
        // Optionally, show "Letter detected" message or handle other logic here
      }

      if (input.classList.contains('place-of-occasion-input')) {
        const val = input.value;
        const hasLetter = /[A-Za-z]/.test(val);
        // For this input, no need to show error for numbers
        if (hasLetter) {
          // You can add visual feedback if needed
        }
      }
    });
  });
});


  function eventLoctionTyping(inputClassName, typingMessage, emptyMessage, numberMessage , wrapperClass , validClass , invalidClass) {
  let timer; // Variable to store the timeout ID

  const inputElement = document.querySelector(inputClassName);

  if (!inputElement) {
    console.error(`Element with class "${inputClassName}" not found.`);
    return; // Exit if element not found
  }

  inputElement.addEventListener('input', () => {
    clearTimeout(timer); // Clear any existing timeout

    // Check if the input is empty
    if (inputElement.value === "") {
        console.log(emptyMessage);
        const wrapper = document.querySelector(`${wrapperClass}`);
        wrapper.classList.replace(`${validClass}` , `${invalidClass}`);
        return; // Don't proceed if empty
    }

    // Check if the input contains only numbers (crucial for robustness)
    // Check if the input contains any number anywhere in the string

    timer = setTimeout(() => {
      console.log(typingMessage);
      const wrapper = document.querySelector(`${wrapperClass}`)
      wrapper.classList.replace(`${invalidClass}`, `${validClass}`);
    }, 500); // 500ms delay before logging "typing..."
  });

    // Important: Add an event listener for the 'focus' and 'blur' events
  inputElement.addEventListener('focus', () => {
    clearTimeout(timer); // Clear any existing timeout on focus
  });
  inputElement.addEventListener('blur', () => {
      clearTimeout(timer); // Clear any existing timeout on blur
  });
};

    eventLoctionTyping('.event-coverage-location', 'typing...', 'Input is empty', 'Number detected' , '.event-location-wrapper' , 'event-coverage-location-input-wrapper-valid' , 'event-coverage-location-input-wrapper');























  document.addEventListener('DOMContentLoaded', () => {
  const inputs = document.querySelectorAll('.use-input-event-duration, .place-of-occasion-input');

  inputs.forEach(input => {
    // Create container for custom messages
    const messageContainer = document.createElement('div');
    messageContainer.className = 'error-messages';
    input.parentNode.insertBefore(messageContainer, input.nextSibling);

    // Prevent default validation bubbles
    input.addEventListener('invalid', (e) => {
      e.preventDefault();

      // Clear previous messages
      messageContainer.innerHTML = '';

      // Check for required
      if (input.required && !input.value.trim()) {
          if (langButton.innerText == 'ع'){
                  messageContainer.innerHTML = `
                    <p class="custom-error-message required">
                      <img src="warning.png" class="warning">
                      This is a required field, kindly complete it to continue.
                    </p>
                  `}else if (langButton.innerText == 'EN'){
                    messageContainer.innerHTML = `<p class = "custom-error-message required" style ="direction: rtl; justify-self:end;"><img src="warning.png" class="warning"> لطفاَ, أكمل هذا الركن المطلوب.</p>`
                  };
      } else {
        // Check for invalid data based on class
        if (input.classList.contains('use-input-event-duration')) {
          // Validate only letters
          const regex = /^[A-Za-z\s]+$/;
          if (input.value && !regex.test(input.value.trim())) {
            messageContainer.innerHTML = `
              <p class="custom-error-message invalid">
                <img src="warning.png" class="warning">
                Kindly, make sure you enter the right data (Letters only).
              </p>
            `;
          }
        }
        // You can add other class-based validations here
      }
    });

    // Add real-time validation feedback
    input.addEventListener('input', () => {
      // Clear previous messages
      messageContainer.innerHTML = '';

      if (input.classList.contains('use-input-event-duration')) {
        const val = input.value;
        const hasNumber = /\d/.test(val);
        const hasLetter = /[A-Za-z]/.test(val);

        // Show message if a number is entered
        if (hasNumber) {
          messageContainer.innerHTML = `

          `;
        }
        // Optionally, show "Letter detected" message or handle other logic here
      }

      if (input.classList.contains('place-of-occasion-input')) {
        const val = input.value;
        const hasLetter = /[A-Za-z]/.test(val);
        // For this input, no need to show error for numbers
        if (hasLetter) {
          // You can add visual feedback if needed
        }
      }
    });
  });
});


  function eventDurationTyping(inputClassName, typingMessage, emptyMessage, numberMessage , wrapperClass , validClass , invalidClass) {
  let timer; // Variable to store the timeout ID

  const inputElement = document.querySelector(inputClassName);

  if (!inputElement) {
    console.error(`Element with class "${inputClassName}" not found.`);
    return; // Exit if element not found
  }

  inputElement.addEventListener('input', () => {
    clearTimeout(timer); // Clear any existing timeout

    // Check if the input is empty
    if (inputElement.value === "") {
        console.log(emptyMessage);
        const wrapper = document.querySelector(`${wrapperClass}`);
        wrapper.classList.replace(`${validClass}` , `${invalidClass}`);
        return; // Don't proceed if empty
    }

    // Check if the input contains only numbers (crucial for robustness)
    // Check if the input contains any number anywhere in the string


    timer = setTimeout(() => {
      console.log(typingMessage);
      const wrapper = document.querySelector(`${wrapperClass}`)
      wrapper.classList.replace(`${invalidClass}`, `${validClass}`);
    }, 500); // 500ms delay before logging "typing..."
  });

    // Important: Add an event listener for the 'focus' and 'blur' events
  inputElement.addEventListener('focus', () => {
    clearTimeout(timer); // Clear any existing timeout on focus
  });
  inputElement.addEventListener('blur', () => {
      clearTimeout(timer); // Clear any existing timeout on blur
  });
};

    eventDurationTyping('.use-input-event-duration', 'typing...', 'Input is empty', 'Number detected' , '.event-duration-wrapper' , 'event-duration-input-wrapper-valid' , 'event-duration-input-wrapper');




















    document.addEventListener('DOMContentLoaded', () => {
  const inputs = document.querySelectorAll('.use-input-brand-name, .place-of-occasion-input');

  inputs.forEach(input => {
    // Create container for custom messages
    const messageContainer = document.createElement('div');
    messageContainer.className = 'error-messages';
    input.parentNode.insertBefore(messageContainer, input.nextSibling);

    // Prevent default validation bubbles
    input.addEventListener('invalid', (e) => {
      e.preventDefault();

      // Clear previous messages
      messageContainer.innerHTML = '';

      // Check for required
      if (input.required && !input.value.trim()) {
        messageContainer.innerHTML = `

        `;
      } else {
        // Check for invalid data based on class
        if (input.classList.contains('use-input-brand-name')) {
          // Validate only letters
          const regex = /^[A-Za-z\s]+$/;
          if (input.value && !regex.test(input.value.trim())) {
            messageContainer.innerHTML = `
              <p class="custom-error-message invalid">
                <img src="warning.png" class="warning">
                Kindly, make sure you enter the right data (Letters only).
              </p>
            `;
          }
        }
        // You can add other class-based validations here
      }
    });

    // Add real-time validation feedback
    input.addEventListener('input', () => {
      // Clear previous messages
      messageContainer.innerHTML = '';

      if (input.classList.contains('use-input-brand-name')) {
        const val = input.value;
        const hasNumber = /\d/.test(val);
        const hasLetter = /[A-Za-z]/.test(val);

        // Show message if a number is entered
        if (hasNumber) {
          messageContainer.innerHTML = `

          `;
        }
        // Optionally, show "Letter detected" message or handle other logic here
      }

      if (input.classList.contains('place-of-occasion-input')) {
        const val = input.value;
        const hasLetter = /[A-Za-z]/.test(val);
        // For this input, no need to show error for numbers
        if (hasLetter) {
          // You can add visual feedback if needed
        }
      }
    });
  });
});


  function branNameTyping(inputClassName, typingMessage, emptyMessage, numberMessage , wrapperClass , validClass , invalidClass) {
  let timer; // Variable to store the timeout ID

  const inputElement = document.querySelector(inputClassName);

  if (!inputElement) {
    console.error(`Element with class "${inputClassName}" not found.`);
    return; // Exit if element not found
  }

  inputElement.addEventListener('input', () => {
    clearTimeout(timer); // Clear any existing timeout

    // Check if the input is empty
    if (inputElement.value === "") {
        console.log(emptyMessage);
        const wrapper = document.querySelector(`${wrapperClass}`);
        wrapper.classList.replace(`${validClass}` , `${invalidClass}`);
        return; // Don't proceed if empty
    }

    // Check if the input contains only numbers (crucial for robustness)
    // Check if the input contains any number anywhere in the string


    timer = setTimeout(() => {
      console.log(typingMessage);
      const wrapper = document.querySelector(`${wrapperClass}`)
      wrapper.classList.replace(`${invalidClass}`, `${validClass}`);
    }, 500); // 500ms delay before logging "typing..."
  });

    // Important: Add an event listener for the 'focus' and 'blur' events
  inputElement.addEventListener('focus', () => {
    clearTimeout(timer); // Clear any existing timeout on focus
  });
  inputElement.addEventListener('blur', () => {
      clearTimeout(timer); // Clear any existing timeout on blur
  });
};

    branNameTyping('.use-input-brand-name', 'typing...', 'Input is empty', 'Number detected' , '.brand-name-wrapper' , 'brand-name-input-wrapper-valid' , 'brand-name-input-wrapper');


































 function optoinCreationENV(...options){
            const optionsContainer = document.querySelector('.expected-number-of-visitors2')
            let count = 1;
           

            options.forEach((option)=>{
                const optionStructure = `<div class='expected-number-of-visitors2-option${count} drop-down-option-env' onclick=" let option = document.querySelector('.expected-number-of-visitors2-option${count}'); optoinSelectionENV(option);"> <div class='option1-items-container'> ${option} </div> <img src='ImagesFolder/dropdown-icon.svg' class='dropdown-icon'> </div>`
                optionsContainer.innerHTML += optionStructure
                count ++

                console.log(optionsContainer);

            })
        };


        optoinCreationENV('Under 50', '51-100' , '101-200' , '200-300 or more');

    

        if (!document.querySelector('.picked-option-env')){
            const option1 = document.querySelector('.expected-number-of-visitors2-option1')
            option1.classList.add('picked-option-env')
            const dropDown = option1.querySelector('.dropdown-icon');
            dropDown.classList.replace('dropdown-icon' , 'dropdown-icon-on')
        };



    
    
        function optoinSelectionENV(clickedoption){

            

        

        const previousPicked = document.querySelector('.picked-option-env');
        const previousDropDown = previousPicked.querySelector('.dropdown-icon-on');
        previousDropDown.classList.replace('dropdown-icon-on' , 'dropdown-icon')
        previousPicked.classList.remove('picked-option-env');
   
        clickedoption.classList.add('picked-option-env');
        const dropDown = clickedoption.querySelector('.dropdown-icon');
        dropDown.classList.replace('dropdown-icon' , 'dropdown-icon-on')
        

            
    
        if(document.querySelector('.expected-number-of-visitors2-toggled')){
            const optionPick = document.querySelector('.expected-number-of-visitors2-toggled');
            optionPick.classList.replace('expected-number-of-visitors2-toggled' , 'expected-number-of-visitors2');
            dropDown.style.transform = 'rotate(0deg)';
            const dropDownTitle = document.querySelector('.expected-number-of-visitors2-title');
            dropDownTitle.classList.replace('expected-number-of-visitors2-title' , 'expected-number-of-visitors2-title-valid');
        }else if (!document.querySelector('.expected-number-of-visitors2-toggled')){
            const optionPick = document.querySelector('.expected-number-of-visitors2');
            optionPick.classList.replace('expected-number-of-visitors2' , 'expected-number-of-visitors2-toggled');
            dropDown.style.transform = 'rotate(180deg)';
            const dropDownTitle = document.querySelector('.expected-number-of-visitors2-title-valid');
            if(dropDownTitle)
            dropDownTitle.classList.replace('expected-number-of-visitors2-title-valid' , 'expected-number-of-visitors2-title');
        }

        const options = document.querySelectorAll('.drop-down-option-env');
        const untoggledHeight = options[0].offsetHeight;
        console.log('untoggled height is:'+ untoggledHeight)
        const toggledHeight = (options.length) * untoggledHeight;
        console.log('toggled height is:'+ toggledHeight)
        const dropDownElement = document.querySelector('.expected-number-of-visitors2');
        const dropDownElementToggled = document.querySelector('.expected-number-of-visitors2-toggled');

        if(dropDownElement){
                  dropDownElement.style.height = `${untoggledHeight}px`;
        }else if(dropDownElementToggled){
                  dropDownElementToggled.style.height = `${toggledHeight}px`;
        }
              
    ;
    };
























































    document.addEventListener('DOMContentLoaded', () => {
  const inputs = document.querySelectorAll('.use-input-phone-number, .place-of-occasion-input');

  inputs.forEach(input => {
    // Create container for custom messages
    const messageContainer = document.createElement('div');
    messageContainer.className = 'error-messages';
    input.parentNode.insertBefore(messageContainer, input.nextSibling);

    // Prevent default validation bubbles
    input.addEventListener('invalid', (e) => {
      e.preventDefault();

      // Clear previous messages
      messageContainer.innerHTML = '';

      // Check for required
      if (input.required && !input.value.trim()) {
        messageContainer.innerHTML = `

        `;
      } else {
        // Check for invalid data based on class
        if (input.classList.contains('use-input-phone-number')) {
          // Validate only letters
          const regex = /^[A-Za-z\s]+$/;
          if (input.value && !regex.test(input.value.trim())) {
            messageContainer.innerHTML = `
              <p class="custom-error-message invalid">
                <img src="warning.png" class="warning">
                Kindly, make sure you enter the right data (Letters only).
              </p>
            `;
          }
        }
        // You can add other class-based validations here
      }
    });

    // Add real-time validation feedback
    input.addEventListener('input', () => {
      // Clear previous messages
      messageContainer.innerHTML = '';

      if (input.classList.contains('use-input-phone-number')) {
        const val = input.value;
        const hasNumber = /\d/.test(val);
        const hasLetter = /[A-Za-z]/.test(val);

        // Show message if a number is entered
        if (hasNumber) {
          messageContainer.innerHTML = `

 
          `;
        }
        // Optionally, show "Letter detected" message or handle other logic here
      }

      if (input.classList.contains('place-of-occasion-input')) {
        const val = input.value;
        const hasLetter = /[A-Za-z]/.test(val);
        // For this input, no need to show error for numbers
        if (hasLetter) {
          // You can add visual feedback if needed
        }
      }
    });
  });
});


  function phoneNumberTyping(inputClassName, typingMessage, emptyMessage, numberMessage , wrapperClass , validClass , invalidClass) {
  let timer; // Variable to store the timeout ID

  const inputElement = document.querySelector(inputClassName);

  if (!inputElement) {
    console.error(`Element with class "${inputClassName}" not found.`);
    return; // Exit if element not found
  }

  inputElement.addEventListener('input', () => {
    clearTimeout(timer); // Clear any existing timeout

    // Check if the input is empty
    if (inputElement.value === "") {
        console.log(emptyMessage);
        const wrapper = document.querySelector(`${wrapperClass}`);
        wrapper.classList.replace(`${validClass}` , `${invalidClass}`);
        return; // Don't proceed if empty
    }

    // Check if the input contains only numbers (crucial for robustness)
    // Check if the input contains any number anywhere in the string
  if (!/\d/.test(inputElement.value)) {
    const wrapper = document.querySelector(`${wrapperClass}`);
    wrapper.classList.replace(`${validClass}`, `${invalidClass}`);
    return; // Exit if no digit is found
  }

    timer = setTimeout(() => {
      console.log(typingMessage);
      const wrapper = document.querySelector(`${wrapperClass}`)
      wrapper.classList.replace(`${invalidClass}`, `${validClass}`);
    }, 500); // 500ms delay before logging "typing..."
  });

    // Important: Add an event listener for the 'focus' and 'blur' events
  inputElement.addEventListener('focus', () => {
    clearTimeout(timer); // Clear any existing timeout on focus
  });
  inputElement.addEventListener('blur', () => {
      clearTimeout(timer); // Clear any existing timeout on blur
  });
};

    phoneNumberTyping('.use-input-phone-number', 'typing...', 'Input is empty', 'Number detected' , '.phone-number-wrapper' , 'phone-number-input-wrapper-valid' , 'phone-number-input-wrapper');





const userFormData = {

}


function dataExtraction(){
  const servicepickElement = document.querySelector('.service-pick')
  const childDivsService = servicepickElement.querySelectorAll('div');

          // Iterate over each child div
          childDivsService.forEach(div => {
            // Get the computed style of the div
            const style = window.getComputedStyle(div);

            // Check if the 'order' property is -1
            if (style.getPropertyValue('order') === '-1') {
              // Log the inner text of the matching div
              const serviceValue = div.innerText;

              userFormData.serviceType = serviceValue
          }});
  const userName = document.querySelector('.fullname-input').value;
  const contactNumber = document.querySelector('.use-input-phone-number').value ;

  userFormData.personalName = userName;
  userFormData.phoneNumber = contactNumber;



  // Select the container
  const container = document.querySelector('.service-based-container-on');

  if (container) {
    // Get all elements with class 'form-input' inside the container
    const formInputs = container.querySelectorAll('.form-input');

    // Loop through each element
    formInputs.forEach(element => {
      if (element.tagName.toLowerCase() === 'input') {
        const dataValue = element.getAttribute('data-value');
        const inputValue = element.value;

        userFormData[dataValue] = (inputValue)
        ;
      } else if (element.classList.contains('form-input')) {
        const dataValue =  element.getAttribute('data-value');
         const childDivs = element.querySelectorAll('div');

          // Iterate over each child div
          childDivs.forEach(div => {
            // Get the computed style of the div
            const style = window.getComputedStyle(div);

            // Check if the 'order' property is -1
            if (style.getPropertyValue('order') === '-1') {
              // Log the inner text of the matching div
              const inputValue = div.innerText;

              userFormData[dataValue] = (inputValue)
            }
          });

          

      }
    });
  }

  if (document.querySelector('.arabic-calendar-and-time-container').classList.contains('arabic-calendar-off')){
      const bookingDate = document.querySelector('.booking-calendar-button').innerText  ;
      const bookingTime = document.querySelector('.booking-time-input').innerText ;

      userFormData.bookingDate = bookingDate;
      userFormData.bookingTime = bookingTime;
  }else if (document.querySelector('.arabic-calendar-and-time-container').classList.contains('arabic-calendar-on')){
        const bookingDate = document.querySelector('.booking-calendar-button-arabic').innerText  ;
        const bookingTime = document.querySelector('.booking-time-input-arabic').innerText ;

        userFormData.bookingDate = bookingDate;
        userFormData.bookingTime = bookingTime;
  };





  console.log(userFormData);
};



function saveUserData(){
  localStorage.setItem('userData' , JSON.stringify(userFormData));
};















function hamburgerFunction(){

const langButton = document.querySelector('.language');

console.log(langButton.innerHTML)

if (langButton.innerHTML == 'ع'){

//English Version
//Step 1: Remove the hamburger element.
const hamburgerEF = document.querySelector('.hamburger-functional');
hamburgerEF.classList.remove('hamburger-functional');
hamburgerEF.classList.add('hamburger-functional-off');

//Step 2: Toggle the sidebar.
const sidebar = document.querySelector('.sidebar');
sidebar.classList.add('sidebar-toggled'); 
header.style.position = 'fixed';
hero.style.marginTop = 'clamp(0px,calc(var(--header-width)/3.2),114px)';

//Step 3: Show non-functional X.
const sidebarX = document.querySelector('.sidebar-x');
sidebarX.classList.add('sidebar-x-appear');
sidebarX.classList.remove('sidebar-x');

//Step 4: Removes non-functional X after 1 second.
setTimeout(function() {
    const sidebarXF = document.querySelector('.sidebar-x-functional');
    sidebarXF.classList.add('sidebar-x-functional-appear');

//Step 5: Show the functional X.
    sidebarX.classList.remove('sidebar-x-appear');
    sidebarX.classList.add('sidebar-x');
}, 1000);} else{
//Arabic Version
//Step 1: Remove the hamburger element.
hamburgerEF.classList.remove('hamburger-functional');
hamburgerEF.classList.add('hamburger-functional-off');

//Step 2: Toggle the sidebar.
const arabicSidebar = document.querySelector('.sidebar-arabic');
arabicSidebar.classList.add('sidebar-toggled-arabic'); 
header.style.position = 'fixed';
hero.style.marginTop = 'clamp(0px,calc(var(--header-width)/3.2),114px)';

//Step 3: Show non-functional X.
const sidebarX = document.querySelector('.sidebar-x');
sidebarX.classList.add('sidebar-x-appear');
sidebarX.classList.remove('sidebar-x');

//Step 4: Removes non-functional X after 1 second.
setTimeout(function() {
    const sidebarXF = document.querySelector('.sidebar-x-functional');
    sidebarXF.classList.add('sidebar-x-functional-appear');

//Step 5: Show the functional X.
    sidebarX.classList.remove('sidebar-x-appear');
    sidebarX.classList.add('sidebar-x');
}, 1000);
;}}


















;

function closeSidebar(){

if (document.querySelector('.sidebar')){
const sidebar = document.querySelector('.sidebar');
sidebar.classList.add('sidebar-close');
header.style.position = 'static';
hero.style.marginTop = '0px';

//Step 3: Wait 1 second then remove the sidebar.
setTimeout(function() {
    sidebar.classList.remove('sidebar-toggled');
    sidebar.classList.remove('sidebar-close');
}, 1000);
};

if(document.querySelector('.sidebar-arabic')){

//Step 2: Toggle the sidebar close animation.
const arabicSidebar = document.querySelector('.sidebar-arabic');
arabicSidebar.classList.add('sidebar-close-arabic');


//Step 3: Wait 1 second then remove the sidebar.
setTimeout(function() {
    arabicSidebar.classList.remove('sidebar-toggled-arabic');
    arabicSidebar.classList.remove('sidebar-close-arabic');
}, 1000);


};};







function sidebarX(){
//English Version
//Step 1: Remove the X.
const sidebarXF = document.querySelector('.sidebar-x-functional');
sidebarXF.classList.remove('sidebar-x-functional-appear');

//Step 2: Toggle the sidebar close animation.
const sidebar = document.querySelector('.sidebar');
sidebar.classList.add('sidebar-close');
header.style.position = 'static';
hero.style.marginTop = '0px';


//Step 3: Wait 1 second then remove the sidebar.
setTimeout(function() {
    sidebar.classList.remove('sidebar-toggled');
    sidebar.classList.remove('sidebar-close');
}, 1000);

//Step 4: Show the non-functional hamburger.
const hamburgerE = document.querySelector('.hamburger');
hamburgerE.classList.remove('hmbrgr-off');
console.log('non-functional hamburger here')

//Step 5: Wait 1 second then remove the hamburger.
setTimeout(function() {
    hamburgerE.classList.add('hmbrgr-off');

//Step 6: Show the functional hamburger button.
const hamburgerEF = document.querySelector('.hamburger-functional-off');
hamburgerEF.classList.remove('hamburger-functional-off');
hamburgerEF.classList.add('hamburger-functional');
console.log('functional hamburger here');
console.log(hamburgerEF.classList);

}, 1000);
console.log(sidebar.classList);


//Arabic Version
//Step 1: Remove the X.
sidebarXF.classList.remove('sidebar-x-functional-appear');

//Step 2: Toggle the sidebar close animation.
const arabicSidebar = document.querySelector('.sidebar-arabic');
arabicSidebar.classList.add('sidebar-close-arabic');


//Step 3: Wait 1 second then remove the sidebar.
setTimeout(function() {
    arabicSidebar.classList.remove('sidebar-toggled-arabic');
    arabicSidebar.classList.remove('sidebar-close-arabic');
}, 1000);

//Step 4: Show the non-functional hamburger.
hamburgerE.classList.remove('hmbrgr-off');
console.log('non-functional hamburger here')

//Step 5: Wait 1 second then remove the hamburger.
setTimeout(function() {
    hamburgerE.classList.add('hmbrgr-off');

//Step 6: Show the functional hamburger button.
const hamburgerEF = document.querySelector('.hamburger-functional-off');
hamburgerEF.classList.remove('hamburger-functional-off');
hamburgerEF.classList.add('hamburger-functional');
console.log('functional hamburger here');
console.log(hamburgerEF.classList);

}, 1000);
console.log(sidebar.classList);


};










//Calendar Js:
function toggleCalendarA() {
  const calendar = document.querySelector('.booking-calendar-off-arabic');
  console.log(calendar);
  calendar.classList.replace('booking-calendar-off-arabic', 'booking-calendar-on-arabic');
}

function currentDateA() {
  const currentDateA = new Date();

  const monthNames = [
    "يناير", "فبراير", "مارس", "أبريل", "مايو", "يونيو",
    "يوليو", "أغسطس", "سبتمبر", "أكتوبر", "نوفمبر", "ديسمبر"
  ];

  const monthName = monthNames[currentDateA.getMonth()]; // getMonth() returns 0-11
  const dayNumber = currentDateA.getDate();

const numeralsMap = {
  '0': '٠',
  '1': '١',
  '2': '٢',
  '3': '٣',
  '4': '٤',
  '5': '٥',
  '6': '٦',
  '7': '٧',
  '8': '٨',
  '9': '٩'
};

const arabicDay = String(dayNumber).replace(/\d/g, (digit) => numeralsMap[digit]);

console.log(arabicDay); // e.g., "٢٧" for 27th
  const year = currentDateA.getFullYear();
  const calendarButton = document.querySelector('.booking-calendar-button-arabic');

  calendarButton.innerHTML = `<div class = 'date-text-container-arabic'> <strong> </strong> ال${arabicDay} من ${monthName}  ٢٠٢٥</div>`;
}

currentDateA();

function currentDayA() {
  const currentDateA = new Date();

  const days = [
    "الأحد", "الإثنين", "الثلاثاء", "الأربعاء", "الخميس", "الجمعة", "السبت"
  ];

  const dayOfWeek = days[currentDateA.getDay()];

  const calendarButton = document.querySelector('.booking-calendar-button-arabic');
  const calendarButtonWD = calendarButton.querySelector('strong');
  calendarButtonWD.innerHTML = `${dayOfWeek}`;
}

currentDayA();

document.addEventListener('DOMContentLoaded', () => {
  const days = document.querySelectorAll('.days-arabic');

  days.forEach(element => {
    element.addEventListener('click', () => {
      const dayOfWeek = element.getAttribute('data-day');
      const month = element.getAttribute('data-month');
      const innerText = element.innerText;

      const calendarButtonWD = document.querySelector('.booking-calendar-button-arabic').querySelector('strong');
      calendarButtonWD.innerHTML = `${dayOfWeek}`;

      const calendarButton = document.querySelector('.booking-calendar-button-arabic')
      calendarButton.innerHTML = `<div class = 'date-text-container'> <strong>${dayOfWeek}</strong> ال${innerText}   من ${month}  2025 </div>`;

      const calendar = document.querySelector('.booking-calendar-on-arabic');
      calendar.classList.replace('booking-calendar-on-arabic', 'booking-calendar-off-arabic');
    });
  });
});

let hoursA = '';
let minutesStrA = '';
let ampmA = '';

const bookingTimeInputA = document.querySelector('.booking-time-input-arabic');
bookingTimeInput.innerText = `${hoursA}:${minutesStrA} ${ampmA}`;

function getCurrentTimeRoundedA() {
  const now = new Date();
  hoursA = now.getHours();
  let minutes = now.getMinutes();


  const numeralsMap = {
  '0': '٠',
  '1': '١',
  '2': '٢',
  '3': '٣',
  '4': '٤',
  '5': '٥',
  '6': '٦',
  '7': '٧',
  '8': '٨',
  '9': '٩'
};

  minutes = Math.round(minutes / 15) * 15;

  if (minutes === 60) {
    minutes = 0;
    hoursA += 1;
  }

  ampmA = hoursA >= 12 ? 'مساءً' : 'صباحاً';
  hoursA = hoursA % 12;
  hoursA = hoursA ? hoursA : 12;

  minutesStrA = minutes === 0 ? '00' : minutes.toString();


  hoursA = String(hoursA).replace(/\d/g, (digit) => numeralsMap[digit]);
  minutesStrA = String(minutesStrA).replace(/\d/g, (digit) => numeralsMap[digit]);

  bookingTimeInputA.innerText = `${hoursA}:${minutesStrA} ${ampmA}`;
}

getCurrentTimeRoundedA();

function timePickerToggleA() {
  const timePickerA = document.querySelector('.time-pick-container-arabic');
  timePickerA.classList.replace('time-pick-container-arabic', 'time-pick-container-arabic-on');
}


let hourValueA = '';
let minuteValueA = '';
let periodValueA = '';



function timeValuePickA(button, type) {

const numeralsMap = {
  '0': '٠',
  '1': '١',
  '2': '٢',
  '3': '٣',
  '4': '٤',
  '5': '٥',
  '6': '٦',
  '7': '٧',
  '8': '٨',
  '9': '٩'
};

  const previous = document.querySelector(`.${type}-button.active`);
  if (previous) {
    previous.classList.remove('active');
  }
  button.classList.add('active');

  const value = button.getAttribute('data-value');

  if (type === 'hour') {
    hoursA = value;
    hoursA = String(hoursA).replace(/\d/g, (digit) => numeralsMap[digit]);

  } else if (type === 'minute') {
    minutesStrA = value;
    minutesStrA = String(minutesStrA).replace(/\d/g, (digit) => numeralsMap[digit]);

  } else if (type === 'period') {
    ampmA = value;
  }



  document.querySelector('.booking-time-input-arabic').innerText = `${hoursA}:${minutesStrA} ${ampmA}`;
}

















;






getCurrentTimeRounded();
























function getCurrentLanguage(){
  const savedOne = localStorage.getItem('savedCharacter');
  if(savedOne == 'ع'){

    return

  }else if(savedOne == 'EN'){
    switchLanguage();
  }
}

getCurrentLanguage();




