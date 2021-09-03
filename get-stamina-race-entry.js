// Install as a bookmark in your browser. When you click to enter a race and then choose your gate it shows all your horses fatigue meter.
// Click on the horse and then click the bookmark button
// To add the bookmark button:
// 1. Right click on your bookmark bar in Chrome and select Add Page ...
// 2. Give it a name and in the "URL" field, copy and paste in the below line of code.
// NOTE: This function specifically returns 5 horses. If you have less than 5 it will give an error. If you have more than 5, it will return the first 5. I still need to work on improving the for loop to iterate through the right DOM nodes based on the actual count of horses available. 

javascript:(function()%7Bvar num %3D document.querySelectorAll('.horse-card').length%3Bvar alertText %3D 'No Horses Available'%3Bconsole.log('num%3A '%2C num)%3Bif (num %3D 1) %7B alertText %3D document.querySelectorAll('.horse-card%3Anth-of-type(1) .primary-text')%5B0%5D.textContent %2B ' Fatigue%3A ' %2B document.querySelectorAll('.horse-card%3Anth-of-type(1) linearGradient')%5B0%5D.id.split('-')%5B2%5D %2B '%5Cn' %7Dif (num %3D 2) %7B alertText %2B%3D document.querySelectorAll('.horse-card%3Anth-of-type(2) .primary-text')%5B0%5D.textContent %2B ' Fatigue%3A ' %2B document.querySelectorAll('.horse-card%3Anth-of-type(2) linearGradient')%5B0%5D.id.split('-')%5B2%5D %2B '%5Cn'%7Dif (num %3D 3) %7B alertText %2B%3D document.querySelectorAll('.horse-card%3Anth-of-type(3) .primary-text')%5B0%5D.textContent %2B ' Fatigue%3A ' %2B document.querySelectorAll('.horse-card%3Anth-of-type(3) linearGradient')%5B0%5D.id.split('-')%5B2%5D %2B '%5Cn'%7Dif (num %3D 4) %7B alertText %2B%3D document.querySelectorAll('.horse-card%3Anth-of-type(4) .primary-text')%5B0%5D.textContent %2B ' Fatigue%3A ' %2B document.querySelectorAll('.horse-card%3Anth-of-type(4) linearGradient')%5B0%5D.id.split('-')%5B2%5D %2B '%5Cn'%7Dif (num %3D 5) %7B alertText %2B%3D document.querySelectorAll('.horse-card%3Anth-of-type(5) .primary-text')%5B0%5D.textContent %2B ' Fatigue%3A ' %2B document.querySelectorAll('.horse-card%3Anth-of-type(5) linearGradient')%5B0%5D.id.split('-')%5B2%5D %2B '%5Cn'%7Delse %7B %7Dalert(alertText)%7D)()
