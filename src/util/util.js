import axios from "axios";

const backend_url = "http://localhost:3000";

async function getAbout() {
  const result = await axios.get(backend_url + "/get-about-body");
  return result.data.body;
}

export const about = await getAbout();

async function getResearch() {
  const result = await axios.get(backend_url+'/get-research-vertical');
  result.data.forEach(element => {
    element.key_objectives = element.key_objectives.split('#');
  });
  return result.data;
}

export const research = await getResearch();

async function getPeople() {
  const result = await axios.get(backend_url+'/get-person');
  return result.data;
}

export const people = await getPeople();

async function getProject(type) {
  const result = await axios.get(backend_url+'/get-projects', {
    params: {
      project_type: type
    }
  });
  return result.data;
}

export const project_btech = await getProject('B.Tech.');
export const project_lusip = await getProject('LUSIP');
export const project_others = await getProject('Others');
export const project_research = await getProject('Research Project');

async function getAchievements() {
  const result = await axios.get(backend_url+'/get-achievements');
  return result.data;
}

export const achievements = await getAchievements();

async function getPublications() {
  const result = await axios.get(backend_url+'/get-publications');
  return result.data;
}

export const publications = await getPublications();

async function getTeaching() {
  const result = await axios.get(backend_url+'/get-teaching');
  return result.data;
}

export const teaching = await getTeaching();

async function getContact() {
  const result = await axios.get(backend_url+'/get-contact');
  return result.data;
}

export const contact = await getContact();