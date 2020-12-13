const currentProjects = document.querySelector(".currentProjects");
const selectButtons = document.querySelectorAll(".project-selection");

const createProjectSection = (projects_data) => {
  const projectCard = document.querySelector(".project");
  projectCard.innerHTML = "";

  let allCardsString = "";
  projects_data.responsive.forEach((element) => {
    allCardsString += createProjectCard(element);
  });
  projectCard.innerHTML = allCardsString;
};


const selectProjects = (prjSelect) => {
  switch (prjSelect) {
    case 'React' :
      createProjectSection(projects_data_react); 
      break;
    case 'Responsive':
      createProjectSection(projects_data);
      break;
    default:
      createProjectSection(projects_data);
  }
}

createProjectSection(projects_data);

selectButtons.forEach((selectBtn) => {
  selectBtn.addEventListener("click", (event) => {
    selectProjects(event.target.textContent);
  });
});
