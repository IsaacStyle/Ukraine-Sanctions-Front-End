import api from "./apiConfig.js";

export const getPersons = async () => {
  try {
    const response = await api.get("/persons");
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const getPerson = async (id) => {
  try {
    const response = await api.get(`/persons/${id}`);
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const createPerson = async (personData) => {
  try {
    const response = await api.post("/persons", personData);
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const updatePerson = async (id, personData) => {
  try {
    const response = await api.put(`/persons/${id}`, personData);
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const deletePerson = async (id) => {
  try {
    console.log(1)
    const response = await api.delete(`/persons/${id}`);
    console.log(2)
    return response.data;
  } catch (error) {
    throw error;
  }
};