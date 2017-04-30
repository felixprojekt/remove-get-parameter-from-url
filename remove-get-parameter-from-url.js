//This removes all after questin mark and does not refreshes the page

window.history.replaceState('', '', window.location.href.split("?")[0]);
