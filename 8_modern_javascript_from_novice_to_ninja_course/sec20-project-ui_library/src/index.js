import './test.css';
import Tooltip from './ui/tooltip';
import Dropdown from './ninja-ui/dropdown';

// create a tooltip
const tooltip = new Tooltip(document.querySelector('.tooltip'));
tooltip.init();

console.log("test A");

//create dropdowns
const dropdowns = document.querySelectorAll('.dropdown');

dropdowns.forEach(dropdown => {
    const instance = new Dropdown(dropdown);
    instance.init();
})