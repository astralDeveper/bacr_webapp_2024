import axios from "axios";

// Base URL configuration
const api = axios.create({
  // baseURL: "http://localhost:3000/api",
  baseURL: "http://192.168.100.49:3000/api",
});

// Function to create a product
export const createProduct = async (formData) => {
  try {
    const response = await api.post("/product", formData);
    return response.data;
  } catch (error) {
   
    throw error;
  }
};
export const editProduct = async (formData,editProductId) => {
    const response = await api.put( `/product/${editProductId}`, formData);
    return response.data;
};

export const fetchProducts = async () => {
  try {
    const response = await api.get("/products");
    return response.data;
  } catch (error) {
    console.error("Error fetching products:", error);
    throw error;
  }
};
export const fetchProductsHome = async () => {
  try {
    const response = await api.get("/products?page=1&limit=4");
    return response.data;
  } catch (error) {
    console.error("Error fetching products:", error);
    throw error;
  }
};
export const fetchBlogsHome = async () => {
  try {
    const response = await api.get("/blogs?page=1&limit=4");
    return response.data.blogs;
  } catch (error) {
    console.error("Error fetching brands:", error);
    throw error;
  }
};
export const fetchProductByBrand = async (filter) => {
  try {
    const response = await api.get(`/product-filter/${filter}`);
    return response.data.products;
  } catch (error) {
    console.error("Error fetching products:", error);
    throw error;
  }
};

export const fetchProductBrand = async (filter) => {
  try {
    const response = await api.get(`/brand-filter/${filter}`);
    return response.data.brands;
  } catch (error) {
    console.error("Error fetching brands:", error);
    throw error;
  }
};

export const fetchProductSno = async (filter) => {
  try {
    const response = await api.get(`/product/getSrno/${filter}`);
    return response.data.product;
  } catch (error) {
    console.error("Error fetching product:", error);
    throw error;
  }
};

export const downloadProduct = async (filter) => {
  try {
    // Configure response type as 'blob' to handle binary data
    const response = await api.get(`/product-download/${filter}`, {
      responseType: "blob",
    });

    // Create a download link and trigger the download
    const url = window.URL.createObjectURL(new Blob([response.data]));
    const link = document.createElement("a");
    link.href = url;

    // Set the download file name
    link.setAttribute("download", "Products.pdf");

    // Append to the DOM and trigger the click
    document.body.appendChild(link);
    link.click();

    // Cleanup
    link.parentNode.removeChild(link);
  } catch (error) {
    console.error("Error downloading products:", error);
    throw error;
  }
};

export const fetchCareers = async () => {
  try {
    const response = await api.get("/careers");
    return response.data.careers;
  } catch (error) {
    console.error("Error fetching careers:", error);
    throw error;
  }
};

export const createCareer = async (formData) => {
  try {
    const response = await api.post("/add-career", formData);
    return response.data;
  } catch (error) {
   
    throw error;
  }
};

export const fetchTeamById = async (id) => {
  try {
    const response = await api.get(`/team/${id}`);
    return response.data.team;
  } catch (error) {
    console.error("Error fetching team:", error);
    throw error;
  }
};

export const deleteTeam = async (teamId) => {
  try {
    const response = await api.delete(`/team/${teamId}`);
    return response;
  } catch (error) {
    throw error;
  }
};

export const createTeam = async (formData) => {
  try {
    const response = await api.post("/team", formData);
    return response.data;
  } catch (error) {
   
    throw error;
  }
};
export const editTeam = async (formData,editTeamId) => {
  try {
    const response = await api.put( `/team/${editTeamId}`, formData);
    return response.data;
  } catch (error) {
    
    throw error;
  }
};

export const fetchJobs = async () => {
  try {
    const response = await api.get("/jobs");
    return response.data.jobs;
  } catch (error) {
    console.error("Error fetching jobs:", error);
    throw error;
  }
};

export const fetchJobById = async (id) => {
  try {
    const response = await api.get(`/job/${id}`);
    return response.data;
  } catch (error) {
    console.error("Error fetching job:", error);
    throw error;
  }
};

export const deleteJob = async (teamId) => {
  try {
    const response = await api.delete(`/job/${teamId}`);
    return response;
  } catch (error) {
    throw error;
  }
};

