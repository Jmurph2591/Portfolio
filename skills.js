//load progress bars

document.addEventListener('DOMContentLoaded', () => {
  //document.getElementById("test").addEventListener("click", progress);
});

/*upon the page loading, i would like each of the progress 
bars to load to their specific percentage defined in the document */

var percentageInterval;
var increasePercent;

// on ready
document.addEventListener('DOMContentLoaded', () => {
  const $pmSkillBox = document.querySelector('.skillBox.project-management');
  const $wdSkillBox = document.querySelector('.skillBox.web-design');
  const $msSkillBox = document.querySelector('.skillBox.marketing-strategy');
  const $agpmSkillBox = document.querySelector('.skillBox.agilePm');
  const $olAdvertisingSkillBox = document.querySelector('.skillBox.olAdvertising');
  const $jiraSkillBox = document.querySelector('.skillBox.jira');
  const $htmlcssSkillBox = document.querySelector('.skillBox.htmlCss');
  const $jsSkillBox = document.querySelector('.skillBox.javascript');


  const $pmSkillPercentLabel = document.querySelector('.project-management .skillPercent');
  const $wdSkillPercentLabel = document.querySelector('.web-design .skillPercent');
  const $msSkillPercentLabel = document.querySelector('.marketing-strategy .skillPercent');
  const $agpmSkillPercentLabel = document.querySelector('.agilePm .skillPercent');
  const $oldadverSkillPercentLabel = document.querySelector('.olAdvertising .skillPercent');
  const $jiraSkillPercentLabel = document.querySelector('.jira .skillPercent');
  const $htmlcssSkillPercentLabel = document.querySelector('.htmlCss .skillPercent');
  const $jsSkillPercentLabel = document.querySelector('.javascript .skillPercent');


  const $pmSkillBar = document.querySelector('.project-management .progressBox .progressBar');
  const $wdSkillBar = document.querySelector('.web-design .progressBox .progressBar');
  const $msSkillBar = document.querySelector('.marketing-strategy .progressBox .progressBar');
  const $agpmSkillBar = document.querySelector('.agilePm .progressBox .progressBar');
  const $oladverSkillBar = document.querySelector('.olAdvertising .progressBox .progressBar');
  const $jiraSkillBar = document.querySelector('.jira .progressBox .progressBar');
  const $htmlcssSkillBar = document.querySelector('.htmlCss .progressBox .progressBar');
  const $jsSkillBar = document.querySelector('.javascript .progressBox .progressBar');

  // load max percentage
  const pmMaxPercent = 90;
  const wdMaxPercent = 70;
  const msMaxPercent = 90;
  const agpmMaxPercent = 80;
  const oldadverMaxPercent = 80;
  const jiraMaxPercent = 85;
  const htmlcssMaxPercent = 90;
  const jsMaxPercent = 70;
  
  // start at 0 for each progress bar
  let pmCurrentPercent = 0;
  let wdCurrentPercent = 0;
  let msCurrentPercent = 0;
  let agPmCurrentPercent = 0;
  let olAdverCurrentPercent = 0;
  let jiraCurrentPercent = 0;
  let htmlcssCurrentPercent = 0;
  let jsCurrentPercent = 0;

  // draw every value once
  $pmSkillPercentLabel.innerHTML = `${pmCurrentPercent}%`;
  $wdSkillPercentLabel.innerHTML = `${wdCurrentPercent}%`;
  $msSkillPercentLabel.innerHTML  = `${msCurrentPercent}%`;
  //$agpmSkillPercentLabel.innerHTML  = `${agPmCurrentPercent}%`;
  $oldadverSkillPercentLabel.innerHTML  = `${olAdverCurrentPercent}%`;
  $jiraSkillPercentLabel.innerHTML  = `${jiraCurrentPercent}%`;
  $htmlcssSkillPercentLabel.innerHTML  = `${htmlcssCurrentPercent}%`;
  $jsSkillPercentLabel.innerHTML  = `${jsCurrentPercent}%`;

  // TODO add interval timing
  // setTimeout() -- play with this one -- waits and does something once
  // setInterval() -- use this one -- essentially a loop

  increasePercent = function () {

    // stop updating if greater than max
    if (pmCurrentPercent >= pmMaxPercent && 
      wdCurrentPercent >= wdMaxPercent && 
      msCurrentPercent >= msMaxPercent && 
      agPmCurrentPercent >= agpmMaxPercent &&
      olAdverCurrentPercent >= oldadverMaxPercent &&
      jiraCurrentPercent >= jiraMaxPercent &&
      htmlcssCurrentPercent >= htmlcssMaxPercent &&
      jsCurrentPercent >= jsMaxPercent) {
      clearInterval(percentageInterval);
      return;
    }
      
    if (pmCurrentPercent < pmMaxPercent) {
      pmCurrentPercent += 1;
      $pmSkillPercentLabel.innerHTML = `${pmCurrentPercent}%`;
      // TODO update width of progress bar
      $pmSkillBar.style.width = '90%';
    }

    if (wdCurrentPercent < wdMaxPercent) {
      wdCurrentPercent += 1;
      $wdSkillPercentLabel.innerHTML = `${wdCurrentPercent}%`;
      // TODO update width of progress bar
      $wdSkillBar.style.width = '70%';
    }

    if (msCurrentPercent < msMaxPercent) {
      msCurrentPercent += 1;
      $msSkillPercentLabel.innerHTML = `${msCurrentPercent}%`;
      // TODO update width of progress bar
      $msSkillBar.style.width = '90%';
    }

    if (agPmCurrentPercent < agpmMaxPercent) {
      agPmCurrentPercent += 1;
      $agpmSkillPercentLabel.innerHTML = `${agPmCurrentPercent}%`;
      // TODO update width of progress bar
      $agpmSkillBar.style.width = '90%';
    }

    if (olAdverCurrentPercent < oldadverMaxPercent) {
      olAdverCurrentPercent += 1;
      $oldadverSkillPercentLabel.innerHTML = `${olAdverCurrentPercent}%`;
      // TODO update width of progress bar
      $oladverSkillBar .style.width = '90%';
    }

    if (jiraCurrentPercent < jiraMaxPercent) {
      jiraCurrentPercent += 1;
      $jiraSkillPercentLabel.innerHTML = `${jiraCurrentPercent}%`;
      // TODO update width of progress bar
      $jiraSkillBar.style.width = '85%';
    }

    if (htmlcssCurrentPercent < htmlcssMaxPercent) {
      htmlcssCurrentPercent += 1;
      $htmlcssSkillPercentLabel.innerHTML = `${htmlcssCurrentPercent}%`;
      // TODO update width of progress bar
      $htmlcssSkillBar.style.width = '80%';
    }

    if (jsCurrentPercent < jsMaxPercent) {
      jsCurrentPercent += 1;
      $jsSkillPercentLabel.innerHTML = `${jsCurrentPercent}%`;
      // TODO update width of progress bar
      $jsSkillBar.style.width = '70%';
    }

  }
});


//scoll to load skill bars
window.onscroll = () => {
  const windowScrollTop = $(window).scrollTop();
  const windowScrollBottom = windowScrollTop +  $(window).height();
  const skillsOffsetTop = $('#skills').offset().top;
  const skillsOffsetBottom = skillsOffsetTop + $('#skills').height();

  // console.log('window scroll top', windowScrollTop);
  // console.log('window scroll bottom', windowScrollBottom);
  // console.log('skills offset top', skillsOffsetTop);
  // console.log('skills offset bottom', skillsOffsetBottom);
  
  //console.log('top', windowScrollTop > skillsOffsetTop);
  //console.log('bottom', windowScrollBottom > skillsOffsetBottom);

  const shouldIncrementPercentage = windowScrollBottom > skillsOffsetBottom;

  if (shouldIncrementPercentage) {
    console.log('fires!');
    percentageInterval = setInterval (increasePercent, 25);
  }

};