import axios from "axios";

const backend_url = "http://localhost:3000";

async function getAbout() {
  const result = await axios.get(backend_url + "/api/about/get-about-body");
  return result.data.body;
}

export const about = await getAbout();


async function getResearch() {
  const result = await axios.get(backend_url+'/api/research-verticals/get-all-research-verticals');
  result.data.forEach(element => {
    element.key_objectives = element.key_objectives.split('#');
  });
  return result.data;
}

export const research = await getResearch();

async function getPeople() {
  const result = await axios.get(backend_url+'/api/people/get-people');
  return result.data;
}

export const people = await getPeople();

async function getProject(type) {
  const result = await axios.get(backend_url+'/api/projects/get-all-projects');
  result.data.forEach(element => {
    element.project_details = element.project_details.split('#');
  })
  return result.data;
}

export const project = await getProject();

async function getAchievements() {
  const result = await axios.get(backend_url+'/api/achievements/get-achievements-body');
  result.data.body.forEach(element => {
    element.body = element.body.split('#');
  });
  return result.data.body;
}

export const achievements = await getAchievements();

async function getPublications() {
  const result = await axios.get(backend_url+'/api/publications/get-publications-body');
  result.data.forEach(element => {
    element.body = element.body.split('#');
  });
  return result.data;
}

export const publications = await getPublications();

async function getTeaching() {
  const result = await axios.get(backend_url+'/api/teaching/get-all-teaching');
  return result.data;
}

export const teaching = await getTeaching();

async function getContact() {
  const result = await axios.get(backend_url+'/api/contacts/get-all-contacts');
  return result.data;
}

export const contact = await getContact();

async function getOpenPositions() {
  const result = await axios.get(backend_url+'/api/open-positions/get-all-open-positions');
  return result.data;
}

export const openPositions = await getOpenPositions();