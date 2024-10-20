'use client';

import React, {memo, useMemo} from 'react';
import SkillNode from './SkillNode';
import { RoadmapSkill } from '@/models/skill';

function TimelineRoadmap({ skills }: { skills: RoadmapSkill[] }) {
    const sortedSkills = useMemo(() => {
        return [...skills].sort((a, b) => {
            if (a.tag < b.tag) return -1;
            if (a.tag > b.tag) return 1;
            return a.id - b.id;
        });
    }, [skills]);

    return (
        <div className="w-full h-screen flex flex-col items-center">
            <div className="font-bold">Timeline Roadmap</div>
            <div className="font-semibold text-category-front">Web_FrontEnd</div>
            <div className="w-full flex flex-wrap gap-4 justify-center mt-4">
                {sortedSkills.map((skill) => (
                    <div key={skill.id} className="p-2">
                        <SkillNode
                            skill={skill}
                            scale={1}
                            isSelected={false}
                            onSelect={undefined}
                            onDrag={undefined}
                        />
                    </div>
                ))}
            </div>
        </div>
    );
}

export default TimelineRoadmap;

