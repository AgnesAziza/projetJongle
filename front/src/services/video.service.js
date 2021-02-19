//service that uses axios object above to send HTTP requests.
//axios is calling, get, post, put, delete method corresponding to HTTP Requests: GET, POST, PUT, DELETE to make CRUD Operations.

import http from "../http-common";

// TODO revoir pourquoi on utilise une class. Plus facile pour exporter dans le projet pour les services?

class VideoDataService {
  getAll() {
    return http.get("/videos");
  }

  get(id) {
    return http.get(`/videos/${id}`);
  }

  create(data) {
    return http.post("/videos", data);
  }

  update(id, data) {
    return http.put(`/videos/${id}`, data);
  }
}

