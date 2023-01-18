import api from "./apiConfig.js";

export const getCompanies = async () => {
  try {
    const response = await api.get("/persons");
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const getCompany = async (id) => {
  try {
    const response = await api.get(`/companies/${id}`);
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const createCompany = async (companyData) => {
  try {
    const response = await api.post("/companys", companyData);
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const updateCompany = async (id, companyData) => {
  try {
    const response = await api.put(`/companies/${id}`, companyData);
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const deleteCompany = async (id) => {
  try {
    const response = await api.delete(`/companies/${id}`);
    return response.data;
  } catch (error) {
    throw error;
  }
};