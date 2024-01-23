var mainTitleStyles = 'position: sticky; z-index: 2147483647; text-align: center;'
                        + 'border: 2px solid orange; background-color: #444444;'
                        + 'padding: 5px 5px 5px 5px; width: 100%; top:0px; color: white';

var defaultFontStyle = 'bold 17px Arial, sans-serif';

var titleDivId = 'missing-title-difokdnpojbinbnodoahlamdijkkccfm';
var titleDiv = document.getElementById(titleDivId);
if(!titleDiv)
{
  var titleDiv = document.createElement('div');
  titleDiv.id=titleDivId;
  titleDiv.style.display = 'block';
  titleDiv.innerHTML = document.title;
  document.body.prepend(titleDiv);

  chrome.storage.onChanged.addListener(
    (changes, areaName) => {
      if(areaName == 'sync' && changes.fontStyle.newValue)
      {
          titleDiv.style.cssText += mainTitleStyles + '; font: ' + changes.fontStyle.newValue;
      }
    }
  );
}

if(titleDiv.style.display == 'block')
  titleDiv.style.display = 'none';
else
  titleDiv.style.display = 'block';

chrome.storage.sync.get(
  'fontStyle',
  (items) => {
    if(items && items.fontStyle && items.fontStyle.length != 0)
    {
      titleDiv.style.cssText += mainTitleStyles + '; font: ' + items.fontStyle;
    }
    else
    {
      chrome.storage.sync.set( { fontStyle: defaultFontStyle } );
      titleDiv.style.cssText += mainTitleStyles + '; font: ' + defaultFontStyle;
    }
  }
);