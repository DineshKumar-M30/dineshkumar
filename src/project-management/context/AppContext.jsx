import React, { createContext, useContext, useState, useEffect } from 'react';

const AppContext = createContext();

export const useApp = () => useContext(AppContext);

export const AppProvider = ({ children }) => {
    const [theme, setTheme] = useState(localStorage.getItem('pm_theme') || 'light');
    const [projects, setProjects] = useState([]);
    const [tasks, setTasks] = useState([]);
    const [members, setMembers] = useState([]);

    // Initialize with some dummy data if empty
    useEffect(() => {
        let storedProjects = [];
        let storedTasks = [];
        let storedMembers = [];

        try {
            storedProjects = JSON.parse(localStorage.getItem('pm_projects') || '[]');
            storedTasks = JSON.parse(localStorage.getItem('pm_tasks') || '[]');
            storedMembers = JSON.parse(localStorage.getItem('pm_members') || '[]');
        } catch (e) {
            console.error("Local storage parsing failed:", e);
        }

        if (storedProjects.length === 0) {
            const initialProjects = [
                { id: 'p1', name: 'Website Redesign', description: 'Overhaul company website with new branding.', status: 'Active', progress: 75, members: [1, 2, 3], createdAt: new Date(Date.now() - 86400000 * 5).toISOString(), dueDate: '2025-12-31', image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80' },
                { id: 'p2', name: 'Mobile App Launch', description: 'Release v1.0 of the mobile application.', status: 'On Hold', progress: 30, members: [1, 4], createdAt: new Date(Date.now() - 86400000 * 10).toISOString(), dueDate: '2026-03-15', image: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?auto=format&fit=crop&w=800&q=80' },
                { id: 'p3', name: 'Internal Audit', description: 'Q4 security and compliance audit.', status: 'Completed', progress: 100, members: [5], createdAt: new Date(Date.now() - 86400000 * 20).toISOString(), dueDate: '2025-11-30', image: 'https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&w=800&q=80' },
                { id: 'p4', name: 'Marketing Campaign', description: 'Social media and ad campaign for new product.', status: 'Active', progress: 45, members: [2, 3, 5], createdAt: new Date().toISOString(), dueDate: '2026-02-28', image: 'https://images.unsplash.com/photo-1533750516457-a7f992034fec?auto=format&fit=crop&w=800&q=80' }
            ];
            setProjects(initialProjects);
            localStorage.setItem('pm_projects', JSON.stringify(initialProjects));
        } else {
            // Backfill images for ANY project if missing
            const projectImages = [
                'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80',
                'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?auto=format&fit=crop&w=800&q=80',
                'https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&w=800&q=80',
                'https://images.unsplash.com/photo-1533750516457-a7f992034fec?auto=format&fit=crop&w=800&q=80',
                'https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?auto=format&fit=crop&w=800&q=80',
                'https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=800&q=80'
            ];

            const updatedProjects = storedProjects.map((p, index) => {
                if (!p.image) {
                    return { ...p, image: projectImages[index % projectImages.length] };
                }
                return p;
            });

            setProjects(updatedProjects);
            // Force save if we made changes
            if (JSON.stringify(updatedProjects) !== JSON.stringify(storedProjects)) {
                localStorage.setItem('pm_projects', JSON.stringify(updatedProjects));
            }
        }

        if (storedTasks.length === 0) {
            const initialTasks = [
                { id: 't1', title: 'Design Homepage', description: 'Create Figma mockups for the new homepage.', priority: 'High', status: 'Completed', projectId: 'p1', assignees: [{ name: 'Sarah' }], dueDate: '2025-12-20', attachments: 2 },
                { id: 't2', title: 'Implement Auth', description: 'Setup JWT authentication and user context.', priority: 'High', status: 'In Progress', projectId: 'p1', assignees: [{ name: 'David' }], dueDate: '2025-12-25', attachments: 0 },
                { id: 't3', title: 'Fix Navigation Bug', description: 'Mobile menu not closing on selection.', priority: 'Medium', status: 'Todo', projectId: 'p1', assignees: [{ name: 'Michael' }], dueDate: '2025-12-28', attachments: 1 },
                { id: 't4', title: 'Write API Docs', description: 'Document all endpoint responses.', priority: 'Low', status: 'Review', projectId: 'p2', assignees: [{ name: 'David' }], dueDate: '2026-01-10', attachments: 5 },
                { id: 't5', title: 'Competitor Analysis', description: 'Research top 5 competitors features.', priority: 'Medium', status: 'Todo', projectId: 'p4', assignees: [{ name: 'Jessica' }], dueDate: '2026-01-15', attachments: 0 },
                { id: 't6', title: 'Database Backup', description: 'Automate daily backups to S3.', priority: 'High', status: 'Completed', projectId: 'p2', assignees: [{ name: 'David' }], dueDate: '2025-11-15', attachments: 0 },
            ];
            setTasks(initialTasks);
            localStorage.setItem('pm_tasks', JSON.stringify(initialTasks));
        } else {
            setTasks(storedTasks);
        }
    }, []);

    // Save changes to localStorage
    useEffect(() => {
        localStorage.setItem('pm_projects', JSON.stringify(projects));
    }, [projects]);

    useEffect(() => {
        localStorage.setItem('pm_tasks', JSON.stringify(tasks));
    }, [tasks]);

    useEffect(() => {
        localStorage.setItem('pm_members', JSON.stringify(members));
    }, [members]);

    useEffect(() => {
        localStorage.setItem('pm_theme', theme);
        const root = window.document.documentElement;
        if (theme === 'dark') {
            root.classList.add('dark');
        } else {
            root.classList.remove('dark');
        }
    }, [theme]);

    const toggleTheme = () => {
        setTheme(prev => prev === 'light' ? 'dark' : 'light');
    };

    const addProject = (project) => {
        setProjects(prev => [...prev, { ...project, id: Date.now().toString(), createdAt: new Date().toISOString() }]);
    };

    const updateProject = (id, updates) => {
        setProjects(prev => prev.map(p => p.id === id ? { ...p, ...updates } : p));
    };

    const deleteProject = (id) => {
        setProjects(prev => prev.filter(p => p.id !== id));
        // Also delete associated tasks
        setTasks(prev => prev.filter(t => t.projectId !== id));
    };

    const addTask = (task) => {
        setTasks(prev => [...prev, { ...task, id: Date.now().toString(), createdAt: new Date().toISOString() }]);
    };

    const deleteTask = (id) => {
        setTasks(prev => prev.filter(t => t.id !== id));
    };

    const moveTask = (taskId, newStatus) => {
        updateTask(taskId, { status: newStatus });
    };

    const addMember = (member) => {
        setMembers(prev => [...prev, { ...member, id: Date.now().toString() }]);
    };

    const deleteMember = (id) => {
        setMembers(prev => prev.filter(m => m.id !== id));
    };

    const [automations, setAutomations] = useState([]);

    useEffect(() => {
        const storedAutomations = JSON.parse(localStorage.getItem('pm_automations') || '[]');
        setAutomations(storedAutomations);
    }, []);

    useEffect(() => {
        localStorage.setItem('pm_automations', JSON.stringify(automations));
    }, [automations]);

    const addAutomation = (rule) => {
        setAutomations(prev => [...prev, { ...rule, id: Date.now().toString() }]);
    };

    const deleteAutomation = (id) => {
        setAutomations(prev => prev.filter(a => a.id !== id));
    };

    const runAutomations = (task, changeType) => {
        automations.forEach(rule => {
            if (rule.trigger === 'Task Completed' && changeType === 'status_change' && task.status === 'Completed') {
                if (rule.action === 'Archive Task') {
                    // Logic to archive (for now, simply mark as 'Archived' status or just notify)
                }
            }
        });
    };

    const updateTask = (id, updates) => {
        setTasks(prev => {
            const nextState = prev.map(t => t.id === id ? { ...t, ...updates } : t);

            // Check for automations
            const updatedTask = nextState.find(t => t.id === id);
            if (updates.status) {
                // runAutomations(updatedTask, 'status_change'); // Simplified for now
            }
            return nextState;
        });
    };

    return (
        <AppContext.Provider value={{
            theme, toggleTheme,
            projects, addProject, updateProject, deleteProject,
            tasks, addTask, updateTask, deleteTask, moveTask,
            members, addMember, deleteMember,
            automations, addAutomation, deleteAutomation
        }}>
            {children}
        </AppContext.Provider>
    );
};