export const createJob = async (formData) => {
  try {
    const response = await api.post("/job", formData);
    return response.data;
  } catch (error) {
   
    throw error;
  }
};
export const editJob = async (formData,editJobId) => {
  try {
    const response = await api.put( `/job/${editJobId}`, formData);
    return response.data;
  } catch (error) {
    
    throw error;
  }
};

export const fetchDepartments = async () => {
  try {
    const response = await api.get("/departments");
    return response.data.departments;
  } catch (error) {
    console.error("Error fetching departments:", error);
    throw error;
  }
};

export const fetchDepartmentById = async (id) => {
  try {
    const response = await api.get(`/department/${id}`);
    return response.data.departments;
  } catch (error) {
    console.error("Error fetching departments:", error);
    throw error;
  }
};

export const deleteDepartment = async (teamId) => {
  try {
    const response = await api.delete(`/department/${teamId}`);
    return response;
  } catch (error) {
    throw error;
  }
};

export const createDepartment = async (formData) => {
  try {
    const response = await api.post("/department", formData);
    return response.data;
  } catch (error) {
   
    throw error;
  }
};
export const editDepartment = async (formData,editDepartmentId) => {
  try {
    const response = await api.put( `/department/${editDepartmentId}`, formData);
    return response.data;
  } catch (error) {
    
    throw error;
  }
};


export const fetchTeams = async () => {
  try {
    const response = await api.get("/team");
    return response.data.teams;
  } catch (error) {
    console.error("Error fetching teams:", error);
    throw error;
  }
};

export const fetchProductById = async (id) => {
  try {
    const response = await api.get(`/product/${id}`);
    return response.data;
  } catch (error) {
    console.error("Error fetching product:", error);
    throw error;
  }
};

export const deleteProduct = async (productId) => {
  try {
    const response = await api.delete(`/product/${productId}`);
    return response;
  } catch (error) {
    throw error;
  }
};


export const fetchProjects = async () => {
  try {
    const response = await api.get("/projects");
    return response.data.projects;
  } catch (error) {
    console.error("Error fetching projects:", error);
    throw error;
  }
};

export const fetchProjectsSrno = async () => {
  try {
    const response = await api.get("/project-getSrno");
    return response.data.project;
  } catch (error) {
    // console.error("Error fetching certificates:", error);
    throw error;
  }
};

export const fetchProjectById = async (id) => {
  try {
    const response = await api.get(`/project/${id}`);
    return response.data;
  } catch (error) {
    console.error("Error fetching project:", error);
    throw error;
  }
};

export const editProject = async (editProjectId,formData) => {
  try {
    const response = await api.put( `/project/${editProjectId}`, formData);
    return response.data;
  } catch (error) {
    
    throw error;
  }
};
export const deleteProject = async (editProjectId) => {
  try {
    const response = await api.delete(`/project/${editProjectId}`);
    return response;
  } catch (error) {
    throw error;
  }
};
export const createProject = async (formData) => {
  try {
    const response = await api.post("/project", formData);
    return response.data;
  } catch (error) {
   
    throw error;
  }
};


export const fetchProdBrands = async () => {
  try {
    const response = await api.get("/allbrands");
    return response.data.brands;
  } catch (error) {
    console.error("Error fetching brands:", error);
    throw error;
  }
};


export const fetchProdBrandById = async (id) => {
  try {
    const response = await api.get(`/brand/${id}`);
    return response.data.brand;
  } catch (error) {
    console.error("Error fetching brand:", error);
    throw error;
  }
};

export const editProdBrand = async (editBrandId,formData) => {
  try {
    const response = await api.put( `/brand/${editBrandId}`, formData);
    return response.data;
  } catch (error) {
    
    throw error;
  }
};
export const deleteBrand = async (editProjectId) => {
  try {
    const response = await api.delete(`/brand/${editProjectId}`);
    return response;
  } catch (error) {
    throw error;
  }
};
export const createBrand = async (formData) => {
  try {
    const response = await api.post("/brand", formData);
    return response.data;
  } catch (error) {
   
    throw error;
  }
};

