import { useDispatch, useSelector } from 'react-redux';
import type { RootState } from '../store';
import { setFilters, setSortBy } from '../store/slices/projectsSlice';
import ProjectCard from '../components/ProjectCard';
import { motion, AnimatePresence } from 'framer-motion';

const Projects = () => {
  const dispatch = useDispatch();
  const { filteredProjects, filters } = useSelector((state: RootState) => state.projects);

  const sizeOptions = ['small', 'medium', 'large'];
  const typeOptions = ['React', 'JS', 'CSS', 'TS'];
  const sortOptions = [
    { value: 'newest', label: 'Newest First' },
    { value: 'oldest', label: 'Oldest First' },
    { value: 'price-asc', label: 'Price: Low to High' },
    { value: 'price-desc', label: 'Price: High to Low' },
  ];

  const handleFilterChange = (category: 'size' | 'type', value: string) => {
    const newFilters = {
      ...filters,
      [category]: filters[category].includes(value)
        ? filters[category].filter((item) => item !== value)
        : [...filters[category], value],
    };
    dispatch(setFilters(newFilters));
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex flex-col md:flex-row gap-5">
        {/* Sidebar */}
        <motion.div
          initial={{ x: -300, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          className="w-full md:w-[20%] space-y-6 "
        >
          <div className=" bg-[var(--bgCard)] border-[var(--border)] rounded-lg p-6 shadow-lg border text-[var(--subText)]">
            <h3 className="text-lg font-semibold mb-4 text-[var(--text)]">
              Filters
            </h3>

            <div className="space-y-5">
              <div>
                <h4 className="text-sm font-medium mb-2 text-[var(--text)]">
                  Project Size
                </h4>
                <div className="space-y-2">
                  {sizeOptions.map((size) => (
                    <label key={size} className="flex items-center space-x-2">
                      <input
                        type="checkbox"
                        checked={filters.size.includes(size)}
                        onChange={() => handleFilterChange("size", size)}
                        className="rounded border-gray-300 text-primary focus:ring-primary"
                      />
                      <span className="text-sm capitalize text-[var(--subText)]">
                        {size}
                      </span>
                    </label>
                  ))}
                </div>
              </div>

              <div>
                <h4 className="text-sm font-medium mb-2 text-[var(--text)]">
                  Project Type
                </h4>
                <div className="space-y-2">
                  {typeOptions.map((type) => (
                    <label
                      key={type}
                      className="flex items-center space-x-2 cursor-pointer"
                    >
                      <input
                        type="checkbox"
                        checked={filters.type.includes(type)}
                        onChange={() => handleFilterChange("type", type)}
                      />
                      <span className="text-sm text-[var(--subText)]">
                        {type}
                      </span>
                    </label>
                  ))}
                </div>
              </div>

              <div>
                <h4 className="text-sm font-medium mb-2 text-[var(--text)]">
                  Sort By
                </h4>
                <select
                  onChange={(e) => dispatch(setSortBy(e.target.value))}
                  className="w-full rounded-md border border-[var(--border)] bg-[var(--bgCard)] cursor-pointer px-3 py-2 text-sm"
                >
                  {sortOptions.map((option) => (
                    <option
                      key={option.value}
                      value={option.value}
                      className="text-[var(--text)] cursor-pointer"
                    >
                      {option.label}
                    </option>
                  ))}
                </select>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Projects Grid */}
        <div className="flex-1">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            <AnimatePresence>
              {filteredProjects.map((project) => (
                <ProjectCard key={project.id} project={project} />
              ))}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects; 