import { instance } from "./axios";
import { ICourse, ICourseDetails } from "./entity.types";

export interface ICredentials {
  token: string;
}

export const api = {
  getToken() {
    return instance.get<ICredentials>("/auth/anonymous?platform=subscriptions");
  },
  getCourses() {
    return instance.get<{ courses: ICourse[] }>("/core/preview-courses");
  },
  getCurrentCourse(id: string) {
    return instance.get<ICourseDetails>(`/core/preview-courses/${id}`);
  },
};
