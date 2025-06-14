import * as Toolkit from "@reduxjs/toolkit";
// import { createSlice, Toolkit.PayloadAction } from '@reduxjs/toolkit';
import { sampleProjects } from "../../data/projects";

export interface Project {
  id: string;
  title: string;
  description: string;
  longDescription?: string;
  image: string;
  size: "small" | "medium" | "large";
  type: "React" | "JS" | "CSS" | "TS";
  demoUrl: string;
  price: number;
  features: string[];
  technologies: string[];
  requirements?: string[];
}

interface ProjectsState {
  projects: Project[];
  filteredProjects: Project[];
  filters: {
    size: string[];
    type: string[];
  };
  sortBy: string;
}

const initialState: ProjectsState = {
  projects: sampleProjects,
  filteredProjects: sampleProjects,
  filters: {
    size: [],
    type: [],
  },
  sortBy: "newest",
};

const projectsSlice = Toolkit.createSlice({
  name: "projects",
  initialState,
  reducers: {
    setProjects: (state, action: Toolkit.PayloadAction<Project[]>) => {
      state.projects = action.payload;
      state.filteredProjects = action.payload;
    },
    setFilters: (
      state,
      action: Toolkit.PayloadAction<{ size: string[]; type: string[] }>
    ) => {
      state.filters = action.payload;
      state.filteredProjects = state.projects.filter((project) => {
        const sizeMatch =
          state.filters.size.length === 0 ||
          state.filters.size.includes(project.size);
        const typeMatch =
          state.filters.type.length === 0 ||
          state.filters.type.includes(project.type);
        return sizeMatch && typeMatch;
      });
    },
    setSortBy: (state, action: Toolkit.PayloadAction<string>) => {
      state.sortBy = action.payload;
      state.filteredProjects = [...state.filteredProjects].sort((a, b) => {
        switch (action.payload) {
          case "newest":
            return b.id.localeCompare(a.id);
          case "oldest":
            return a.id.localeCompare(b.id);
          case "price-asc":
            return a.price - b.price;
          case "price-desc":
            return b.price - a.price;
          default:
            return 0;
        }
      });
    },
  },
});

export const { setProjects, setFilters, setSortBy } = projectsSlice.actions;
export default projectsSlice.reducer;
