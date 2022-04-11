document.addEventListener('keydown', (e) => {
if (e.key.toLowerCase() === 'i' && e.ctrlKey && e.shiftKey) {e.preventDefault();} 
else if (e.key.toLowerCase() === 'u' && e.ctrlKey) {e.preventDefault();} 
else if (e.key.toLowerCase() === 's' && e.ctrlKey) {e.preventDefault();}
});
    
document.oncontextmenu = rightClick;
function rightClick(clickEvent) {clickEvent.preventDefault();};
    
alert = function(){};
window.alert = function() {};
