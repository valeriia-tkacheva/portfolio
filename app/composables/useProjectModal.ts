import type { Project } from '#shared/types/Project.ts';

export const useProjectModal = () => {
  const selectedProject = useState<Project | null>('project-modal:selected-project', () => null);

  function open(project: Project) {
    selectedProject.value = project;
  }

  function close() {
    selectedProject.value = null;
  }

  return { selectedProject, open, close };
};