export const fetchCategories = async () => {
  try {
    const response = await api.get("/categories");
    return response.data.categories;
  } catch (error) {
    console.error("Error fetching products:", error);
    throw error;
  }
};
export const createCategory = async (formData) => {
  try {
    const response = await api.post("/category", formData);
    return response.data;
  } catch (error) {
    throw error;
  }
};
export const editCategory = async (editCategoryId,formData) => {
  try {
    const response = await api.put( `/category/${editCategoryId}`, formData);
    return response.data;
  } catch (error) {
    
    throw error;
  }
};
export const deleteCategory = async (CategoryId) => {
  try {
    const response = await api.delete(`/category/${CategoryId}`);
    return response;
  } catch (error) {
    throw error;
  }
};
export const fetchClients = async () => {
  try {
    const response = await api.get("/clients");
    return response.data.clients;
  } catch (error) {
    console.error("Error fetching clients:", error);
    throw error;
  }
};

export const createClient = async (formData) => {
  try {
    const response = await api.post("/client", formData);
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const editClient = async (editClientId,formData) => {
  try {
    const response = await api.put(`/client/${editClientId}`, formData);
    return response.data;
  } catch (error) {
    
    throw error;
  }
};
export const deleteClient = async (clientId) => {
  try {
    const response = await api.delete(`/client/${clientId}`);
    return response;
  } catch (error) {
    throw error;
  }
};

export const fetchCertificates = async () => {
  try {
    const response = await api.get("/certificates");
    return response.data.certificates;
  } catch (error) {
    console.error("Error fetching clients:", error);
    throw error;
  }
};

export const fetchCertificateSrno = async () => {
  try {
    const response = await api.get("/getSrno");
    return response.data.certificate;
  } catch (error) {
    // console.error("Error fetching certificates:", error);
    throw error;
  }
};
export const fetchCertificateById = async (id) => {
  try {
    const response = await api.get(`/certificate/${id}`);
    return response.data.updatedCertificate ;
  } catch (error) {
    console.error("Error fetching certificate :", error);
    throw error;
  }
};
export const createCertificate = async (formData) => {
  try {
    const response = await api.post("/certificates", formData);
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const editCertificate = async (editCertificateId,formData) => {
  try {
    const response = await api.put(`/certificate/${editCertificateId}`, formData);
    return response.data;
  } catch (error) {
    
    throw error;
  }
};

export const deleteCertificate = async (certificateId) => {
  try {
    const response = await api.delete(`/certificate/${certificateId}`);
    return response;
  } catch (error) {
    throw error;
  }
};

export const fetchBlogs = async () => {
  try {
    const response = await api.get("/blogs");
    return response.data.blogs;
  } catch (error) {
    console.error("Error fetching products:", error);
    throw error;
  }
};

export const fetchBlogById = async (id) => {
  try {
    const response = await api.get(`/blog/${id}`);
    return response.data.blog;
  } catch (error) {
    console.error("Error fetching products:", error);
    throw error;
  }
};

export const createBlog = async (formData) => {
  try {
    const response = await api.post("/blog", formData);
    return response.data;
  } catch (error) {
    throw error;
  }
};
export const editBlog = async (editBlogId,formData) => {
  try {
    const response = await api.put(`/blog/${editBlogId}`, formData);
    return response.data;
  } catch (error) {
    
    throw error;
  }
};

export const deleteBlog = async (blogId) => {
  try {
    const response = await api.delete(`/blog/${blogId}`);
    return response;
  } catch (error) {
    throw error;
  }
};
export const fetchBlogCategories = async () => {
  try {
    const response = await api.get("/blog-categories");
    return response.data.categories;
  } catch (error) {
    console.error("Error fetching categories:", error);
    throw error;
  }
};
export const fetchBlogCategoriesById = async (id) => {
  try {
    const response = await api.get(`/blog/category/${id}`);
    return response.data.category;
  } catch (error) {
    console.error("Error fetching categories:", error);
    throw error;
  }
};
export const createBlogCategory = async (formData) => {
  try {
    const response = await api.post("blog/category", formData);
    return response.data;
  } catch (error) {
    throw error;
  }
};
export const editBlogCategory = async (editCategoryId,formData) => {
  try {
    const response = await api.put( `blog/category/${editCategoryId}`, formData);
    return response.data;
  } catch (error) {
    
    throw error;
  }
};
export const deleteBlogCategory = async (CategoryId) => {
  try {
    const response = await api.delete(`blog/category/${CategoryId}`);
    return response;
  } catch (error) {
    throw error;
  }
};

export const fetchTags = async () => {
  try {
    const response = await api.get("/tags");
    return response.data.tags;
  } catch (error) {
    console.error("Error fetching tags:", error);
    throw error;
  }
};
export const fetchTagById = async (id) => {
  try {
    const response = await api.get(`/tag/${id}`);
    return response.data.tag;
  } catch (error) {
    console.error("Error fetching tag:", error);
    throw error;
  }
};
export const createTag = async (formData) => {
  try {
    const response = await api.post("/tag", formData);
    return response.data;
  } catch (error) {
    throw error;
  }
};
export const editTag = async (editTagId,formData) => {
  try {
    const response = await api.put( `/tag/${editTagId}`, formData);
    return response.data;
  } catch (error) {
    
    throw error;
  }
};
export const deleteTag = async (TagId) => {
  try {
    const response = await api.delete(`/tag/${TagId}`);
    return response;
  } catch (error) {
    throw error;
  }
};

export const fetchContacts = async () => {
  try {
    const response = await api.get("/contacts");
    return response.data;
  } catch (error) {
    console.error("Error fetching contacts:", error);
    throw error;
  }
};

export const fetchSocialLinks = async () => {
  try {
    const response = await api.get("/sociallinks");
    return response.data;
  } catch (error) {
    console.error("Error fetching contacts:", error);
    throw error;
  }
};

export const fetchContactById = async (id) => {
  try {
    const response = await api.get(`/contact/${id}`);
    return response.data.contact;
  } catch (error) {
    console.error("Error fetching contact:", error);
    throw error;
  }
};

export const deleteContact = async (contactId) => {
  try {
    const response = await api.delete(`/contact/${contactId}`);
    return response;
  } catch (error) {
    throw error;
  }
};

export const createContact = async (formData) => {
  try {
    const response = await api.post("/contact", formData);
    return response.data;
  } catch (error) {
   
    throw error;
  }
};

export const createSocialLink = async (formData) => {
  try {
    const response = await api.post("/add-social", formData);
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const editContact = async (formData,editContactId) => {
  try {
    const response = await api.put( `/contact/${editContactId}`, formData);
    return response.data;
  } catch (error) {
    
    throw error;
  }
};

export const fetchSubscribers = async () => {
  try {
    const response = await api.get("/subscribers");
    return response.data;
  } catch (error) {
    console.error("Error fetching subscribers:", error);
    throw error;
  }
};
export const createSubscriber = async (email) => {
  try {
    const response = await api.post("/subscriber",{email});
    return response.data;
  } catch (error) {
    console.error("Error fetching subscribers:", error);
    throw error;
  }
};
export const createAppointment = async (formData) => {
  try {
    
    const response = await api.post("/appointment",formData);
    return response.data;
  } catch (error) {
    console.error("Error fetching subscribers:", error);
    throw error;
  }
};

export const downloadContact = async () => {
  try {
    // Configure response type as 'blob' to handle binary data
    const response = await api.get("/download-contact", {
      responseType: "blob",
    });

    // Create a download link and trigger the download
    const url = window.URL.createObjectURL(new Blob([response.data]));
    const link = document.createElement("a");
    link.href = url;

    // Set the download file name
    link.setAttribute("download", "ContactMessages.pdf");

    // Append to the DOM and trigger the click
    document.body.appendChild(link);
    link.click();

    // Cleanup
    link.parentNode.removeChild(link);
  } catch (error) {
    console.error("Error downloading contacts:", error);
    throw error;
  }
};

export const editSubscriber = async (formData,editSubscriberId) => {
  try {
    const response = await api.put( `/subscriber/${editSubscriberId}`, formData);
    return response.data;
  } catch (error) {
    
    throw error;
  }
};

export const fetchSubscriberById = async (id) => {
  try {
    const response = await api.get(`/subscriber/${id}`);
    return response.data.subscriber;
  } catch (error) {
    console.error("Error fetching subscriber:", error);
    throw error;
  }
};

export const deleteSubscriber = async (subscriberId) => {
  try {
    const response = await api.delete(`/subscriber/${subscriberId}`);
    return response;
  } catch (error) {
    throw error;
  }
};