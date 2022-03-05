import './app.css';

const commandButtons = document.getElementById('command-buttons');
const commandSections = document.getElementById('command-sections');

const buttonActivate = button => {
  button.classList.remove('text-green-darker', 'bg-green');
  button.classList.add('text-green', 'bg-green-darker');
}

const buttonDeactivate = button => {
  button.classList.remove('text-green', 'bg-green-darker');
  button.classList.add('text-green-darker', 'bg-green');
}

const sectionShow = section => {
  section.classList.add('block', 'md:flex');
  section.classList.remove('hidden');
}

const sectionHide = section => {
  section.classList.remove('block', 'md:flex');
  section.classList.add('hidden');
}

const enableCommandSection = section => {
  for (const sectionElement of commandSections.getElementsByClassName('command-section')) {
    sectionHide(sectionElement);
  }
  let selectedSection = commandSections.querySelectorAll(`[data-section="${section}"]`)[0];
  sectionShow(selectedSection);
}

document.getElementById('command-buttons').addEventListener('click', ({target}) => {
  if (target.matches('.command-button')) {
    if (target.matches('.bg-green-darker')) {
      return false;
    }
    
    for (const btnElement of commandButtons.getElementsByClassName('command-button')) {
        buttonDeactivate(btnElement);
    }
    
    enableCommandSection(target.dataset.command);
    buttonActivate(target);
	}
});
