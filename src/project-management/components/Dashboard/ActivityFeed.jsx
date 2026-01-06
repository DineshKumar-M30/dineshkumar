import React from 'react';
import { MessageSquare, CheckCircle, FilePlus, UserPlus } from 'lucide-react';
import Avatar from '../Shared/Avatar';

const activities = [
    {
        type: 'comment',
        user: 'Sarah Jenkins',
        action: 'commented on',
        target: 'Mobile App Redesign',
        time: '2 hours ago',
        icon: MessageSquare,
        color: 'bg-blue-500'
    },
    {
        type: 'complete',
        user: 'Michael Chen',
        action: 'completed task',
        target: 'Database Migration',
        time: '4 hours ago',
        icon: CheckCircle,
        color: 'bg-green-500'
    },
    {
        type: 'create',
        user: 'You',
        action: 'created project',
        target: 'Q3 Marketing Plan',
        time: '5 hours ago',
        icon: FilePlus,
        color: 'bg-purple-500'
    },
    {
        type: 'join',
        user: 'Jessica Ford',
        action: 'joined team',
        target: 'Design Team',
        time: '1 day ago',
        icon: UserPlus,
        color: 'bg-orange-500'
    }
];

const ActivityFeed = () => {
    return (
        <div className="bg-white dark:bg-slate-900 rounded-2xl border border-slate-100 dark:border-slate-800 p-6 h-full">
            <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-6">Recent Activity</h3>

            <div className="space-y-6">
                {activities.map((item, index) => (
                    <div key={index} className="flex relative">
                        {index !== activities.length - 1 && (
                            <div className="absolute top-10 left-5 bottom-0 w-px bg-slate-100 dark:bg-slate-800 -z-10" />
                        )}

                        <Avatar src={`https://ui-avatars.com/api/?name=${item.user}&background=random`} alt={item.user} size="md" className="mr-4 ring-4 ring-white dark:ring-slate-900 z-10" />

                        <div className="flex-1 pt-1">
                            <p className="text-sm text-slate-800 dark:text-slate-200">
                                <span className="font-bold">{item.user}</span> {item.action} <span className="text-blue-600 font-medium cursor-pointer hover:underline">{item.target}</span>
                            </p>
                            <p className="text-xs text-slate-500 mt-1">{item.time}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ActivityFeed;
