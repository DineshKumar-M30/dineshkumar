import React, { useState } from 'react';
import Modal from '../Shared/Modal';
import Button from '../Shared/Button';
import { Zap, ArrowRight, Save } from 'lucide-react';
import { useApp } from '../../context/AppContext';
import toast from 'react-hot-toast';

const AutomationModal = ({ isOpen, onClose }) => {
    const { addAutomation } = useApp();
    const [rule, setRule] = useState({ trigger: 'Task Completed', action: 'Send Email' });

    const handleSave = () => {
        addAutomation(rule);
        toast.success("Automation rule created!");
        onClose();
    };

    return (
        <Modal isOpen={isOpen} onClose={onClose} title="Create Automation Rule">
            <div className="space-y-6">
                <div className="flex items-center justify-center p-6 bg-slate-50 dark:bg-slate-800 rounded-xl border border-dashed border-slate-300 dark:border-slate-700">
                    <div className="text-center">
                        <Zap className="w-12 h-12 text-yellow-500 mx-auto mb-2" />
                        <h3 className="font-bold text-slate-900 dark:text-white">New Rule</h3>
                        <p className="text-sm text-slate-500">Automate your workflow</p>
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 items-center">
                    <div className="bg-white dark:bg-slate-900 p-4 rounded-xl border border-slate-200 dark:border-slate-700">
                        <label className="block text-xs font-bold text-slate-500 uppercase mb-2">When</label>
                        <select
                            className="w-full bg-transparent font-bold text-slate-900 dark:text-white focus:outline-none"
                            value={rule.trigger}
                            onChange={(e) => setRule({ ...rule, trigger: e.target.value })}
                        >
                            <option>Task Completed</option>
                            <option>Task Overdue</option>
                            <option>Priority Changed to High</option>
                        </select>
                    </div>

                    <div className="flex justify-center text-slate-400">
                        <ArrowRight className="w-6 h-6" />
                    </div>

                    <div className="bg-white dark:bg-slate-900 p-4 rounded-xl border border-slate-200 dark:border-slate-700">
                        <label className="block text-xs font-bold text-slate-500 uppercase mb-2">Then</label>
                        <select
                            className="w-full bg-transparent font-bold text-slate-900 dark:text-white focus:outline-none"
                            value={rule.action}
                            onChange={(e) => setRule({ ...rule, action: e.target.value })}
                        >
                            <option>Send Email</option>
                            <option>Archive Task</option>
                            <option>Notify & Slack</option>
                        </select>
                    </div>
                </div>

                <div className="flex justify-end pt-4">
                    <Button onClick={handleSave}>
                        <Save className="w-4 h-4 mr-2" />
                        Save Rule
                    </Button>
                </div>
            </div>
        </Modal>
    );
};

export default AutomationModal;
